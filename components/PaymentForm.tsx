import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Control, Controller, FieldValues } from 'react-hook-form'

export default function PaymentForm({
  control,
}: {
  control: Control<FieldValues>
}) {
  return (
    <React.Fragment>
      <Typography variant="overline" gutterBottom>
        Payment methods
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Have your school pay for your materials.
          </Typography>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                label="School Email Address"
                helperText="We will contact your school and update you."
                fullWidth
                type="email"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Or pay with card</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="cardName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="cardNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                label="Card number"
                fullWidth
                autoComplete="cc-number"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="expDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="cvv"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                label="CVV"
                fullWidth
                helperText="Last three digits on signature strip"
                autoComplete="cc-csc"
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
