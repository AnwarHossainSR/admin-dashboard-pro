import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, useMode } from './context/theme';
import Dashboard from './pages/dashboard';
import Sidebar from './pages/global/Sidebar';
import Topbar from './pages/global/Topbar';

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
