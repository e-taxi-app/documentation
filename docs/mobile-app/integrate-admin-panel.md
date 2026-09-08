---
sidebar_position: 13
---

# Integrate with Admin Panel

Go to `lib/utils/api_constants.dart` and replace the `domain` value with your admin panel URL. Make sure to include `https://` in the URL.

```dart
static const String domain = "ENTER YOUR BASE URL HERE";
```

![Change Database URL](/images/app/changeDatabaseUrl.png)

> **Important:** The admin panel URL must start with `https://` for security reasons. Do not use `http://` as it is not secure.
