import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DisclaimerPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-8'>
					<Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
						Important Notice
					</Badge>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
						Disclaimer
					</h1>
					<p className='text-lg text-gray-600'>
						Last updated: January 2024
					</p>
				</div>

				<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
					<CardContent className='pt-6 prose prose-gray max-w-none'>
						<div className='space-y-6'>
							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									General Disclaimer
								</h2>
								<p className='text-gray-600 mb-4'>
									The information and tools provided by
									WebTools Pro are for general informational
									and utility purposes only. While we strive
									to provide accurate and up-to-date tools and
									information, we make no representations or
									warranties of any kind, express or implied,
									about the completeness, accuracy,
									reliability, suitability, or availability of
									the tools or information contained on the
									website.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									Tool Accuracy
								</h2>
								<p className='text-gray-600 mb-4'>
									Our tools are provided &quot;as is&quot; and
									we cannot guarantee their accuracy or
									reliability:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										<strong>Text Rewriter:</strong> Results
										may vary in quality and accuracy. Always
										review rewritten content before use.
									</li>
									<li>
										<strong>Robots.txt Fetcher:</strong> We
										fetch files as they exist at the time of
										request. Files may change or be
										unavailable.
									</li>
									<li>
										<strong>Sitemap Fetcher:</strong>{" "}
										Sitemap availability and format may vary
										between websites.
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									No Professional Advice
								</h2>
								<p className='text-gray-600 mb-4'>
									The tools and information provided on this
									website are not intended to be a substitute
									for professional advice. You should not rely
									solely on the information provided by our
									tools for making business, legal, or
									technical decisions. Always consult with
									qualified professionals when needed.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									Third-Party Content
								</h2>
								<p className='text-gray-600 mb-4'>
									Our tools may fetch or display content from
									third-party websites (such as robots.txt and
									sitemap files). We are not responsible for:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										The accuracy or completeness of
										third-party content
									</li>
									<li>
										The availability of third-party websites
										or files
									</li>
									<li>
										Any damages resulting from third-party
										content
									</li>
									<li>
										Copyright or intellectual property
										issues with third-party content
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									Limitation of Liability
								</h2>
								<p className='text-gray-600 mb-4'>
									In no event shall WebTools Pro, its owners,
									employees, or affiliates be liable for any
									direct, indirect, incidental, special,
									consequential, or punitive damages,
									including but not limited to:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>Loss of profits or revenue</li>
									<li>Loss of data or information</li>
									<li>Business interruption</li>
									<li>Personal injury or property damage</li>
									<li>
										Any other commercial damages or losses
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									Service Availability
								</h2>
								<p className='text-gray-600 mb-4'>
									We do not guarantee that our service will be
									available at all times. The service may be
									temporarily unavailable due to maintenance,
									technical issues, or other factors beyond
									our control. We are not liable for any
									inconvenience or damages resulting from
									service unavailability.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									User Responsibility
								</h2>
								<p className='text-gray-600 mb-4'>
									Users are responsible for:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										Verifying the accuracy of tool results
										before use
									</li>
									<li>
										Ensuring compliance with applicable laws
										and regulations
									</li>
									<li>
										Respecting intellectual property rights
									</li>
									<li>
										Using tools in accordance with their
										intended purpose
									</li>
									<li>
										Backing up important data before
										processing
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									External Links
								</h2>
								<p className='text-gray-600 mb-4'>
									Our website may contain links to external
									websites. We have no control over the
									content, privacy policies, or practices of
									these external sites and are not responsible
									for their content or any damages that may
									result from your use of them.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									Intellectual Property
								</h2>
								<p className='text-gray-600 mb-4'>
									While our tools are free to use, users are
									responsible for ensuring that their use of
									the tools and any resulting content does not
									infringe on the intellectual property rights
									of others. We are not responsible for any
									copyright or trademark violations that may
									result from the use of our tools.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									Changes to Disclaimer
								</h2>
								<p className='text-gray-600 mb-4'>
									We reserve the right to modify this
									disclaimer at any time without prior notice.
									Changes will be effective immediately upon
									posting on this page. Your continued use of
									our service after any changes constitutes
									acceptance of the updated disclaimer.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									Contact Information
								</h2>
								<p className='text-gray-600 mb-4'>
									If you have any questions about this
									disclaimer, please contact us at
									legal@webtoolspro.com.
								</p>
							</section>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
