import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@material-ui/core'
import * as React from 'react'
import PrintIcon from '@material-ui/icons/Print'
import CheckIcon from '@material-ui/icons/Check'
import { useSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import { getProjectById } from '../../src/db'

const Comments = ({ someComments }: { someComments: Comment[] }) => {
  const [session] = useSession()

  const [AllComments, setAllComments] = React.useState([...someComments])
  const [comment, setComment] = React.useState('')

  const addComment = () => {
    setAllComments([
      {
        name: session?.user?.name ? session?.user?.name : 'Damsel M',
        comment: comment,
      },
      ...AllComments,
    ])
    setComment('')
  }

  return (
    <Grid container justifyContent="center" my={5}>
      <Grid item xs={7} display="flex" flexDirection="column">
        <Typography variant="h4" fontWeight="bold" my={2}>
          Comments
        </Typography>
        <TextField
          fullWidth
          label="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          rows={3}
          sx={{ my: 1 }}
        />
        <Button
          sx={{ mb: 2, ml: 'auto' }}
          variant="contained"
          onClick={() => addComment()}
        >
          Post
        </Button>
        {AllComments.map((comment, i) => (
          <Card sx={{ my: 1 }} variant="outlined" key={'name' + i}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'secondary' }} aria-label="comment">
                  {comment.name[0]}
                </Avatar>
              }
              title={comment.name}
              subheader={comment.comment}
            />
          </Card>
        ))}
      </Grid>
    </Grid>
  )
}

export interface Comment {
  name: string
  comment: string
}

export interface Material {
  title: string
  img: string
  price: number
}

export interface Project {
  id: string
  title: string
  image: string
  age: string
  topic: string
  body: string
  description: string
  materials: Material[]
  steps: string[]
  video: string
  someComments: Comment[]
}

const ProjectId = ({ project }: { project: Project }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid my="100px">
          <Grid my={5}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="overline" color="text.secondary">
                  {project.topic}
                </Typography>
                <Typography variant="h2" fontWeight="bold" mb={3}>
                  {project.title}
                </Typography>
                <Typography variant="body1" mb={2}>
                  Ages: {project.age} years
                </Typography>
                <Typography variant="body1">
                  {project.body}
                  <br />
                  {project.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src="/heroImg.jpeg"
                  alt="Hero Image"
                  width="100%"
                  height="auto"
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid container my={5} spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight="bold">
                Steps
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <FormGroup sx={{ mb: 2 }}>
                {project.steps.map((step) => (
                  <FormControlLabel
                    key={step}
                    control={<Checkbox />}
                    label={step}
                    sx={{
                      py: 1,
                      ':hover': { bgcolor: 'pale', borderRadius: 2 },
                    }}
                  />
                ))}
              </FormGroup>
              <Button
                sx={{ mr: 3 }}
                endIcon={<PrintIcon />}
                onClick={() => window.print()}
              >
                Print Steps
              </Button>
              <Button variant="contained" endIcon={<CheckIcon />}>
                Mark as completed
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <iframe
                width="100%"
                height="100%"
                src={project.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: 5,
                  border: '1px solid black',
                  padding: 8,
                }}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container my={5}>
            <Grid item xs={12} my={4}>
              <Typography variant="h4" fontWeight="bold">
                Materials
              </Typography>
            </Grid>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  {project.materials.map((req) => (
                    <Grid item md={6} key={req.title}>
                      <Card
                        variant="outlined"
                        sx={{
                          display: 'flex',
                          width: '340px',
                          p: 1,
                          border: '1px solid black',
                          borderRadius: 2,
                        }}
                      >
                        <CardMedia
                          sx={{ width: 145, borderRadius: 1 }}
                          image={req.img}
                          title={req.title}
                        />
                        <CardContent sx={{ flex: '1 0 auto', py: 1 }}>
                          <Stack direction="row" alignItems="center">
                            <Box>
                              <Typography variant="subtitle1" mb="auto">
                                {req.title}
                              </Typography>
                              <Typography variant="h6" fontWeight="bold">
                                ${req.price}
                              </Typography>
                            </Box>
                            <Grid item ml="auto">
                              <Checkbox defaultChecked />
                            </Grid>
                          </Stack>
                        </CardContent>
                        <div />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box width="fit-content" mx="auto">
                  <Typography variant="overline">Total</Typography>
                  <Typography
                    variant="h2"
                    component="p"
                    // fontWeight="bold"
                    textAlign="center"
                    mb={4}
                  >
                    $23.45
                  </Typography>
                </Box>

                <Button fullWidth variant="contained">
                  Buy Now
                </Button>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  my={2}
                >
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    border: '2px solid black',
                    color: 'black',
                    ':hover': { border: '2px solid black' },
                  }}
                >
                  Order With School Account
                </Button>
                <Typography
                  variant="overline"
                  component="p"
                  textAlign="center"
                  my={1}
                >
                  Have your school pay for your supplies
                </Typography>
                <Typography
                  variant="body2"
                  mt={4}
                  color="text.disabled"
                  textAlign="center"
                >
                  Free regular shipping within the United States
                  <br />
                  We offer pickup at your local school
                  <br />
                  We accept returns and exchanges within 14 days.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Divider />

          <Comments someComments={project.someComments} />
        </Grid>
      </Container>
    </>
  )
}

export default ProjectId

export const getServerSideProps: GetServerSideProps = async (context) => {
  let id = context.query.projectId
  if (!id) return { props: {} }
  if (id instanceof Array) id = id[0]
  const project = await getProjectById(id)

  return {
    props: {
      project,
    },
  }
}
