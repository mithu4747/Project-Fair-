import React from 'react'
import AddProjects from './AddProjects'

function MyProjects() {
  return (
    <div  className='card shadow p-3 mt-3 mb-2'>
        <div className='d-flex '>
            <p>MyProjects</p>
            <div className='ms-auto'>  <AddProjects/></div>
        </div>
        <div className='mt-4'>
            {/* collection of user projects*/}
            <div className="border d-flex align-items-center rounded p-2">
                <h5>Project Title</h5>
                <div className='icon ms-auto'>
                    <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i>
                    </button>
                    <button className='btn'><i class="fa-brands fa-github fa-2x"></i>
                    </button>
                    <button className='btn'><i class="fa-solid fa-trash fa-2x"></i>
                    </button>
                </div>
            </div>
            <p className='text-danger fw-bolder'>No Projects Uploaded yet!!!</p>
        </div>
    </div>
  )
}

export default MyProjects