# Google Cloud Deployment Guide - AllWorkss Consultancy Website

This guide outlines the steps to deploy the AllWorkss Next.js website to Google Cloud Run and map your custom domain (`allworkss.in`).

## Prerequisites

- Google Cloud Platform (GCP) Account with Billing Enabled.
- Google Cloud CLI (`gcloud`) installed on your local machine, or access to Google Cloud Shell.
- Access to Hostinger DNS Management for `allworkss.in`.

## Step 1: Prepare Google Cloud Project

1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one (e.g., `allworkss-web`).
3. Enable the required APIs:
   - **Cloud Run API**
   - **Cloud Build API**
   - **Artifact Registry API**

## Step 2: Deploy to Google Cloud Run

We use a Dockerfile to containerize the Next.js application, which runs perfectly on Cloud Run.

### Option A: Automatic Deployment via GitHub (Recommended)

Since your code is already hosted on GitHub, this is the easiest method and sets up continuous deployment (just like Railway).

1. In the Google Cloud Console, search for **Cloud Run** and click on it.
2. Click **Create Service**.
3. Select **Continuously deploy new revisions from a source repository**.
4. Click **Set up with Cloud Build**.
5. Select **GitHub** as the provider and authenticate your GitHub account.
6. Select the repository `AllWorkss/AllWorkss.in`.
7. Click **Next**, leave the branch as `^main$`, and build type as **Dockerfile** (pointing to `/Dockerfile`).
8. Click **Save**.
9. Set **Authentication** to "Allow unauthenticated invocations".
10. Click **Create**. Google Cloud will automatically build and deploy your app every time you push to the `main` branch!

### Option B: Using Google Cloud CLI (Manual)

If you prefer deploying from your local machine:

1. Open your terminal in the project root directory.
2. Ensure you are authenticated and your project is selected:
   ```bash
   gcloud auth login
   gcloud config set project [YOUR_PROJECT_ID]
   ```
3. Submit the build and deploy to Cloud Run:
   ```bash
   gcloud run deploy allworkss-website --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --min-instances 0 \
     --max-instances 5
   ```
4. Follow the prompts. It will build the Docker container using Cloud Build and deploy it.
5. Once completed, you will receive a `.run.app` URL. Visit this URL to test the website.

## Step 3: Domain Mapping (allworkss.in)

Once the application is running on the `*.run.app` URL, you need to map your custom domain.

### 3.1 Setup in Google Cloud

1. In the Google Cloud Console, navigate to **Cloud Run**.
2. Click on **Manage Custom Domains**.
3. Click **Add Mapping**.
4. Select the service `allworkss-website`.
5. Verify the domain `allworkss.in` (this may require adding a TXT record in Hostinger if you haven't verified it in Google Search Console yet).
6. Specify the domain mapping for `allworkss.in` and optionally `www.allworkss.in`.
7. Google Cloud will provide you with **A** and **AAAA** (or **CNAME**) records.

### 3.2 Update DNS in Hostinger

1. Log into your **Hostinger** account.
2. Go to **Domains** -> **allworkss.in** -> **DNS / Nameservers**.
3. Delete any existing A or CNAME records pointing to the old hosting provider (Railway/Hostinger web).
4. Add the records provided by Google Cloud:
   - **Type:** A
   - **Name:** @ (or leave blank for root domain)
   - **Value:** [IP provided by Google Cloud]

   - For `www`:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** ghs.googlehosted.com

5. Save the records. DNS propagation usually takes 15 minutes to a few hours.

## Step 4: SSL/HTTPS

Google Cloud Run automatically provisions and manages a free Let's Encrypt SSL certificate for your custom domain. Once DNS propagation is complete, the SSL certificate will be generated, and your site will be accessible securely via HTTPS.

## Environment Variables

To add environment variables (like WhatsApp number or Calendar IDs):
1. Go to your Cloud Run service in the GCP Console.
2. Click **Edit & Deploy New Revision**.
3. Under the **Variables & Secrets** tab, add your environment variables.
4. Click **Deploy**.

## Troubleshooting

- **Site not secure / SSL error**: Wait 15-30 minutes after updating DNS for Google Cloud to generate the SSL certificate.
- **Next.js Images not loading**: Ensure `unoptimized: true` is set in `next.config.js` if you are not using a custom image loader, or rely on the standalone output as configured.
- **Build Fails**: Check the **Cloud Build** history in the GCP console for detailed build logs.
