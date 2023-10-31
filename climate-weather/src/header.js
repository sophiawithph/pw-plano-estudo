import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function MyAppBar() {
    return (
        <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
        </Typography>
        <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    );
}

export default MyAppBar;