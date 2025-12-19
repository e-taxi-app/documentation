---
sidebar_position: 10
---

# How to set Notification

For detailed information about Firebase Cloud Messaging (FCM) setup and configuration, please refer to our [comprehensive guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/notifications).

1. Go to your firebase project in project settings -> general. Copy your project id from there as below image.

   ![FCM 1](/images/app/fcm_11.png)

2. Go to project settings -> service accounts. For download service json file click on Generate new private key button as below image.

   ![FCM 2](/images/app/fcm_12.png)

3. Now add your project id and downloaded service json file in .env file

   ![FCM 3](/images/app/fcm4.png)

> **Important:** Don't forget to add SHA1 and SHA256 keys in Firebase. For adding SHA1 and SHA256 keys in Firebase, please refer to our [comprehensive guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase#-add-sha1--sha256-keys-in-firebase). This step is crucial for enabling notifications in your Android app.

