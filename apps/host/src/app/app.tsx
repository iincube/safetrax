import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import { NxWelcome } from '@safetrax/ui-components';
import { Box } from '@mui/material';
import { LanguageSelector } from '@safetrax/locales';

const Dashboard = React.lazy(() => import('dashboard/Module'));

const Duties = React.lazy(() => import('duties/Module'));

export function App() {
  const handleLanguageChange = (languageCode: string) => {
    // Handle language change logic here
    console.log(`Selected language: ${languageCode}`);
  };
  return (
    <React.Suspense fallback={null}>
      <Box
        component="img"
        alt="The house from the offer."
        src="https://www.safetrax.in/upload/logo-top.png"
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <LanguageSelector onChange={handleLanguageChange} />
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/duties">Duties</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome appName={'host'} />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/duties" element={<Duties />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
