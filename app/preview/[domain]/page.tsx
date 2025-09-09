import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Clock, DollarSign, Eye, Users, Globe, TrendingUp, Shield, Zap, ArrowRight, MessageSquare } from "lucide-react"

interface PreviewPageProps {
  params: {
    domain: string
  }
}

export default function PreviewPage({ params }: PreviewPageProps) {
  const domainName = decodeURIComponent(params.domain)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/10">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 px-4 py-2" variant="outline">
            <Shield className="h-4 w-4 mr-2" />
            Verified on Doma Protocol
          </Badge>
          
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            {domainName}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-10">
            Premium domain name available for purchase
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Buy Now Price</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">$25,000</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Instant Transfer</p>
            </div>
            <div className="text-gray-300 hidden sm:block text-3xl">|</div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">or Make an Offer</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">Min. $10,000</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Negotiable</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-lg px-10 py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl transform hover:scale-105 transition-all duration-200">
              <DollarSign className="mr-2 h-5 w-5" />
              Buy Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-200">
              <MessageSquare className="mr-2 h-5 w-5" />
              Make an Offer
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Badge className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              <Zap className="h-4 w-4 mr-2" />
              Instant Transfer
            </Badge>
            <Badge className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
              <Shield className="h-4 w-4 mr-2" />
              Smart Contract Secured
            </Badge>
            <Badge className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
              <TrendingUp className="h-4 w-4 mr-2" />
              0% Commission
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="group p-6 text-center hover:shadow-xl transition-all duration-300 border-blue-200 dark:border-blue-800/50 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <Eye className="h-8 w-8 mx-auto mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <p className="text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Total Views</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <p className="text-2xl font-bold">523</p>
            <p className="text-sm text-muted-foreground">Unique Visitors</p>
          </Card>
          <Card className="p-6 text-center">
            <DollarSign className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Offers Received</p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-orange-600" />
            <p className="text-2xl font-bold">45d</p>
            <p className="text-sm text-muted-foreground">Listed For</p>
          </Card>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Buy This Domain?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Premium Brandable Name</h3>
                <p className="text-muted-foreground">
                  Short, memorable, and perfect for building a strong online presence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Established Authority</h3>
                <p className="text-muted-foreground">
                  Registered in 2015 with consistent traffic and backlinks from reputable sites.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">SEO Value</h3>
                <p className="text-muted-foreground">
                  Strong domain metrics with DA 45 and organic search visibility.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Blockchain Verified</h3>
                <p className="text-muted-foreground">
                  Ownership verified on-chain through Doma Protocol for secure transactions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Instant Transfer</h3>
                <p className="text-muted-foreground">
                  Domain transfers automatically upon payment confirmation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Zero Commission</h3>
                <p className="text-muted-foreground">
                  Direct peer-to-peer sale with no marketplace fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Questions About This Domain?</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" type="email" />
            </div>
            <textarea 
              className="w-full min-h-[100px] px-3 py-2 border rounded-md bg-white dark:bg-gray-950"
              placeholder="Your message or offer details..."
            />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>Powered by Doma Protocol • Secure Blockchain Transactions • No Middlemen</p>
      </div>
    </div>
  )
}