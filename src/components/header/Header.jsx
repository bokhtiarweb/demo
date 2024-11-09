import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <NavLink to='/' style={{backgroundColor: '#cccc', display: 'inline-block', marginRight: '10px', padding: '8px 10px', borderRadius: '8px', color: '#111111', fontWeight:'bold', textDecoration:'none', fontSize:'18px'}}>Home</NavLink>
      <NavLink to='/login' style={{backgroundColor: '#cccc', display: 'inline-block', marginRight: '10px', padding: '8px 10px', borderRadius: '8px', color: '#111111', fontWeight:'bold', textDecoration:'none', fontSize:'18px'}}>Login</NavLink>
    </div>
  )
}
