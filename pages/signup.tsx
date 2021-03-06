import React from 'react'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from '@material-ui/core'
import GoogleIcon from '@material-ui/icons/Google'
import GitHubIcon from '@material-ui/icons/GitHub'
import { signIn } from 'next-auth/client'
import Head from 'next/head'

export default function Signup() {
  return (
    <>
      <Head>
        <title>Oat Crafts - Sign Up</title>
      </Head>
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
          <Typography component="h1" variant="h2" my={5}>
            Get{' '}
            <Box component="span" color="secondary.main">
              Started
            </Box>
          </Typography>
          <Box sx={{ mt: 4 }}>
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
              disabled
              onClick={() =>
                signIn('google', {
                  callbackUrl: window.location.origin + '/interest',
                })
              }
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
              onClick={() =>
                signIn('github', {
                  callbackUrl: window.location.origin + '/interest',
                })
              }
            >
              Sign Up With Github
            </Button>
            <Typography variant="overline" textAlign="center" component="p">
              with Student ID/Email coming soon
            </Typography>

            <Button
              type="submit"
              onClick={() => alert('Sign with Student ID/Email Coming Soon')}
              fullWidth
              disabled
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign Up With School ID/Email
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}
