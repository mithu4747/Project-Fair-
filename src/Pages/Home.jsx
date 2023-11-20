import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import titleImage from '../Assets/mern-banner.svg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'


function Home() {
  const [loggedin,setLoggedin] = useState(false)
  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setLoggedin(true)

  }else{
    setLoggedin(false)
  }
  },[])
  
  return (
   <>
   <div style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}} className='container-fluid rounded'> 
   <Row className='align-items-center p-5'>
    <Col sm={12}md={5}>
      <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'><i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo cupiditate impedit, ducimus modi saepe fuga doloribus! Itaque, vel ad nisi eaque nesciunt quisquam, libero, modi voluptates officia similique fugit.</p>
    {
    loggedin?
      <Link to={'/dashboard'}  className='btn btn-warning'>Manage your projects
       <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>:
      <Link to={'/login'}  className='btn btn-warning'>Start to Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
}
    </Col>
    <Col sm={12} md={6}><img style={{marginTop:'100px'}} className='w-75' src={titleImage} alt="" /></Col>
    </Row>
    </div>
    {/* all projcts*/}
    <div className='all-projects mt-5'> 
    <h1 className='text-center mb-5'>Explore Our Projects</h1>
    <marquee scrollAmount={25}>
      <div className='d-flex justify-content-between'>
   
        <div style={{width:'500px'}}><ProjectCard/></div>

      </div>

    </marquee>
    <div className='text-center  '> <Link to={'/Projects'}>View More Projects</Link></div>
    </div>
   </>
  )
}

export default Home