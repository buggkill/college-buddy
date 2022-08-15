import React, { useEffect } from 'react'

const Logout = () => {

    useEffect(()=>{

        window.localStorage.removeItem('UserRef')
        window.localStorage.removeItem('Role')
        window.localStorage.removeItem('ClassroomRef')

        window.location.href = '/login'

    },[])

  return (
    <div>Logging Out</div>
  )
}

export default Logout