import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';


function AddProjects() {

  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title:"", languages:"",overview:"",github:"",website:"",projectimage:""

  })
const [preview,setPreview] = useState("")
const [token,setToken] = useState("")
  const handleClose = () =>{ setShow(false)
    setProjectDetails({
      title:"", languages:"",overview:"",github:"",website:"",projectimage:""

    })
    setPreview("")
  }

  const handleShow = () => setShow(true);
 // console.log(projectDetails);
  useEffect(()=>{
  if(projectDetails.projectimage){
    setPreview(URL.createObjectURL(projectDetails.projectimage))
  }

  },[projectDetails.projectimage])

  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }else{
    setToken("")
  }
  },[])
  const handleAdd = async (e)=>{
    e.preventDefault()
    const {title,languages,overview,projectimage,github,website} = projectDetails
    if(!title || !languages || !overview || !projectimage || !github || !website){
      toast.info("please fii the form completely!!! ")
    }else{
     const reqBody = new FormData()
     reqBody.append("title",title)
     reqBody.append("languages",languages)
     reqBody.append("overview",overview)
     reqBody.append("projectimage",projectimage)
     reqBody.append("github",github)
     reqBody.append("website",website)

     if(token){
     const  reqHeader = {
        "Content-Type":"muiltipart/form-data",
        "Authorization":`Bearer ${token}`
     }
     const result = await addProjectAPI(reqBody,reqHeader)
     if(result.status===200){
       console.log(result.data);
       handleClose()
       alert("Project added")

     }else{
       console.log(result); 
      toast.warning(result.response.data);
     }
}
 
    }
  }
  return (
    <>
      <Button variant='success' onClick={handleShow}>Add Projects</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size='lg' >

        <Modal.Header closeButton>
          <Modal.Title>Projects Details title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='row'>
            <div className="col-lg-6">
              <label >
                <input type="file" style={{display:'none'}}  onChange={e=>setProjectDetails({...projectDetails,projectimage:e.target.files[0]})}/>
                <img className='img-fluid' src={preview?preview:"https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} alt="profile picture" />

              </label>          </div>
            <div className="col-lg-6">
              <div className='mb-3'> <input type="text" className='form-control'
               placeholder='Project Title' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} /></div>
              <div className='mb-3'>  <input type="text" className='form-control' placeholder='Language used'  value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}/></div>
              <div className='mb-3'>  <input type="text" className='form-control' placeholder=' Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/></div>
              <div className='mb-3'>  <input type="text" className='form-control' placeholder=' Website Link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/></div>
              <div className='mb-3'>  <input type="text" className='form-control' placeholder=' project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/></div>

            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button onClick={handleAdd} variant="primary" >Add </Button>
        </Modal.Footer>

      </Modal>
      <ToastContainer  position='top-right' autoClose={2000} theme="colored"/>

    </>
  )
}

export default AddProjects