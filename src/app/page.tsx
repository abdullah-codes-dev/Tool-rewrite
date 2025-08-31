import Link from "next/link"
import { ArrowRight, FileText, Globe, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Professional Web Tools
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Powerful Tools for
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Web Professionals
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Streamline your workflow with our collection of essential web development and content creation tools.
              Fast, reliable, and completely free to use.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Tools</h2>
            <p className="mt-4 text-lg text-gray-600">Professional-grade tools designed to boost your productivity</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Text Rewriter & Spinner</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Transform your content with intelligent synonym replacement. Perfect for creating unique variations of
                  your text.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    Intelligent synonym detection
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    Preserve original meaning
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    Multiple variation options
                  </li>
                </ul>
                <Link href="/tools/text-rewriter">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Try Text Rewriter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50/50">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Robots.txt & Sitemap Fetcher</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Instantly fetch and analyze robots.txt and sitemap.xml files from any domain for SEO analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    Quick domain analysis
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    SEO insights
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 text-green-500 mr-2" />
                    Formatted display
                  </li>
                </ul>
                <Link href="/tools/robots-sitemap">
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    Try Fetcher Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Our Tools?</h2>
            <p className="mt-4 text-lg text-blue-100">Built with modern technology and user experience in mind</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Lightning Fast</h3>
              <p className="mt-2 text-blue-100">Optimized for speed and performance with instant results</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Always Available</h3>
              <p className="mt-2 text-blue-100">24/7 availability with reliable uptime and consistent performance</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Free to Use</h3>
              <p className="mt-2 text-blue-100">All tools are completely free with no hidden costs or limitations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
