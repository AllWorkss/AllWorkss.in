# AllWorkss Consultancy Website

A modern, professional website for AllWorkss Consultancy - SAP Business Consulting and Digital Solutions.

## Features

✨ **Modern Design**
- Beautiful gradient color scheme with animations
- Responsive design (mobile, tablet, desktop)
- Smooth transitions and floating effects
- Professional layout with excellent UX

🎯 **Core Features**
- Homepage with hero section and service showcase
- Consultancy booking system with calendar integration
- WhatsApp API integration for each service
- SEO optimized (meta tags, sitemap, robots.txt)
- Contact section with company information
- Services showcase with detailed descriptions

📱 **Services**
- SAP Consulting
- Web & Software Development
- Business Consulting
- Cloud Management (AWS, Google Cloud)
- Data & Analytics
- Inventory Management
- Marketing & Branding

## Tech Stack

- **Frontend**: Next.js, React, CSS Modules
- **Backend**: Node.js with Next.js API routes
- **Animations**: Framer Motion, CSS Animations
- **Deployment**: Railway.app

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/allworkss/allworkss.in.git
cd allworkss.in
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.local.example .env.local
```

Update `.env.local` with your settings:
- WhatsApp number: `NEXT_PUBLIC_WHATSAPP_NUMBER`
- Company details
- Google Calendar API credentials (for booking integration)

4. Run development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

## Deployment on Railway

### Step 1: Connect Repository
1. Go to [Railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Connect your GitHub account
5. Select the `allworkss/allworkss.in` repository

### Step 2: Configure Environment Variables
In Railway dashboard:
1. Go to Variables
2. Add the following:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919004246792
NEXT_PUBLIC_COMPANY_PHONE=9004246792
NEXT_PUBLIC_COMPANY_EMAIL=theallworkss@gmail.com
NEXT_PUBLIC_COMPANY_ADDRESS=Shop 19, Noori Bella Vista, Mumbra, Mumbai, Maharashtra 400612
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your-google-calendar-id@group.calendar.google.com
GOOGLE_CALENDAR_API_KEY=your-api-key
GOOGLE_CALENDAR_AUTH_TOKEN=your-auth-token
```

### Step 3: Configure Custom Domain
1. In Railway project settings, go to "Custom Domain"
2. Add your domain: `www.allworkss.in`
3. Update DNS records with provided CNAME

### Step 4: Deploy
Railway will automatically deploy on every push to main branch.

## Google Calendar Integration

To enable appointment booking with Google Calendar:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable "Google Calendar API"
4. Create OAuth 2.0 credentials
5. Add the credentials to `.env.local`
6. Set up webhook for booking notifications

## WhatsApp Integration

Each service has a pre-configured WhatsApp button that opens:
- WhatsApp chat with your business number
- Pre-filled message about the service
- Custom message for each service type

Phone: +91 9004246792

## SEO Optimization

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Sitemap.xml
- Robots.txt
- Mobile-friendly design
- Fast page load times

## Build & Production

Build for production:
```bash
npm run build
npm run start
```

## Project Structure

```
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js (Homepage)
│   └── booking.js (Booking page)
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── ServiceCard.js
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── Booking.module.css
│   └── ...
├── api/
│   └── booking.js
├── public/
│   ├── sitemap.xml
│   └── robots.txt
└── next.config.js
```

## Future Enhancements

- [ ] Blog section
- [ ] Client testimonials
- [ ] Case studies
- [ ] Team member profiles
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Database integration (PostgreSQL)
- [ ] Payment integration
- [ ] Live chat support
- [ ] Analytics integration

## Contact

- **Phone**: +91 9004246792
- **Email**: theallworkss@gmail.com
- **Address**: Shop 19, Noori Bella Vista, Mumbra, Mumbai, Maharashtra 400612

## License

© 2026 AllWorkss Consultancy. All rights reserved.

---

**Built with ❤️ for AllWorkss Consultancy**
