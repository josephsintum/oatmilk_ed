import Container from '@material-ui/core/Container'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core'
import Link from '../../src/Link'
import * as React from 'react'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import { GetServerSideProps } from 'next'
import { getAllProjects } from '../../src/db'
import { Project } from './[projectId]'
import Head from 'next/head'

export function ProjectGrid({
  projects,
}: {
  projects: { doc: Project; id: string }[]
}) {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <ProjectCard
          project={project.doc}
          // @ts-ignore
          xs={12}
          sm={6}
          md={4}
          key={project.id}
        />
      ))}
    </Grid>
  )
}

export function ProjectCard({ project, ...rest }: { project: Project }) {
  return (
    <Grid item {...rest}>
      <Card
        variant="outlined"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          p: 1,
          border: '2px solid black',
        }}
      >
        <CardMedia
          sx={{
            // 16:9
            pt: '56.25%',
            borderRadius: 1,
          }}
          image={project.image || '/heroImg.jpeg'}
          title="Image title"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="overline" color="text.secondary">
            {project.topic}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            fontWeight="bold"
          >
            {project.title}
          </Typography>
          <Typography variant="subtitle2">Ages: {project.age}</Typography>
          <Typography variant="body1">
            {project.description?.slice(0, 80)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Link
              href={'/projects/' + project._id}
              sx={{ textDecoration: 'none' }}
            >
              Learn More
            </Link>
          </Button>
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{
                  color: 'pink',
                  '&.Mui-checked': {
                    color: 'red',
                  },
                }}
              />
            }
            label={Math.floor(Math.random() * 400)}
            sx={{ ml: 'auto', fontWeight: 'bold' }}
            labelPlacement="end"
          />
        </CardActions>
      </Card>
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
        <title>Oat Crafts - Projects</title>
      </Head>
      <Container maxWidth="lg">
        <Grid container direction="column" spacing={2} marginY="100px">
          <Grid item>
            <Typography variant="h3" fontWeight="bold" my={3}>
              Explore{' '}
              <Box component="span" color="secondary.main">
                Projects
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <ProjectGrid projects={projects} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getAllProjects()
  return { props: { projects } }
}