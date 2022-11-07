import React from 'react'
import {GrUpdate} from 'react-icons/gr'

function EditModal(props) {
  return (
    <div className="modal fade" id={`_${props.index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <h5
            className="modal-title"
            id="exampleModalLabel"
          >
            Update List{props.index}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form className="modal-body d-flex" onSubmit={props.onHandleSubmit}>
          <input
            type="text"
            ref={props.inputRef}
            className="form-control"
            onChange={props.onEdit}
          />
             <button
             data-bs-dismiss="modal"
      className="btn btn-info btn-sm"
      onClick={() => props.editIndex(props.index)}
    >
      <GrUpdate/>
    </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditModal