# Kauri Wallet Cordova Build Docs

## Builds

1.  Perform a prod build in `/packages/kauri-wallet`, this will ensure Cordova has something to build with (it looks to `/packages/kauri-wallet/dist/kauri-wallet/` for the files to build with).
2.  Run `cordova build android` or `cordova build ios` depending on which you want to build

## Common Issues

- I'm getting this error about license agreements?
  ```
  > You have not accepted the license agreements of the following SDK components:
    [Android SDK Platform 26].
    Before building your project, you need to accept the license agreements and complete the installation of the missing components using the Android Studio SDK Manager.
    Alternatively, to learn how to transfer the license agreements from one workstation to another, go to http://d.android.com/r/studio-ui/export-licenses.html
  ```
  - To accept the licenses do the following:
    ```
    $ cd ~/Library/Android/sdk/tools/bin
    $ ./sdkmanager --licenses
    ```
- Cordova can't find Gradle!
  - Make sure you have Android Studio installed
  - Add the following to your PATH
  ```
  export PATH="$PATH:/Applications/Android Studio.app/Contents/gradle/gradle-4.4/bin"
  ```
- Cordova won't run and displays some kind of EACCESS error?
  - Run the following:
    ```
    sudo chmod 755 "/Applications/Android Studio.app/Contents/gradle/gradle-4.4/bin/gradle"
    ```
