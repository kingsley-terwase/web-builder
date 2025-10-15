import React, { useState } from 'react';
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  Select,
  MenuItem,
  FormControl,
  Slider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import {
  Palette,
  Language,
  Notifications,
  Security,
  Visibility,
  Code,
  CloudUpload,
  Save,
  Restore,
  DeleteOutline,
  ContentCopy,
  Download,
  Share,
  KeyboardArrowRight,
} from '@mui/icons-material';

const SettingsPanel = ({ onSelect }) => {
  const [settings, setSettings] = useState({
    autoSave: true,
    snapToGrid: true,
    showRulers: false,
    showGrid: true,
    language: 'en',
    theme: 'dark',
    gridSize: 10,
  });

  const handleToggle = (key) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    if (onSelect) {
      onSelect({ type: 'setting', key, value: newSettings[key] });
    }
  };

  const handleChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    if (onSelect) {
      onSelect({ type: 'setting', key, value });
    }
  };

  const settingsSections = [
    {
      title: 'General',
      items: [
        {
          icon: <Save />,
          label: 'Auto Save',
          type: 'toggle',
          key: 'autoSave',
          description: 'Automatically save your changes',
        },
        {
          icon: <Language />,
          label: 'Language',
          type: 'select',
          key: 'language',
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' },
            { value: 'de', label: 'German' },
          ],
        },
      ],
    },
    {
      title: 'Canvas',
      items: [
        {
          icon: <Visibility />,
          label: 'Show Grid',
          type: 'toggle',
          key: 'showGrid',
          description: 'Display grid lines on canvas',
        },
        {
          icon: <Visibility />,
          label: 'Show Rulers',
          type: 'toggle',
          key: 'showRulers',
          description: 'Display rulers around canvas',
        },
        {
          icon: <Visibility />,
          label: 'Snap to Grid',
          type: 'toggle',
          key: 'snapToGrid',
          description: 'Snap elements to grid',
        },
        {
          icon: <Code />,
          label: 'Grid Size',
          type: 'slider',
          key: 'gridSize',
          min: 5,
          max: 50,
          description: 'Adjust grid spacing',
        },
      ],
    },
    {
      title: 'Appearance',
      items: [
        {
          icon: <Palette />,
          label: 'Theme',
          type: 'select',
          key: 'theme',
          options: [
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' },
            { value: 'auto', label: 'Auto' },
          ],
        },
      ],
    },
    {
      title: 'Actions',
      items: [
        {
          icon: <CloudUpload />,
          label: 'Import Project',
          type: 'action',
          action: 'import',
        },
        {
          icon: <Download />,
          label: 'Export Project',
          type: 'action',
          action: 'export',
        },
        {
          icon: <ContentCopy />,
          label: 'Duplicate Page',
          type: 'action',
          action: 'duplicate',
        },
        {
          icon: <Share />,
          label: 'Share',
          type: 'action',
          action: 'share',
        },
        {
          icon: <Restore />,
          label: 'Restore Version',
          type: 'action',
          action: 'restore',
        },
        {
          icon: <DeleteOutline />,
          label: 'Clear Canvas',
          type: 'action',
          action: 'clear',
          danger: true,
        },
      ],
    },
  ];

  const handleActionClick = (action, item) => {
    if (onSelect) {
      onSelect({ type: 'action', action, item });
    }
    console.log('Action clicked:', action);
  };

  return (
    <Box sx={{ 
      height: '100%', 
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#0f1419',
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#374151',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#4b5563',
        },
      },
      // Hide scrollbar arrows (chevrons)
      '&::-webkit-scrollbar-button': {
        display: 'none',
      },
    }}>
      {/* Header */}
      <Box sx={{ p: 3, borderBottom: '1px solid #1f2937' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff' }}>
          Settings
        </Typography>
        <Typography variant="caption" sx={{ color: '#94a3b8' }}>
          Configure your workspace
        </Typography>
      </Box>

      {/* Settings Sections */}
      {settingsSections.map((section, sectionIdx) => (
        <Box key={sectionIdx} sx={{ mb: 2 }}>
          <Box sx={{ px: 3, py: 2 }}>
            <Typography
              variant="overline"
              sx={{ color: '#64748b', fontWeight: 600, fontSize: '11px' }}
            >
              {section.title}
            </Typography>
          </Box>

          <List sx={{ py: 0 }}>
            {section.items.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.type === 'toggle' && (
                  <ListItem
                    sx={{
                      px: 3,
                      py: 1.5,
                      '&:hover': { bgcolor: '#1a1f2e' },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: '#94a3b8' }}>
                      {item.icon}
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        {item.label}
                      </Typography>
                      {item.description && (
                        <Typography
                          variant="caption"
                          sx={{ color: '#64748b', display: 'block' }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                    <Switch
                      checked={settings[item.key]}
                      onChange={() => handleToggle(item.key)}
                      size="small"
                    />
                  </ListItem>
                )}

                {item.type === 'select' && (
                  <ListItem
                    sx={{
                      px: 3,
                      py: 1.5,
                      '&:hover': { bgcolor: '#1a1f2e' },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: '#94a3b8' }}>
                      {item.icon}
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ color: '#fff', mb: 1 }}>
                        {item.label}
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={settings[item.key]}
                          onChange={(e) => handleChange(item.key, e.target.value)}
                          sx={{
                            bgcolor: '#1f2937',
                            color: '#fff',
                            '.MuiOutlinedInput-notchedOutline': {
                              borderColor: '#374151',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#4b5563',
                            },
                            '& .MuiSelect-icon': {
                              color: '#94a3b8',
                            },
                          }}
                        >
                          {item.options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </ListItem>
                )}

                {item.type === 'slider' && (
                  <ListItem
                    sx={{
                      px: 3,
                      py: 1.5,
                      '&:hover': { bgcolor: '#1a1f2e' },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: '#94a3b8' }}>
                      {item.icon}
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                          {item.label}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#2563eb',
                            fontWeight: 600,
                            bgcolor: '#1e3a8a',
                            px: 1,
                            py: 0.25,
                            borderRadius: 1,
                          }}
                        >
                          {settings[item.key]}px
                        </Typography>
                      </Box>
                      {item.description && (
                        <Typography
                          variant="caption"
                          sx={{ color: '#64748b', display: 'block', mb: 1 }}
                        >
                          {item.description}
                        </Typography>
                      )}
                      <Slider
                        value={settings[item.key]}
                        onChange={(e, value) => handleChange(item.key, value)}
                        min={item.min}
                        max={item.max}
                        size="small"
                        sx={{
                          color: '#2563eb',
                          '& .MuiSlider-thumb': {
                            width: 16,
                            height: 16,
                          },
                        }}
                      />
                    </Box>
                  </ListItem>
                )}

                {item.type === 'action' && (
                  <ListItemButton
                    onClick={() => handleActionClick(item.action, item)}
                    sx={{
                      px: 3,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: item.danger ? '#7f1d1d' : '#1a1f2e',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 40,
                        color: item.danger ? '#ef4444' : '#94a3b8',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: item.danger ? '#ef4444' : '#fff',
                          fontSize: '14px',
                        },
                      }}
                    />
                    <KeyboardArrowRight sx={{ color: '#64748b' }} />
                  </ListItemButton>
                )}
              </React.Fragment>
            ))}
          </List>

          {sectionIdx < settingsSections.length - 1 && (
            <Divider sx={{ borderColor: '#1f2937', my: 1 }} />
          )}
        </Box>
      ))}


      <Box sx={{ p: 3, mt: 2, borderTop: '1px solid #1f2937' }}>
        <Typography variant="caption" sx={{ color: '#64748b', display: 'block' }}>
          Version 1.0.0
        </Typography>
        <Typography variant="caption" sx={{ color: '#64748b' }}>
          © 2025 Website Builder
        </Typography>
      </Box>
    </Box>
  );
};

export default SettingsPanel;