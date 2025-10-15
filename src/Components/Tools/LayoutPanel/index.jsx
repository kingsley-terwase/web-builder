import React from 'react';
import { Box, Typography, IconButton, FormControl, Select, MenuItem, TextField } from '@mui/material';
import {
    FormatBold,
    FormatItalic,
    FormatUnderlined,
    FormatAlignLeft,
    FormatAlignCenter,
    FormatAlignRight,
    FormatAlignJustify,
    GridOn,
    ViewColumn,
    TableRows,
} from '@mui/icons-material';

const LayoutPanel = ({
    selectedSection,
    setSelectedSection,
    fontFamily,
    setFontFamily,
    fontWeight,
    setFontWeight,
    fontSize,
    setFontSize,
    color,
    setColor,
    alignment,
    setAlignment
}) => {
    const layoutComponents = [
        { icon: <Box sx={{ width: 40, height: 30, bgcolor: '#3a4559', borderRadius: 1 }} />, label: 'Section' },
        { icon: <Box sx={{ width: 40, height: 30, border: '2px dashed #64748b', borderRadius: 1 }} />, label: 'Container' },
        { icon: <GridOn sx={{ fontSize: 30, color: '#fff' }} />, label: 'Grid' },
        { icon: <ViewColumn sx={{ fontSize: 30, color: '#fff' }} />, label: 'Columns' },
        { icon: <TableRows sx={{ fontSize: 30, color: '#fff' }} />, label: 'Lists' },
    ];

    return (
        <Box sx={{
            width: '340px',
            bgcolor: '#141924',
            overflowY: 'auto',
            borderRight: '1px solid #1f2937'
        }}>
            {/* Layout Section */}
            <Box sx={{ p: 2, borderBottom: '1px solid #1f2937' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: '18px' }}>
                    Layout
                </Typography>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 1.5
                }}>
                    {layoutComponents.map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                bgcolor: '#1f2937',
                                borderRadius: 2,
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1,
                                cursor: 'pointer',
                                '&:hover': { bgcolor: '#2a3441' }
                            }}
                        >
                            {item.icon}
                            <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '11px' }}>
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <IconButton
                        size="small"
                        sx={{ bgcolor: '#1f2937', color: '#fff', '&:hover': { bgcolor: '#2a3441' } }}
                    >
                        <FormatBold />
                    </IconButton>
                    <IconButton
                        size="small"
                        sx={{ bgcolor: '#1f2937', color: '#fff', '&:hover': { bgcolor: '#2a3441' } }}
                    >
                        <FormatItalic />
                    </IconButton>
                    <IconButton
                        size="small"
                        sx={{ bgcolor: '#1f2937', color: '#fff', '&:hover': { bgcolor: '#2a3441' } }}
                    >
                        <FormatUnderlined />
                    </IconButton>
                </Box>
            </Box>

            {/* Selector Section */}
            <Box sx={{ p: 2, borderBottom: '1px solid #1f2937' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: '18px' }}>
                    Selector
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <Select
                        value={selectedSection}
                        onChange={(e) => setSelectedSection(e.target.value)}
                        sx={{
                            bgcolor: '#1f2937',
                            color: '#fff',
                            '.MuiOutlinedInput-notchedOutline': { borderColor: '#374151' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4b5563' },
                        }}
                    >
                        <MenuItem value="Hero Section">Hero Section</MenuItem>
                        <MenuItem value="Header">Header</MenuItem>
                        <MenuItem value="Footer">Footer</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <Select
                        value={selectedSection}
                        onChange={(e) => setSelectedSection(e.target.value)}
                        sx={{
                            bgcolor: '#1f2937',
                            color: '#fff',
                            '.MuiOutlinedInput-notchedOutline': { borderColor: '#374151' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4b5563' },
                        }}
                    >
                        <MenuItem value="Hero Section">Hero Section</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Typography Section */}
            <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: '18px' }}>
                    Typography
                </Typography>

                <Typography variant="caption" sx={{ color: '#94a3b8', mb: 1, display: 'block' }}>
                    Font Family
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <Select
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        sx={{
                            bgcolor: '#1f2937',
                            color: '#fff',
                            '.MuiOutlinedInput-notchedOutline': { borderColor: '#374151' },
                        }}
                    >
                        <MenuItem value="Hero Section">Hero Section</MenuItem>
                        <MenuItem value="Arial">Arial</MenuItem>
                        <MenuItem value="Helvetica">Helvetica</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" sx={{ color: '#94a3b8', mb: 1, display: 'block' }}>
                            Weight
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={fontWeight}
                                onChange={(e) => setFontWeight(e.target.value)}
                                sx={{
                                    bgcolor: '#1f2937',
                                    color: '#fff',
                                    '.MuiOutlinedInput-notchedOutline': { borderColor: '#374151' },
                                }}
                            >
                                <MenuItem value="Semi-Bold">Semi-Bold</MenuItem>
                                <MenuItem value="Bold">Bold</MenuItem>
                                <MenuItem value="Regular">Regular</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" sx={{ color: '#94a3b8', mb: 1, display: 'block' }}>
                            Size
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={fontSize}
                                onChange={(e) => setFontSize(e.target.value)}
                                sx={{
                                    bgcolor: '#1f2937',
                                    color: '#fff',
                                    '.MuiOutlinedInput-notchedOutline': { borderColor: '#374151' },
                                }}
                            >
                                <MenuItem value="60px">60px</MenuItem>
                                <MenuItem value="48px">48px</MenuItem>
                                <MenuItem value="36px">36px</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Typography variant="caption" sx={{ color: '#94a3b8', mb: 1, display: 'block' }}>
                    Color
                </Typography>
                <TextField
                    fullWidth
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    sx={{
                        mb: 2,
                        '.MuiOutlinedInput-root': {
                            bgcolor: '#1f2937',
                            color: '#fff',
                            '.MuiOutlinedInput-notchedOutline': { borderColor: '#374151' },
                        }
                    }}
                />

                <Typography variant="caption" sx={{ color: '#94a3b8', mb: 1, display: 'block' }}>
                    Text Align
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                        sx={{
                            bgcolor: alignment === 'left' ? '#2563eb' : '#1f2937',
                            color: '#fff',
                            '&:hover': { bgcolor: alignment === 'left' ? '#1d4ed8' : '#2a3441' }
                        }}
                        onClick={() => setAlignment('left')}
                    >
                        <FormatAlignLeft />
                    </IconButton>
                    <IconButton
                        sx={{
                            bgcolor: alignment === 'center' ? '#2563eb' : '#1f2937',
                            color: '#fff',
                            '&:hover': { bgcolor: alignment === 'center' ? '#1d4ed8' : '#2a3441' }
                        }}
                        onClick={() => setAlignment('center')}
                    >
                        <FormatAlignCenter />
                    </IconButton>
                    <IconButton
                        sx={{
                            bgcolor: alignment === 'right' ? '#2563eb' : '#1f2937',
                            color: '#fff',
                            '&:hover': { bgcolor: alignment === 'right' ? '#1d4ed8' : '#2a3441' }
                        }}
                        onClick={() => setAlignment('right')}
                    >
                        <FormatAlignRight />
                    </IconButton>
                    <IconButton
                        sx={{
                            bgcolor: alignment === 'justify' ? '#2563eb' : '#1f2937',
                            color: '#fff',
                            '&:hover': { bgcolor: alignment === 'justify' ? '#1d4ed8' : '#2a3441' }
                        }}
                        onClick={() => setAlignment('justify')}
                    >
                        <FormatAlignJustify />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default LayoutPanel;
