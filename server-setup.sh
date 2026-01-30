#!/bin/bash

# 腾讯云服务器初始化脚本
# 运行此脚本准备服务器环境

echo "🚀 开始初始化腾讯云服务器..."

# 更新系统
echo "📦 更新系统包..."
apt update && apt upgrade -y

# 安装 Node.js 18
echo "📦 安装 Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# 安装 PM2
echo "📦 安装 PM2..."
npm install -g pm2

# 安装 Nginx
echo "📦 安装 Nginx..."
apt install nginx -y

# 安装 Certbot (SSL 证书)
echo "📦 安装 Certbot..."
apt install certbot python3-certbot-nginx -y

# 创建网站目录
echo "📁 创建网站目录..."
mkdir -p /var/www/personal-website

# 配置防火墙
echo "🔥 配置防火墙..."
ufw allow ssh
ufw allow 'Nginx Full'
ufw --force enable

# 启动 Nginx
echo "🌐 启动 Nginx..."
systemctl start nginx
systemctl enable nginx

echo "✅ 服务器初始化完成!"
echo ""
echo "下一步:"
echo "1. 上传项目文件到服务器"
echo "2. 运行部署脚本"
echo "3. 配置域名和 SSL 证书"
echo ""
echo "服务器信息:"
echo "- Node.js 版本: $(node --version)"
echo "- NPM 版本: $(npm --version)"
echo "- PM2 版本: $(pm2 --version)"
echo "- Nginx 状态: $(systemctl is-active nginx)"
