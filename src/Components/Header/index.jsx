import React from 'react';
import {
    Box,
    IconButton,
    Button,
    TextField,
    InputAdornment,
    useTheme,
} from '@mui/material';
import {
    Person,
    Search,
    LightMode,
    DarkMode,
    Laptop,
    Tablet,
    Smartphone,
    Undo,
    Redo,
    Upload,
    ArrowBackIos,
    ReplyAll,
    Logout,
} from '@mui/icons-material';
import { useThemeContext } from '../../Context';
import { Person20Regular, PersonRegular, Search20Regular, } from '@fluentui/react-icons';
import { useNavigate, useLocation } from 'react-router-dom';


const Header = () => {
    const { mode, toggleTheme } = useThemeContext();
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const isEditorView = location.pathname.includes('/editor');

    const handleBack = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: '75px',
                right: 0,
                height: '66px',
                bgcolor: theme.palette.background.paper,
                borderBottom: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 3,
                zIndex: 1200,
            }}
        >
            {isEditorView ? (
                <>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant='contained'
                            onClick={handleBack}
                            sx={{
                                color: theme.palette.text.secondary,
                                bgcolor: theme.palette.action.hover,
                                gap:1,
                                px:2,
                                py:0.7,
                                fontSize: 16,
                                '&:hover': {
                                    color: theme.palette.text.primary,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <ReplyAll />Back
                        </Button>
                        <IconButton
                            sx={{
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.text.primary,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Laptop />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.text.primary,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Tablet />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.text.primary,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Smartphone />
                        </IconButton>
                    </Box>

                    {/* Editor View - Right Side */}
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <IconButton
                            sx={{
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.text.primary,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Undo />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.text.primary,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Redo />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.text.primary,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Upload />
                        </IconButton>
                        <IconButton
                            onClick={toggleTheme}
                            sx={{
                                color: theme.palette.text.secondary,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                    bgcolor: theme.palette.action.hover,
                                    transform: 'rotate(180deg)',
                                },
                            }}
                        >
                            {mode === 'dark' ? <LightMode sx={{ fontSize: 24 }} /> : <DarkMode sx={{ fontSize: 24 }} />}
                        </IconButton>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                                textTransform: 'none',
                                px: 3,
                                fontWeight: 600,
                                '&:hover': {
                                    bgcolor: theme.palette.primary.main,
                                },
                            }}
                        >
                            Publish
                        </Button>
                    </Box>
                </>
            ) : (
                <>
                    {/* Dashboard View - Left Side */}
                    <TextField
                        placeholder="Search projects..."
                        size="small"
                        sx={{
                            maxWidth: '400px',
                            flex: 1,
                            '& .MuiOutlinedInput-root': {
                                bgcolor: theme.palette.action.hover,
                                '& fieldset': {
                                    border: 'none',
                                },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search20Regular style={{ color: theme.palette.text.secondary }} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Dashboard View - Right Side */}
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <IconButton
                            onClick={toggleTheme}
                            sx={{
                                color: theme.palette.text.secondary,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                    bgcolor: theme.palette.action.hover,
                                    transform: 'rotate(180deg)',
                                },
                            }}
                        >
                            {mode === 'dark' ? <LightMode sx={{ fontSize: 24 }} /> : <DarkMode sx={{ fontSize: 24 }} />}
                        </IconButton>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                                textTransform: 'none',
                                px: 2,
                                fontWeight: 600,
                                gap: 1,
                                '&:hover': {
                                    bgcolor: theme.palette.primary.main,
                                },
                            }}
                        >
                            <Person20Regular />
                            Profile
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: theme.palette.error.main,
                                color: theme.palette.common.white,
                                textTransform: 'none',
                                px: 2,
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    bgcolor: theme.palette.error.dark,
                                },
                            }}
                        >
                            <Logout fontSize="small" />
                            Logout
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Header;