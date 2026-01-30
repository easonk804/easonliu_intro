module.exports = {
  apps: [{
    name: 'personal-website',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/personal-website',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
