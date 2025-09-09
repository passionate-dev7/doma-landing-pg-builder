import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Lock, Zap, DollarSign, Layers, Check, X, Rocket, Eye, Shield, TrendingUp, Users, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    name: "Domain-Specific Data",
    description: "Auto-populate registration dates, traffic stats, and ownership history directly from the blockchain.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Direct Sales, Lower Fees",
    description: "1-2% transaction fees vs 10-20% on traditional platforms. Set your own commission structure.",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Analytics That Matter",
    description: "Track visitors, offers, and conversions. Use data to increase your domain's value and appeal.",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "No Nameserver Lock-in",
    description: "Keep your existing DNS. Just point an A record - no need to change nameservers like competitors require.",
    icon: Zap,
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "On-Chain Verification",
    description: "All domain data verified on-chain. Buyers can trust ownership and history without intermediaries.",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Premium Templates",
    description: "Professional templates designed for domain sales. Customize or use as-is for maximum conversions.",
    icon: Layers,
    gradient: "from-pink-500 to-rose-500"
  }
]

const stats = [
  { label: "Active Domains", value: "10,000+", icon: Globe },
  { label: "Total Sales Volume", value: "$50M+", icon: DollarSign },
  { label: "Average Time to Sale", value: "21 days", icon: Clock },
  { label: "Happy Sellers", value: "5,000+", icon: Users },
]

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-purple-500/50 text-purple-200 bg-purple-500/10 backdrop-blur-sm">
                <Rocket className="mr-2 h-4 w-4" />
                Powered by Doma Protocol Blockchain
              </Badge>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Sell Your Domains
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mt-2">
                Without the Middleman
              </span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
              Create stunning landing pages for your tokenized domains. Direct peer-to-peer sales with 
              <span className="font-semibold text-white"> 90% lower fees</span> than traditional marketplaces.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="group px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-purple-500/25">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-gray-500 text-white hover:bg-white/10 hover:border-white transform hover:scale-105 transition-all duration-200">
                  <Eye className="mr-2 h-5 w-5" />
                  View Templates
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Setup in 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="mt-20 flow-root">
            <div className="relative rounded-xl bg-gray-900/50 backdrop-blur-sm p-2 ring-1 ring-white/10 lg:rounded-2xl lg:p-4">
              <div className="rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 p-8 shadow-2xl ring-1 ring-white/10">
                <div className="space-y-4">
                  {/* Domain listing preview */}
                  <div className="flex items-center justify-between p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700">
                    <div>
                      <p className="text-sm text-gray-400">Your Domain</p>
                      <p className="text-3xl font-bold text-white">premium.eth</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Buy Now Price</p>
                      <p className="text-3xl font-bold text-green-400">$25,000</p>
                    </div>
                  </div>
                  
                  {/* Stats grid */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 text-center">
                      <Eye className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                      <p className="text-2xl font-bold text-white">1.2K</p>
                      <p className="text-xs text-gray-400">Visitors</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                      <p className="text-2xl font-bold text-white">523</p>
                      <p className="text-xs text-gray-400">Unique</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 text-center">
                      <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-400" />
                      <p className="text-2xl font-bold text-white">23</p>
                      <p className="text-xs text-gray-400">Offers</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 text-center">
                      <DollarSign className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                      <p className="text-2xl font-bold text-white">$18K</p>
                      <p className="text-xs text-gray-400">Avg Offer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
              Everything You Need to Sell Domains
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Built specifically for domain investors, not generic website builders
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">Comparison</Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
              Why Domain Investors Choose Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              See how we stack up against traditional domain marketplaces
            </p>
          </div>
          
          <div className="mt-16 overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      Doma Landing Builder
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Traditional Marketplaces
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                    Commission Fees
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      <Check className="mr-1 h-4 w-4" /> 1-2%
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="destructive">
                      <X className="mr-1 h-4 w-4" /> 10-20%
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                    Custom Landing Pages
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      <Check className="mr-1 h-4 w-4" /> Full Control
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="destructive">
                      <X className="mr-1 h-4 w-4" /> Limited
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                    Nameserver Changes
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      <Check className="mr-1 h-4 w-4" /> Not Required
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="destructive">
                      <X className="mr-1 h-4 w-4" /> Required
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                    On-Chain Verification
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      <Check className="mr-1 h-4 w-4" /> Blockchain
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="destructive">
                      <X className="mr-1 h-4 w-4" /> None
                    </Badge>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                    Direct P2P Sales
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      <Check className="mr-1 h-4 w-4" /> Yes
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="destructive">
                      <X className="mr-1 h-4 w-4" /> Through Broker
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Start Selling Your Domains Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Join thousands of domain investors who are already using blockchain technology to sell domains 
              faster, cheaper, and with complete transparency.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="px-8 py-6 text-lg bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl">
                  Create Your First Landing Page
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="text-white/80 text-sm">
                <p>✨ No credit card required</p>
                <p>⚡ Setup in 2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}