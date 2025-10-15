import React, { useState } from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { Add, ZoomIn, ZoomOut, FitScreen } from '@mui/icons-material';

const WorkSpace = ({ children, pt, onElementSelect }) => {
  const [zoom, setZoom] = useState(100);
  const [isDragging, setIsDragging] = useState(false);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 25));
  };

  const handleFitScreen = () => {
    setZoom(100);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 66px)',
        bgcolor: '#E5E5E5',
        position: 'relative',
        overflow: 'auto',
        pt: pt,
        pl: 12,
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          bgcolor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-thumb': {
          bgcolor: '#BDBDBD',
          borderRadius: '4px',
          '&:hover': {
            bgcolor: '#9E9E9E',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          bgcolor: '#000',
          borderRadius: 3,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 2,
          py: 1,
          zIndex: 100,
        }}
      >
        <IconButton 
          size="small" 
          onClick={handleZoomOut} 
          disabled={zoom <= 25}
          sx={{
            color: 'white',
            '&:disabled': {
              color: 'rgba(255,255,255,0.3)',
            },
          }}
        >
          <ZoomOut fontSize="small" />
        </IconButton>
        
        <Typography
          variant="body2"
          sx={{
            minWidth: 50,
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 14,
            color: 'white',
          }}
        >
          {zoom}%
        </Typography>
        
        <IconButton 
          size="small" 
          onClick={handleZoomIn} 
          disabled={zoom >= 200}
          sx={{
            color: 'white',
            '&:disabled': {
              color: 'rgba(255,255,255,0.3)',
            },
          }}
        >
          <ZoomIn fontSize="small" />
        </IconButton>
        
        <Box
          sx={{
            width: '1.5px',
            height: '24px',
            bgcolor: 'rgba(255,255,255,0.2)',
            mx: 1,
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />
        
        <IconButton 
          size="small" 
          onClick={handleFitScreen}
          sx={{
            color: 'white',
          }}
        >
          <FitScreen fontSize="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          minHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          py: 1,
          px: 1,
        }}
      >
        {/* The Actual Canvas/Page */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 1200,
            minHeight: 800,
            bgcolor: 'white',
            borderRadius: 1,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease',
            position: 'relative',
            cursor: isDragging ? 'grabbing' : 'default',
            zIndex: 1,
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* Empty State */}
          {!children && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 600,
                color: '#999',
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: '#F5F5F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Add sx={{ fontSize: 40, color: '#BDBDBD' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#757575',
                  mb: 1,
                }}
              >
                Start designing
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#999',
                  textAlign: 'center',
                  maxWidth: 400,
                }}
              >
                Drag and drop components from the left panel or select a template to get started
              </Typography>
            </Box>
          )}

          {children}
        </Box>
      </Box>

     
    </Box>
  );
};

export default WorkSpace;