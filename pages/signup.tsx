import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import GoogleIcon from '@material-ui/icons/Google'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from '../src/Link'

export default function Signup() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
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
        <Typography component="h1" variant="h5">
          Build Green Projects
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              mt: 2,
              mb: 1,
              border: '2px solid black',
              color: 'black',
              ':hover': {
                border: '2px solid black',
                color: 'black',
                boxShadow: 3,
              },
            }}
          >
            Sign Up With Google
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<GitHubIcon />}
            sx={{
              mt: 2,
              mb: 3,
              bgcolor: 'black',
              color: 'white',
              ':hover': {
                bgcolor: 'black',
                color: 'white',
                boxShadow: 3,
              },
            }}
          >
            Sign Up With Github
          </Button>
          <Typography variant="overline">with email</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Existing User?{' '}
                <Link
                  href="/login"
                  variant="body2"
                  sx={{ textDecoration: 'none' }}
                >
                  Log In
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
