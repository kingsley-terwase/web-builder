import React from 'react';
import {
    Box,
    Drawer,
    Typography,
    Divider,
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    useTheme,
} from '@mui/material';
import {
    ExpandMore,
    Palette,
    FormatSize,
    BorderStyle,
    Close,
    WidthFull,
    SpaceBar,
} from '@mui/icons-material';

const PropertiesSidebar = ({ open, onClose }) => {
    const theme = useTheme();

    const colorOptions = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
        '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#AAB7B8',
    ];

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            variant="persistent"
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 320,
                    borderRadius:0,
                    boxSizing: 'border-box',
                    bgcolor: theme.palette.background.paper,
                    borderLeft: `1px solid ${theme.palette.divider}`,
                    top: '66px',
                    height: 'calc(100% - 66px)',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        bgcolor: theme.palette.background.paper,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        bgcolor: theme.palette.divider,
                        borderRadius: '4px',
                        '&:hover': {
                            bgcolor: theme.palette.action.hover,
                        },
                    },
                },
            }}
        >
            <Box sx={{ p: 2 }}>
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                        Properties
                    </Typography>                    
                </Box>

                {/* Dimensions Section */}
                <Accordion 
                    defaultExpanded
                    sx={{ 
                        bgcolor: 'transparent',
                        boxShadow: 'none',
                        '&:before': { display: 'none' },
                        mb: 1,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            px: 2,
                            borderRadius: '4px',
                            bgcolor: theme.palette.action.hover,
                            '& .MuiAccordionSummary-content': { my: 1 },
                            '&:hover': {
                                bgcolor: theme.palette.action.selected,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <WidthFull fontSize="small" sx={{ color: theme.palette.primary.main }} />
                            <Typography sx={{ fontWeight: 600 }}>Dimensions</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2, pt: 2, borderRadius: '4px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Width"
                                size="small"
                                defaultValue="100%"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                            <TextField
                                label="Height"
                                size="small"
                                defaultValue="auto"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                            <TextField
                                label="Min Width"
                                size="small"
                                defaultValue="0"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                            <TextField
                                label="Max Width"
                                size="small"
                                defaultValue="none"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 1 }} />

                {/* Spacing Section */}
                <Accordion 
                    sx={{ 
                        bgcolor: 'transparent',
                        boxShadow: 'none',
                        '&:before': { display: 'none' },
                        borderRadius: '4px',
                        mb: 1,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            px: 2,
                            borderRadius: '4px',
                            bgcolor: theme.palette.action.hover,
                            '& .MuiAccordionSummary-content': { my: 1 },
                            '&:hover': {
                                bgcolor: theme.palette.action.selected,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SpaceBar fontSize="small" sx={{ color: theme.palette.primary.main }} />
                            <Typography sx={{ fontWeight: 600 }}>Spacing</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2, pt: 2, borderRadius: '4px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Padding"
                                size="small"
                                defaultValue="16"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                            <TextField
                                label="Margin"
                                size="small"
                                defaultValue="0"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 1 }} />

                {/* Colors Section */}
                <Accordion 
                    defaultExpanded
                    sx={{ 
                        bgcolor: 'transparent',
                        boxShadow: 'none',
                        '&:before': { display: 'none' },
                        borderRadius: '4px',
                        mb: 1,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            px: 2,
                            borderRadius: '4px',
                            bgcolor: theme.palette.action.hover,
                            '& .MuiAccordionSummary-content': { my: 1 },
                            '&:hover': {
                                bgcolor: theme.palette.action.selected,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Palette fontSize="small" sx={{ color: theme.palette.primary.main }} />
                            <Typography sx={{ fontWeight: 600 }}>Colors</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2, pt: 2, borderRadius: '4px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, mb: 1, display: 'block' }}>
                                    Background Color
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {colorOptions.map((color, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                bgcolor: color,
                                                borderRadius: 1,
                                                cursor: 'pointer',
                                                border: `2px solid ${theme.palette.divider}`,
                                                transition: 'all 0.2s',
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                    borderColor: theme.palette.primary.main,
                                                },
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <TextField
                                label="Text Color"
                                size="small"
                                defaultValue="#000000"
                                fullWidth
                                type="color"
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 1 }} />

                {/* Typography Section */}
                <Accordion 
                    sx={{ 
                        bgcolor: 'transparent',
                        boxShadow: 'none',
                        '&:before': { display: 'none' },
                        borderRadius: '4px',
                        mb: 1,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            px: 2,
                            borderRadius: '4px',
                            bgcolor: theme.palette.action.hover,
                            '& .MuiAccordionSummary-content': { my: 1 },
                            '&:hover': {
                                bgcolor: theme.palette.action.selected,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FormatSize fontSize="small" sx={{ color: theme.palette.primary.main }} />
                            <Typography sx={{ fontWeight: 600 }}>Typography</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2, pt: 2, borderRadius: '4px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Font Size"
                                size="small"
                                defaultValue="14"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                            <TextField
                                label="Font Weight"
                                size="small"
                                defaultValue="400"
                                fullWidth
                            />
                            <TextField
                                label="Line Height"
                                size="small"
                                defaultValue="1.5"
                                fullWidth
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 1 }} />

                {/* Border & Effects Section */}
                <Accordion 
                    sx={{ 
                        bgcolor: 'transparent',
                        boxShadow: 'none',
                        '&:before': { display: 'none' },
                        borderRadius: '4px',
                        mb: 1,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            px: 2,
                            borderRadius: '4px',
                            bgcolor: theme.palette.action.hover,
                            '& .MuiAccordionSummary-content': { my: 1 },
                            '&:hover': {
                                bgcolor: theme.palette.action.selected,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <BorderStyle fontSize="small" sx={{ color: theme.palette.primary.main }} />
                            <Typography sx={{ fontWeight: 600 }}>Border & Effects</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2, pt: 2, borderRadius: '4px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Border Radius"
                                size="small"
                                defaultValue="4"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                            <TextField
                                label="Border Width"
                                size="small"
                                defaultValue="1"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>px</Typography>,
                                }}
                            />
                            <TextField
                                label="Opacity"
                                size="small"
                                defaultValue="100"
                                fullWidth
                                InputProps={{
                                    endAdornment: <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>%</Typography>,
                                }}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Drawer>
    );
};

export default PropertiesSidebar;