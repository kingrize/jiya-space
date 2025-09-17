// File: netlify/functions/get-spotify-now-playing.js
// (FILE BARU) Kode backend untuk berkomunikasi dengan Spotify secara aman.

const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

// Endpoint Spotify
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// Fungsi utama
exports.handler = async (event, context) => {
  // Dapatkan access token baru menggunakan refresh token
  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    return response.json();
  };
  
  // Jika tidak ada refresh token, jangan lanjutkan
  if (!refresh_token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Refresh token not found.' }),
    };
  }

  const { access_token } = await getAccessToken();

  // Dapatkan lagu yang sedang diputar
  const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  // Jika tidak ada lagu yang diputar
  if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
    return {
      statusCode: 200,
      body: JSON.stringify({ isPlaying: false }),
    };
  }

  const song = await nowPlayingResponse.json();
  
  // Format data yang akan kita kirim ke front-end
  const data = {
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((_artist) => _artist.name).join(', '),
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

