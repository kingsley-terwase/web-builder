import React from 'react';
import { Box, Typography, IconButton, FormControl, Select, MenuItem, TextField } from '@mui/material';
import {
    FormatBold,
    FormatItalic,
    FormatUnderlined,
    GridOn,
    ViewColumn,
    TableRows,
} from '@mui/icons-material';

const LayoutCmpPanel = ({

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
        </Box>
    );
};

export default LayoutCmpPanel;
