import { type NextRequest, NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

interface SitemapUrl {
	loc: string;
	lastmod?: string;
	changefreq?: string;
	priority?: string;
}

interface SitemapIndex {
	loc: string;
	lastmod?: string;
}

interface SitemapResponse {
	urlset?: {
		url: SitemapUrl[];
		"@_xmlns"?: string;
	};
	sitemapindex?: {
		sitemap: SitemapIndex[];
		"@_xmlns"?: string;
	};
}

interface SitemapData {
	type: "xml" | "json";
	data: string | SitemapResponse;
}

interface FetchResult {
	robots?: string;
	sitemap?: SitemapData;
	status: "success" | "partial" | "error";
	message: string;
	error?: string;
}

export async function POST(request: NextRequest) {
	try {
		const { domain } = await request.json();
		if (!domain) {
			return NextResponse.json(
				{ error: "Domain is required" },
				{ status: 400 }
			);
		}

		// Clean and validate domain
		let cleanDomain = domain.trim().toLowerCase();
		if (!cleanDomain.startsWith("http")) {
			cleanDomain = `https://${cleanDomain}`;
		}

		// Initialize results object
		const results: FetchResult = {
			robots: undefined,
			sitemap: undefined,
			status: "partial",
			message: "No valid sitemap found",
		};

		// Fetch robots.txt
		const robotsResponse = await fetch(`${cleanDomain}/robots.txt`);
		if (robotsResponse.ok) {
			results.robots = await robotsResponse.text();
			// Parse robots.txt to find sitemap location
			let sitemapUrl = null;
			results.robots.split("\n").forEach((line) => {
				if (line.toLowerCase().startsWith("sitemap:")) {
					const rawUrl = line.split(":")[1].trim();
					// Handle different URL formats
					if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
						sitemapUrl = rawUrl;
					} else if (rawUrl.startsWith("/")) {
						// Absolute path
						sitemapUrl = `${cleanDomain}${rawUrl}`;
					} else {
						// Relative path
						sitemapUrl = `${cleanDomain}/${rawUrl}`;
					}
					console.log(`Found sitemap URL: ${sitemapUrl}`);
				}
			});

			if (sitemapUrl) {
				// Try to fetch sitemap from robots.txt first
				try {
					const sitemapResponse = await fetch(sitemapUrl);
					if (sitemapResponse.ok) {
						const sitemapText = await sitemapResponse.text();
						// Validate XML and parse it
						const parser = new XMLParser({
							attributeNamePrefix: "@_",
							ignoreAttributes: false,
						});

						try {
							const parsed = parser.parse(sitemapText);
							if (
								parsed &&
								(parsed.urlset || parsed.sitemapindex)
							) {
								results.sitemap = {
									type: "json",
									data: parsed,
								};
								results.status = "success";
								results.message =
									"Successfully fetched sitemap";
							}
						} catch (error) {
							console.log("Failed to parse XML:", error);
						}
					}
				} catch (error) {
					console.log(
						"Failed to fetch sitemap from robots.txt:",
						error
					);
				}
			}

			// If no sitemap found in robots.txt, try common alternatives
			const alternatives = [
				"/sitemap.xml",
				"/sitemap_index.xml",
				"/sitemap-index.xml",
				"/sitemapindex.xml",
			];

			for (const alt of alternatives) {
				try {
					const url = `${cleanDomain}${alt}`;
					console.log(`Trying to fetch sitemap from: ${url}`);
					try {
						const response = await fetch(url, {
							method: "GET",
							headers: {
								"User-Agent": "WebTools-Pro-Bot/1.0",
							},
						});
						if (response.ok) {
							const sitemapText = await response.text();
							// Validate XML and parse it
							const parser = new XMLParser({
								attributeNamePrefix: "@_",
								ignoreAttributes: false,
							});

							try {
								const parsed = parser.parse(sitemapText);
								if (
									parsed &&
									(parsed.urlset || parsed.sitemapindex)
								) {
									results.sitemap = {
										type: "json",
										data: parsed,
									};
									results.status = "success";
									results.message =
										"Successfully fetched sitemap";
								}
							} catch (error) {
								console.log(`Failed to parse XML for URL ${url}:`, error);
							}
						} else {
							console.log(`Failed to fetch sitemap from ${url}: Status ${response.status}`);
						}
					} catch (error) {
						console.log(`Failed to fetch sitemap from ${url}:`, error);
						continue;
					}
				} catch (error) {
					console.log(`Failed to fetch sitemap from ${alt}:`, error);
					continue;
				}
			}

			return NextResponse.json(results);
		} else {
			return NextResponse.json(
				{ error: "Failed to fetch robots.txt" },
				{ status: 500 }
			);
		}
	} catch (error) {
		console.log("Error fetching files:", error);
		return NextResponse.json(
			{ error: "Failed to fetch files" },
			{ status: 500 }
		);
	}
}
