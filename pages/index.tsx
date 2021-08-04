import * as React from 'react'
import Container from '@material-ui/core/Container'
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core'
import { ProjectGrid } from './projects'
import { GetServerSideProps } from 'next'
import { getAllProjects } from '../src/db'
import Link from '../src/Link'
import Head from 'next/head'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Project } from './projects/[projectId]'

export function Hero() {
  return (
    <Grid container my="140px">
      <Grid item xs px={3}>
        <Grid m="auto">
          <Typography variant="h1" fontWeight={900} my={3} fontStyle="italic">
            Build{' '}
            <Box component="span" color="secondary.main">
              Green
            </Box>{' '}
            Projects
          </Typography>
          <Typography variant="h5" my={5} sx={{ lineHeight: 2 }}>
            Find fun projects that will help save the Earth.
            <br />
            Create inspiring projects and share with friends.
            <br />
            Get inspired today!
          </Typography>
          <Link
            href="/signup"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                color: 'primary.main',
                bgcolor: 'secondary.main',
                fontSize: 'large',
                fontWeight: 'bold',
                fontStyle: 'italic',
                ':hover': {
                  color: 'secondary.main',
                },
              }}
            >
              Start Building
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs md={5} px={3}>
        <img src="/hero1.jpeg" alt="Hero Image" width="100%" height="auto" />
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
            How it{' '}
            <Box component="span" color="secondary.main">
              Works
            </Box>
          </Typography>
          <Box my={4}>
            <img src="how.jpeg" alt="Hero Image" width="100%" height="auto" />
          </Box>
        </Grid>
      </Grid>
      <Grid item md={1} />
      <Grid item xs={12} md={5}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          1. Find a project
        </Typography>
        <Typography variant="body1" my={2} ml={2}>
          We offer projects for all ages and interests
          <br />
          Create a new project if you can't find it.
        </Typography>
        <Divider />
        <Typography variant="h4" fontWeight="bold" mt={3} color="primary">
          2. Get your supplies
        </Typography>
        <Typography variant="body1" my={1} ml={2}>
          Order your sustainable supplies from us.
          <br />
          Have your school pay for it.
          <br />2 - 3 days shipping.
        </Typography>
        <Divider />
        <Typography variant="h4" fontWeight="bold" mt={3} color="primary">
          3. Have fun!!
        </Typography>
        <Typography variant="body1" my={2} ml={2}>
          Our projects are interesting and inspire creative problem solving.
        </Typography>
      </Grid>
    </Grid>
  )
}

function Mission() {
  return (
    <Grid
      container
      bgcolor="primary.main"
      alignItems="center"
      justifyContent="center"
      py="50px"
      my="50px"
      sx={{ borderRadius: 2 }}
      // spacing={8}
    >
      <Grid item xs={12} md={5}>
        <Typography
          variant="h4"
          color="secondary"
          sx={{ lineHeight: '1.4em' }}
          mb={3}
        >
          Climate Change needs lots of <strong>big ideas</strong> to solve it.
          <br />
          That's why are starting with you today.
        </Typography>
        <Link href="/signup">
          <Button
            color="secondary"
            variant="outlined"
            sx={{ border: '2px solid' }}
          >
            Get Started
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={1} />
      <Grid item xs={12} md={4}>
        <img
          src="/kidwork.jpeg"
          alt="Hero Image"
          width="100%"
          height="auto"
          style={{ borderRadius: 8 }}
        />
      </Grid>
    </Grid>
  )
}

export default function Index({
  projects,
}: {
  projects: { doc: Project; id: string }[]
}) {
  return (
    <>
      <Head>
        <title>Oat Crafts - Home</title>
      </Head>
      <Container maxWidth="lg">
        <Hero />

        <Divider />

        <HowItWorks />

        <Divider />

        <Grid container spacing={2} marginY="50px">
          <Grid item xs>
            <Typography variant="h3" fontWeight="bold" my={3}>
              Find a{' '}
              <Box component="span" color="secondary.main">
                project
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex">
            <Link href="/projects" sx={{ textDecoration: 'none', float: 'right', my: 'auto' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                color='secondary'
                sx={{ }}
              >
                Explore More
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <ProjectGrid projects={projects.slice(0, 3)} />
          </Grid>
        </Grid>
        <Divider />
        <Mission />
        <Divider />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getAllProjects()
  return { props: { projects } }
}
