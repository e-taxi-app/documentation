---
sidebar_position: 2
---

# e-Taxi Features & Setup Flow

## 1. What Admin Needs to Do First

Before users and drivers can access the full functionality, complete these essential setup steps from the Laravel-based admin panel:

### Initial Setup Checklist:

1. **Login to Admin Panel** - Access Filament-based admin dashboard

2. **City & Location Management** - Add service cities, configure timings, create service zones (draw polygons on map), set default city

3. **Ride Types Configuration** - Create ride types (Bike, Mini, Sedan, Premium, Rikshaw), set icons and names, assign to cities

4. **Fare Configuration** - Set base fare per ride type/city, configure distance pricing (Flat/Slab-wise/Fixed), time charges, waiting charges, night charges, surge pricing rules, cancellation charges

5. **Tax Configuration** - Add city-specific tax rules, configure rates and names (GST, Service Tax), set calculation order

6. **Commission Settings** - Set commission rates per city/ride type, configure payout schedule (weekly/daily), set minimum payout amounts

7. **Payment Gateways Setup** - Configure Razorpay (Key ID, Secret, Webhook), Stripe (Publishable Key, Secret, Webhook), enable/disable payment methods (Cash, Wallet, Online)

8. **Authentication Settings** - Enable/disable methods (OTP, Google, Apple, Email), configure OTP provider (MSG91/Twilio), set social login credentials

9. **Driver Onboarding Setup** - Configure required documents, set upload deadline, define verification fields, vehicle registration requirements

10. **Notification Setup** - Configure FCM (Server Key, Sender ID, Project ID), upload Firebase JSON, enable push/SMS/email, configure SMS service (MSG91/Twilio)

11. **Maps & Location Services** - Add Google Maps API Key, configure Google Places API, set geolocation radius for driver matching, configure search settings

12. **Promo Code & Referral System** - Configure referral rewards, set bonus amounts, create referral tiers, set promo code rules

13. **Support & Help Center** - Add help categories/articles, configure ticket categories, set refund policy, add safety tips

14. **Static Pages** - Update About Us, Terms & Conditions, Privacy Policy, Contact Us

15. **Banner Management** - Add homepage banner images, configure display order

16. **Admin Roles & Permissions** - Create roles (Super Admin, Support Agent), assign permissions, add staff members

17. **System Configuration** - Enable/disable maintenance mode, force update settings, booking auto-approval, payout automation

---

## 2. Fare Calculation Methodology

The e-Taxi platform uses a comprehensive fare calculation system that considers multiple factors:

**Base Fare:** Fixed amount charged at trip start (varies by city and ride type)

**Distance Fare:** Calculated based on actual distance traveled
- **Flat Rate:** Fixed amount per kilometer (e.g., ₹10/km)
- **Slab-wise:** Different rates for distance ranges (0-5km: ₹10/km, 6-10km: ₹8/km, 10+km: ₹6/km)
- **Fixed per Slab:** Fixed amount per distance range regardless of exact distance

**Time Fare:** Calculated based on trip duration (per-minute rate)

**Waiting Charges:** Applied after free waiting period (e.g., 3 minutes free, then ₹2/minute)

**Night Charges:** Additional fee during night hours (configurable timing, flat amount or percentage multiplier)

**Surge Pricing:** Dynamic pricing during high demand (zone and ride-type specific, multiplier or fixed amount)

**Taxes:** City-specific tax rules applied to subtotal (GST, Service Tax, etc.)

**Final Calculation Formula:**
```
Subtotal = Base Fare + Distance Fare + Time Fare + Waiting Charges + Night Charges
Surge Amount = Subtotal × (Surge Multiplier - 1) [if surge active]
Tax Amount = (Subtotal + Surge Amount) × Tax Rate
Total = Subtotal + Surge Amount + Tax Amount - Discount (if promo code applied)
```

**Driver Earnings:** Total - Admin Commission (commission rate varies by city/ride type)

