---
sidebar_position: 15
---

# In-App Purchase Setup

## Overview

This guide explains how to set up in-app purchases for iOS subscription plans in your app. Note that this implementation is specific to iOS as Apple requires the use of in-app purchases for subscription plans.

## Why In-App Purchase for iOS?

Apple's App Store guidelines require that all digital content and subscription services must use Apple's in-app purchase system. This means:
- You cannot use third-party payment gateways for subscription plans
- All subscription transactions must go through Apple's payment system
- This ensures security and consistency in the App Store ecosystem

## Setup Process

### 1. Create In-App Purchase in App Store Connect

1. Log in to [App Store Connect](https://appstoreconnect.apple.com)
2. Navigate to your app
3. Go to Features > In-App Purchases
4. Click the "+" button to add a new in-app purchase
5. Select "Auto-Renewable Subscription" as the type
6. Fill in the required details:
   - Reference Name
   - Product ID (this is crucial - you'll need this in the admin panel)
   - Pricing

### 2. Configure in Admin Panel

1. Log in to your admin panel
2. Navigate to Subscription Plans section
3. When adding or editing a subscription plan:
   - Enter the iOS Product ID exactly as created in App Store Connect
   - This ID must match precisely with the one in App Store Connect

![In-App Purchase Setup](/images/app/inAppPurchase.png)

## Important Notes

- The iOS Product ID in your admin panel must exactly match the Product ID created in App Store Connect
- For Android, you can use other payment gateways as Apple's restrictions don't apply
- Make sure to test the in-app purchase implementation using sandbox accounts before going live
- **IMPORTANT**: Don't forget to enable paid app agreements in your Apple Developer account. Without this, in-app purchases will not work. To enable:
  1. Log in to [Apple Developer Account](https://developer.apple.com)
  2. Go to Agreements, Tax, and Banking
  3. Accept the Paid Applications Agreement
  4. Complete the banking and tax information
  5. Wait for Apple's approval (this may take a few days)

## Additional Resources

For more detailed information about creating and setting up in-app purchases, please refer to our [Comprehensive IAP Guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/iap).

## Testing

Before releasing to production:
1. Create a sandbox tester account in App Store Connect
2. Test the complete purchase flow
3. Verify that subscriptions are properly activated

## Troubleshooting

Common issues and solutions:
- If purchases aren't working, verify the Product ID matches exactly
- Ensure your app's bundle identifier matches the one in App Store Connect
- Check that your app's provisioning profile includes in-app purchase capability
- Verify that your Apple Developer account has the necessary agreements signed
- If in-app purchases are not working, double-check that the Paid Applications Agreement is enabled and approved in your Apple Developer account
