"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, Globe, FileText, Copy } from "lucide-react";

export default function RobotsSitemapPage() {
	const [domain, setDomain] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [robotsContent, setRobotsContent] = useState("");
	const [sitemapContent, setSitemapContent] = useState("");
	const [error, setError] = useState("");

	const fetchFiles = async () => {
		if (!domain.trim()) {
			alert("Please enter a domain name.");
			return;
		}

		setIsLoading(true);
		setError("");
		setRobotsContent("");
		setSitemapContent("");

		try {
			const response = await fetch("/api/fetch-robots-sitemap", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ domain }),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch files");
			}

			const data = await response.json();
			setRobotsContent(data.robots || "No robots.txt found");

			// Handle sitemap data which can be either a string or structured object
			if (data.sitemap) {
				if (typeof data.sitemap === "string") {
					setSitemapContent(data.sitemap);
				} else if (data.sitemap.data) {
					// Convert structured sitemap data to readable format
					const sitemapData = data.sitemap.data;
					if (typeof sitemapData === "string") {
						setSitemapContent(sitemapData);
					} else {
						// Convert JSON object to formatted string
						setSitemapContent(JSON.stringify(sitemapData, null, 2));
					}
				} else {
					setSitemapContent("No sitemap.xml found");
				}
			} else {
				setSitemapContent("No sitemap.xml found");
			}
		} catch (error) {
			console.error("Error fetching files:", error);
			setError(
				"Failed to fetch files. Please check the domain and try again."
			);
			alert(
				"Failed to fetch files. Please check the domain and try again."
			);
		} finally {
			setIsLoading(false);
		}
	};

	const copyToClipboard = async (content: string, type: string) => {
		try {
			await navigator.clipboard.writeText(content);
			alert(`${type} content copied to clipboard!`);
		} catch (error) {
			console.error("Error copying content:", error);
			alert("Failed to copy content.");
		}
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-8'>
					<div className='inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg mb-4'>
						<Globe className='mr-2 h-4 w-4' />
						Robots & Sitemap Fetcher
					</div>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
						Robots.txt & Sitemap Fetcher
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Instantly fetch and analyze robots.txt and sitemap.xml
						files from any domain for SEO analysis and insights.
					</p>
				</div>

				<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-8'>
					<CardHeader>
						<CardTitle className='flex items-center gap-2'>
							<Search className='h-5 w-5 text-indigo-600' />
							Domain Input
						</CardTitle>
						<CardDescription>
							Enter the domain name to fetch robots.txt and
							sitemap.xml files
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='flex gap-4'>
							<Input
								placeholder='example.com'
								value={domain}
								onChange={(e) => setDomain(e.target.value)}
								className='flex-1'
								onKeyPress={(e) =>
									e.key === "Enter" && fetchFiles()
								}
							/>
							<Button
								onClick={fetchFiles}
								disabled={isLoading || !domain.trim()}
								className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'>
								{isLoading ? (
									<>
										<Loader2 className='mr-2 h-4 w-4 animate-spin' />
										Fetching...
									</>
								) : (
									<>
										<Search className='mr-2 h-4 w-4' />
										Fetch Files
									</>
								)}
							</Button>
						</div>
						{error && (
							<div className='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm'>
								{error}
							</div>
						)}
					</CardContent>
				</Card>

				{(robotsContent || sitemapContent) && (
					<Tabs defaultValue='robots' className='w-full'>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger
								value='robots'
								className='flex items-center gap-2'>
								<FileText className='h-4 w-4' />
								robots.txt
							</TabsTrigger>
							<TabsTrigger
								value='sitemap'
								className='flex items-center gap-2'>
								<Globe className='h-4 w-4' />
								sitemap.xml
							</TabsTrigger>
						</TabsList>

						<TabsContent value='robots'>
							<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
								<CardHeader>
									<div className='flex items-center justify-between'>
										<CardTitle className='flex items-center gap-2'>
											<FileText className='h-5 w-5 text-blue-600' />
											robots.txt Content
										</CardTitle>
										<Button
											onClick={() =>
												copyToClipboard(
													robotsContent,
													"robots.txt"
												)
											}
											variant='outline'
											size='sm'>
											<Copy className='mr-2 h-4 w-4' />
											Copy
										</Button>
									</div>
									<CardDescription>
										The robots.txt file from {domain}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<pre className='bg-gray-50 p-4 rounded-lg text-sm overflow-auto max-h-96 whitespace-pre-wrap'>
										{robotsContent}
									</pre>
									<Badge variant='secondary' className='mt-2'>
										{robotsContent.split("\n").length} lines
									</Badge>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value='sitemap'>
							<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
								<CardHeader>
									<div className='flex items-center justify-between'>
										<CardTitle className='flex items-center gap-2'>
											<Globe className='h-5 w-5 text-green-600' />
											sitemap.xml Content
										</CardTitle>
										<Button
											onClick={() =>
												copyToClipboard(
													sitemapContent,
													"sitemap.xml"
												)
											}
											variant='outline'
											size='sm'>
											<Copy className='mr-2 h-4 w-4' />
											Copy
										</Button>
									</div>
									<CardDescription>
										The sitemap.xml file from {domain}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<pre className='bg-gray-50 p-4 rounded-lg text-sm overflow-auto max-h-96 whitespace-pre-wrap'>
										{sitemapContent}
									</pre>
									<Badge variant='secondary' className='mt-2'>
										{typeof sitemapContent === "string"
											? sitemapContent.split("\n").length
											: 0}{" "}
										lines
									</Badge>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				)}

				<Card className='mt-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
					<CardHeader>
						<CardTitle>About These Files</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='grid gap-6 md:grid-cols-2'>
							<div>
								<h3 className='font-semibold mb-2 flex items-center gap-2'>
									<FileText className='h-4 w-4 text-blue-600' />
									robots.txt
								</h3>
								<p className='text-sm text-gray-600 mb-2'>
									The robots.txt file tells search engine
									crawlers which pages they can or can&apos;t
									request from your site.
								</p>
								<ul className='text-xs text-gray-500 space-y-1'>
									<li>• Controls crawler access</li>
									<li>• Located at /robots.txt</li>
									<li>• SEO optimization tool</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold mb-2 flex items-center gap-2'>
									<Globe className='h-4 w-4 text-green-600' />
									sitemap.xml
								</h3>
								<p className='text-sm text-gray-600 mb-2'>
									The sitemap.xml file lists all important
									pages on your website to help search engines
									discover and index them.
								</p>
								<ul className='text-xs text-gray-500 space-y-1'>
									<li>• Lists all website pages</li>
									<li>• Helps with SEO indexing</li>
									<li>• XML format structure</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
