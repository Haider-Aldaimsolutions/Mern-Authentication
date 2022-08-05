import * as React from 'react';
import { useState } from 'react';
import { Button, CssBaseline, Container, Box, Typography, Grid, TextField, Link, Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import signin_logo from '../assets/signin_logo.webp'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                myWorld.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createTheme();

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let allEntered = data.get('email') !== '' && data.get('password') !== '' && agree
        if (allEntered) {
            const response = await fetch('http://localhost:1337/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })
            const data = await response.json()
            console.log('==============');
            console.log(data);
            console.log('==============');
        }
        else { alert("Please Fill all the fields") }

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src={signin_logo} className='signin-logo' style={{ width: '50%', height: '50%', borderRadius: '50%' }} alt="signIN" />
                    <Typography component="h1" variant="h5" className='signup-header'>
                        Sign In in to my World
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Checkbox sx={{ ml: -1.5 }} onClick={() => setAgree(!agree)} value="allowExtraEmails" color="primary" />
                                I agree to all <Link href="#" style={{ textDecoration: 'none' }}>terms & conditions</Link>
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/sign-up" variant="body2" align='center'>
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