---

## 3. System Settings (Admin Panel)

**Company Information:** Name, email, phone, address, support details, logos

**App & Web Links:** Android/iOS app URLs, web application URL

**Currency Settings:** Symbol, code, format (left/right), decimal places

**Location Defaults:** Default city, pickup zone, service boundaries

**Map & Location Services:** Google Maps API Key, Places API, geolocation radius, driver search radius, max/min booking distance

**System Management:** Maintenance mode, force update, booking/driver auto-approval, free waiting time, waiting charge per minute

**Payment Settings:** Payment timeout, wallet min/max recharge, payment method availability, processing fees

**Rating Settings:** Min/max rating (1-5), display preferences

**Notification Settings:** Push/SMS/Email enabled/disabled

**Integrations:** Google Analytics, social media links, third-party services

---

## 4. Web Settings (Admin Panel)

**Design & Branding:** Primary color scheme, logo & favicon, footer description, Google Map iframe

**SEO & Analytics:** SEO metadata (Title, Description, Keywords), Google Analytics ID, social meta tags

**App Download Banners:** Enable/disable banners, Play Store/App Store links, banner images

---

## 5. User Flow (App/Website)

1. **Download App/Visit Website** - Play Store, App Store, or web

2. **Register/Login** - Phone (OTP), Email, Google, or Apple Sign-In

3. **Complete Profile** - Name, photo (optional), email (optional), referral code

4. **Grant Permissions** - Location access (required), notifications

5. **Book a Ride:**
   - Select pickup (GPS/search/manual) and drop-off (must be in service zone)
   - Choose ride type (Bike, Car, Premium) - see fare estimate, distance, duration, ETA
   - Review fare breakdown (base, distance, time, night charges, surge)
   - Apply promo code (optional)
   - Select payment method (Cash/Wallet/Online) and confirm

6. **Driver Matching & Trip:**
   - System finds nearby driver, driver accepts
   - Receive driver details (name, photo, vehicle, rating) and 4-digit Trip Code (OTP)
   - Track driver's live location, see ETA
   - Driver arrives, provide OTP to driver for verification
   - Trip starts, real-time tracking during ride

7. **Trip Completion & Payment:**
   - Driver marks completed at destination
   - View final fare (base, distance, time, waiting, night, surge, taxes, discount)
   - Pay via Cash/Wallet/Online (UPI/Card/Net Banking)
   - Rate driver (1-5 stars) with optional feedback

8. **Manage Account:**
   - Trip history (active/completed/cancelled), receipts
   - Wallet (balance, recharge, transaction history)
   - Favorites & saved places
   - Support (help center, tickets, contact)
   - Settings (profile, payments, notifications, language)

9. **Additional Features:** Scheduled rides, share trip, push notifications

---

## 6. Driver Flow (Driver App)

1. **Download & Register** - Download app, register via Phone/Email/Google/Apple

2. **Complete Onboarding:**
   - Personal info (name, DOB, photo, contacts)
   - Vehicle info (ride type, brand, model, year, registration, photos)
   - Select operating city
   - Upload documents (Government ID front/back, Driving License, Vehicle RC, Live Selfie)
   - Bank details (account, IFSC, holder name)
   - Submit for admin approval

3. **Wait for Approval** - Status "Under Review", cannot go online until approved, receive notifications, resubmit if rejected

4. **Go Online & Accept Rides:**
   - Toggle online/offline, system tracks location
   - Receive ride requests (notification, pickup/drop locations, fare estimate)
   - Accept/decline, navigate to pickup, mark "Arrived"
   - Customer provides OTP, enter code to start trip
   - Navigate to destination, mark "Completed", view fare, receive payment

5. **Manage Earnings:**
   - View earnings (daily/weekly/monthly, commission breakdown, trip history)
   - Wallet (balance, earnings per trip, payout schedule)
   - Request payout (withdrawal to bank, view history, track status)

