import React, { useState } from 'react'; 
import { ThemeProvider } from 'styled-components';

import AppNavigator from './src/Navigation/AppNavigator';
import { FavoritesProvider } from './src/Context/Favouritescontext';
import { ThemeContext } from './src/Context/Themecontext';
import colors from './src/Styles/styles';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    colors: isDarkMode ? colors.dark : colors.light,
    toggleDarkMode: () => setIsDarkMode(!isDarkMode),
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode: theme.toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <FavoritesProvider>
          <AppNavigator />
        </FavoritesProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
