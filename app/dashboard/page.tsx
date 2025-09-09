"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus, Globe, Eye, DollarSign, TrendingUp, ExternalLink, Settings, Loader2, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDomaContext } from "@/contexts/doma-context"
import { LandingPageConfig } from "@/types/domain"
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// Mock landing page configs (will be stored in database)
const mockLandingPageConfigs: Map<string, Partial<LandingPageConfig>> = new Map([
  ['1', { id: '1', domainId: '1', templateId: 'minimal' }],
  ['2', { id: '2', domainId: '2', templateId: 'data-rich' }],
]);

export default function DashboardPage() {
  const { isConnected } = useAccount();
  const { domains, loading, error, analytics, listings } = useDomaContext();
  const [landingPageConfigs] = useState(mockLandingPageConfigs);
  
  // Show connect wallet prompt if not connected
  if (!isConnected) {
    return (
      <div className="container mx-auto py-10">
        <div className="max-w-md mx-auto text-center py-20">
          <Wallet className="h-16 w-16 mx-auto mb-6 text-gray-400" />
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-muted-foreground mb-8">
            Connect your wallet to view and manage your Doma Protocol domains
          </p>
          <ConnectButton />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Domain Dashboard
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Manage your domain landing pages and track performance
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
            <Plus className="h-4 w-4 mr-2" />
            Add New Domain
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-4 mb-10">
        <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 shadow-sm border border-blue-200 dark:border-blue-800/50 hover:shadow-lg transition-all duration-300">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Total Views</p>
              <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">
              {Array.from(analytics.values()).reduce((sum, a) => sum + a.totalViews, 0).toLocaleString()}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-300 mt-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 shadow-sm border border-green-200 dark:border-green-800/50 hover:shadow-lg transition-all duration-300">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">Total Offers</p>
              <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-3xl font-bold text-green-900 dark:text-green-100">
              {Array.from(analytics.values()).reduce((sum, a) => sum + a.offerCount, 0)}
            </p>
            <p className="text-xs text-green-600 dark:text-green-300 mt-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +23% from last month
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 shadow-sm border border-purple-200 dark:border-purple-800/50 hover:shadow-lg transition-all duration-300">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Avg. Offer</p>
              <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              {analytics.size > 0 
                ? analytics.values().next().value?.averageOfferAmount || '$0'
                : '$0'
              }
            </p>
            <p className="text-xs text-purple-600 dark:text-purple-300 mt-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last month
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6 shadow-sm border border-orange-200 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Active Pages</p>
              <Globe className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            <p className="text-3xl font-bold text-orange-900 dark:text-orange-100">
              {landingPageConfigs.size} / {domains.length}
            </p>
            <p className="text-xs text-orange-600 dark:text-orange-300 mt-2">
              {domains.length - landingPageConfigs.size} domain{domains.length - landingPageConfigs.size !== 1 ? 's' : ''} without page
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Domains List */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Domains</h2>
              <p className="text-sm text-muted-foreground mt-1">Manage your tokenized domains and landing pages</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                Import Domain
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Domain
              </Button>
            </div>
          </div>
        </div>
        <div className="divide-y">
          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-gray-400" />
              <p className="text-muted-foreground">Loading your domains...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="text-red-500">{error}</p>
            </div>
          ) : domains.length === 0 ? (
            <div className="p-12 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-muted-foreground mb-4">No domains found</p>
              <p className="text-sm text-muted-foreground">Connect your wallet to see your Doma Protocol domains</p>
            </div>
          ) : (
            domains.map((domain) => {
              const hasLandingPage = landingPageConfigs.has(domain.id);
              const domainAnalytics = analytics.get(domain.id);
              const domainListings = listings.get(domain.id) || [];
              const activeListing = domainListings.find(l => l.status === 'active');
              
              return (
                <div key={domain.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <h3 className="text-lg font-medium">{domain.fullName}</h3>
                        {hasLandingPage ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Landing Page Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            No Landing Page
                          </span>
                        )}
                        {activeListing && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Listed: {activeListing.price} {activeListing.currency}
                          </span>
                        )}
                        {domain.isTokenized && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Tokenized
                          </span>
                        )}
                      </div>
                      
                      {hasLandingPage && domainAnalytics && (
                        <div className="mt-4 grid grid-cols-4 gap-6 text-sm">
                          <div>
                            <p className="text-muted-foreground">Views</p>
                            <p className="font-medium">{domainAnalytics.totalViews.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Offers</p>
                            <p className="font-medium">{domainAnalytics.offerCount}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Avg. Offer</p>
                            <p className="font-medium">{domainAnalytics.averageOfferAmount}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Conversion</p>
                            <p className="font-medium">{domainAnalytics.conversionRate}%</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-2 text-xs text-muted-foreground">
                        <span>Chain: {domain.chain}</span>
                        <span className="mx-2">•</span>
                        <span>Expires: {new Date(domain.expirationDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-6">
                      {hasLandingPage ? (
                        <>
                          <Link href={`/preview/${encodeURIComponent(domain.fullName)}`}>
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
              );
            })
          )}
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