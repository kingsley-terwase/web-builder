import React from 'react';
import { Box, Typography, TextField, Button, Grid, Card } from '@mui/material';
import { Upload, Image, VideoLibrary, MusicNote } from '@mui/icons-material';

const MediaPanel = ({ onSelect }) => {
    const mediaTypes = [
        { type: 'image', label: 'Image', icon: <Image /> },
        { type: 'video', label: 'Video', icon: <VideoLibrary /> },
        { type: 'audio', label: 'Audio', icon: <MusicNote /> },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
                Media Library
            </Typography>

            <Button
                fullWidth
                variant="outlined"
                startIcon={<Upload />}
                sx={{
                    color: '#fff',
                    borderColor: '#374151',
                    mb: 3,
                    '&:hover': { borderColor: '#2563eb', bgcolor: 'rgba(37, 99, 235, 0.1)' },
                }}
            >
                Upload Media
            </Button>

            <TextField
                fullWidth
                placeholder="Search media..."
                size="small"
                sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': { borderColor: '#374151' },
                    },
                }}
            />

            <Grid container spacing={2}>
                {mediaTypes.map((media) => (
                    <Grid size={{xs:4}} key={media.type}>
                        <Card
                            sx={{
                                bgcolor: '#1f2937',
                                p: 2,
                                textAlign: 'center',
                                cursor: 'pointer',
                                '&:hover': { bgcolor: '#374151' },
                            }}
                            onClick={() => onSelect?.(media)}
                        >
                            {media.icon}
                            <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block', mt: 1 }}>
                                {media.label}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};



import { Palette, FormatPaint, Brush } from '@mui/icons-material';

const StylePanel = ({ onSelect }) => {
    const colorPresets = [
        { name: 'Primary', colors: ['#2563eb', '#3b82f6', '#60a5fa'] },
        { name: 'Success', colors: ['#10b981', '#34d399', '#6ee7b7'] },
        { name: 'Warning', colors: ['#f59e0b', '#fbbf24', '#fcd34d'] },
        { name: 'Danger', colors: ['#ef4444', '#f87171', '#fca5a5'] },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
                Styles & Colors
            </Typography>

            <Typography variant="subtitle2" sx={{ color: '#9ca3af', mb: 2 }}>
                Color Presets
            </Typography>

            {colorPresets.map((preset) => (
                <Box key={preset.name} sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ color: '#64748b', mb: 1, display: 'block' }}>
                        {preset.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {preset.colors.map((color) => (
                            <Box
                                key={color}
                                onClick={() => onSelect?.({ type: 'color', value: color })}
                                sx={{
                                    width: 40,
                                    height: 40,
                                    bgcolor: color,
                                    borderRadius: 1,
                                    cursor: 'pointer',
                                    border: '2px solid transparent',
                                    '&:hover': { border: '2px solid #fff' },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            ))}

            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle2" sx={{ color: '#9ca3af', mb: 2 }}>
                    Quick Styles
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button
                        variant="outlined"
                        startIcon={<FormatPaint />}
                        sx={{ justifyContent: 'flex-start', color: '#fff', borderColor: '#374151' }}
                    >
                        Background Style
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Brush />}
                        sx={{ justifyContent: 'flex-start', color: '#fff', borderColor: '#374151' }}
                    >
                        Border Style
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Palette />}
                        sx={{ justifyContent: 'flex-start', color: '#fff', borderColor: '#374151' }}
                    >
                        Shadow Effects
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};


import { Description, Add as AddIcon, Folder } from '@mui/icons-material';

const PagesPanel = ({ onSelect }) => {
    const pages = [
        { name: 'Home', path: '/', status: 'Published' },
        { name: 'About', path: '/about', status: 'Draft' },
        { name: 'Services', path: '/services', status: 'Published' },
        { name: 'Contact', path: '/contact', status: 'Draft' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
                Pages
            </Typography>

            <Button
                fullWidth
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                    bgcolor: '#2563eb',
                    mb: 3,
                    '&:hover': { bgcolor: '#1d4ed8' },
                }}
                onClick={() => onSelect?.({ type: 'new-page' })}
            >
                New Page
            </Button>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {pages.map((page) => (
                    <Card
                        key={page.path}
                        sx={{
                            bgcolor: '#1f2937',
                            p: 2,
                            cursor: 'pointer',
                            '&:hover': { bgcolor: '#374151' },
                        }}
                        onClick={() => onSelect?.(page)}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Description sx={{ color: '#9ca3af' }} />
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body2" sx={{ color: '#fff' }}>
                                    {page.name}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#64748b' }}>
                                    {page.path}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    bgcolor: page.status === 'Published' ? '#10b981' : '#f59e0b',
                                    fontSize: '0.7rem',
                                }}
                            >
                                {page.status}
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};


import { ViewModule, Star, TrendingUp } from '@mui/icons-material';

const TemplatesPanel = ({ onSelect }) => {
    const templates = [
        { name: 'Hero Section', category: 'Headers', popular: true },
        { name: 'Feature Grid', category: 'Content', popular: false },
        { name: 'Pricing Table', category: 'Commerce', popular: true },
        { name: 'Testimonials', category: 'Social Proof', popular: true },
        { name: 'Contact Form', category: 'Forms', popular: false },
        { name: 'Footer', category: 'Footers', popular: false },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
                Templates
            </Typography>

            <TextField
                fullWidth
                placeholder="Search templates..."
                size="small"
                sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': { borderColor: '#374151' },
                    },
                }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {templates.map((template) => (
                    <Card
                        key={template.name}
                        sx={{
                            bgcolor: '#1f2937',
                            p: 2,
                            cursor: 'pointer',
                            '&:hover': { bgcolor: '#374151' },
                        }}
                        onClick={() => onSelect?.(template)}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <ViewModule sx={{ color: '#9ca3af' }} />
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography variant="body2" sx={{ color: '#fff' }}>
                                        {template.name}
                                    </Typography>
                                    {template.popular && (
                                        <Star sx={{ fontSize: 16, color: '#fbbf24' }} />
                                    )}
                                </Box>
                                <Typography variant="caption" sx={{ color: '#64748b' }}>
                                    {template.category}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

import { Extension, Code, CloudQueue } from '@mui/icons-material';

const IntegrationsPanel = ({ onSelect }) => {
    const integrations = [
        { name: 'Google Analytics', icon: '📊', connected: true },
        { name: 'Mailchimp', icon: '📧', connected: false },
        { name: 'Stripe', icon: '💳', connected: true },
        { name: 'Facebook Pixel', icon: '📱', connected: false },
        { name: 'Custom Code', icon: '💻', connected: false },
        { name: 'API Webhooks', icon: '🔗', connected: false },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
                Integrations
            </Typography>

            <Button
                fullWidth
                variant="outlined"
                startIcon={<Extension />}
                sx={{
                    color: '#fff',
                    borderColor: '#374151',
                    mb: 3,
                    '&:hover': { borderColor: '#2563eb', bgcolor: 'rgba(37, 99, 235, 0.1)' },
                }}
            >
                Browse All Integrations
            </Button>

            <Typography variant="subtitle2" sx={{ color: '#9ca3af', mb: 2 }}>
                Available Integrations
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {integrations.map((integration) => (
                    <Card
                        key={integration.name}
                        sx={{
                            bgcolor: '#1f2937',
                            p: 2,
                            cursor: 'pointer',
                            '&:hover': { bgcolor: '#374151' },
                        }}
                        onClick={() => onSelect?.(integration)}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                                sx={{
                                    fontSize: '1.5rem',
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: '#374151',
                                    borderRadius: 1,
                                }}
                            >
                                {integration.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body2" sx={{ color: '#fff' }}>
                                    {integration.name}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#64748b' }}>
                                    {integration.connected ? 'Connected' : 'Not Connected'}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    bgcolor: integration.connected ? '#10b981' : '#6b7280',
                                }}
                            />
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

import { FolderOpen, Public, Launch, MoreVert } from '@mui/icons-material';

const ProjectsPanel = ({ onSelect }) => {
    const projects = [
        {
            name: 'E-commerce Store',
            domain: 'mystore.com',
            status: 'Published',
            lastUpdated: '2 hours ago',
            views: '1.2K'
        },
        {
            name: 'Portfolio Website',
            domain: 'portfolio.dev',
            status: 'Published',
            lastUpdated: '1 day ago',
            views: '856'
        },
        {
            name: 'Landing Page',
            domain: 'startup-landing.io',
            status: 'Draft',
            lastUpdated: '3 days ago',
            views: '0'
        },
        {
            name: 'Blog Platform',
            domain: 'myblog.site',
            status: 'Published',
            lastUpdated: '5 days ago',
            views: '2.4K'
        },
    ];

    const publishedCount = projects.filter(p => p.status === 'Published').length;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
                My Projects
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Card
                    sx={{
                        flex: 1,
                        bgcolor: '#1f2937',
                        p: 2,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ color: '#2563eb', fontWeight: 'bold' }}>
                        {projects.length}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                        Total Projects
                    </Typography>
                </Card>
                <Card
                    sx={{
                        flex: 1,
                        bgcolor: '#1f2937',
                        p: 2,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ color: '#10b981', fontWeight: 'bold' }}>
                        {publishedCount}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                        Published
                    </Typography>
                </Card>
            </Box>

            <Button
                fullWidth
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                    bgcolor: '#2563eb',
                    mb: 3,
                    '&:hover': { bgcolor: '#1d4ed8' },
                }}
                onClick={() => onSelect?.({ type: 'new-project' })}
            >
                New Project
            </Button>

            <Typography variant="subtitle2" sx={{ color: '#9ca3af', mb: 2 }}>
                Recent Projects
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {projects.map((project) => (
                    <Card
                        key={project.domain}
                        sx={{
                            bgcolor: '#1f2937',
                            p: 2,
                            cursor: 'pointer',
                            '&:hover': { bgcolor: '#374151' },
                        }}
                        onClick={() => onSelect?.(project)}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    bgcolor: '#374151',
                                    borderRadius: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                <FolderOpen sx={{ color: '#2563eb' }} />
                            </Box>

                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 600,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {project.name}
                                    </Typography>
                                    <Box
                                        sx={{
                                            px: 1,
                                            py: 0.5,
                                            borderRadius: 1,
                                            bgcolor: project.status === 'Published' ? '#10b981' : '#f59e0b',
                                            fontSize: '0.65rem',
                                            flexShrink: 0,
                                            ml: 1,
                                        }}
                                    >
                                        {project.status}
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                                    <Public sx={{ fontSize: 14, color: '#64748b' }} />
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#64748b',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {project.domain}
                                    </Typography>
                                    {project.status === 'Published' && (
                                        <Launch
                                            sx={{
                                                fontSize: 12,
                                                color: '#64748b',
                                                ml: 0.5,
                                                '&:hover': { color: '#2563eb' }
                                            }}
                                        />
                                    )}
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                                        Updated {project.lastUpdated}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                                        {project.views} views
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" sx={{ color: '#9ca3af', mb: 2 }}>
                    Domain Settings
                </Typography>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Public />}
                    sx={{
                        color: '#fff',
                        borderColor: '#374151',
                        justifyContent: 'flex-start',
                        '&:hover': { borderColor: '#2563eb', bgcolor: 'rgba(37, 99, 235, 0.1)' },
                    }}
                >
                    Manage Domains
                </Button>
            </Box>
        </Box>
    );
};

export { MediaPanel, StylePanel, PagesPanel, TemplatesPanel, IntegrationsPanel, ProjectsPanel };