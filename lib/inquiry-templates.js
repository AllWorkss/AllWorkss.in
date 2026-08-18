export const generateInquiryMessages = (serviceKey, subId, serviceTitle) => {
  const adminEmail = "theallworkss@gmail.com";
  const whatsappNumber = "919967376681"; // Target WhatsApp Number for Founder Yasar Intakhab Khan

  const templates = {
    "gmb-3pack-ranking-thane": {
      subject: "Inquiry: Google Business Profile 3-Pack Map Optimization (Thane/Mumbai)",
      body: `Hello Yasar Sir,\n\nI am reaching out via Allworkss.in regarding Google Business Profile (GBP) & Local 3-Pack Map Optimization.\n\n• Target Business Name: \n• Business Category / Location: Thane / Mumbai\n• Current GMB Issue: Ranking drop / Review acceleration / New verification\n\nPlease share your audit timeline and onboarding process.`
    },
    "fastapi-python-web-development": {
      subject: "Inquiry: High-Speed FastAPI & Full-Stack Web Development",
      body: `Hello Yasar Sir,\n\nI visited Allworkss.in and want to discuss Custom Full-Stack Web Architecture.\n\n• Project Scope: Next.js + FastAPI / Enterprise Portal / Headless WordPress\n• Key Requirements: Sub-1s load time, zero CLS, Razorpay integration\n• Expected Delivery Timeline: \n\nPlease let me know when we can schedule a quick discovery call.`
    },
    "conversions-api-capi-server-side": {
      subject: "Inquiry: Meta Ads CAPI & High-ROAS Performance Marketing",
      body: `Hello Yasar Sir,\n\nI am looking for Meta Ads & Server-Side Conversions API (CAPI) setup.\n\n• Business Type: B2B / Lead Gen / D2C eCommerce\n• Monthly Ad Budget Range: \n• Core Requirement: 100% Signal deduplication, TOF/BOF funnels\n\nLooking forward to your strategy review.`
    },
    "gst-mca-anomaly-audit-report": {
      subject: "Inquiry: ABIS Module 1 — ₹99 GST & MCA Anomaly Audit Report",
      body: `Hello Yasar Sir,\n\nI want to run an instant Business Auditor Report on Allworkss.space.\n\n• Company Name: \n• GSTIN: \n• Purpose: Compliance Verification / Boardroom Deck / Partner 50-50 Model\n\nPlease confirm availability for a live demo.`
    },
    "altman-zscore-financial-growth-deck": {
      subject: "Inquiry: ABIS Module 5 — ₹499 Financial Growth & Bank Loan Deck",
      body: `Hello Yasar Sir,\n\nI am inquiring about Module 5: Financial Growth Engine & Loan Pitch Deck.\n\n• Target Facility: Working Capital / Term Loan / Investor Pitch\n• Requirement: 8-Page PDF Report + 12-Slide Dark PPTX Deck\n• Financial Data Format: Tally XML / Excel Balance Sheet\n\nPlease share the report generation workflow.`
    }
  };

  const selected = templates[subId] || {
    subject: `Inquiry: ${serviceTitle} Consultation — Allworkss`,
    body: `Hello Yasar Sir,\n\nI am contacting you from Allworkss regarding ${serviceTitle}.\n\n• Company / Brand Name: \n• Primary Challenge / Goal: \n• Preferred Contact: WhatsApp / Phone / Email\n\nPlease share details on how we can collaborate.`
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(selected.body)}`;
  const mailtoUrl = `mailto:${adminEmail}?subject=${encodeURIComponent(selected.subject)}&body=${encodeURIComponent(selected.body)}`;

  return { whatsappUrl, mailtoUrl, ...selected };
};
