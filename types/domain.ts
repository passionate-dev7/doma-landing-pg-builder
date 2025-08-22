export interface Domain {
  id: string
  name: string // e.g., "premium"
  tld: string // e.g., ".eth"
  fullName: string // e.g., "premium.eth"
  tokenId: string
  owner: string // wallet address
  registrar: string
  registrationDate: Date
  expirationDate: Date
  isTokenized: boolean
  chain: string // ethereum, polygon, etc.
  contractAddress: string
}

export interface DomainListing {
  id: string
  domainId: string
  domain?: Domain
  price: string // in wei
  currency: string // ETH, USDC, etc.
  status: 'active' | 'sold' | 'cancelled' | 'expired'
  sellerId: string
  buyNowEnabled: boolean
  acceptingOffers: boolean
  minimumOffer?: string
  createdAt: Date
  updatedAt: Date
  expiresAt?: Date
}

export interface DomainOffer {
  id: string
  domainId: string
  listingId: string
  offererAddress: string
  offerAmount: string
  currency: string
  status: 'pending' | 'accepted' | 'rejected' | 'expired' | 'cancelled'
  message?: string
  createdAt: Date
  expiresAt: Date
}

export interface DomainAnalytics {
  domainId: string
  totalViews: number
  uniqueVisitors: number
  offerCount: number
  averageOfferAmount: string
  conversionRate: number
  topReferrers: Array<{
    source: string
    count: number
  }>
  visitorCountries: Array<{
    country: string
    count: number
  }>
  dailyStats: Array<{
    date: Date
    views: number
    uniqueVisitors: number
    offers: number
  }>
}

export interface LandingPageTemplate {
  id: string
  name: string
  description: string
  thumbnail: string
  category: 'minimal' | 'data-rich' | 'premium' | 'auction'
  features: string[]
  isPremium: boolean
  price?: number
}

export interface LandingPageConfig {
  id: string
  domainId: string
  templateId: string
  customCSS?: string
  customHTML?: string
  theme: {
    primaryColor: string
    backgroundColor: string
    textColor: string
    accentColor: string
  }
  content: {
    headline?: string
    description?: string
    features?: string[]
    showAnalytics: boolean
    showSimilarSales: boolean
    showOffers: boolean
  }
  seo: {
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string[]
    ogImage?: string
  }
  contact: {
    enableContactForm: boolean
    enableDirectMessaging: boolean
    requireEmailCapture: boolean
  }
}