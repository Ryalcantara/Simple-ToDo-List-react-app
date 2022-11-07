import EditModal from "./EditModal";
import {FcEmptyTrash, FcEditImage} from "react-icons/fc"
function List(props) {




  return (
    <div>
      <ul className="list-group">
        {props.arrayList.map((list, index) => (

          <li
            className="list-group-item d-flex justify-content-between"
            
            style={{textDecoration: list.state ? '' : "line-through"}}
            key={index}
          >
            <p type='button' onClick={() => props.onStrike(index)}>{list.value}</p>
            <EditModal index={index} editIndex={props.editIndex} onEdit={props.onEdit} onHandleSubmit={props.onHandleSubmit} inputRef={props.inputRef}/>
            <div className="d-flex align-items-end padding-left">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target= {`#_${index}`}
                className="btn btn-sm btn-warning"
              >
                <FcEditImage fontSize='1.5rem'/>
              </button>

              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => props.deleteIndex(index)}
              >
                <FcEmptyTrash fontSize='1.5rem'/>
              </button>
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
}

export default List;
