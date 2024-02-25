const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app:any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Change this to match your backend URL
      changeOrigin: true,
    })
  );
};