import React from 'react'
import { Navigate } from 'react-router-dom';

function A08Redirect() {

  const isChecked = false;

  if(!isChecked) {
    return <Navigate to="/A01Props" />
  }
  
  return (
    <div>A08Redirect</div>
  )
}

export default A08Redirect
