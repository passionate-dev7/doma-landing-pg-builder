import Image from "next/image"
import Link from "next/link"
import { Check, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <div className="container mx-auto py-10">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Landing Page Templates</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose from professionally designed templates optimized for domain sales. 
          Each template is crafted to maximize conversions and showcase your domains effectively.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Thumbnail */}
            <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-semibold text-gray-400">Template Preview</p>
              </div>
              {template.isPremium && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <Lock className="h-3 w-3 mr-1" />
                    Premium
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-muted-foreground">{template.description}</p>
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
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Template?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our team can create a completely custom landing page template tailored to your brand 
          and specific requirements. Perfect for agencies and large portfolios.
        </p>
        <Link href="/contact">
          <Button size="lg">Request Custom Template</Button>
        </Link>
      </div>
    </div>
  )
}