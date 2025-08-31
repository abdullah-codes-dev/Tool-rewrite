import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-8'>
					<Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
						Legal Information
					</Badge>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
						Terms of Service
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
									1. Acceptance of Terms
								</h2>
								<p className='text-gray-600 mb-4'>
									By accessing and using WebTools Pro
									(&quot;the Service&quot;), you accept and
									agree to be bound by the terms and provision
									of this agreement. If you do not agree to
									abide by the above, please do not use this
									service.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									2. Description of Service
								</h2>
								<p className='text-gray-600 mb-4'>
									WebTools Pro provides free web development
									and content creation tools including but not
									limited to text rewriting, robots.txt
									fetching, and sitemap analysis. The service
									is provided &quot;as is&quot; and we reserve
									the right to modify or discontinue the
									service at any time.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									3. User Responsibilities
								</h2>
								<p className='text-gray-600 mb-2'>
									You agree to:
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
									<li>
										Use the service only for lawful purposes
									</li>
									<li>
										Not attempt to harm or disrupt the
										service
									</li>
									<li>
										Not use the service to violate any
										applicable laws or regulations
									</li>
									<li>
										Not attempt to gain unauthorized access
										to our systems
									</li>
									<li>
										Respect intellectual property rights
									</li>
								</ul>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									4. Privacy and Data
								</h2>
								<p className='text-gray-600 mb-4'>
									We do not store or retain any content you
									process through our tools. All data
									processing happens in real-time and is not
									saved to our servers. For more details,
									please review our Privacy Policy.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									5. Intellectual Property
								</h2>
								<p className='text-gray-600 mb-4'>
									The service and its original content,
									features, and functionality are and will
									remain the exclusive property of WebTools
									Pro and its licensors. The service is
									protected by copyright, trademark, and other
									laws.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									6. Disclaimer of Warranties
								</h2>
								<p className='text-gray-600 mb-4'>
									The service is provided on an &quot;as
									is&quot; and &quot;as available&quot; basis.
									We make no representations or warranties of
									any kind, express or implied, as to the
									operation of the service or the information,
									content, materials, or products included on
									the service.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									7. Limitation of Liability
								</h2>
								<p className='text-gray-600 mb-4'>
									WebTools Pro will not be liable for any
									damages of any kind arising from the use of
									this service, including but not limited to
									direct, indirect, incidental, punitive, and
									consequential damages.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									8. Service Availability
								</h2>
								<p className='text-gray-600 mb-4'>
									While we strive to maintain high
									availability, we do not guarantee that the
									service will be available at all times. The
									service may be temporarily unavailable due
									to maintenance, updates, or technical
									issues.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									9. Modifications to Terms
								</h2>
								<p className='text-gray-600 mb-4'>
									We reserve the right to modify these terms
									at any time. Changes will be effective
									immediately upon posting. Your continued use
									of the service after any changes constitutes
									acceptance of the new terms.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									10. Termination
								</h2>
								<p className='text-gray-600 mb-4'>
									We may terminate or suspend your access to
									the service immediately, without prior
									notice or liability, for any reason
									whatsoever, including without limitation if
									you breach the Terms.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									11. Governing Law
								</h2>
								<p className='text-gray-600 mb-4'>
									These terms shall be interpreted and
									governed in accordance with the laws of the
									United States, without regard to its
									conflict of law provisions.
								</p>
							</section>

							<section>
								<h2 className='text-xl font-semibold text-gray-900 mb-3'>
									12. Contact Information
								</h2>
								<p className='text-gray-600 mb-4'>
									If you have any questions about these Terms
									of Service, please contact us at
									support@example.com.
								</p>
							</section>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
