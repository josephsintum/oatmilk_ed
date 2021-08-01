import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
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

const project = {
  id: '1',
  title: 'Self Driving Car',
  image: '/heroImg.jpeg',
  age: '12 - 115',
  topic: 'Artificial Intelligence',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.',
  materials: [
    { title: 'motor', img: '/heroImg.jpeg', price: 2.99 },
    { title: 'propeller', img: '/heroImg.jpeg', price: 4.5 },
    { title: 'wires', img: '/heroImg.jpeg', price: 1.99 },
    { title: 'switch', img: '/heroImg.jpeg', price: 1.99 },
    { title: 'solar panel', img: '/heroImg.jpeg', price: 12.99 },
    { title: 'bulb', img: '/heroImg.jpeg', price: 3.99 },
  ],
  steps: [
    {
      index: 0,
      value:
        'Connect the wires on the motor to the solar panel using soldering',
    },
    {
      index: 1,
      value:
        'Cut two long rectangles of Styrofoam and glue them down to the cardboard with 3 inches separation',
    },
    {
      index: 2,
      value: 'Glue the motor to one Styrofoam',
    },
    {
      index: 3,
      value:
        'Glue the solar panel to the other Styrofoam facing towards the sun',
    },
    {
      index: 4,
      value: 'Attach the propeller to the motor',
    },
    {
      index: 5,
      value: 'Congrats! You’re done!',
    },
  ],
  video: 'https://www.youtube.com/embed/NgXqD_JDn6s',
  someComments: [
    {
      name: 'John Appleseed',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit',
    },
    {
      name: 'John Appleseed',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt',
    },
    {
      name: 'John Appleseed',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit',
    },
  ],
}

const Create = () => {
  const { control, handleSubmit } = useForm<Project>({
    defaultValues: {
      steps: [{ index: 0, value: 'Gather your material' }],
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'steps',
  })

  const onSubmit: SubmitHandler<Project> = (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="lg">
          <Grid my="100px">
            <Typography variant="h2" fontWeight="bold">
              Create a Project
            </Typography>
            <Grid my={5}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
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
                    name="body"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        label="Short Description"
                        helperText="Expert of description"
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
                  Steps
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                {fields.map((field, index) => (
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
                                onClick={() => remove(index)}
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
                    append({ value: '', index: 0 })
                  }}
                >
                  + Add step
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
            <Button variant="contained" type="submit">
              Publish Project
            </Button>
          </Grid>
        </Container>
      </form>
    </>
  )
}

export default Create
