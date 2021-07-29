import { Button, Toolbar } from '@material-ui/core'
import Link from '../src/Link'
import * as React from 'react'

export default function Navbar() {
  return (
    <Toolbar
      component="nav"
      sx={{
        maxWidth: 'lg',
        borderBottom: 1,
        borderColor: 'divider',
        justifyContent: 'space-between',
        overflowX: 'auto',
        margin: 'auto',
      }}
    >
      <Link
        variant="h5"
        align="left"
        noWrap
        href="/"
        fontWeight="bold"
        sx={{
          flex: 1,
          textDecoration: 'none',
          color: 'black',
          textTransform: 'uppercase',
        }}
      >
        Oat Craft
      </Link>
      <Link
        noWrap
        variant="button"
        href="/"
        sx={{ p: 2, flexShrink: 0, textDecoration: 'none', color: 'black' }}
      >
        Home
      </Link>
      <Link
        noWrap
        variant="button"
        href="/create"
        sx={{ p: 2, flexShrink: 0, textDecoration: 'none', color: 'black' }}
      >
        Create Project
      </Link>
      <Link
        noWrap
        variant="button"
        href="/login"
        sx={{ p: 2, flexShrink: 0, textDecoration: 'none', color: 'black' }}
      >
        <Button
          variant="outlined"
          sx={{
            border: '2px solid black',
            color: 'black',
            ':hover': {
              border: '2px solid black',
              color: 'black',
              boxShadow: 2,
            },
          }}
        >
          Log In
        </Button>
      </Link>
      <Link
        noWrap
        variant="button"
        href="/signup"
        sx={{ p: 2, flexShrink: 0, textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          sx={{
            color: 'white',
            bgcolor: 'primary',
          }}
        >
          Get Started
        </Button>
      </Link>
    </Toolbar>
  )
}
