# Technical Architecture

## Overview

This document outlines the technical architecture for the Doma Landing Builder platform, designed to handle high-traffic domain landing pages with real-time analytics and blockchain integration.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Frontend (Next.js)                        │
├─────────────────────────────────────────────────────────────────┤
│                          API Layer                               │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐     │
│  │   Next.js   │  │   Webhook    │  │    WebSocket       │     │
│  │   API Routes│  │   Handlers   │  │    Server          │     │
│  └─────────────┘  └──────────────┘  └────────────────────┘     │
├─────────────────────────────────────────────────────────────────┤
│                       Service Layer                              │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐     │
│  │   Domain    │  │  Analytics   │  │     Offer          │     │
│  │   Service   │  │   Service    │  │   Management       │     │
│  └─────────────┘  └──────────────┘  └────────────────────┘     │
├─────────────────────────────────────────────────────────────────┤
│                      Data Layer                                  │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐     │
│  │  Supabase   │  │    Redis     │  │   The Graph        │     │
│  │  PostgreSQL │  │    Cache     │  │   (Doma Subgraph)  │     │
│  └─────────────┘  └──────────────┘  └────────────────────┘     │
├─────────────────────────────────────────────────────────────────┤
│                    Blockchain Layer                              │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐     │
│  │    Doma     │  │    Doma      │  │   Smart Contract   │     │
│  │  Protocol   │  │  Orderbook   │  │   Interactions     │     │
│  └─────────────┘  └──────────────┘  └────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Frontend Application

**Technology Stack:**
- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- Wagmi/Viem for Web3

**Key Features:**
- Server-side rendering for SEO
- Dynamic routing for domain pages
- Real-time updates via WebSocket
- Progressive Web App support

### 2. Landing Page Renderer

**Dynamic Domain Resolution:**
```typescript
// pages/[domain]/index.tsx
export async function generateMetadata({ params }: Props) {
  const domain = await fetchDomainData(params.domain);
  return {
    title: `${domain.name} is for sale`,
    description: domain.description,
    openGraph: {
      images: [generateOGImage(domain)]
    }
  };
}
```

**Template Engine:**
- React Server Components
- Dynamic template loading
- Custom CSS injection
- A/B testing variants

### 3. Analytics Engine

**Data Collection:**
```typescript
interface VisitorData {
  id: string;
  domain: string;
  ip: string; // Hashed for privacy
  userAgent: string;
  referer: string;
  country: string;
  city: string;
  timestamp: Date;
  duration: number;
  actions: VisitorAction[];
}
```

**Real-time Processing:**
- EdgeDB for geo-location
- Redis for session tracking
- PostgreSQL for persistence
- WebSocket for live updates

### 4. Offer Management System

**Smart Contract Integration:**
```typescript
// Offer submission flow
async function submitOffer(domainId: string, offer: OfferData) {
  // 1. Validate offer parameters
  const validation = await validateOffer(offer);
  
  // 2. Submit to Doma Orderbook
  const tx = await domaOrderbook.makeOffer({
    domainId,
    amount: parseEther(offer.amount),
    expiry: offer.expiry
  });
  
  // 3. Store in database
  await storeOffer({
    ...offer,
    txHash: tx.hash,
    status: 'pending'
  });
  
  // 4. Notify domain owner
  await notifyOwner(domainId, offer);
}
```

### 5. DNS Configuration Service

**Multi-Registrar Support:**
```typescript
interface DNSConfig {
  registrar: 'namecheap' | 'godaddy' | 'cloudflare' | 'custom';
  recordType: 'A' | 'CNAME';
  value: string;
  ttl: number;
}

// Auto-detect current DNS
async function detectDNS(domain: string) {
  const records = await dns.resolveAny(domain);
  return analyzeDNSProvider(records);
}
```

## Database Schema

### Core Tables

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  wallet_address VARCHAR(42) UNIQUE NOT NULL,
  email VARCHAR(255),
  tier ENUM('free', 'pro', 'business', 'enterprise'),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Domains table
