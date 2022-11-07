import React from 'react'
import {RiAddCircleFill} from 'react-icons/ri'

function ListFunctions(props) {
  
    return (
    <form className='d-flex input' onSubmit={props.onHandleSubmit}>
        <input type='text' ref={props.inputRef} className="form-control" value={props.string} onChange={props.onHandle}/>
        <button type='submit' className='btn btn-info' onClick={props.addList}>
          <RiAddCircleFill fontSize='2rem'/>
          </button>
       
    </form>
  )
}

export default ListFunctions