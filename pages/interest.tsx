import * as React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@material-ui/core'
import { useSession } from 'next-auth/client'
import { ProjectCard, projects } from './projects'
import { useRouter } from 'next/router'

const steps = ['About You', 'Topics & Interest', 'Almost Done...']
const topics = [
  'Geography',
  'Artificial Intelligence',
  'Internet of Things',
  'Lego',
  'Nature',
]

function StepForms(props: { activeStep: number }) {
  const [grade, setGrade] = React.useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string)
  }
  return (
    <Container maxWidth="sm">
      <Grid container my={4}>
        <Grid item xs>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {props.activeStep + 1}
          </Typography>
          {
            {
              1: (
                <>
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
                </>
              ),
              2: (
                <>
                  <FormGroup>
                    {topics.map((topic) => (
                      <FormControlLabel
                        key={topic}
                        control={<Checkbox />}
                        label={topic}
                        sx={{
                          p: 1,
                          my: 1,
                          border: '1px solid black',
                          borderRadius: 2,
                          ':hover': { bgcolor: 'pale', borderRadius: 2 },
                        }}
                      />
                    ))}
                  </FormGroup>
                </>
              ),
              3: (
                <Grid container spacing={4}>
                  {projects.map((project) => (
                    <ProjectCard
                      project={project}
                      xs={12}
                      sm={6}
                      key={project.id}
                    />
                  ))}
                </Grid>
              ),
            }[props.activeStep + 1]
          }
        </Grid>
      </Grid>
    </Container>
  )
}

const Create = () => {
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
              <br />
              What do you like
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
                  <StepForms activeStep={activeStep} />

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

export default Create
