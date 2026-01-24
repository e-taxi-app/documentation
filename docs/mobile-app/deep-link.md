---
sidebar_position: 11
---

# How to Create Deep Link for Share Item

> **Important:** If you are using website then use website URL everywhere in deeplink URL settings, but if you use only admin panel then use everywhere admin panel URL in deeplink URL settings. Please do not use http or https anywhere in deep link settings.

1. Go to admin panel settings -> deep link scheme and add your scheme name (e.g., `etaxi`)

   ![Native Link 4](/images/app/nativeLink4.png)

2. In iOS, go to Info -> URL Types -> URL Schemes and add the same scheme name as configured in admin panel

   ![Native Link 5](/images/app/nativeLink5.png)

3. Open lib -> settings.dart file.
4. Add your host URL here:
   - If using website: Add your website domain (e.g., `example.com`)
   - If using admin panel only: Add your admin panel domain (e.g., `admin.example.com`)
   - Do not include http:// or https://

   ![Native Link 1](/images/app/nativeLink1.png)

5. Go to android -> app -> main -> AndroidManifest.xml file. Add your host URL here [Without http or https] and use the same scheme name as configured in admin panel

   ![Native Link 2](/images/app/nativeLink2.png)

6. Open your code in xcode -> Runner -> Signing & Capabilities -> Associated Domains in add your domain here. [Without http or https]

   ![Native Link 3](/images/app/nativeLink3.png)
