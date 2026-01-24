---
sidebar_position: 2
---

# Installation Steps

This guide will walk you through the complete installation process of eTaxi platform on your server.

## Prerequisites

Before starting the installation, ensure you have:

- **PHP 8.2 or higher** installed
- **Composer** (PHP dependency manager) - Required to install Filament and other dependencies
- **Node.js & NPM** (version 16+ recommended) - Required for Filament asset compilation
- **MySQL/MariaDB Database Server** (version 5.7+ or 10.3+)
- **Web Server** (Apache or Nginx)
- **Required PHP Extensions** (see Server Requirements section below)

**Note:** eTaxi uses **Filament** (v3.3+) as the admin panel framework, which will be automatically installed via Composer.

## 1. Download and Extract Files

Download the eTaxi package and extract it to your web server directory (e.g., `htdocs`, `public_html`, or your domain folder).

<!-- ![Extract Files](/images/admin/1.png) -->

## 2. Server Requirements & Extensions

eTaxi requires specific PHP extensions to function properly. The installation process will check for these requirements automatically.

### Required PHP Extensions:

- **PHP 8.2+** (minimum version)
- **PDO** - PHP Data Objects
- **PDO_MySQL** - MySQL database driver
- **OpenSSL** - For secure connections
- **Mbstring** - Multibyte string handling
- **Tokenizer** - Token parsing
- **XML** - XML processing
- **Ctype** - Character type checking
- **JSON** - JSON encoding/decoding
- **BCMath** - Arbitrary precision mathematics
- **Fileinfo** - File information
- **GD** or **Imagick** - Image processing
- **Zip** - Archive handling
- **Curl** - HTTP client

**Note:** The **pdo_mysql** extension is also required for database connectivity.

If PHP version is lower than 8.2 or any extension is not installed, it will be highlighted in **Red color**. You need to ensure that your server meets all requirements before proceeding.

<!-- ![Server Requirements](/images/admin/2.png) -->

## 3. Install Dependencies

Open your terminal/command prompt and navigate to the project directory, then run:

```bash
# Install PHP dependencies (this includes Filament admin panel)
composer install

# Install Node.js dependencies (required for Filament assets)
npm install
```

**Note:** The `composer install` command will automatically install **Filament** (the admin panel framework) along with all other PHP dependencies. Filament is already included in the project's `composer.json` file.

### Install Filament Admin Panel

After installing dependencies, set up Filament:

```bash
# Install Filament admin panel (if not already installed)
php artisan filament:install --panels

# Or upgrade Filament to latest version
php artisan filament:upgrade
```

This will:
- Publish Filament configuration files
- Set up the admin panel structure
- Create necessary directories and assets

## 4. Environment Configuration

Copy the `.env.example` file to `.env`:

```bash
# On Linux/Mac
cp .env.example .env

# On Windows
copy .env.example .env
```

Edit the `.env` file and configure the following:

- **APP_NAME** - Your application name
- **APP_ENV** - Environment (local, staging, production)
- **APP_KEY** - Application encryption key (generate using `php artisan key:generate`)
- **APP_DEBUG** - Debug mode (true for development, false for production)
- **APP_URL** - Your application URL

## 5. Permission Screen

Make sure these folders have **read & write permissions**:

- `storage/` - For logs, cache, and uploaded files
- `storage/app/` - Application storage
- `storage/framework/` - Framework cache and sessions
- `storage/logs/` - Application logs
- `bootstrap/cache/` - Bootstrap cache files

### Setting Permissions:

**On Linux/Mac:**
```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

**On Windows:**
Ensure the web server user has full control over these directories.

If permissions are not set correctly, assign these folders read & write permissions before proceeding.

<!-- ![Permission Screen](/images/admin/3.png) -->

## 6. Generate Application Key

Generate the application encryption key:

```bash
php artisan key:generate
```

## 7. Create Database

First, create a MySQL database for eTaxi. You can do this using phpMyAdmin, MySQL command line, or any database management tool.

### Using MySQL Command Line:
```sql
CREATE DATABASE etaxi_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Using phpMyAdmin:
1. Log in to phpMyAdmin
2. Click on "New" to create a new database
3. Enter database name: `etaxi_db`
4. Select collation: `utf8mb4_unicode_ci`
5. Click "Create"

## 8. Database Configuration

