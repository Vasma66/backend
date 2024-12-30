import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var navigate=useNavigate()
    var [user, setuser] = useState([])
    axios.get("http://localhost:3004/view").then((res) => {
            setuser(res.data)

    })
    const delVal = (id) =>{
        console.log(id)
        axios.delete("http://localhost:3004/remove/" + id).then((res) => {
            alert(res.data.message)
            window.location.reload()
        
        })
            .catch((error)=> console.log(error))
    }
    const updateVal = (val) => {
        navigate("/add", { state: { val } })
        
           

        }
           
    


  return (
      <div>
          <Typography variant="h3" color='error'><b>EMPLOYEE DETAILS</b></Typography>
          <TableContainer component={Paper}>
              <Table border='2' color='success'>
                  <TableHead>
                      <TableRow>
                          <TableCell align="center"><b>NAME</b></TableCell>
                          <TableCell align="center"><b>AGE</b></TableCell>
                          <TableCell align="center"><b>DEPARTMENT</b></TableCell>
                          <TableCell align="center"><b>SALARY</b></TableCell>
                          <TableCell align="center"><b>DELETE</b></TableCell>
                          <TableCell align="center"><b>UPDATE</b></TableCell>
                          
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell align="center" >{val.Name}</TableCell>
                                  <TableCell align="center">{val.Age}</TableCell>
                                  <TableCell align="center" >{val.Dept}</TableCell>
                                  <TableCell align="center" >{val.Slry}</TableCell>
                      
                              
                                  <TableCell align="center">
                                      <Button variant="contained" color="inherit" onClick={() => { delVal(val._id) }}>DELETE</Button>
                                  </TableCell>
                                  <TableCell align="center">
                                      <Button variant='contained' color='inherit' onClick={() => { updateVal(val._id) }}>UPDATE</Button>
                                  </TableCell>
                                  
                      
                              </TableRow>
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer>

    </div>
  )
}

export default View