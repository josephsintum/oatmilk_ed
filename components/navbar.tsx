import { Button, Toolbar } from '@material-ui/core'
import Link from '../src/Link'
import * as React from 'react'
import { signOut, useSession } from 'next-auth/client'

export default function Navbar() {
  const [session] = useSession()
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
        href="/projects/create"
        sx={{ p: 2, flexShrink: 0, textDecoration: 'none', color: 'black' }}
      >
        Create Project
      </Link>
      {!session && (
        <>
          {/*Not logged in*/}
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
        </>
      )}
      {session && (
        <>
          {/*Logged In*/}
          <Link
            noWrap
            variant="button"
            href="/profile"
            sx={{ p: 2, flexShrink: 0, textDecoration: 'none', color: 'black' }}
          >
            {session?.user?.email}
          </Link>
          <Button
            onClick={() => signOut({ callbackUrl: '/' })}
            sx={{ p: 2, flexShrink: 0, color: 'black' }}
          >
            Sign Out
          </Button>
        </>
      )}
    </Toolbar>
  )
}
