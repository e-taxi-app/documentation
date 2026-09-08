---
sidebar_position: 15
---

# Change App Name

## Android

Go to `android/app/src/main/AndroidManifest.xml` and change the app name in `android:label` as shown in the image. Replace `eTaxi` with your app name.

![Android App Name](/images/app/androidAppName.png)

## iOS

Open this project in Xcode and enter your app name in the **Display Name** field as shown in the image.

![iOS App Name](/images/app/iosAppName.png)

## App Constants

Also change the app name in `lib/utils/constants.dart` as shown in the image:

```dart
String appName = "eTaxi";
```

![App Name](/images/app/appName2.png)
