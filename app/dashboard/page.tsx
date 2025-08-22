"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Globe, Eye, DollarSign, TrendingUp, ExternalLink, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - will be replaced with real data from Doma Protocol
const mockDomains = [
  {
    id: "1",
    name: "premium",
    tld: ".eth",
    fullName: "premium.eth",
    hasLandingPage: true,
    landingPageUrl: "https://premium.eth.limo",
    analytics: {
      views: 1234,
      offers: 23,
      avgOffer: "$18,500",
      conversion: "2.4%",
    },
    listing: {
      price: "$25,000",
      status: "active",
    },
  },
  {
    id: "2",
    name: "crypto",
    tld: ".eth",
    fullName: "crypto.eth",
    hasLandingPage: true,
    landingPageUrl: "https://crypto.eth.limo",
    analytics: {
      views: 856,
      offers: 12,
      avgOffer: "$45,000",
      conversion: "1.8%",
    },
    listing: {
      price: "$75,000",
      status: "active",
    },
  },
  {
    id: "3",
    name: "web3dao",
    tld: ".eth",
    fullName: "web3dao.eth",
    hasLandingPage: false,
    analytics: {
      views: 0,
      offers: 0,
      avgOffer: "$0",
      conversion: "0%",
    },
    listing: null,
  },
]

export default function DashboardPage() {
  const [domains] = useState(mockDomains)

  return (
    <div className="container mx-auto py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Domain Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage your domain landing pages and track performance
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Views</p>
              <p className="text-2xl font-bold">2,090</p>
            </div>
            <Eye className="h-8 w-8 text-blue-600 opacity-20" />
          </div>
          <p className="text-xs text-green-600 mt-2">+12% from last month</p>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Offers</p>
              <p className="text-2xl font-bold">35</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600 opacity-20" />
          </div>
          <p className="text-xs text-green-600 mt-2">+23% from last month</p>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg. Offer</p>
              <p className="text-2xl font-bold">$31,750</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600 opacity-20" />
          </div>
          <p className="text-xs text-green-600 mt-2">+8% from last month</p>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Pages</p>
              <p className="text-2xl font-bold">2 / 3</p>
            </div>
            <Globe className="h-8 w-8 text-orange-600 opacity-20" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">1 domain without page</p>
        </div>
      </div>

      {/* Domains List */}
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Domains</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Domain
            </Button>
          </div>
        </div>
        <div className="divide-y">
          {domains.map((domain) => (
            <div key={domain.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-medium">{domain.fullName}</h3>
                    {domain.hasLandingPage ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Landing Page Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        No Landing Page
                      </span>
                    )}
                    {domain.listing && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Listed: {domain.listing.price}
                      </span>
                    )}
                  </div>
                  
                  {domain.hasLandingPage && (
                    <div className="mt-4 grid grid-cols-4 gap-6 text-sm">
                      <div>
                        <p className="text-muted-foreground">Views</p>
                        <p className="font-medium">{domain.analytics.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Offers</p>
                        <p className="font-medium">{domain.analytics.offers}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg. Offer</p>
                        <p className="font-medium">{domain.analytics.avgOffer}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Conversion</p>
                        <p className="font-medium">{domain.analytics.conversion}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 ml-6">
                  {domain.hasLandingPage ? (
                    <>
                      <Link href={domain.landingPageUrl} target="_blank">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Page
                        </Button>
                      </Link>
                      <Link href={`/dashboard/domains/${domain.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </Link>
                      <Link href={`/dashboard/domains/${domain.id}/analytics`}>
                        <Button size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Analytics
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Link href={`/dashboard/domains/${domain.id}/setup`}>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Landing Page
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link href="/templates">
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold mb-2">Browse Templates</h3>
            <p className="text-sm text-muted-foreground">
              Choose from premium templates designed for domain sales
            </p>
          </div>
        </Link>
        <Link href="/docs/dns-setup">
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold mb-2">DNS Setup Guide</h3>
            <p className="text-sm text-muted-foreground">
              Learn how to point your domain to your landing page
            </p>
          </div>
        </Link>
        <Link href="/pricing">
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold mb-2">Upgrade Plan</h3>
            <p className="text-sm text-muted-foreground">
              Get more features with Pro or Business plans
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}