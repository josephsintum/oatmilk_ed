import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from '@material-ui/core'
import * as React from 'react'

const Project = () => {
  const router = useRouter()
  const { projectId } = router.query

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
      'Connect the wires on the motor to the solar panel using soldering',
      'Cut two long rectangles of Styrofoam and glue them down to the cardboard with 3 inches separation',
      'Glue the motor to one Styrofoam',
      'Glue the solar panel to the other Styrofoam facing towards the sun',
      'Attach the propeller to the motor',
      'Congrats! You’re done!',
    ],
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid my="100px">
          <Grid my={5}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="overline" color="text.secondary">
                  {project.topic}: {projectId}
                </Typography>
                <Typography variant="h2" fontWeight="bold" mb={3}>
                  {project.title}
                </Typography>
                <Typography variant="body1" mb={2}>
                  Ages: {project.age}
                </Typography>
                <Typography variant="h5" component="p">
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
          <Grid container my={5}>
            <Grid item xs={12} my={4}>
              <Typography variant="h4" fontWeight="bold">
                Steps
              </Typography>
            </Grid>
            <Grid item>
              <FormGroup>
                {project.steps.map((step) => (
                  <FormControlLabel
                    key={step}
                    control={<Checkbox />}
                    label={step}
                    sx={{
                      ':hover': { bgcolor: 'pale', borderRadius: 2 },
                    }}
                  />
                ))}
              </FormGroup>
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
        </Grid>
      </Container>
    </>
  )
}

export default Project
