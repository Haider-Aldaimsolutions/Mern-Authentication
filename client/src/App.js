
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUP from './screens/signUp';
import Login from './screens/login';

import { Box } from '@mui/system';

export default function app() {

  return (

    <Router>
      <Box sx={{ mb: 7 }} />
      <Routes>
        <Route exact path="/sign-up" element={<SignUP />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}
