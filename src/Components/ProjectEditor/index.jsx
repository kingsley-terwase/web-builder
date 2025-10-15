import React from 'react';
import { Box, Typography, Button, useTheme, Card, CardContent, IconButton } from '@mui/material';
import { Widgets, Image, TextFields, CheckBox, Close } from '@mui/icons-material';

const ProjectEditor = ({ onBackToDashboard, onComponentSelect, onClose }) => {
    const theme = useTheme();

    const components = [
        { name: 'Box Component', icon: <Widgets sx={{ fontSize: 40 }} />, type: 'Container' },
        { name: 'Text Component', icon: <TextFields sx={{ fontSize: 40 }} />, type: 'Typography' },
        { name: 'Image Component', icon: <Image sx={{ fontSize: 40 }} />, type: 'Media' },
        { name: 'Button Component', icon: <CheckBox sx={{ fontSize: 40 }} />, type: 'Input' },
    ];

    const handleComponentClick = (componentName) => {
        if (onComponentSelect) {
            onComponentSelect(componentName);
        }
    };

    return (
        <Box
            sx={{
                pt: 11,
                pl: 12,
                pr: 2.5,
                pb: 2,
            }}
        >
            <Box sx={{ mx: 'auto' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        bgcolor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 3,
                        px: 3,
                        py: 3,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                mb: 1,
                            }}
                        >
                            Project Editor
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                mb: 3,
                            }}
                        >
                            Your project editing tools are now active. Click on any component below to edit its properties.
                        </Typography>
                    </Box>
                    <Box sx={{ display:'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
                        <IconButton
                            size="small"
                            onClick={onClose}
                            sx={{
                                mb:3,
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.error.main,
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Close />
                        </IconButton>
                        <Button
                            variant="contained"
                            onClick={onBackToDashboard}
                            sx={{
                                bgcolor: theme.palette.primary.dark,
                                color: theme.palette.primary.contrastText,
                                textTransform: 'none',
                                px: 4,
                                py: 1,
                                fontSize: 16,
                                fontWeight: 600,
                                '&:hover': {
                                    bgcolor: theme.palette.primary.main,
                                },
                            }}
                        >
                            Back to Dashboard
                        </Button>
                    </Box>
                </Box>

                {/* <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 3,
                        }}
                    >
                        Select a Component to Edit
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(4, 1fr)',
                            },
                            gap: 3,
                        }}
                    >
                        {components.map((component, index) => (
                            <Card
                                key={index}
                                onClick={() => handleComponentClick(component.name)}
                                sx={{
                                    bgcolor: theme.palette.background.paper,
                                    border: `2px solid ${theme.palette.divider}`,
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: theme.palette.primary.main,
                                        boxShadow: theme.shadows[8],
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        gap: 2,
                                        p: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: theme.palette.primary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 70,
                                            height: 70,
                                            borderRadius: '50%',
                                            bgcolor: theme.palette.action.hover,
                                        }}
                                    >
                                        {component.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: 16,
                                        }}
                                    >
                                        {component.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: 12,
                                        }}
                                    >
                                        {component.type}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        mt: 4,
                        p: 3,
                        bgcolor: theme.palette.action.hover,
                        borderRadius: 2,
                        border: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            textAlign: 'center',
                        }}
                    >
                        💡 Tip: Click on any component above to open the properties panel on the right and customize its appearance
                    </Typography>
                </Box> */}
            </Box>
        </Box>
    );
};

export default ProjectEditor