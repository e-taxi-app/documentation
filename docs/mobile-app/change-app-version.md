---
sidebar_position: 4
---

# How to change app version

1. Go to pubspec.yaml
2. EX. Update version:A.B.C+X in pubspec.yaml.
3. For Android:

   A.B.C represents the versionName such as 1.0.0.

   X (the number after the +) represents the versionCode such as 1, 2, 3, etc.

4. **Do not forget** to execute flutter packages get, flutter build or flutter run after this step

   ![Android Version Change](/images/app/android_version_change.png)

5. For iOS

   A.B.C represents the CFBundleShortVersionString such as 1.0.0.

   X (the number after the +) represents the CFBundleVersion such as 1, 2, 3, etc.

6. **Do not forget** to execute flutter packages get, flutter build or flutter run after this step

   ![iOS Version Change](/images/app/ios_version_change.png)

7. Additional iOS Build Settings:
   - Open your iOS project in Xcode
   - Go to Runner -> Build Settings
   - Search for "FLUTTER_BUILD_NAME" and "FLUTTER_BUILD_NUMBER"
   - Update these values to match your desired version

   ![iOS Build Settings](/images/app/change_version_ios1.png)