6. **Driver Features:** Trip history, performance metrics, ratings, help center, support tickets, settings

---

## 7. e-Taxi Feature Set

### 🔧 Admin Panel Functionalities

**Dashboard & Analytics:** Bookings/users/drivers/revenue overview, real-time stats, KPIs, reports

**City & Zone Management:** Create cities, configure settings/timings, draw polygon zones, activate/deactivate

**Ride Type Management:** Create/configure ride types, set icons, assign to cities

**Fare & Tax Configuration:** City/ride-type pricing, base/distance/time charges, slab pricing, waiting/night/surge charges, cancellation fees, city-specific tax rules

**Commission & Payouts:** Set rates per city/ride type, payout schedule, manage payouts, view history, process manual payouts

**Driver Management:** View/manage profiles, approve/reject applications, verify documents, manage status, performance metrics, assign ride types, manage vehicles

**User Management:** View/manage accounts, verification, trip history, wallet management, support

**Booking Management:** View all bookings, details/tracking, manual creation, cancellation/refunds, dispute resolution

**Payment & Wallet:** Configure Razorpay/Stripe, manage payment methods, view transactions, handle disputes, wallet adjustments, refunds

**Promo & Referral:** Create/manage promo codes, set rules/limits, configure referral settings/rewards/tiers, track usage

**Support & Help:** Manage help categories/articles, handle tickets, resolve complaints, refund requests, customer chat

**System Management:** Document management, notifications, static pages, banners, API keys, maintenance mode, force update, authentication, admin roles/permissions

---

### 📱 Mobile App & Web Features

**User App:**
- Authentication (OTP, Email, Google, Apple), profile management
- Booking (location tracking, pickup/drop selection, address autocomplete, ride types, fare estimate, promo codes, scheduled rides)
- Real-time (live driver tracking, trip updates, WebSocket, push notifications)
- Payment (Cash/Wallet/Online, recharge, history, receipts)
- Additional (trip sharing, favorites, help center, support tickets, ratings, multi-language, dark/light theme)

**Driver App:**
- Authentication & onboarding (multi-method login, profile, vehicle, documents, bank details)
- Operations (online/offline toggle, receive requests, accept/decline, navigation, OTP verification, trip completion)
- Earnings (dashboard, daily/weekly/monthly, commission breakdown, wallet, payout requests, history)
- Additional (trip history, performance, ratings, help center, support, settings)

**Web Features:** Responsive design, SEO & analytics, public pages (landing, about, terms, privacy, contact, help)

---

## 8. Technical Features

**Real-time:** WebSocket integration, live driver tracking, instant status updates, live chat

**Location:** GPS tracking, Google Maps, route optimization, geofencing, distance/duration calculation

**Notifications:** Push (FCM), SMS (MSG91/Twilio), Email, in-app

**Payments:** Razorpay (UPI/Cards/Net Banking), Stripe (Cards), Wallet, Cash, webhooks

**Security:** OTP verification, trip code (OTP), document verification, KYC, secure payments

**Performance:** Background sync, offline mode, image caching, API optimization, database indexing

---

## 9. Important Notes

**Driver Requirements:** Complete onboarding before going online, all documents approved, single device login, cannot match own user account

**Booking Flow:** All actions (accept, arrived, start, complete, cancel) via WebSocket events, Trip Code (OTP) mandatory, fare based on actual distance/time

**Payment Processing:** At least one gateway (Razorpay/Stripe) must be enabled, wallet instant, cash requires driver confirmation, refunds to wallet

**Commission & Payouts:** Rates city/ride-type specific, scheduled payouts (default weekly), manual payouts available, audit history maintained

**Support System:** General help center (FAQs), trip-specific tickets, two-way communication, refund requests linked to tickets

---

This setup guide ensures administrators can properly configure the e-Taxi platform before launching to users and drivers. Complete each section in order for smooth operations.
