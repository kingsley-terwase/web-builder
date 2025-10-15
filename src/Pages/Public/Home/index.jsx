import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => {

  return (
    <Box sx={{ 
      display: 'flex',
      width: '100%',
      height: '100vh',
      overflowX: 'hidden',
      color: '#fff',
      py:14,
      px:12,
    }}>
      <Typography>
         Main Area
      </Typography>
    </Box>
  );
};

export default HomePage;