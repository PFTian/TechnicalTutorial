# Create Theme for React Native App

1. Create a custom theme to support multiple themes from other libraries

For example, if we have `react-navigation` and `react-native-paper` which support Themes, we need to support `react-navigation` theme, `react-native-papaer` theme and our theme together.

Create a `theme.js` file with below code

```javascript
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

export const defaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
  },
};

export const darkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
  },
};
```

2. Create `contexts\ThemeProvider\index.js`

```javascript
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { defaultTheme, darkTheme } from '../../helpers/theme';

const ThemeContext = createContext();

export const THEMES = {
  Light: 'light',
  Dark: 'dark',
  Default: 'light',
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const setThemeMode = (themeMode) => {
    switch (themeMode) {
      case THEMES.Light:
        setTheme(defaultTheme);
        break;
      case THEMES.Dark:
        setTheme(darkTheme);
        break;
      // case other theme modes
      default:
        setTheme(defaultTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
```

3. Wrap the whole app in the `ThemeProvider`

```javascript
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootStackNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};
```

4. Add `AsyncStorage` to the app

```bash
npm install @react-native-async-storage/async-storage
```

5. Get the theme value from the async storage when app launches.

```diff
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

+  useEffect(() => {
+    getThemeMode();
+  }, [getThemeMode]);
+
+  const getThemeMode = useCallback(async () => {
+    try {
+      const themeMode = await AsyncStorage.getItem('themeMode');
+      setThemeMode(themeMode);
+    } catch (e) {}
+  }, []);

  const setThemeMode = (themeMode) => {
    switch (themeMode) {
      case THEMES.Light:
        setTheme(defaultTheme);
        break;
      case THEMES.Dark:
        setTheme(darkTheme);
        break;
      // case other theme modes
      default:
        setTheme(defaultTheme);
    }
  };

  return <ThemeContext.Provider value={{ theme, setThemeMode }}>{children}</ThemeContext.Provider>;
};
```

6. Store the theme into the async storage.

We can add a `<Switch />` button into a screen to switch the theme and save the theme value into the async storage .

```diff
const Home = ({ navigation }) => {
 const { container } = styles;

 const { theme, setThemeMode } = useTheme();

+  const [isSwitchOn, setIsSwitchOn] = React.useState(theme.dark);

+  useEffect(() => {
+    setAppTheme(isSwitchOn ? THEMES.Dark : THEMES.Light);
+  }, [isSwitchOn, setAppTheme]);

+  const setAppTheme = useCallback(
+    async (themeMode) => {
+      try {
+        await AsyncStorage.setItem('themeMode', themeMode);
+        setThemeMode(themeMode);
+      } catch (e) {}
+    },
+    [setThemeMode],
+  );

 return (
   <View style={[container, { backgroundColor: theme.backgroundColor }]}>
     <Button
       title="Go to details page"
       onPress={() => {
         navigation.navigate('details');
       }}
     />
+      <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
     <Text>{theme.dark.toString()}</Text>
   </View>
 );
};

```
