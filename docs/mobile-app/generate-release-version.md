---
sidebar_position: 16
---

# Generate Release Version

## Android Release Configuration

Before generating a release version of your Android app, you need to ensure the correct signing configuration is set up in your `build.gradle` file.

### Update Signing Configuration

1. Open `android/app/build.gradle`
2. Locate the `signingConfigs` block
3. Make sure the release configuration is set to `release` instead of `debug`

```gradle
android {
    signingConfigs {
        release {
            storeFile file("your-release-key.keystore")
            storePassword "your-store-password"
            keyAlias "your-key-alias"
            keyPassword "your-key-password"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            shrinkResources false  
        }
    }
}
```

![Release Configuration](/images/app/releaseAPK.png)

## Important Notes

- Never commit your keystore file or passwords to version control
- Store your keystore file securely
- Keep a backup of your keystore file - if you lose it, you won't be able to update your app on the Play Store
- The keystore file should be placed in the `android/app` directory

## Generating Release APK

1. Open terminal in your project root directory
2. Run the following command:
   ```bash
   flutter build apk --release
   ```
3. The release APK will be generated at:
   ```
   build/app/outputs/flutter-apk/app-release.apk
   ```

## iOS Release Configuration

For iOS release builds:

1. Open Xcode
2. Select your target
3. Go to Signing & Capabilities
4. Ensure you have:
   - Valid provisioning profile
   - Valid distribution certificate
   - Correct team selected
   - Correct bundle identifier

## Generating iOS Release

1. Open terminal in your project root directory
2. Run the following command:
   ```bash
   flutter build ios --release
   ```
3. Open the generated Xcode project:
   ```bash
   open ios/Runner.xcworkspace
   ```
4. In Xcode:
   - Select "Any iOS Device" as the build target
   - Go to Product > Archive
   - Follow the steps to upload to App Store Connect

## Troubleshooting

Common issues and solutions:

- **Android signing issues**:
  - Verify keystore file exists in correct location
  - Check keystore passwords are correct
  - Ensure signingConfig is set to `release`

- **iOS signing issues**:
  - Verify certificates are valid in Apple Developer account
  - Check provisioning profiles are up to date
  - Ensure bundle identifier matches your app's configuration
