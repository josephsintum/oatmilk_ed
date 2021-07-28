import * as React from 'react'
import Container from '@material-ui/core/Container'
import { Navbar } from '../components/navbar'
import { Grid, Typography } from '@material-ui/core'

const heroImg =
  'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80'

function Hero() {
  return (
    <Grid container spacing={2} marginY={5}>
      <Grid item xs display="flex">
        <Typography variant="h1" fontWeight="bold" color="primary">
          Clean Energy Projects
        </Typography>
      </Grid>
      <Grid item xs>
        <img src={heroImg} alt="Hero Image" />
      </Grid>
    </Grid>
  )
}

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Hero />



    </Container>
  )
}
