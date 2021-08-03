import * as React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@material-ui/core'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { getAllProjects } from '../src/db'
import { Project } from './projects/[projectId]'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

const steps = ['About You', 'Topics & Interest', 'Almost Done...']

export function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: '100%' }} cols={3} gap={32}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            ':hover': {}, // todo: add hover state
          }}
        >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: 8 }}
          />
          <ImageListItemBar
            sx={{
              borderRadius: '8px',
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={
              <Typography variant="h5" fontWeight="bold">
                {item.title}
              </Typography>
            }
            // position="top"
            actionIcon={
              <Checkbox
                sx={{
                  color: 'lightgrey',
                  '&.Mui-checked': {
                    color: 'orangered',
                  },
                }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            }
            actionPosition="right"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
    title: 'Internet of Things',
  },
  {
    img: 'https://images.unsplash.com/photo-1537884944318-390069bb8665',
    title: 'Code',
  },
  {
    img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30',
    title: 'Painting',
  },
  {
    img: 'https://images.unsplash.com/photo-1594676979216-380a0257305d',
    title: 'Flowers',
  },
  {
    img: 'https://images.unsplash.com/photo-1549057736-889b732754a2',
    title: 'Sports',
  },
  {
    img: 'https://images.unsplash.com/photo-1576806021995-9f68eb39f10b',
    title: 'Fish',
  },
  {
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b',
    title: 'Lego',
  },
  {
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    title: 'Food',
  },
  {
    img: 'https://images.unsplash.com/3/jerry-adney.jpg',
    title: 'Nature',
  },
  {
    img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008',
    title: 'Robots',
  },
  {
    img: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d',
    title: 'Renewable Energy',
  },
  {
    img: 'https://images.unsplash.com/photo-1517976547714-720226b864c1',
    title: 'Rockets',
  },
]

function StepForms(props: {
  activeStep: number
  projects: { doc: Project; id: string }[]
}) {
  const [grade, setGrade] = React.useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string)
  }

  return (
    <Container maxWidth="md">
      <Grid container my={4}>
        <Grid item xs>
          {
            {
              1: (
                <Grid item xs maxWidth="sm" mx="auto">
                  <Typography variant="overline" sx={{ mt: 2 }}>
                    Step {props.activeStep + 1}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    About You
                  </Typography>
                  <TextField
                    label="School"
                    variant="outlined"
                    helperText="Which school do you go to?"
                    fullWidth
                    margin="normal"
                  />
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                    <Select value={grade} label="Grade" onChange={handleChange}>
                      <MenuItem value={1}>Elementary School</MenuItem>
                      <MenuItem value={2}>Middle School</MenuItem>
                      <MenuItem value={3}>High School and Beyond</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="City"
                    variant="outlined"
                    helperText="Where do you live?"
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              ),
              2: (
                <Grid item xs mx="auto">
                  <Typography variant="overline" sx={{ mt: 2 }}>
                    Step {props.activeStep + 1}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 5 }}>
                    Choose Your Interest.
                  </Typography>
                  <TitlebarBelowImageList />
                </Grid>
              ),
              3: (
                <Grid item xs maxWidth="sm" mx="auto">
                  <Typography variant="overline" sx={{ mt: 2 }}>
                    Step {props.activeStep + 1}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    About Your Experience
                  </Typography>
                  <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">
                      What is your level of programming?
                    </FormLabel>
                    <RadioGroup row name="row-radio-buttons-group">
                      <FormControlLabel
                        value=""
                        control={<Radio />}
                        label="Expert"
                      />
                      <FormControlLabel
                        value="Sometimes"
                        control={<Radio />}
                        label="Still learning"
                      />
                      <FormControlLabel
                        value="Barely or No Experience"
                        control={<Radio />}
                        label="Barely or never"
                      />
                    </RadioGroup>
                  </FormControl>
                  <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">
                      How often do you work on projects?
                    </FormLabel>
                    <RadioGroup row name="row-radio-buttons-group">
                      <FormControlLabel
                        value="Everyday"
                        control={<Radio />}
                        label="Everyday"
                      />
                      <FormControlLabel
                        value="Sometimes"
                        control={<Radio />}
                        label="Sometimes"
                      />
                      <FormControlLabel
                        value="On weekends"
                        control={<Radio />}
                        label="On weekends"
                      />
                      <FormControlLabel
                        value="Barely or never"
                        control={<Radio />}
                        label="Barely or never"
                      />
                    </RadioGroup>
                  </FormControl>
                  <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">
                      How many people are on your project team?
                    </FormLabel>
                    <RadioGroup row name="row-radio-buttons-group">
                      <FormControlLabel
                        value="Just me"
                        control={<Radio />}
                        label="Just me"
                      />
                      <FormControlLabel
                        value="2 - 4 people"
                        control={<Radio />}
                        label="2 - 4 people"
                      />
                      <FormControlLabel
                        value="5 - 10 people"
                        control={<Radio />}
                        label="5 or more people"
                      />
                      <FormControlLabel
                        value="Barely or never"
                        control={<Radio />}
                        label="Barely or never"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              ),
            }[props.activeStep + 1]
          }
        </Grid>
      </Grid>
    </Container>
  )
}

const Interest = ({ projects }: any) => {
  const [session] = useSession()
  const router = useRouter()

  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

  const isStepOptional = (step: number) => {
    return step === 1
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)

    if (activeStep === steps.length - 1) router.push('/projects')
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid container my="100px">
          <Grid item xs={12} mb={4} fontWeight="bold">
            <Typography variant="h3">
              Hello {session ? session?.user?.name : ''}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%' }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {}
                  const labelProps: {
                    optional?: React.ReactNode
                  } = {}
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    )
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, mb: 1 }}
                    textAlign="center"
                  >
                    All steps completed - Redirecting...
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {/*TODO: set the reset to start project*/}
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <StepForms activeStep={activeStep} projects={projects} />

                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isStepOptional(activeStep) && (
                      <Button
                        color="inherit"
                        onClick={handleSkip}
                        sx={{ mr: 1 }}
                      >
                        Skip
                      </Button>
                    )}
                    <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Interest

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getAllProjects()
  return { props: { projects } }
}
