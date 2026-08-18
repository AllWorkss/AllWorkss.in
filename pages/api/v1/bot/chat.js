export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message string required' });
  }

  const apiKey = process.env.GEMINI_API_KEY || '';

  const systemKnowledge = `You are the official AI Business Assistant for AllWorkss Business Intelligence Suite (ABIS) & Consultancy.
Founder & CTO: Yasar Intakhab Khan.
Legal Entity: YARSA ALLWORKSS (OPC) PRIVATE LIMITED (GSTIN: 277AABCY875P1Z9).

Platform Capabilities:
1. Module 1: Business Auditor (GST/MCA validation, Anomaly detection, 8-page PDF & 12-slide PPTX audit reports).
2. Module 2: Supply Chain (Logistics route optimization via Shiprocket/Porter, vendor risk).
3. Module 3: Smart Inventory (ARIMA/Prophet demand forecasting, EOQ reordering, dead stock).
4. Module 4: Customer Intelligence (RFM segmentation, churn prediction, LTV forecast).
5. Module 5: Financial Growth Engine (Altman Z-Score, 25 ratios, bank-loan readiness).

Agency & Tech Services: Full-Stack Web, Cloud Infrastructure (GCP Cloud Run / AWS), Meta Ads & CAPI, Advanced Technical SEO, Google Business Profile #1 Map Ranking, and High-Converting Business Funnels.

Rules:
- Be professional, concise, encouraging, and sharp.
- Guide users to run free audits or book a consultancy strategy call.
- If user provides phone/email, confirm that a senior consultant will reach out.`;

  if (!apiKey) {
    // Intelligent fallback responses based on user query keywords
    const lower = message.toLowerCase();
    let reply = "Hello! I am the AllWorkss AI Assistant. How can I help you audit your business, optimize marketing, deploy cloud infrastructure, or launch ad campaigns today?";

    if (lower.includes('audit') || lower.includes('gst') || lower.includes('mca') || lower.includes('report')) {
      reply = "Our ABIS Business Auditor checks GST/MCA compliance, detects financial anomalies, and generates instant 8-page PDF and 12-slide PPTX audit reports! You can test our interactive sandboxes above or click 'Schedule Consult' for a tailored report.";
    } else if (lower.includes('marketing') || lower.includes('seo') || lower.includes('ads') || lower.includes('meta')) {
      reply = "We offer 360° Digital Marketing: Meta Ads with CAPI server-side tracking (100% pixel deduplication), Lookalike Audiences, and Technical SEO targeting Google Local Map-Pack #1 rankings. Would you like to schedule an ad campaign audit?";
    } else if (lower.includes('cloud') || lower.includes('devops') || lower.includes('aws') || lower.includes('gcp')) {
      reply = "We architect zero-trust serverless containers on Google Cloud Run & AWS Docker with sub-second autoscaling and 99.99% uptime. Click 'Deploy Cloud Architecture' or drop your number to speak with CTO Yasar Intakhab Khan.";
    } else if (lower.includes('cost') || lower.includes('pricing') || lower.includes('quote') || lower.includes('fee')) {
      reply = "Our packages scale from basic growth audits to enterprise custom software ($1,000 - $15,000+). Use our live ROI & Scope Calculator widget on the home page or connect directly via WhatsApp at +91 99673 76681!";
    } else if (lower.includes('app') || lower.includes('mobile') || lower.includes('react') || lower.includes('flutter')) {
      reply = "We build native iOS (Swift) & Android (Kotlin) apps as well as cross-platform React Native & Flutter solutions with offline SQLite caching and payment gateway integration!";
    }

    return res.status(200).json({ reply });
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemKnowledge}\n\nUser Question: ${message}` }]
        }
      ]
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Gemini API HTTP error ${response.status}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you for reaching out! You can run our instant business audit from the dashboard or drop your WhatsApp number to connect directly.";

    return res.status(200).json({ reply: replyText });
  } catch (err) {
    console.error("Gemini API Error:", err);
    return res.status(200).json({
      reply: "Thank you for reaching out! You can run our instant business audit from the dashboard or drop your WhatsApp number (+91 99673 76681) to connect directly."
    });
  }
}
