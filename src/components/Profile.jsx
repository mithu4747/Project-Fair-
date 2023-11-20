import { useState } from 'react'
import React  from 'react'
import { Collapse } from 'react-bootstrap'

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div  className=' mt-5'>
        <div className='d-flex border rounded p-3 justify-content-between'>
            <h2>My Profile</h2>
            <button  onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-chevron-down fa-beat"></i></button>
        </div>
     <Collapse in={open}>
            <div className="row shadow p-5 justify-content-center mt-3 mb-2 ">
                {/* upload picture*/}
                <label className='text-center' >
                    <input style={{display:'none'}} type='file'/>
                    <img height={'200px'} width={'200px'} className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyA44JdhHChP6kGqx36BolQq4Hn7z2yGekw&usqp=CAU" alt="upload picture" />
                </label>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='Github Link' />
                </div>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='Linkedlin Link' />
                </div>
                <div className='mt-3 text-center d-grid'>
                    <button className='btn btn-warning'>Update</button>
                </div>
            </div>
     </Collapse>

    </div>
  )
}

export default Profile