import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [mode, setMode] = React.useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App toggleDarkMode={toggleDarkMode} mode={mode} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

root.render(<Main />);