import * as React from 'react'
import Container from '@material-ui/core/Container'
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core'
import { ProjectGrid } from './projects'
import { GetServerSideProps } from 'next'
import { getAllProjects } from '../src/db'

const heroImg = '/heroImg.jpeg'

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
        <img src={heroImg} alt="Hero Image" width="100%" height="auto" />
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

export default function Index({ projects }: { projects: any }) {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getAllProjects()
  return { props: { projects } }
}
