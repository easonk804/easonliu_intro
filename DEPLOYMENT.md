# 腾讯云服务器部署指南

## 📋 部署前准备

### 1. 腾讯云服务器
- Ubuntu 20.04 或 22.04
- 至少 1GB RAM
- 开放 22、80、443 端口

### 2. 域名（可选）
- 如果需要自定义域名，提前购买

## 🚀 部署步骤

### 第一步：服务器初始化

```bash
# SSH 连接到服务器
ssh root@你的服务器IP

# 下载并运行初始化脚本
curl -O https://raw.githubusercontent.com/easonk804/easonliu_intro/main/server-setup.sh
chmod +x server-setup.sh
./server-setup.sh
```

### 第二步：本地部署

```bash
# 在本地项目目录
chmod +x deploy.sh

# 部署到服务器（替换为你的服务器IP）
./deploy.sh 你的服务器IP root
```

### 第三步：配置 Nginx

```bash
# 在服务器上
cp /var/www/personal-website/nginx.conf /etc/nginx/sites-available/personal-website
ln -s /etc/nginx/sites-available/personal-website /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# 测试配置
nginx -t

# 重启 Nginx
systemctl restart nginx
```

### 第四步：配置域名（可选）

#### 如果有域名，在腾讯云 DNSPod 添加记录：
```
主机记录: @
记录类型: A
记录值: 你的服务器IP
TTL: 600

主机记录: www
记录类型: A
记录值: 你的服务器IP
TTL: 600
```

#### 配置 SSL 证书：
```bash
# 在服务器上
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 🔄 更新网站

### 方法一：使用部署脚本
```bash
./deploy.sh 你的服务器IP root
```

### 方法二：手动更新
```bash
# 在服务器上
cd /var/www/personal-website
git pull
npm install
npm run build
pm2 restart personal-website
```

## 📊 监控和管理

### 查看 PM2 状态
```bash
pm2 status
pm2 logs personal-website
pm2 monit
```

### 查看 Nginx 日志
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### 重启服务
```bash
# 重启应用
pm2 restart personal-website

# 重启 Nginx
systemctl restart nginx
```

## 🌐 访问地址

- **IP 访问**: http://你的服务器IP
- **域名访问**: http://yourdomain.com
- **HTTPS**: https://yourdomain.com

## 🛠️ 故障排除

### 常见问题

1. **端口被占用**
   ```bash
   sudo netstat -tulpn | grep :3000
   sudo kill -9 进程ID
   ```

2. **Nginx 配置错误**
   ```bash
   nginx -t
   # 检查配置文件语法
   ```

3. **PM2 进程异常**
   ```bash
   pm2 delete personal-website
   pm2 start ecosystem.config.js
   ```

4. **权限问题**
   ```bash
   sudo chown -R www-data:www-data /var/www/personal-website
   sudo chmod -R 755 /var/www/personal-website
   ```

## 📞 技术支持

如果遇到问题，检查：
1. 服务器防火墙设置
2. 域名 DNS 解析
3. Nginx 错误日志
4. PM2 应用日志
