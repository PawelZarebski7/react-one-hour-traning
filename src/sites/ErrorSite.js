import React from 'react'
import { Link } from 'react-router-dom'

const ErrorSite = () => {
  return (
    <div>
        <h1>Error Site!</h1>
        <h3>Back to Main Site</h3>
        <Link to='/'>
            <button>Back</button>
        </Link>
    </div>
  )
}

export default ErrorSite