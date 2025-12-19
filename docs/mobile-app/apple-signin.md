---
sidebar_position: 9
---

# Authenticate with Firebase Using Apple Sign-In

1. Open your firebase console.
2. Go to Sign-in method in Authentication.
3. Go to the Apple and enable apple sign in.

   ![Apple Sign In](/images/app/apple1.png)

4. In Xcode, select the Signing & Capabilities tab, and add "Sign In With Apple" as a new Capability then select a team on the Code Signing section.

   ![Apple Sign In Xcode](/images/app/apple2.png)

5. This will generate and configure an App ID in the "Certificates, Identifiers & Profiles" section of the Apple Developer portal.

> **Important:** For iOS authentication setup and URL scheme configuration, please refer to our [comprehensive guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase/#-for-ios-authentication-setup). This step is crucial for enabling Apple Sign-In in your iOS app.
