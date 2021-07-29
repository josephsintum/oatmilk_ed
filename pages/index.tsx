import * as React from 'react'
import Container from '@material-ui/core/Container'
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core'
import { ProjectGrid } from './projects'

const heroImg =
  'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80'

export function Hero() {
  return (
    <Grid container marginY="140px">
      <Grid item xs px={3}>
        <Grid m="auto">
          <Typography variant="h2" component="h1" fontWeight="bold" my={3}>
            Build <span style={{ color: 'green' }}>Green</span> Projects
          </Typography>
          <Typography variant="h5" component="p" my={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur.
          </Typography>
          <Button variant="contained" sx={{ px: 4, py: 2, fontSize: 'medium' }}>
            Start Building
          </Button>
        </Grid>
      </Grid>
      <Grid item xs px={3}>
        <img src={heroImg} alt="Hero Image" />
      </Grid>
    </Grid>
  )
}

function HowItWorks() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      marginY="100px"
    >
      <Grid item md={5} px={3}>
        <Grid item>
          <Typography variant="h3" fontWeight="bold" my={3}>
            How it <span style={{ color: 'green' }}>Works</span>
          </Typography>
          <Box my={4}>
            <img src={heroImg} alt="Hero Image" width="100%" height="auto" />
          </Box>
        </Grid>
      </Grid>
      <Grid item md={1} />
      <Grid item md={6}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          1. Find a project
        </Typography>
        <Typography variant="h5" component="p" my={2} ml={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit.
        </Typography>
        <Divider />
        <Typography variant="h5" fontWeight="bold" mt={3} color="primary">
          2. Get your supplies
        </Typography>
        <Typography variant="h5" component="p" my={1} ml={5}>
          Order the supplies from us.
          <br />
          Shipping is 2 days
        </Typography>
        <Divider />
        <Typography variant="h5" fontWeight="bold" mt={3} color="primary">
          3. Have fun!!
        </Typography>
        <Typography variant="h5" component="p" my={2} ml={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit.
        </Typography>
      </Grid>
    </Grid>
  )
}

const projects = [
  {
    id: '1',
    title: 'Self Driving Car',
    image: 'https://source.unsplash.com/random',
    age: '12 - 115',
    topic: 'Artificial Intelligence',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit',
  },
  {
    id: '2',
    title: 'Solar Sail',
    image: 'https://source.unsplash.com/random',
    age: '12 - 115',
    topic: 'Engineering',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit',
  },
  {
    id: '3',
    title: 'Solar Oven',
    image: 'https://source.unsplash.com/random',
    age: '12 - 115',
    topic: 'Physics',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit',
  },

  {
    id: '4',
    title: 'Water AC',
    image: 'https://source.unsplash.com/random',
    age: '12 - 115',
    topic: 'Engineering',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit',
  },
]

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Hero />

      <hr style={{ border: '1px solid black' }} />

      <HowItWorks />

      <hr style={{ border: '1px solid black' }} />

      <Grid container direction="column" spacing={2} marginY="100px">
        <Grid item>
          <Typography variant="h3" fontWeight="bold" my={3}>
            Find a <span style={{ color: 'green' }}>project</span>
          </Typography>
        </Grid>
        <Grid item>
          <ProjectGrid projects={projects} />
        </Grid>
      </Grid>
    </Container>
  )
}

