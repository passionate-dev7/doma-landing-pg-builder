import Image from "next/image"
import Link from "next/link"
import { Check, Lock, Layers, Sparkles, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const templates = [
  {
    id: "minimal",
    name: "Minimalist",
    description: "Clean and focused design that puts your domain front and center",
    thumbnail: "/templates/minimal.png",
    category: "minimal",
    isPremium: false,
    features: [
      "Large domain display",
      "Price & offer button",
      "Basic analytics",
      "Mobile responsive",
    ],
    demoUrl: "https://minimal.demo.domalanding.com",
    popularFor: ["Short domains", "Premium names", "Quick sales"],
  },
  {
    id: "data-rich",
    name: "Data Dashboard",
    description: "Show comprehensive domain metrics and build buyer confidence",
    thumbnail: "/templates/data-rich.png",
    category: "data-rich",
    isPremium: false,
    features: [
      "Traffic statistics",
      "Historical data",
      "Similar sales",
      "SEO metrics",
      "Offer history",
    ],
    demoUrl: "https://data.demo.domalanding.com",
    popularFor: ["High-traffic domains", "Established names", "Data-driven buyers"],
  },
  {
    id: "premium",
    name: "Premium Showcase",
    description: "Luxury design for high-value domains with stunning visuals",
    thumbnail: "/templates/premium.png",
    category: "premium",
    isPremium: true,
    price: 49,
    features: [
      "Animated backgrounds",
      "Video support",
      "Custom branding",
      "Advanced animations",
      "White-label option",
    ],
    demoUrl: "https://premium.demo.domalanding.com",
    popularFor: ["Ultra-premium domains", "Brand names", "6-figure sales"],
  },
  {
    id: "auction",
    name: "Auction Style",
    description: "Create urgency with countdown timers and bid tracking",
    thumbnail: "/templates/auction.png",
    category: "auction",
    isPremium: true,
    price: 39,
    features: [
      "Countdown timer",
      "Live bid updates",
      "Reserve price",
      "Bidder verification",
      "Auto-extend option",
    ],
    demoUrl: "https://auction.demo.domalanding.com",
    popularFor: ["Time-limited sales", "Competitive bidding", "High-demand names"],
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-6" variant="outline">
            <Layers className="h-4 w-4 mr-2" />
            Professional Templates
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Landing Page Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose from professionally designed templates optimized for domain sales. 
            Each template is crafted to maximize conversions and showcase your domains effectively.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border">
            <p className="text-3xl font-bold text-blue-600">50+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Templates Available</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border">
            <p className="text-3xl font-bold text-green-600">89%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Conversion Rate</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border">
            <p className="text-3xl font-bold text-purple-600">4.9/5</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">User Rating</p>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {templates.map((template, index) => (
            <div 
              key={template.id} 
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.5s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Thumbnail */}
              <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Template preview mockup */}
                <div className="absolute inset-4 bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 transform group-hover:scale-95 transition-transform duration-300">
                  <div className="h-full flex flex-col">
                    <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded mb-3 animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 animate-pulse"></div>
                      <div className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded mt-4"></div>
                    </div>
                  </div>
                </div>
                
                {template.isPremium && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                      <Lock className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{template.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{template.description}</p>
                </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular For */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Best for:</h4>
                <div className="flex flex-wrap gap-2">
                  {template.popularFor.map((use, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div>
                  {template.isPremium && (
                    <p className="text-lg font-semibold">${template.price}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link href={template.demoUrl} target="_blank">
                    <Button variant="outline">View Demo</Button>
                  </Link>
                  {template.isPremium ? (
                    <Button>
                      Purchase Template
                    </Button>
                  ) : (
                    <Link href={`/dashboard/create?template=${template.id}`}>
                      <Button>Use Template</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-center">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="relative z-10">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Custom Development
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-white">Need a Custom Template?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Our team can create a completely custom landing page template tailored to your brand 
              and specific requirements. Perfect for agencies and large portfolios.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-200">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request Custom Template
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}