// components/MainContent.js
import React from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  IconButton,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../../../Context';

const Sample = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>

        {/* Typography Examples */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h1" gutterBottom>
            Heading 1
          </Typography>
          <Typography variant="h2" gutterBottom>
            Heading 2
          </Typography>
          <Typography variant="h3" gutterBottom>
            Heading 3
          </Typography>
          <Typography variant="h4" gutterBottom>
            Heading 4
          </Typography>
          <Typography variant="h5" gutterBottom>
            Heading 5
          </Typography>
          <Typography variant="h6" gutterBottom>
            Heading 6
          </Typography>
          <Typography variant="body1" gutterBottom>
            Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Body 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Subtitle 1
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Subtitle 2
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Caption text
          </Typography>
          <Typography variant="overline" display="block">
            Overline text
          </Typography>
        </Paper>

        {/* Button Examples */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Button Variants
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="success">
                Success
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" size="small">
                Small
              </Button>
              <Button variant="contained" size="medium">
                Medium
              </Button>
              <Button variant="contained" size="large">
                Large
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* TextField Examples */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Text Field Examples
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField label="Standard TextField" placeholder="Enter text" />
              <TextField
                label="With Helper Text"
                helperText="This is helper text"
              />
              <TextField
                label="Error State"
                error
                helperText="This field has an error"
              />
              <TextField
                label="Multiline"
                multiline
                rows={4}
                placeholder="Enter multiple lines"
              />
              <TextField label="Disabled" disabled value="Disabled input" />
            </Box>
          </CardContent>
        </Card>

        {/* Other Components */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Other Components
            </Typography>
            <FormControlLabel
              control={<Switch checked={mode === 'dark'} onChange={toggleTheme} />}
              label={`${mode === 'dark' ? 'Dark' : 'Light'} Mode`}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Sample;