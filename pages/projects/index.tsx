import Container from '@material-ui/core/Container'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import Link from '../../src/Link'
import * as React from 'react'

export interface Iproject {
  id: string
  title: string
  image: string
  age: string
  topic: string
  body: string
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

export function ProjectGrid({ projects }: { projects: Iproject[] }) {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </Grid>
  )
}

export function ProjectCard(props: { project: Iproject }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
        }}
      >
        <CardMedia
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={props.project.image}
          title="Image title"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="overline" color="text.secondary">
            {props.project.topic}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            fontWeight="bold"
          >
            {props.project.title}
          </Typography>
          <Typography>
            Ages: {props.project.age}
            <br />
            {props.project.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Link
              href={'/projects/' + props.project.id}
              sx={{ textDecoration: 'none' }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Grid container direction="column" spacing={2} marginY="100px">
        <Grid item>
          <Typography variant="h3" fontWeight="bold" my={3}>
            Explore <span style={{ color: 'green' }}>projects</span>
          </Typography>
        </Grid>
        <Grid item>
          <ProjectGrid projects={projects} />
        </Grid>
      </Grid>
    </Container>
  )
}
