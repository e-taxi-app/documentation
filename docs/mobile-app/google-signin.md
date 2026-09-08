---
sidebar_position: 8
---

# Authenticate with Firebase Using Google Sign-In

## Get Web Client ID from Firebase

1. Open your [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Go to **Build → Authentication → Sign-in method**.
3. Enable **Google** if it is not enabled, then click the **pencil (edit)** icon on the Google provider row.

![Google Sign In - Provider](/images/app/googleSignIn1.png)

4. In the Google provider settings, open **Web SDK configuration**.
5. Copy the **Web client ID** from here. This is the key you need for the app.

![Google Sign In - Web Client ID](/images/app/googleSignIn2.png)

> **Note:** Firebase usually fills Web client ID / Web client secret automatically when Google Sign-In is enabled. You mainly need to **copy the Web client ID** and paste it into the app code.

## Set Web Client ID in App

6. Open `lib/feature/auth/controller/auth_controller.dart`.
7. Paste the Web client ID in `_googleWebClientId`:

```dart
static const _googleWebClientId =
  'ENTER YOUR GoogleWebClientId HERE';
```

Replace `ENTER YOUR GoogleWebClientId HERE` with the Web client ID copied from Firebase.

![Google Sign In - App Code](/images/app/googleSignIn3.png)

> **Important:** Don't forget to add SHA1 and SHA256 keys in Firebase. For adding SHA1 and SHA256 keys in Firebase, please refer to our [comprehensive guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase#-add-sha1--sha256-keys-in-firebase). This step is crucial for enabling Google Sign-In in your Android app.

## For iOS:

> **Important:** For iOS authentication setup and URL scheme configuration, please refer to our [comprehensive guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/firebase/#-for-ios-authentication-setup). This step is crucial for enabling Google Sign-In in your iOS app.
