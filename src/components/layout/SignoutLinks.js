import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedoutLinks = () => {
  return (
<ul className= "left">
  <li><NavLink to='/'>Signup</NavLink></li>
  <li><NavLink to='/'>Login</NavLink></li>
</ul>
  )
}

export default SignedoutLinks 