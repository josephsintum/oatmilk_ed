import { useRouter } from 'next/router'
import { Container, Grid, Typography } from '@material-ui/core'

const Project = () => {
  const router = useRouter()
  const { projectId } = router.query

  return (
    <>
      <Container maxWidth="lg">
        <Grid container my="100px">
          <Grid item>
            <Typography variant="h1">Project: {projectId}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Project
