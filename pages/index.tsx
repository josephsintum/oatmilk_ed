import * as React from 'react'
import Container from '@material-ui/core/Container'
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core'
import { ProjectGrid } from './projects'
import { GetServerSideProps } from 'next'
import { getAllProjects } from '../src/db'
import Link from '../src/Link'
import Head from 'next/head'

const heroImg = '/heroImg.jpeg'

export function Hero() {
  return (
    <Grid container my="140px">
      <Grid item xs px={3}>
        <Grid m="auto">
          <Typography variant="h1" fontWeight={400} my={3}>
            Build <span style={{ color: 'green' }}>Green</span> Projects
          </Typography>
          <Typography variant="h5" my={5}>
            Find fun projects that will help save the Earth.
            <br />
            Create inspiring projects and share with friends.
            <br />
            Get inspired today!
          </Typography>
          <Link href="/projects">
            <Button variant="contained" size="large">
              Start Building
            </Button>
          </Link>
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
      my={5}
    >
      <Grid item xs={12} md={5}>
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
      <Grid item xs={12} md={5}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          1. Find a project
        </Typography>
        <Typography variant="body1" my={2} ml={2}>
          We offer projects for all ages and interests
          <br />
          Create a new project if you can't find it.
        </Typography>
        <Divider />
        <Typography variant="h5" fontWeight="bold" mt={3} color="primary">
          2. Get your supplies
        </Typography>
        <Typography variant="body1" my={1} ml={2}>
          Order your sustainable supplies from us.
          <br />
          Have your school pay for it.
          <br />2 - 3 days shipping.
        </Typography>
        <Divider />
        <Typography variant="h5" fontWeight="bold" mt={3} color="primary">
          3. Have fun!!
        </Typography>
        <Typography variant="body1" my={2} ml={2}>
          Our projects are interesting and inspire creative problem solving.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default function Index({ projects }: { projects: any }) {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Oat Crafts - Home</title>
      </Head>
      <Hero />

      <Divider />

      <HowItWorks />

      <Divider />

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
      <Divider />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getAllProjects()
  return { props: { projects } }
}
