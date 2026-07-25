export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, service, date, time, message } = req.body;

  // Validation
  if (!name || !email || !phone || !service || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const bookingData = {
      name,
      email,
      phone,
      company,
      service,
      date,
      time,
      message,
      createdAt: new Date().toISOString(),
    };

    console.log('Booking submitted successfully:', bookingData);

    return res.status(200).json({
      success: true,
      message: 'Booking submitted successfully',
      booking: bookingData,
    });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ error: 'Failed to submit booking' });
  }
}
