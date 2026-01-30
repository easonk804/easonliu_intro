#!/bin/bash

# 腾讯云服务器部署脚本
# 使用方法: ./deploy.sh [服务器IP] [用户名]

SERVER_IP=${1:-"你的服务器IP"}
USER=${2:-"root"}

echo "开始部署到腾讯云服务器: $USER@$SERVER_IP"

# 本地构建
echo "🔨 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 创建部署包
echo "📦 创建部署包..."
tar -czf deploy.tar.gz --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='out' --exclude='deploy.tar.gz' .

# 上传到服务器
echo "📤 上传到服务器..."
scp deploy.tar.gz $USER@$SERVER_IP:/tmp/

if [ $? -ne 0 ]; then
    echo "❌ 上传失败"
    exit 1
fi

# 服务器端部署
echo "🚀 服务器端部署..."
ssh $USER@$SERVER_IP << 'EOF'
# 创建部署目录
mkdir -p /var/www/personal-website
cd /tmp

# 解压部署包
tar -xzf deploy.tar.gz -C /var/www/personal-website

# 安装依赖
cd /var/www/personal-website
npm install --production

# 构建项目
npm run build

# 重启服务（使用 PM2）
if command -v pm2 &> /dev/null; then
    pm2 restart personal-website || pm2 start npm --name "personal-website" -- start
else
    echo "PM2 未安装，请先安装: npm install -g pm2"
fi

echo "✅ 部署完成"
EOF

# 清理本地部署包
rm deploy.tar.gz

echo "🎉 部署完成!"
echo "🌐 访问地址: http://$SERVER_IP:3000"
