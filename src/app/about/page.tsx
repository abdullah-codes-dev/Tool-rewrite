import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Globe, Shield } from "lucide-react";

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-12'>
					<Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
						About WebTools Pro
					</Badge>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
						Professional Web Tools for Everyone
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						We are dedicated to providing high-quality, free web
						tools that help professionals and enthusiasts streamline
						their workflow and boost productivity.
					</p>
				</div>

				<div className='grid gap-8 md:grid-cols-2 mb-12'>
					<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Zap className='h-5 w-5 text-blue-600' />
								Our Mission
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600'>
								To democratize access to professional web
								development tools by providing fast, reliable,
								and completely free solutions that anyone can
								use to enhance their digital projects.
							</p>
						</CardContent>
					</Card>

					<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Users className='h-5 w-5 text-purple-600' />
								Our Vision
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-gray-600'>
								To become the go-to platform for web
								professionals seeking efficient, user-friendly
								tools that save time and improve the quality of
								their work.
							</p>
						</CardContent>
					</Card>
				</div>

				<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-8'>
					<CardHeader>
						<CardTitle>What We Offer</CardTitle>
						<CardDescription>
							A comprehensive suite of web development and content
							creation tools
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='grid gap-6 md:grid-cols-2'>
							<div>
								<h3 className='font-semibold mb-3 text-blue-600'>
									Text Rewriter & Spinner
								</h3>
								<p className='text-sm text-gray-600 mb-3'>
									Transform your content with intelligent
									synonym replacement using advanced
									algorithms and the Datamuse API for
									accurate, contextual rewrites.
								</p>
								<ul className='text-xs text-gray-500 space-y-1'>
									<li>• Intelligent synonym detection</li>
									<li>• Context-aware replacements</li>
									<li>• Preserve original meaning</li>
									<li>• Multiple variation options</li>
								</ul>
							</div>
							<div>
								<h3 className='font-semibold mb-3 text-purple-600'>
									Robots.txt & Sitemap Fetcher
								</h3>
								<p className='text-sm text-gray-600 mb-3'>
									Instantly analyze any website&apos;s SEO
									configuration by fetching and displaying
									their robots.txt and sitemap.xml files in a
									readable format.
								</p>
								<ul className='text-xs text-gray-500 space-y-1'>
									<li>• Quick domain analysis</li>
									<li>• SEO insights and optimization</li>
									<li>• Formatted, readable display</li>
									<li>• Copy and export functionality</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>

				<div className='grid gap-6 md:grid-cols-3'>
					<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center'>
						<CardContent className='pt-6'>
							<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
								<Globe className='h-6 w-6 text-blue-600' />
							</div>
							<h3 className='font-semibold mb-2'>
								Always Available
							</h3>
							<p className='text-sm text-gray-600'>
								24/7 uptime with reliable performance and
								consistent results you can depend on.
							</p>
						</CardContent>
					</Card>

					<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center'>
						<CardContent className='pt-6'>
							<div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
								<Zap className='h-6 w-6 text-purple-600' />
							</div>
							<h3 className='font-semibold mb-2'>
								Lightning Fast
							</h3>
							<p className='text-sm text-gray-600'>
								Optimized for speed with instant results and
								minimal loading times.
							</p>
						</CardContent>
					</Card>

					<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm text-center'>
						<CardContent className='pt-6'>
							<div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
								<Shield className='h-6 w-6 text-green-600' />
							</div>
							<h3 className='font-semibold mb-2'>
								Secure & Private
							</h3>
							<p className='text-sm text-gray-600'>
								Your data is processed securely and never stored
								or shared with third parties.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
