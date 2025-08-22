import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Lock, Zap, DollarSign, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sell Your Domains Without the Middleman
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Create stunning landing pages for your tokenized domains. Direct peer-to-peer sales, 
              transparent pricing, and 90% lower fees than traditional marketplaces.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="outline" size="lg">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-gradient-to-b from-blue-50 to-white p-8 shadow-2xl ring-1 ring-gray-900/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <div>
                      <p className="text-sm text-gray-500">premium.eth</p>
                      <p className="text-2xl font-bold">$25,000</p>
                    </div>
                    <Button>Make Offer</Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-white rounded-lg shadow">
                      <p className="text-2xl font-bold">1.2K</p>
                      <p className="text-sm text-gray-500">Visitors</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                      <p className="text-2xl font-bold">23</p>
                      <p className="text-sm text-gray-500">Offers</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                      <p className="text-2xl font-bold">$18K</p>
                      <p className="text-sm text-gray-500">Avg Offer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Sell Domains
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Built specifically for domain investors, not generic website builders
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Globe className="h-5 w-5 flex-none text-blue-600" />
                  Domain-Specific Data
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Auto-populate registration dates, traffic stats, and ownership history directly from the blockchain.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <DollarSign className="h-5 w-5 flex-none text-blue-600" />
                  Direct Sales, Lower Fees
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    1-2% transaction fees vs 10-20% on traditional platforms. Set your own commission structure.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <BarChart3 className="h-5 w-5 flex-none text-blue-600" />
                  Analytics That Matter
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Track visitors, offers, and conversions. Use data to increase your domain's value and appeal.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Zap className="h-5 w-5 flex-none text-blue-600" />
                  No Nameserver Lock-in
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Keep your existing DNS. Just point an A record - no need to change nameservers like competitors require.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Lock className="h-5 w-5 flex-none text-blue-600" />
                  On-Chain Verification
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    All domain data verified on-chain. Buyers can trust ownership and history without intermediaries.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Layers className="h-5 w-5 flex-none text-blue-600" />
                  Premium Templates
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Professional templates designed for domain sales. Customize or use as-is for maximum conversions.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Domain Investors Choose Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how we compare to traditional domain marketplaces
            </p>
          </div>
          <div className="mt-16 overflow-hidden rounded-lg border bg-white dark:bg-gray-950">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Doma Landing</th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Afternic/Sedo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Commission Fees</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-green-600">1-2%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-red-600">10-20%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Custom Landing Pages</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅ Full Control</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌ Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Nameserver Changes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅ Not Required</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌ Required</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">On-Chain Verification</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅ Yes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌ No</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Direct P2P Sales</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅ Yes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌ Through Broker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Start Selling Your Domains Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Join domain investors who are already using blockchain technology to sell domains faster, 
              cheaper, and with complete transparency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2">
                  Create Your First Landing Page <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}