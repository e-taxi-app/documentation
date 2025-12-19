---
sidebar_position: 24
---

# How to Enable/Disable and Admob Settings

For a comprehensive guide on setting up Google AdMob, please refer to: [Google AdMob Setup Guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/advertisement/google-admob)

1. If you want to disable google admob then you can disable from admin panel -> settings -> admob settings

2. Create android and iOS app in google admob account. You can create google admob account from here. [https://admob.google.com/home/](https://admob.google.com/home/)

3. Create banner and interstitial ads and copy those ads id.

4. Paste those ads id in admin panel -> settings -> admob settings.

   ![Admob 1](/images/app/admob1.png)

5. You have to setup google admob app id for both Platform.

## Android Setup

Next, open android ‣ app ‣ src ‣ main ‣ AndroidManifest.xml and paste Google Admob Android App Id meta data tag into your application tag before the activity tag, placing the Admob Android App Id you copied before.

```xml
<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="{{YOUR_GOOGLE_ADMOB_ANDROID_APP_ID_HERE}}" />
```

![Admob 3](/images/app/admob3.png)

## iOS Setup

Next, open the ios ‣ Runner ‣ Info.plist file and paste the following code at shown in image.

```xml
<key>GADApplicationIdentifier</key>
<string>{{"PLACE_YOUR_GOOGLE_ADMOB_IOS_APP_ID"}}</string>
```

![Admob 2](/images/app/admob2.png)
