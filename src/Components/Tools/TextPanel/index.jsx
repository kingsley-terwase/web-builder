import React from 'react';
import { Box, Typography } from '@mui/material';

const TextPanel = () => {
  const textComponents = [
    { label: 'Heading', icon: 'H' },
    { label: 'Paragraph', icon: 'P' },
    { label: 'Label', icon: 'L' },
    { label: 'Table', icon: '⊞' },
    { label: 'Text Block', icon: 'T' },
    { label: 'Text Link', icon: 'TL' },
    { label: 'Input', icon: 'I' },
    { label: 'Button', icon: 'B' },
    { label: 'Column', icon: '||' },
  ];

  return (
    <Box sx={{ 
      width: '100%',
      overflowY: 'auto',
      borderRight: '1px solid #374151'
    }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: '18px' }}>
          Text
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1.5
        }}>
          {textComponents.map((item, idx) => (
            <Box
              key={idx}
              sx={{ 
                bgcolor: '#2a3441',
                borderRadius: 1.5,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                minHeight: 70,
                '&:hover': { bgcolor: '#333d4f' }
              }}
            >
              <Box sx={{ 
                width: 40,
                height: 30,
                bgcolor: '#3a4559',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                fontSize: '12px'
              }}>
                {item.icon}
              </Box>
              <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '11px', textAlign: 'center' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TextPanel;