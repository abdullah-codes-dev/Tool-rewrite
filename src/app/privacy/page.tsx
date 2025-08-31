import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-8'>
					<Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
						Privacy & Security
					</Badge>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
						Privacy Policy
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
									1. Information We Collect
								</h2>
								<p className='text-gray-600 mb-4'>
									WebTools Pro is designed with privacy in
									mind. We collect minimal information to
									provide our services:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										<strong>Usage Data:</strong> Basic
										analytics about how our tools are used
										(no personal content)
									</li>
									<li>
										<strong>Technical Data:</strong> IP
										addresses, browser type, and device
										information for security
									</li>
									<li>
										<strong>Contact Information:</strong>{" "}
										Only when you voluntarily contact us
										through our forms
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									2. What We Don&apos;t Collect
								</h2>
								<p className='text-gray-600 mb-2'>
									We explicitly do NOT collect or store:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										Text content you input into our
										rewriting tool
									</li>
									<li>
										Domain names you search in our
										robots.txt fetcher
									</li>
									<li>
										Any processed or output content from our
										tools
									</li>
									<li>Personal files or documents</li>
									<li>
										Account information (we don&apos;t
										require accounts)
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									3. How We Process Your Data
								</h2>
								<p className='text-gray-600 mb-4'>
									All tool processing happens in real-time on
									our servers and is immediately discarded
									after providing results. We use a
									&quot;zero-retention&quot; policy for user
									content:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										Text rewriting: Content is processed and
										immediately deleted
									</li>
									<li>
										Robots.txt fetching: Domain queries are
										not logged or stored
									</li>
									<li>
										No caching of user inputs or outputs
									</li>
									<li>No backup copies of user data</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									4. Third-Party Services
								</h2>
								<p className='text-gray-600 mb-4'>
									We use the following third-party services
									that may collect data:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										<strong>Datamuse API:</strong> For
										synonym lookup in text rewriting (no
										personal data shared)
									</li>
									<li>
										<strong>Analytics:</strong> Basic usage
										statistics (anonymized)
									</li>
									<li>
										<strong>CDN Services:</strong> For fast
										content delivery (no user data
										processed)
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									5. Cookies and Tracking
								</h2>
								<p className='text-gray-600 mb-4'>
									We use minimal cookies and tracking:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										<strong>Essential Cookies:</strong>{" "}
										Required for basic site functionality
									</li>
									<li>
										<strong>Analytics Cookies:</strong>{" "}
										Anonymous usage statistics (can be
										disabled)
									</li>
									<li>
										<strong>No Advertising Cookies:</strong>{" "}
										We don&apos;t use advertising or
										marketing cookies
									</li>
									<li>
										<strong>No Cross-Site Tracking:</strong>{" "}
										We don&apos;t track you across other
										websites
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									6. Data Security
								</h2>
								<p className='text-gray-600 mb-4'>
									We implement appropriate security measures
									to protect your information:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										HTTPS encryption for all data
										transmission
									</li>
									<li>Secure server infrastructure</li>
									<li>
										Regular security updates and monitoring
									</li>
									<li>
										No permanent storage of user content
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									7. Your Rights
								</h2>
								<p className='text-gray-600 mb-4'>
									Since we don&apos;t store personal data,
									most data protection rights don&apos;t
									apply. However, you have the right to:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>Contact us about privacy concerns</li>
									<li>
										Request information about our data
										practices
									</li>
									<li>Opt out of analytics cookies</li>
									<li>Report any privacy issues</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									8. Children&apos;s Privacy
								</h2>
								<p className='text-gray-600 mb-4'>
									Our service is not directed to children
									under 13. We do not knowingly collect
									personal information from children under 13.
									If you are a parent or guardian and believe
									your child has provided us with personal
									information, please contact us.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									9. International Users
								</h2>
								<p className='text-gray-600 mb-4'>
									Our service is hosted in the United States.
									If you are accessing our service from
									outside the US, please be aware that your
									information may be transferred to, stored,
									and processed in the US where our servers
									are located.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									10. Changes to Privacy Policy
								</h2>
								<p className='text-gray-600 mb-4'>
									We may update this privacy policy from time
									to time. We will notify you of any changes
									by posting the new privacy policy on this
									page and updating the &quot;Last
									updated&quot; date.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									11. Contact Us
								</h2>
								<p className='text-gray-600 mb-4'>
									If you have any questions about this Privacy
									Policy, please contact us at:
								</p>
								<ul className='list-none text-gray-600 space-y-1 mb-4'>
									<li>Email: privacy@example.com</li>
									<li>
										Address: 123 Tech Street, San Francisco,
										CA 94105
									</li>
								</ul>
							</section>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
