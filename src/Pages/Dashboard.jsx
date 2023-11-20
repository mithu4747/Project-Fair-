import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
  if(sessionStorage.getItem("existingUser")){
    setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
  }
  },[])
  return (
    <>
    <Header insideDashboard/>
    <Row style={{marginTop:'100px'}} className='container-fliud'>
      <Col sm={12} md={8}>
        {/* my project*/}
        <h2>Welcome <span className='text-warning'>{username}</span></h2>
        <MyProjects/>
    
      </Col>
      <Col sm={12} md={4}>
       {/* my profile*/}
      <Profile/>
      </Col>
    </Row>
    </>
  )
}

export default Dashboard