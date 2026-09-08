---
sidebar_position: 18
---

# How to Change Default Country Code in App

> **Note:** Country code can also be managed from the **Admin Panel**. The value in `constants.dart` is used as the **default country code** in the app (for example: `"IN"` for India).

Go to `lib/utils/constants.dart` and update the default country code:

```dart
String countryCode = "IN";
```

Replace `"IN"` with your required country code.

![Default Country Code](/images/app/defaultCountryCode.png)
