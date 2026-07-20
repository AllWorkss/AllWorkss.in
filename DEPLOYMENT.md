# Deployment Guide - AllWorkss Consultancy Website

This guide will help you deploy the AllWorkss Consultancy website to Railway.app and connect it to your custom domain.

## Prerequisites

- GitHub account with the repository pushed
- Railway account (create at https://railway.app)
- A custom domain (www.allworkss.in)
- Access to domain registrar to update DNS records

## Step 1: Deploy on Railway

### 1.1 Connect GitHub Repository

1. Go to [Railway.app](https://railway.app)
2. Click on **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Click **"Configure GitHub App"** and authorize Railway to access your repositories
5. Select the **allworkss/allworkss.in** repository
6. Railway will automatically detect it's a Node.js/Next.js project
7. Click **Deploy**

### 1.2 Wait for Initial Build

Railway will automatically build and deploy your application. This may take 2-5 minutes. You'll see:
- Build status: "Building..."
- Deploy status: "Deploying..."
- Finally: "Success" ✓

## Step 2: Configure Environment Variables

### 2.1 Add Environment Variables in Railway Dashboard

1. In your Railway project, click on **"Environment Variables"** or **"Variables"**
2. Add the following variables:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=919004246792
NEXT_PUBLIC_COMPANY_PHONE=9004246792
NEXT_PUBLIC_COMPANY_EMAIL=theallworkss@gmail.com
NEXT_PUBLIC_COMPANY_ADDRESS=Shop 19, Noori Bella Vista, Mumbra, Mumbai, Maharashtra 400612
NODE_ENV=production
```

For Google Calendar integration (optional, add later):
```
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
GOOGLE_CALENDAR_API_KEY=your-api-key
GOOGLE_CALENDAR_AUTH_TOKEN=your-auth-token
```

3. Click **"Save"** after adding all variables
4. Railway will automatically redeploy with the new variables

## Step 3: Configure Custom Domain

### 3.1 Add Domain in Railway

1. In your Railway project dashboard, find **"Settings"** or **"Domains"**
2. Click **"Add Domain"**
3. Enter: `www.allworkss.in`
4. Railway will generate a CNAME record for you (something like `xxx.railway.app`)

### 3.2 Update DNS Records

Go to your domain registrar (GoDaddy, Namecheap, etc.):

1. Find **"DNS Management"** or **"DNS Settings"**
2. Look for the **"CNAME Records"** section
3. Add/Update the CNAME record:
   - **Name/Host**: `www`
   - **Value**: (copy from Railway, e.g., `xxx.railway.app`)
   - **TTL**: 3600 (or default)

4. For root domain without www:
   - If supported, add an A record pointing to Railway's IP
   - Or create an ALIAS/ANAME record pointing to the CNAME above

### 3.3 Wait for DNS Propagation

DNS changes can take 15 minutes to 48 hours to fully propagate. You can check:
- [DNS Checker](https://dnschecker.org)
- [MXToolbox](https://mxtoolbox.com)

## Step 4: Enable HTTPS

Railway automatically provides HTTPS for all domains. If you see a warning:
1. Wait for DNS propagation to complete
2. Refresh the Railway dashboard
3. The SSL certificate will be issued automatically

## Step 5: Set Up Auto-Deploy

Railway will automatically deploy whenever you push to the main branch:

1. Go to **"Settings"** in your Railway project
2. Find **"Deploy Triggers"** or **"Auto Deploy"**
3. Ensure it's **enabled** for the main branch
4. Now every push to main will trigger a new deployment

## Testing Deployment

1. Visit `https://www.allworkss.in` in your browser
2. Test the following:
   - Homepage loads correctly with all animations
   - Navigation works
   - Services section displays all 7 services
   - Booking page loads
   - WhatsApp buttons open correct chat
   - Contact information is displayed
   - Footer has all links

## Database Setup (Optional - For Future)

When you need to add a database:

1. In Railway, click **"Create"** → **"Database"**
2. Select **PostgreSQL**
3. Note the database credentials
4. Add to environment variables:
```
DATABASE_URL=your-database-url
```

## Monitoring & Logs

### View Logs

1. In Railway project dashboard
2. Click on the deployment/service
3. View **"Logs"** tab to see real-time logs
4. Useful for debugging issues

### Monitor Performance

1. Check **"Metrics"** tab for:
   - CPU usage
   - Memory usage
   - Network activity
   - Deployment status

## Troubleshooting

### Site Not Loading After Deployment

1. Check Railway logs for errors
2. Verify environment variables are set
3. Try hard refresh (Ctrl+Shift+R)
4. Check if build was successful

### Domain Not Working

1. Verify DNS records are correct
2. Wait for DNS propagation (can take up to 48 hours)
3. Use DNS checker tool to verify
4. Check Railway domain settings

### WhatsApp Integration Not Working

1. Verify phone number in environment variables
2. Check if number format is correct: 919004246792 (no +, no dashes)
3. Test with a different phone

### Slow Page Load

1. Check Railway metrics for resource usage
2. Optimize images
3. Consider upgrading Railway plan
4. Check Network tab in browser for slow requests

## Managing Secrets

For sensitive data:

1. Use Railway's **"Secrets"** feature (not shown in logs)
2. Never commit `.env.local` to GitHub
3. All environment variables should be added in Railway dashboard
4. Use different values for production and development

## Rollback Deployment

If something breaks:

1. In Railway, go to **"Deployments"**
2. Find the previous working version
3. Click the three dots (⋯)
4. Select **"Rollback"**
5. Confirm

## Performance Tips

1. **Caching**: Railway caches dependencies, so builds are faster
2. **Build Size**: Keep node_modules small by removing unused packages
3. **Static Generation**: Use Next.js ISR for better performance
4. **Image Optimization**: Compress images before upload

## Monthly Costs

Railway's free tier includes:
- 5GB storage
- 100GB bandwidth
- $5/month credit

If you exceed, charges are ~$0.50 per hour of compute.

## Next Steps

1. ✓ Deploy to Railway
2. ✓ Add custom domain
3. ⏳ Set up Google Calendar API (for booking notifications)
4. ⏳ Add email notifications
5. ⏳ Set up database for booking history
6. ⏳ Add blog section
7. ⏳ Set up analytics

## Support

For issues:
- **Railway Support**: https://railway.app/support
- **Next.js Docs**: https://nextjs.org/docs
- **Our Email**: theallworkss@gmail.com
- **Phone**: +91 9004246792

---

**Deployment successful? Great! Your website is live at https://www.allworkss.in**

For questions, contact the AllWorkss team!
