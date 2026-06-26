# Android APK build (TV + phone)

Same web app, packaged with [Capacitor](https://capacitorjs.com/).

## Prerequisites (one-time)

1. Install [Android Studio](https://developer.android.com/studio)
2. Install SDK Platform 34+ and build-tools
3. Set `ANDROID_HOME` in your shell

## Build web + sync

```bash
npm install
npm run build
npx cap sync android
```

## Phone APK (debug, sideload)

```bash
cd android
./gradlew assembleDebug
```

APK path: `android/app/build/outputs/apk/debug/app-debug.apk`

Copy to phone or pendrive and install (enable **Install unknown apps**).

## Android TV APK

The same APK works on Android TV. After install:

1. Open the app from the TV app drawer
2. Use **?tv=1** in the start URL, or tap **TV** in the top bar
3. D-pad / remote: arrows to move focus, Enter to select

### TV launcher (optional)

To show a banner on the Android TV home screen, add to `android/app/src/main/AndroidManifest.xml`:

```xml
<intent-filter>
  <action android:name="android.intent.action.MAIN" />
  <category android:name="android.intent.category.LEANBACK_LAUNCHER" />
</intent-filter>
<uses-feature android:name="android.software.leanback" android:required="false" />
```

Add a `banner` drawable in `android/app/src/main/res/` (320×180).

## Play Store (later)

1. Create a release keystore
2. `./gradlew bundleRelease`
3. Upload AAB to [Google Play Console](https://play.google.com/console)
4. Create two listings or one app with TV + phone form factors

## iPhone

No APK. Open the deployed URL in Safari → Share → **Add to Home Screen** (PWA).

## Cloud homework

Add `.env` with Supabase keys (see `.env.example`). Parent → **Upload** on phone; TV refreshes on next open.
