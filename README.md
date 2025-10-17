# PlatformSettingsApp

This is a React Native application created for Lab 5. It demonstrates the use of platform-specific components in a React Native application. The app displays a settings screen with buttons that have different appearances and functionalities on Android and iOS.

## Features

*   A settings screen.
*   Platform-specific buttons for Android and iOS.

## How to run the project

### Prerequisites

*   Node.js and npm
*   React Native development environment for Android and/or iOS. Follow the official [React Native documentation](https://reactnative.dev/docs/environment-setup) to set up your environment.

### Running the app

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ReynardFM/Lab5-React-Native.git
    ```

2.  **Install dependencies:**

    ```bash
    cd Lab5-React-Native
    npm install
    ```

3.  **Start Metro:**

    ```bash
    npm start
    ```

4.  **Run on Android or iOS:**

    In a new terminal, run one of the following commands:

    ```bash
    # For Android
    npm run android

    # For iOS
    npm run ios
    ```

## Project Structure

The project structure is as follows:

```
.
├── android/
├── ios/
├── src/
│   ├── components/
│   │   └── PlatformButton/
│   │       ├── PlatformButton.android.js
│   │       └── PlatformButton.ios.js
│   └── screens/
│       └── SettingsScreen.js
├── App.tsx
└── ...
```

### Key files:

*   `App.tsx`: The main component of the application.
*   `src/screens/SettingsScreen.js`: The screen that displays the settings UI.
*   `src/components/PlatformButton/PlatformButton.android.js`: The Android-specific implementation of the button.
*   `src/components/PlatformButton/PlatformButton.ios.js`: The iOS-specific implementation of the button.