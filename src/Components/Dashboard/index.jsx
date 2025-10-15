import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    useTheme,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
} from '@mui/material';
import {
    Add,
    Publish,
    Folder,
    Star,
    ChevronLeft,
    ChevronRight,
    MoreVert,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';

const DashboardSlider = () => {
    const theme = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Create Amazing Designs',
            description: 'Build stunning projects with our intuitive design tools',
            bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            title: 'Collaborate with Your Team',
            description: 'Work together in real-time on your projects',
            bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            title: 'Publish with Confidence',
            description: 'Share your work with the world instantly',
            bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: 200,
                borderRadius: 2,
                overflow: 'hidden',
                mb: 4,
            }}
        >
            {slides.map((slide, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: slide.bgColor,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        px: 4,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            mb: 2,
                            textAlign: 'center',
                        }}
                    >
                        {slide.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'rgba(255,255,255,0.9)',
                            textAlign: 'center',
                            maxWidth: 600,
                        }}
                    >
                        {slide.description}
                    </Typography>
                </Box>
            ))}

            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                    },
                }}
            >
                <ChevronLeft />
            </IconButton>
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                    },
                }}
            >
                <ChevronRight />
            </IconButton>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                }}
            >
                {slides.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        sx={{
                            width: currentSlide === index ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            bgcolor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

// Projects Table Component
const ProjectsTable = () => {
    const theme = useTheme();

    const projects = [
        {
            name: 'Website Redesign',
            status: 'In Progress',
            lastModified: '2 hours ago',
            owner: 'John Doe',
        },
        {
            name: 'Mobile App UI',
            status: 'Completed',
            lastModified: '1 day ago',
            owner: 'Jane Smith',
        },
        {
            name: 'Brand Identity',
            status: 'In Progress',
            lastModified: '3 days ago',
            owner: 'Mike Johnson',
        },
        {
            name: 'Dashboard Design',
            status: 'Review',
            lastModified: '5 days ago',
            owner: 'Sarah Wilson',
        },
        {
            name: 'Landing Page',
            status: 'Completed',
            lastModified: '1 week ago',
            owner: 'Tom Brown',
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'success';
            case 'In Progress':
                return 'primary';
            case 'Review':
                return 'warning';
            default:
                return 'default';
        }
    };

    return (
        <Box sx={{ mt: 6 }}>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: theme.palette.text.primary,
                }}
            >
                Recent Projects
            </Typography>
            <TableContainer
                component={Paper}
                sx={{
                    bgcolor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Project Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Last Modified</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Owner</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((project, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:hover': {
                                        bgcolor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                <TableCell sx={{ fontWeight: 500 }}>{project.name}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={project.status}
                                        color={getStatusColor(project.status)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell sx={{ color: theme.palette.text.secondary }}>
                                    {project.lastModified}
                                </TableCell>
                                <TableCell>{project.owner}</TableCell>
                                <TableCell>
                                    <IconButton size="small">
                                        <MoreVert fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

const Dashboard = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleCreateProject = () => {
        navigate('/editor');
    };

    const cards = [
        {
            title: 'Create New Project',
            icon: <Add sx={{ fontSize: 28 }} />,
            description: 'Start a new design project',
            onClick: handleCreateProject,
        },
        {
            title: 'Published Projects',
            icon: <Publish sx={{ fontSize: 28 }} />,
            description: 'View your published work',
            onClick: () => console.log('Published Projects clicked'),
        },
        {
            title: 'My Projects',
            icon: <Folder sx={{ fontSize: 28 }} />,
            description: 'Browse all your projects',
            onClick: () => console.log('My Projects clicked'),
        },
        {
            title: 'Favorites',
            icon: <Star sx={{ fontSize: 28 }} />,
            description: 'Access your starred projects',
            onClick: () => console.log('Favorites clicked'),
        },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: theme.palette.background.default,
                pt: 12,
                px: 4,
                pb: 4,
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                <DashboardSlider />

                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: FONT_FAMILY.secondary,
                        mb: 1,
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                    }}
                >
                    Welcome Back to Dashboard
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 6,
                        color: theme.palette.text.secondary,
                    }}
                >
                    Choose an option below to get started
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
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                height: '100%',
                                bgcolor: theme.palette.background.paper,
                                border: `1px solid ${theme.palette.divider}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: theme.shadows[8],
                                    borderColor: theme.palette.primary.main,
                                },
                            }}
                        >
                            <CardActionArea
                                onClick={card.onClick}
                                sx={{
                                    height: '100%',
                                    p: 1,
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: theme.palette.primary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: 1,
                                            borderRadius: '50%',
                                            bgcolor: theme.palette.action.hover,
                                        }}
                                    >
                                        {card.icon}
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                            }}
                                        >
                                            {card.description}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
                <ProjectsTable />
            </Box>
        </Box>
    );
};

export default Dashboard;