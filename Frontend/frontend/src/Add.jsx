import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, Setinput] = useState({ Name: "", Age: "", Dept: "", Slry: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log("loc", location.state)

  
  const inputHandler = (e) => {
    Setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
    axios.put("http://localhost:3004/update/" + location.state.val._id, input )
    .then((res) => {
      alert((res.data.message))
      navigate("/view")
    })
    }
    else {
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          alert((res.data.message))
          navigate("/view")
        })
    }
    }
  useEffect(() => {
      if (location.state !==null) 
        Setinput({
          ...input,
          Name: location.state.val.Name,
          Age: location.state.val.Age,
          Dept: location.state.val.Dept,
          Slry: location.state.val.Slry
      })
    },[])
    
  return (
      <div>
          <h1>DETAILS</h1>
      <TextField label="name" variant='filled' name='Name' value={input.Name} onChange={inputHandler} /> <br /><br />
      <TextField label="age" variant='filled' name='Age' value={input.Age} onChange={inputHandler} /> <br /><br />
      <TextField label="department" variant='filled' name='Dept' value={input.Dept} onChange={inputHandler} /> <br /><br />
      <TextField label="salary" variant='filled' name='Slry' value={input.Slry} onChange={inputHandler} /> <br /><br />
          <Button variant='contained' onClick={addHandler}>SUBMIT</Button>
    </div>
  )
}
export default Add