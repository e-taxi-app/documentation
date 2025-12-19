---
sidebar_position: 1
---

# Flutter and Java JDK Setup Guide

For a complete guide on setting up Flutter and Java JDK, please refer to our official documentation:
[Flutter & Java JDK Setup Guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/basicsetup)

## Setup JDK in your system

1. If your System already has Java JDK 17 installed then you can skip this step.

2. Download Java JDK 17 by clicking this link: [JAVA JDK](https://www.oracle.com/java/technologies/downloads/)

3. Download Java JDK 17 for your version 32 bit or JDK download 64 bit.

4. Please prefer video tutorials, we recommend this playlist for setting environment variables for Java in Windows 10:
   [Java Environment Setup in Windows 10](https://www.youtube.com/watch?v=zzfHPGyjoWw)

5. Please prefer video tutorials, we recommend this playlist for setting environment variables for Java in Windows 11:
   [Java Environment Setup in Windows 11](https://www.youtube.com/watch?v=zAyIqbBAUxQ)

## Setup Flutter SDK

1. Download Flutter SDK version 3.35.0 (stable channel) from the official Flutter website:
   [Flutter SDK Downloads](https://docs.flutter.dev/get-started/install)

2. After downloading, extract the Flutter SDK to your desired location.

3. Add Flutter to your system PATH:
   - For Windows: Add the Flutter bin directory to your system's PATH variable
   - For macOS/Linux: Add export PATH="$PATH:[PATH_TO_FLUTTER_SDK]/bin" to your shell's rc file

4. Run the following command to verify the installation:
   ```bash
   flutter --version
   ```
