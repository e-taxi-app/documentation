---
sidebar_position: 3
---

# How to change package name

For detailed information about package name structure and best practices, please refer to our [comprehensive guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/packagename).

1. Unzip the downloaded code. After unzipping you will have eTaxi - Flutter Code zip folder. Unzip that folder and open it in Android Studio or Visual Studio Code.

2. Open ide terminal go to your project path and execute command

   ```bash
   flutter pub get
   ```

3. If you are running this app for ios then run these following commands in terminal.

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Change package name of android app
   Execute this command in your terminal

   ```bash
   flutter pub run change_app_package_name:main your_new_package_name
   ```
   
   > **Important Note:** Replace `your_new_package_name` with your desired package name (e.g., `com.yourcompany.appname`). The package name should follow the reverse domain name notation.

   ![Change Package Name](/images/app/changePackageName.png)

5. Change package name of ios app
   Open ios folder of this project in xcode. Go Select Runner->Targets->General->Identity and enter new package name in Build Identifier.

   ![Change iOS Package Name](/images/app/changePackageName1.png)

6. Update package name in settings.dart
   - Navigate to `lib/settings.dart` file
   - Find the `packageName` variable
   - Update it with your new package name

   ![Update Package Name in Settings](/images/app/changePackageName2.png)
