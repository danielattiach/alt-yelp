import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useBusinessesContext } from 'hooks';

export default function NavBar() {
    const navigate = useNavigate();
    const { favoriteBusinessIDs } = useBusinessesContext();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        YELP!
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/')}>Search</Button>
                    <Button color="inherit" onClick={() => navigate('/saved')}>Saved ({favoriteBusinessIDs.length})</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
