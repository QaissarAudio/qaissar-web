/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'qaissar-web',
      cwd: __dirname,
      script: '.next/standalone/server.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