CREATE TABLE domains (
  id UUID PRIMARY KEY,
  token_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  tld VARCHAR(10) NOT NULL,
  owner_id UUID REFERENCES users(id),
  chain VARCHAR(20) NOT NULL,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Landing pages table
CREATE TABLE landing_pages (
  id UUID PRIMARY KEY,
  domain_id UUID REFERENCES domains(id),
  template_id VARCHAR(50),
  custom_css TEXT,
  config JSONB,
  status ENUM('draft', 'active', 'inactive'),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics events table
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY,
  landing_page_id UUID REFERENCES landing_pages(id),
  visitor_id VARCHAR(255),
  event_type VARCHAR(50),
  event_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Offers table
CREATE TABLE offers (
  id UUID PRIMARY KEY,
  domain_id UUID REFERENCES domains(id),
  offerer_address VARCHAR(42),
  amount DECIMAL(20, 6),
  currency VARCHAR(10),
  status ENUM('pending', 'accepted', 'rejected', 'expired'),
  tx_hash VARCHAR(66),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## API Design

### RESTful Endpoints

```typescript
// Domain management
GET    /api/domains                 // List user's domains
POST   /api/domains                 // Add new domain
GET    /api/domains/:id            // Get domain details
PUT    /api/domains/:id            // Update domain
DELETE /api/domains/:id            // Remove domain

// Landing pages
GET    /api/landing-pages          // List landing pages
POST   /api/landing-pages          // Create landing page
GET    /api/landing-pages/:id      // Get landing page
PUT    /api/landing-pages/:id      // Update landing page
DELETE /api/landing-pages/:id      // Delete landing page

// Analytics
GET    /api/analytics/:domainId    // Get analytics data
POST   /api/analytics/event        // Track event

// Offers
GET    /api/offers/:domainId       // List offers
POST   /api/offers                 // Submit offer
PUT    /api/offers/:id             // Update offer status
```

### WebSocket Events

```typescript
// Real-time events
ws.on('visitor:new', (data) => {
  // New visitor on landing page
});

ws.on('offer:received', (data) => {
  // New offer received
});

ws.on('analytics:update', (data) => {
  // Analytics data update
});
```

## Security Considerations

### 1. Authentication
- Wallet-based authentication (Sign-In with Ethereum)
- JWT tokens for session management
- Role-based access control

### 2. Data Protection
- IP address hashing
- GDPR compliance
- Data encryption at rest
- SSL/TLS for all connections

### 3. Smart Contract Security
- Audit all contract interactions
- Use established libraries (OpenZeppelin)
- Implement circuit breakers
- Multi-sig for admin functions

### 4. Rate Limiting
```typescript
const rateLimiter = {
  analytics: '1000/hour per IP',
  offers: '10/hour per wallet',
  api: '100/minute per user'
};
```

## Performance Optimization

### 1. Caching Strategy
- **CDN**: Static assets and templates
- **Redis**: Session data and hot analytics
- **Database**: Query result caching
- **Blockchain**: The Graph for indexed data

### 2. Edge Computing
- **Cloudflare Workers**: Geo-location
- **Vercel Edge**: Dynamic rendering
- **Analytics**: Edge collection

### 3. Database Optimization
- Indexed columns for fast queries
- Partitioned tables for analytics
- Read replicas for scaling
- Connection pooling

## Monitoring & Observability

### 1. Application Monitoring
- Sentry for error tracking
- Vercel Analytics for performance
- Custom dashboards for business metrics

### 2. Infrastructure Monitoring
- Uptime monitoring
- Database performance
- API response times
- Blockchain RPC health

### 3. Alerting
- Downtime alerts
- High-value offer notifications
- Performance degradation
- Security incidents

## Deployment Architecture

### Production Environment
```yaml
services:
  frontend:
    provider: Vercel
    regions: [global]
    
  api:
    provider: Vercel
    regions: [us-east-1, eu-west-1]
    
  database:
    provider: Supabase
    plan: Pro
    
  cache:
    provider: Upstash Redis
    regions: [global]
    
  blockchain:
    providers:
      - Alchemy (primary)
      - Infura (fallback)
```

## Scalability Plan

### Phase 1: MVP (0-1K domains)
- Single region deployment
- Basic caching
- Shared database

### Phase 2: Growth (1K-10K domains)
- Multi-region deployment
- Enhanced caching
- Read replicas

### Phase 3: Scale (10K+ domains)
- Global edge network
- Dedicated infrastructure
- Custom blockchain nodes

## Cost Estimation

### Infrastructure Costs (Monthly)
- **Hosting (Vercel)**: $100-500
- **Database (Supabase)**: $100-300
- **Redis (Upstash)**: $50-200
- **Blockchain RPC**: $100-500
- **CDN/Storage**: $50-200
- **Total**: $400-1,700/month

### Variable Costs
- $0.10 per 1,000 analytics events
- $0.01 per offer submitted
- $0.50 per domain verified

## Development Timeline

### Week 1-2: Foundation
- Project setup
- Basic landing page rendering
- Domain data integration

### Week 3-4: Core Features
- Analytics implementation
- Offer management
- Template system

### Week 5-6: Advanced Features
- A/B testing
- Advanced analytics
- API development

### Week 7-8: Polish & Launch
- Performance optimization
- Security audit
- Documentation
- Marketing site