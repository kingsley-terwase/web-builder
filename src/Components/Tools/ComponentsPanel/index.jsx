import React from 'react';
import { Box, Typography, Button, FormControl, Select, MenuItem } from '@mui/material';
import {
  List,
  TableRows,
  Map,
  CheckBox,
  Person,
  RadioButtonChecked,
  Article,
  VideoLibrary,
  PieChart,
  TableChart,
} from '@mui/icons-material';

const ComponentsPanel = () => {
  const basicComponents = [
    { icon: <List />, label: 'List' },
    { icon: <TableRows />, label: 'Section' },
    { icon: <Map />, label: 'Map' },
    { icon: <CheckBox />, label: 'Checkbox' },
    { icon: <Person />, label: 'User' },
    { icon: <RadioButtonChecked />, label: 'Radio Button' },
    { icon: <Article />, label: 'Paragraph' },
    { icon: <VideoLibrary />, label: 'Video' },
    { icon: <PieChart />, label: 'Pie Chart' },
    { icon: <TableChart />, label: 'Table' },
  ];

  return (
    <Box sx={{ 
      width: '340px',
      bgcolor: '#141924',
      overflowY: 'auto'
    }}>
      {/* Action Buttons */}
      <Box sx={{ 
        borderBottom: '1px solid #1f2937',
        p: 2,
        display: 'flex',
        gap: 2
      }}>
        <Button 
          variant="contained"
          sx={{ 
            flex: 1,
            bgcolor: '#2563eb',
            textTransform: 'none',
            '&:hover': { bgcolor: '#1d4ed8' }
          }}
        >
          Update
        </Button>
        <Button 
          variant="outlined"
          sx={{ 
            flex: 1,
            borderColor: '#374151',
            color: '#fff',
            textTransform: 'none',
            '&:hover': { borderColor: '#4b5563', bgcolor: 'transparent' }
          }}
        >
          Exit
        </Button>
      </Box>

      {/* Components */}
      <Box sx={{ p: 2 }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <Select
            value="Basic"
            sx={{ 
              bgcolor: '#1f2937',
              color: '#fff',
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#374151' },
            }}
          >
            <MenuItem value="Basic">Basic</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2
        }}>
          {basicComponents.map((item, idx) => (
            <Box
              key={idx}
              sx={{ 
                bgcolor: '#1f2937',
                borderRadius: 2,
                p: 2.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                minHeight: 90,
                '&:hover': { bgcolor: '#2a3441' }
              }}
            >
              <Box sx={{ color: '#94a3b8', fontSize: 32 }}>
                {item.icon}
              </Box>
              <Typography variant="caption" sx={{ color: '#94a3b8', textAlign: 'center', fontSize: '11px' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentsPanel;

