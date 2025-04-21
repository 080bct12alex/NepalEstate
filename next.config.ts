module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nepalestateapi.onrender.com/api/:path*',
      },
    ];
  },
};
