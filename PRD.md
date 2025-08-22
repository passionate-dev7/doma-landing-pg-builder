# Doma Landing Builder - Product Requirements Document

## Executive Summary

Doma Landing Builder is a specialized platform for creating high-converting landing pages specifically for tokenized domain sales on the Doma Protocol. Unlike generic landing page builders (Wix, Squarespace), this platform addresses the unique needs of domain investors by providing blockchain integration, transparent pricing, and direct peer-to-peer sales without middlemen.

## Market Problem

Current domain landing page services have significant limitations:
- **High Commissions**: Afternic and Sedo charge 10-20% commission
- **Limited Customization**: Forced to use their templates
- **Nameserver Lock-in**: Must change nameservers to their service
- **Lack of Transparency**: No on-chain history or verification
- **Manual Processes**: Still involve brokers and human middlemen
- **No DeFi Features**: Can't fractionalize or create auctions on-chain

## Target Audience

1. **Primary**: Domain investors with tokenized domains on Doma Protocol
2. **Secondary**: Traditional domain investors looking to enter Web3
3. **Tertiary**: DeFi users interested in domain-backed assets

## Core Features

### 1. Domain-Specific Landing Pages
- **Auto-populated domain data** from Doma Protocol
  - Registration/expiration dates
  - Ownership history
  - Previous sale prices
  - On-chain verification
- **Traffic analytics** with visitor tracking
- **Domain valuation** based on AI and market data
- **Similar sales comparison** from blockchain data

### 2. Direct Sales Integration
- **Doma Orderbook integration** for peer-to-peer sales
- **Custom commission structure** (user sets their own fees)
- **Buy-it-now pricing** with instant settlement
- **Make offer system** with on-chain negotiation
- **Multi-currency support** (ETH, USDC, etc.)

### 3. Landing Page Builder
- **Premium templates** specifically for domain sales
  - Minimalist (focus on domain)
  - Data-rich (show all metrics)
  - Brand-focused (for premium domains)
  - Auction-style (time-limited sales)
- **Drag-and-drop customization**
- **Custom CSS/HTML support** for advanced users
- **Mobile-responsive** by default

### 4. Analytics Dashboard
- **Real-time visitor tracking**
  - Geographic location
  - Referral sources
  - Time on page
  - Conversion funnel
- **Offer analytics**
  - Average offer amount
  - Conversion rates
  - Buyer behavior patterns
- **Revenue tracking**
  - Sales history
  - Commission earned
  - ROI calculations

### 5. SEO & Marketing Tools
- **Auto-generated meta tags** based on domain
- **Schema markup** for domain sales
- **Social media preview** customization
- **Email capture** for interested buyers
- **Retargeting pixel** support

### 6. DNS Configuration Wizard
- **Step-by-step DNS setup** for each registrar
- **Auto-detection** of current registrar
- **Smart contract DNS** for supported registrars
- **Fallback instructions** for manual setup

### 7. Advanced Features
- **A/B testing** for landing page variants
- **Multi-language support** with auto-translation
- **Domain portfolio pages** (showcase multiple domains)
- **Bulk operations** for large portfolios
- **API access** for programmatic control

### 8. DeFi Integration (Unique to Doma)
- **Fractionalization options** for high-value domains
- **Auction creation** with custom parameters
- **Lending/borrowing** against domains
- **Revenue sharing** models

## Technical Architecture

### Frontend
- **Next.js 13+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** for component library
- **Wagmi/Viem** for Web3 integration

### Smart Contracts
- **Landing Page Registry** - Maps domains to landing pages
- **Commission Splitter** - Handles revenue sharing
- **DNS Verifier** - Verifies domain ownership

### Backend Services
- **Analytics Service** - Tracks visitor data
- **Valuation API** - AI-powered domain appraisal
- **SEO Service** - Generates optimized content
- **DNS Checker** - Monitors domain pointing

### Integration Points
- **Doma Protocol** - Domain data and ownership
- **Doma Orderbook** - Sales and offers
- **IPFS** - Decentralized page hosting option
- **The Graph** - Blockchain data indexing

## Revenue Model

1. **Freemium Tiers**
   - **Free**: 1 domain, basic template
   - **Pro** ($19/mo): 10 domains, all templates, analytics
   - **Business** ($49/mo): Unlimited domains, A/B testing, API
   - **Enterprise**: Custom pricing, white-label option

2. **Transaction Fees**
   - 1-2% on successful sales (vs 10-20% competitors)
   - User can add their own commission on top

3. **Premium Features**
   - Advanced templates ($49 one-time)
   - AI valuation reports ($9.99/domain)
   - Priority support

## Success Metrics

- **Adoption**: 1,000+ domains using landing pages in 3 months
- **Sales Volume**: $1M+ in domain sales facilitated
- **User Retention**: 80%+ monthly retention
- **Revenue**: $50K MRR within 6 months

## Competitive Advantages

1. **No nameserver changes required** - Just point A record
2. **On-chain transparency** - All data verifiable
3. **Lower fees** - 80-90% cheaper than competitors
4. **DeFi features** - Unique to blockchain domains
5. **Custom branding** - White-label options
6. **Developer-friendly** - API and webhooks

## MVP Features (Launch)

1. Basic landing page templates (3)
2. Doma Protocol integration
3. Simple analytics dashboard
4. Offer management system
5. DNS setup wizard
6. Mobile responsive design

## Post-MVP Roadmap

- **Month 2**: A/B testing, advanced templates
- **Month 3**: AI valuation, portfolio pages
- **Month 4**: Multi-language, white-label
- **Month 6**: DeFi features, lending/borrowing

## Risk Mitigation

- **Technical**: Use established Web3 libraries
- **Regulatory**: Focus on decentralized sales
- **Market**: Partner with domain communities
- **Competition**: Move fast, focus on Web3 features