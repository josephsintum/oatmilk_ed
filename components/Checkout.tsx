import * as React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'
import { Material } from '../pages/projects/[projectId]'
import { Control, FieldValues, useForm } from 'react-hook-form'

const steps = ['Shipping address', 'Payment details', 'Review your order']

function getStepContent(
  step: number,
  items: Material[],
  data: any,
  control: Control<FieldValues>
) {
  switch (step) {
    case 0:
      return <AddressForm control={control} />
    case 1:
      return <PaymentForm control={control} />
    case 2:
      return <Review items={items} data={data} />
    default:
      throw new Error('Unknown step')
  }
}

export default function Checkout({ items }: { items: Material[] }) {
  const { control, watch } = useForm()

  const [data, setData] = React.useState<any>({})

  React.useEffect(() => {
    setData(() => watch())
  }, [JSON.stringify(watch())])

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, border: 'none' }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, items, data, control)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  )
}
