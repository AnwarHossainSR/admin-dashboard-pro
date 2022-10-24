import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, tokens, useMode } from './context/theme';
import Bar from './pages/bar';
import Contacts from './pages/contacts';
import Dashboard from './pages/dashboard';
import FAQ from './pages/faq';
import Form from './pages/form';
import Sidebar from './pages/global/Sidebar';
import Topbar from './pages/global/Topbar';
import Invoices from './pages/invoices';
import Line from './pages/line';
import Pie from './pages/pie';
import Team from './pages/team';

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box className="app">
          <Sidebar isSidebar={isSidebar} />
          <main
            className="content"
            style={{
              background: colors.blueAccent[900],
              height: 'fit-content',
            }}
          >
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
