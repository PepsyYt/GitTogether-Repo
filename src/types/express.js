const express = require('express');
const axios = require('axios');
const app = express();

app.post('/api/linkedin-auth', async (req, res) => {
  const { code } = req.body;

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:3000/linkedin', // Update with your redirect URI
        client_id: '778kw0srqvkkyk',
        client_secret: 'WPL_AP1.G2tWpXnqvc15vUSm.dr6VxQ==',
      }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const accessToken = tokenResponse.data.access_token;

    // Fetch profile data
    const profileResponse = await axios.get('https://api.linkedin.com/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const emailResponse = await axios.get(
      'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    res.json({
      firstName: profileResponse.data.localizedFirstName,
      lastName: profileResponse.data.localizedLastName,
      emailAddress: emailResponse.data.elements[0]['handle~'].emailAddress,
      location: profileResponse.data.locationName,
      positions: [], // Fetch positions from another LinkedIn endpoint if needed
      skills: [], // Fetch skills from another LinkedIn endpoint if needed
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching LinkedIn data');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
