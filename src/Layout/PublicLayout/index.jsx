import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SideBar';

function PublicLayout({ children }) {
  const location = useLocation();

  const noLayoutRoutes = ["/register", "/login"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);
  const isDashboardRoute = location.pathname === "/" || location.pathname === "/dashboard";
  const isEditorRoute = location.pathname === "/editor" || location.pathname.startsWith("/editor/");

  return (
    <>
      {!hideLayout && <Header />}
      <Box sx={{ display: "flex", overflowX: 'hidden', width: '100%', minHeight: "100vh" }}>
        {!hideLayout && (
          <Box component="nav">
            <Sidebar />
          </Box>
        )}

        <Box
          component="main"
          sx={{
            width: '100%',
            mx: 'auto',
            bgcolor: isEditorRoute ? '#E5E5E5' : '#000',
            boxSizing: 'border-box',
            transition: 'background-color 0.3s ease',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default PublicLayout;