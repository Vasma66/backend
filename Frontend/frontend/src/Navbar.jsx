
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar color='inherit'>
              <Toolbar>

                  <Typography variant='h6' color='error'><i><b>EMPLOYEE DETAILS</b></i></Typography>&nbsp;
                  <Link to='/add'>
                      <Button variant='contained' color='error'>ADD</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/view'>
                      <Button variant='contained' color='error'>VIEW</Button>
                  </Link>&nbsp;&nbsp;

              </Toolbar>
          </AppBar><br /><br /><br /><br />
    </div>
  )
}

export default Navbar