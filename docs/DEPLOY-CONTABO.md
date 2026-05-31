# نشر Qaissar Web على Contabo (وفك الارتباط عن Vercel)

## 1. فك الارتباط من Vercel (يدوياً في لوحة Vercel)

1. ادخل [vercel.com](https://vercel.com) → مشروع `qaissar-web` (أو الاسم الحالي).
2. **Settings → Git** → **Disconnect** (أوقف الربط مع GitHub/GitLab إن وُجد).
3. **Settings → Domains** → احذف `qaissar.com` و `www` من Vercel **قبل** أو **بعد** تجهيز Contabo (انظر DNS أدناه).
4. انسخ **Environment Variables** من Vercel (Settings → Environment Variables) واحفظها — ستحتاجها على السيرفر.
5. اختياري: **Delete Project** في Vercel بعد ما يشتغل الموقع على Contabo.

> تم حذف `vercel.json` من المستودع؛ النشر لم يعد مربوطاً بإعدادات Vercel في الكود.

### DNS

| السجل | القيمة |
|--------|--------|
| `A` لـ `@` | IP عنوان VPS في Contabo |
| `A` أو `CNAME` لـ `www` | نفس IP أو `qaissar.com` |

انتظر انتشار DNS (حتى 48 ساعة، غالباً أقل).

---

## 2. متطلبات سيرفر Contabo (Ubuntu 22/24 مثلاً)

```bash
sudo apt update && sudo apt install -y nginx git curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

---

## 3. رفع المشروع

```bash
sudo mkdir -p /var/www/qaissar-web
sudo chown $USER:$USER /var/www/qaissar-web
cd /var/www/qaissar-web
git clone <YOUR_REPO_URL> .
```

أنشئ ملف `.env` (من `.env.example`):

```env
DATABASE_URI=postgresql://...
PAYLOAD_SECRET=<نفس القيمة من Vercel أو جديدة قوية>
NEXT_PUBLIC_SERVER_URL=https://qaissar.com
PAYLOAD_ALLOWED_ORIGINS=https://www.qaissar.com
NODE_ENV=production
PORT=3000
```

**قاعدة البيانات:** على VPS استخدم اتصال PostgreSQL **مباشر** (منفذ `5432`). لا تستخدم إعدادات Vercel/Supabase pooler (`6543` + `pgbouncer`) إلا إذا كان عندك سبب خاص.

---

## 4. بناء وتشغيل

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

- `npm run build` يشغّل أيضاً نسخ ملفات `public` و static لمجلد `standalone`.
- التطبيق يستمع على `http://127.0.0.1:3000`.

---

## 5. Nginx + SSL

```bash
sudo cp deploy/nginx-qaissar.conf.example /etc/nginx/sites-available/qaissar.com
sudo ln -s /etc/nginx/sites-available/qaissar.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d qaissar.com -d www.qaissar.com
```

---

## 6. تحديثات لاحقة

```bash
cd /var/www/qaissar-web
git pull
npm ci
npm run build
pm2 restart qaissar-web
```

---

## 7. ملفات الوسائط (Payload uploads)

مجلد `public/media/` يجب أن يبقى على القرص بين النشرات. لا تحذفه عند `git pull`. فكّر بنسخ احتياطي دوري.

---

## ملخص تغييرات المستودع

| قبل (Vercel) | بعد (Contabo) |
|--------------|----------------|
| `vercel.json` | محذوف |
| Serverless + pooler DB | Node دائم + `output: 'standalone'` + PM2 |
| متغيرات في لوحة Vercel | `.env` على السيرفر |
