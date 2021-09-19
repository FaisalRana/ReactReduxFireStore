import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedinLinks = () => {
  return (
<ul className= "right">
  <li><NavLink to='/create'>New Project</NavLink></li>
  <li><NavLink to='/invalid'>Log Out</NavLink></li>
  <li><NavLink to='/' className='btn btn-floating pink ligthen-1'></NavLink></li>
</ul>
  )
}

export default SignedinLinks 