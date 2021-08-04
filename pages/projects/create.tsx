import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@material-ui/core'
import * as React from 'react'
import {
  useFieldArray,
  useForm,
  Controller,
  SubmitHandler,
} from 'react-hook-form'
import { Project } from './[projectId]'
import CloseIcon from '@material-ui/icons/Close'
import ButtonBase from '@material-ui/core/ButtonBase'
import { useRouter } from 'next/router'
import Head from 'next/head'

const materials = [
  { title: 'motor', img: '/materials/motor.jpg', price: 12.39 },
  { title: 'propeller', img: '/materials/propeller.jpg', price: 17.53 },
  { title: 'wires', img: '/materials/wires.jpg', price: 4.99 },
  { title: 'switch', img: '/materials/switch.jpg', price: 3.75 },
  { title: 'solar panel', img: '/materials/solar_panel.jpg', price: 12.9 },
  { title: 'bulb', img: '/materials/bulbs.jpg', price: 3.99 },
  { title: 'raspberry pi', img: '/materials/raspberry_pi.jpg', price: 25.4 },
]

const Create = () => {
  const router = useRouter()
  const { control, handleSubmit, watch } = useForm<Project>({
    defaultValues: {
      steps: [{ index: 0, value: 'Gather your materials' }],
    },
  })
  const {
    fields: stepFields,
    append: stepAppend,
    remove: stepRemove,
  } = useFieldArray({
    control,
    name: 'steps',
  })
  const {
    fields: materialFields,
    append: materialAppend,
    remove: materialRemove,
  } = useFieldArray({
    control,
    name: 'materials',
  })

  const onSubmit: SubmitHandler<Project> = async (data) => {
    // data cleanup
    data = {
      ...data,
      someComments: [],
      materials: data.materials ? data.materials : [],
    }

    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        router.push('/projects/' + response.results)
      })
  }

  return (
    <>
      <Head>
        <title>Oat Crafts - Create Project</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="lg">
          <Grid my="100px">
            <Typography variant="h2" fontWeight="bold">
              Create New Project
            </Typography>
            <Grid my={5}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        label="Title"
                        helperText="Ex. Self driving Car"
                        margin="normal"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="topic"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        label="Topic"
                        helperText="Ex. Geography, Engineering, Lego"
                        margin="normal"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="age"
                    control={control}
                    defaultValue="12 - 124"
                    render={({ field }) => (
                      <TextField
                        label="Ages"
                        helperText="Ex. 12 - 114"
                        margin="normal"
                        fullWidth
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        label="Description"
                        helperText="Complete Description"
                        multiline
                        rows={3}
                        margin="normal"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6} display="flex" flexDirection="column">
                  <Controller
                    name="image"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        type="file"
                        margin="normal"
                        helperText="Upload image of project"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                  <img
                    src="/undraw/upload_image.svg"
                    alt="Upload Image"
                    width="80%"
                    height="auto"
                    style={{ margin: 'auto' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container my={5} spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4" fontWeight="bold">
                  Add Steps and Youtube Video
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                {stepFields.map((field, index) => (
                  <Controller
                    key={field.id}
                    name={`steps.${index}.value`}
                    control={control}
                    defaultValue={field.value}
                    render={({ field }) => (
                      <TextField
                        label={'Step ' + (index + 1)}
                        margin="normal"
                        fullWidth
                        {...field}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="delete"
                                onClick={() => stepRemove(index)}
                              >
                                <CloseIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                ))}
                <Button
                  variant="contained"
                  sx={{ float: 'right', my: 1 }}
                  onClick={() => {
                    stepAppend({ value: '', index: 0 })
                  }}
                >
                  + Add step
                </Button>
              </Grid>
              <Grid item xs={12} md={7} display="flex" flexDirection="column">
                <Controller
                  name="video"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      label="Youtube Embed Link"
                      helperText="Copy Youtube embed link and paste here"
                      margin="normal"
                      fullWidth
                      {...field}
                    />
                  )}
                />
                <iframe
                  width="100%"
                  height="100%"
                  src={watch('video')}
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
                  Choose Materials
                </Typography>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography variant="subtitle1" mb={2}>
                    Choose materials
                  </Typography>
                  <Grid container spacing={3}>
                    {materials.map((req) => (
                      <Grid item md={6} key={req.title}>
                        <ButtonBase
                          focusRipple
                          onClick={() => materialAppend({ ...req })}
                        >
                          <Card
                            variant="outlined"
                            sx={{
                              display: 'flex',
                              width: '340px',
                              height: '100px',
                              p: 1,
                              border: '1px solid black',
                              borderRadius: 2,
                              ':hover': {
                                bgcolor: 'pale',
                              },
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
                                  <Typography
                                    variant="subtitle1"
                                    mb="auto"
                                    sx={{ textTransform: 'capitalize' }}
                                  >
                                    {req.title}
                                  </Typography>
                                  <Typography variant="h6" fontWeight="bold">
                                    ${req.price}
                                  </Typography>
                                </Box>
                              </Stack>
                            </CardContent>
                            <div />
                          </Card>
                        </ButtonBase>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle1" mb={2}>
                    Selected Materials
                  </Typography>
                  <Grid container spacing={3}>
                    {materialFields.map((req, index) => (
                      <Grid item xs key={req.title}>
                        <Card
                          variant="outlined"
                          sx={{
                            display: 'flex',
                            width: '340px',
                            height: '100px',
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
                          <CardContent sx={{ flex: '1 0 auto', py: 1, pr: 0 }}>
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
                                <IconButton
                                  aria-label="delete"
                                  color="error"
                                  onClick={() => materialRemove(index)}
                                >
                                  <CloseIcon />
                                </IconButton>
                              </Grid>
                            </Stack>
                          </CardContent>
                          <div />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Divider />
            <Grid container my={5}>
              <Grid item xs>
                <Typography>You're all done 🎉</Typography>
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  sx={{ float: 'right' }}
                >
                  Publish Project
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </form>
    </>
  )
}

export default Create
