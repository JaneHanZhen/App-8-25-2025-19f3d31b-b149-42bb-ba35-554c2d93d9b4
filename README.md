> **📱 React Native Template README** - Documentation for the Expo/React Native starter template used by the backend's AI code generation feature to create mobile apps.

# React Native Starter Template
A minimal [Expo](https://expo.dev) starter template designed for LLM-assisted development.

## Project Structure

```
app/
├── (tabs)/                  # Tab-based navigation directory (expo-router)
│   ├── _layout.tsx         # Tab configuration - Add new tabs here
│   └── index.tsx          # Home screen - Basic React Native components
└── +not-found.tsx         # Error screen - Basic React Native components

# Extension Points
1. New Screens: Add .tsx files in app/(tabs)/ for new tabs
2. Components: Create new directory 'components/' for reusable UI
3. Navigation: Modify _layout.tsx to add/modify tabs
4. Styling: Add 'styles/' directory for theme/styling constants
5. State: Add 'store/' directory for state management
6. API: Add 'api/' directory for backend communication
```

## Code Patterns

- Components use basic React Native elements (`View`, `Text`)
- Navigation uses expo-router file-based routing
- Styles defined within component files using `StyleSheet.create`

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```

2. Local Development
   ```bash
   npx expo start
   ```

3. Deployment (⚠️ Manual Steps Required)

   > Note: The following deployment steps must be executed by you, not by the LLM. 
   > The LLM should help you understand the code and make modifications, but deployment 
   > should always be handled by a human.

   ```bash
   # 1. Install required packages
   npm install -g eas-cli
   npx expo install expo-updates

   # 2. Login to your Expo account
   eas login

   # 3. Configure your project
   eas build:configure

   # 4. Create development build for iOS
   eas build --profile development --platform ios

   # 5. Create and publish an update
   eas update --branch preview --message "First preview release" --auto

   # 6. Start development server
   npx expo start
   ```

   After completing these steps, the development build will be available in your Expo Go app, 
   and you can push updates using EAS Update.

   > Security Note: Never ask the LLM to perform deployment steps or handle credentials. 
   > These operations should always be performed manually by the developer.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [EAS Update documentation](https://docs.expo.dev/eas-update/introduction/)
- [Expo Go](https://expo.dev/client)

