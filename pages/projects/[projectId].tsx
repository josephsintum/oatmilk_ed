import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import { useForm, Controller } from 'react-hook-form'
import Head from 'next/head'
import Checkout from '../../components/Checkout'

export function CheckoutDialog({ items }: { items: Material[] }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button fullWidth variant="contained" onClick={handleClickOpen}>
        Pay Now
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Checkout items={items} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export function PayFormDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          border: '2px solid black',
          color: 'black',
          ':hover': { border: '2px solid black' },
        }}
        onClick={handleClickOpen}
      >
        Order With School Account
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order With School Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To have you school pay for materials, please enter your email
            address here. We will contact your school and update you.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            label="School Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Request</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export const Comments = ({ someComments }: { someComments?: Comment[] }) => {
  const [session] = useSession()

  const [AllComments, setAllComments] = React.useState(
    someComments ? [...someComments] : []
  )
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

export interface Step {
  index?: number
  value: string
}

export interface Project {
  _id?: string
  id: string
  title: string
  image: string
  age: string
  topic: string
  description: string
  steps: Step[]
  materials: Material[]
  video: string
  someComments?: Comment[]
}

const ProjectId = ({ project }: { project: Project }) => {
  const { control, watch, getValues } = useForm<{ material: boolean[] }>()
  const [total, setTotal] = React.useState<number>()
  const [materialCheckList, setMaterialCheckList] = React.useState<Material[]>(
    []
  )

  React.useEffect(() => {
    let sum = 0
    let materialList: Material[] = []
    getValues('material')?.map((val, index) => {
      if (val) {
        sum += project.materials[index].price
        materialList.push(project.materials[index])
      }
    })
    setTotal(sum)
    setMaterialCheckList(() => [...materialList])
  }, [JSON.stringify(watch('material')), total])

  return (
    <>
      <Head>
        <title>Oat Crafts - {project.title}</title>
      </Head>
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
                <Typography variant="body1" mb={3}>
                  {project.description}
                </Typography>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      sx={{
                        color: 'pink',
                        '&.Mui-checked': {
                          color: 'orangered',
                        },
                      }}
                    />
                  }
                  label={Math.floor(Math.random() * 400) + ' likes'}
                  sx={{ ml: 'auto', fontWeight: 'bold' }}
                  labelPlacement="end"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={project.image || '/heroImg.jpeg'}
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
                    key={step.value}
                    control={<Checkbox />}
                    label={step.value}
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
              <Typography variant="overline">
                Use the Checkboxes to buy ONLY what you need.
              </Typography>
            </Grid>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Grid container spacing={3} mb={3}>
                  {project.materials.map((material, index) => (
                    <Grid item md={6} key={material.title}>
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
                          image={material.img}
                          title={material.title}
                        />
                        <CardContent sx={{ flex: '1 0 auto', py: 1 }}>
                          <Stack direction="row" alignItems="center">
                            <Box>
                              <Typography variant="subtitle1" mb="auto">
                                {material.title}
                              </Typography>
                              <Typography variant="h6" fontWeight="bold">
                                ${material.price}
                              </Typography>
                            </Box>
                            <Grid item ml="auto">
                              <Controller
                                name={`material.${index}`}
                                control={control}
                                defaultValue={true}
                                render={({ field }) => (
                                  <Checkbox {...field} defaultChecked />
                                )}
                              />
                            </Grid>
                          </Stack>
                        </CardContent>
                        <div />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Alert severity="success">
                  These materials are sustainably sourced and built with
                  recycled parts
                </Alert>
              </Grid>
              {project.materials?.length ? (
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
                      ${total?.toFixed(2)}
                    </Typography>
                  </Box>
                  <CheckoutDialog items={materialCheckList} />
                  <Typography
                    variant="overline"
                    component="p"
                    align="center"
                    my={2}
                  >
                    OR
                  </Typography>
                  <PayFormDialog />
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
              ) : (
                ''
              )}
            </Grid>
          </Grid>

          <Divider />

          <Comments someComments={project.someComments} />
        </Grid>
        <Divider />
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
  if (!project) return { notFound: true }

  return { props: { project } }
}
