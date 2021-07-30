import Container from '@material-ui/core/Container'
import {
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

export interface Iproject {
  id: string
  title: string
  image: string
  age: string
  topic: string
  body: string
}

export const projects = [
  {
    id: '1',
    title: 'Self Driving Car',
    image: '/heroImg.jpeg',
    age: '12 - 115',
    topic: 'Artificial Intelligence',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '2',
    title: 'Solar Sail',
    image: '/heroImg.jpeg',
    age: '12 - 115',
    topic: 'Engineering',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: '3',
    title: 'Solar Oven',
    image: '/heroImg.jpeg',
    age: '12 - 115',
    topic: 'Physics',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },

  {
    id: '4',
    title: 'Water AC',
    image: '/heroImg.jpeg',
    age: '12 - 115',
    topic: 'Engineering',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
]

export function ProjectGrid({ projects }: { projects: Iproject[] }) {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <ProjectCard project={project} xs={12} sm={6} md={4} key={project.id} />
      ))}
    </Grid>
  )
}

export function ProjectCard(props: any) {
  const { project, ...rest } = props
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
          image={project.image}
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
          <Typography>
            Ages: {project.age}
            <br />
            {project.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Link
              href={'/projects/' + project.id}
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
            label="34"
            sx={{ ml: 'auto', fontWeight: 'bold' }}
            labelPlacement="end"
          />
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
