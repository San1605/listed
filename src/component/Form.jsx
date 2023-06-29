import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div>

  <div >
    <div >Email address</div>
    <input type="email"  placeholder="Enter email"/>
   
  </div>
  <div>
    <div >Password</div>
    <input type="password" placeholder="Password"/>
  </div>
  <div >
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>

  </div>
  <Link to={"/home"}>
  <button type="submit" onc >Submit</button>
  </Link>

    </div>
  )
}

export default Form
