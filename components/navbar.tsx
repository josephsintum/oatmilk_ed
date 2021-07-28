import { Toolbar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Link from '../src/Link'
import * as React from 'react'

export function Navbar() {
  return (
    <Toolbar
      component="nav"
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        justifyContent: 'space-between',
        overflowX: 'auto',
      }}
    >
      <Typography
        component="h2"
        variant="h5"
        color="primary"
        fontWeight="bold"
        align="left"
        noWrap
        sx={{ flex: 1 }}
      >
        Oat Craft
      </Typography>
      <Link
        color="primary"
        noWrap
        variant="body2"
        href="#"
        sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
      >
        HOME
      </Link>
      <Link
        color="primary"
        noWrap
        variant="body2"
        href="#"
        sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
      >
        CREATE
      </Link>
      <Link
        color="primary"
        noWrap
        variant="body2"
        href="#"
        sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
      >
        SIGN UP
      </Link>
    </Toolbar>
  )
}