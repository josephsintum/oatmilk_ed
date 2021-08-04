import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import { Material } from '../pages/projects/[projectId]'

export default function Review({
  items,
  data,
}: {
  items: Material[]
  data: any
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {items.map((items) => (
          <ListItem key={items.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={items.title} />
            <Typography variant="body2">{items.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {data.firstName} {data.lastName}
          </Typography>
          <Typography gutterBottom>
            {[
              data.address1,
              data?.address2,
              data.city,
              data.state,
              data.zip,
            ].join(', ')}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs>
                {data.email ? (
                  <>
                    <Typography variant="overline">School Email</Typography>
                    <Typography gutterBottom>{data.email}</Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="overline" gutterBottom>
                      Card
                    </Typography>
                    <Typography gutterBottom>{data.cardName}</Typography>
                    <Typography gutterBottom>
                      **** **** **** {data.cardNumber?.slice(-4)}
                    </Typography>
                    <Typography gutterBottom>{data.cvv}</Typography>
                  </>
                )}
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