Configure your database connection in the `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=etaxi_db
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

**Note:** 
- Replace `etaxi_db` with your actual database name
- Replace `your_username` and `your_password` with your MySQL credentials
- If using a remote database, update `DB_HOST` accordingly

<!-- ![Database Configuration](/images/admin/5.png) -->

## 9. Database Connection Status

Test your database connection:

```bash
php artisan migrate:status
```

If the connection is successful, you'll see the migration status. If there are errors, verify your database credentials in the `.env` file.

<!-- ![Database Connection](/images/admin/6.png) -->

## 10. Run Database Migrations

Create the database tables:

```bash
php artisan migrate
```

## 11. Seed Database (Optional)

Populate the database with initial data:

```bash
php artisan db:seed
```

This will create:
- Default admin user
- Initial settings
- Sample data (if seeders are configured)

## 12. Build Frontend Assets

Compile the Filament admin panel assets. This step is essential for the admin panel to work correctly:

```bash
# For development (with hot reload)
npm run dev

# For production (optimized build)
npm run build
```

**Important:** The Filament admin panel requires these assets to be compiled. Without this step, the admin panel interface will not load properly.

## 13. Configure Additional Services

### Pusher Configuration (for Real-time Features)

Add to your `.env` file:
```env
BROADCAST_DRIVER=pusher
PUSHER_APP_ID=your_app_id
PUSHER_APP_KEY=your_app_key
PUSHER_APP_SECRET=your_app_secret
PUSHER_APP_CLUSTER=your_cluster
```

### Firebase Cloud Messaging (FCM)

Add to your `.env` file:
```env
FCM_SERVER_KEY=your_fcm_server_key
FCM_PROJECT_ID=your_fcm_project_id
FCM_MESSAGING_SENDER_ID=your_sender_id
```

### Google Maps API

Add to your `.env` file:
```env
GOOGLE_PLACES_API_KEY=your_places_api_key
GOOGLE_GEOCODING_API_KEY=your_geocoding_api_key
```

### Payment Gateways

Configure payment gateway credentials:
```env
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
STRIPE_KEY=your_stripe_key
STRIPE_SECRET=your_stripe_secret
PAYTM_MERCHANT_ID=your_paytm_merchant_id
PAYTM_MERCHANT_KEY=your_paytm_merchant_key
```

## 14. Final Installation Screen

If everything is configured successfully, your eTaxi admin panel has been installed successfully!

### Access the Admin Panel

Navigate to: `http://your-domain.com/admin`

### Default Admin Credentials

After running the database seeder, you can login with:

- **Email:** admin@etaxi.com (or as configured in seeder)
- **Password:** password (or as configured in seeder)

**Important:** Change the default password immediately after first login!

<!-- ![Installation Complete](/images/admin/7.png) -->
<!-- ![Admin Login](/images/admin/8.png) -->

## 15. Post-Installation Steps

### Clear Cache

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

### Optimize for Production

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize
```

### Set Up Queue Worker

For background job processing, set up a queue worker:

```bash
php artisan queue:work
```

Or configure a supervisor/cron job to run it automatically.

### Set Up WebSocket Server (Optional)

For real-time features, start the WebSocket server:

```bash
php artisan websocket:serve --port=6001
```

## Troubleshooting

### Common Issues

1. **Permission Denied Errors**
   - Ensure storage and bootstrap/cache folders have write permissions
   - Check file ownership on Linux/Mac

2. **Database Connection Failed**
   - Verify database credentials in `.env`
   - Ensure MySQL/MariaDB server is running
   - Check if database exists (create it if it doesn't)
   - Verify MySQL user has proper permissions
   - Check if `pdo_mysql` extension is enabled in PHP

3. **Composer Install Fails**
   - Check PHP version (must be 8.2+)
   - Verify all required PHP extensions are installed
   - Check internet connection for package downloads

4. **NPM Install Fails**
   - Ensure Node.js is installed (version 16+ recommended)
   - Clear npm cache: `npm cache clean --force`

5. **Admin Panel Not Loading**
   - Run `php artisan filament:upgrade`
   - Clear all caches
   - Rebuild assets: `npm run build`

## Next Steps

After successful installation:

1. **Configure Settings** - Set up your platform settings in the admin panel
2. **Add Cities & Zones** - Configure service areas
3. **Set Up Ride Types** - Configure available vehicle types
4. **Configure Fare Settings** - Set up pricing for different ride types
5. **Set Up Payment Gateways** - Configure payment methods
6. **Add Admin Users** - Create additional admin accounts
7. **Configure API Keys** - Set up Google Maps, FCM, and other services

For detailed configuration guides, refer to other sections of this documentation.

