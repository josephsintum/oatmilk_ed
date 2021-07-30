import { Container, Grid, Typography } from '@material-ui/core'

const Create = () => {

  return (
    <>
      <Container maxWidth="lg">
        <Grid container my="100px">
          <Grid item>
            <Typography variant="h1">Create a new project</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Create
