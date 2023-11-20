import React from 'react'
import {Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header({insideDashboard}) {
  return (
 
    <Navbar style={{backgroundColor:'#90ee90',zIndex:'1'}} className="position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-4'> <i class="fa-brands fa-stack-overflow"></i>Project Fair</Link>
            
             </Navbar.Brand>
{  insideDashboard &&     <div className='btn btn-linkms-auto text-info fw-bolder fs-5'><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</div>
}      </Container>
  </Navbar>
  )
}

export default Header