// api/getM3U8.js
module.exports = async (req, res) => {
  const channelId = req.query.id;

  // Your logic to dynamically set the cookie based on the channel ID
  const dynamicCookie = getDynamicCookie(channelId);

  // M3U8 data
  const m3u8Data = {
    // ... (your existing M3U8 data structure)
    channels: [
      {
        // ... (your existing channel information)
        headers: {
          Host: 'live-cdn.tsports.com',
          'User-agent': 'https://github.com/byte-capsule (Linux;Android 14)',
          Cookie: `Edge-Cache-Cookie=${dynamicCookie}`,
        },
      },
      // ... (additional channels if needed)
    ],
  };

  // Convert object to JSON
  const jsonOutput = JSON.stringify(m3u8Data, null, 2);

  // Set response headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as needed

  // Send JSON response
  res.end(jsonOutput);

  // Replace this function with your logic to dynamically set the cookie
  function getDynamicCookie(channelId) {
    // Your logic to dynamically set the cookie based on the channel ID
    // For example, fetching from a database or an API
    return 'Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9saXZlLWNkbi50c3BvcnRzLmNvbS8:Expires=1708504077:KeyName=tsports-ed25519-01:Signature=-na1Ohj9p5fsgo_6DeLuXKTHwBsKNljwqhIfGx5TvRri7xqxPiIP4QVFo-Dbdi6u2ZzKjrnR6w0GX25kLq23CQ';
  }
};
