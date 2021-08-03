import { Box, Container, Typography } from '@material-ui/core'

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          component="footer"

          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'white',
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              <strong>Oat Craft</strong> by Team Oat Milk 🥛
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  )
}
