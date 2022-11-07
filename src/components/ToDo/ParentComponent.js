import React, { useState, useEffect, useRef } from "react";
import List from "./List";
import ListFunctions from "./ListFunctions";

function ParentComponent() {
  const [string, setString] = useState("");
  const [arrayList, setArrayList] = useState([]);
  const [edit, setEdit] = useState("");

  const addArray = (e) => {
    setString(e.target.value);
  };

  const addList = () => {
    setArrayList([
      ...arrayList,
      {
        id: arrayList.length,
        value: string,
        state: true
      },
    ]);
    setString('')
  };

  const deleteIndex = (i) => {
    setArrayList(arrayList.filter((array, index) => i - index));
  };

  const editIndex = (i) => {
    console.log(i)
    setArrayList(
      arrayList.map(list => {
        if (list.id === i) {
          return{...list, value: edit}
        }
        return list;
      
      })
      )
  };

  const onEdit = (e) => {
    setEdit(e.target.value);
  };

  const onSubmit = (e) =>{
    e.preventDefault();
  }

 

  const inputRef = useRef(null)
  useEffect(() => {
    
  
    inputRef.current.focus()
  },[])



  const onStrike = (i) =>{
        setArrayList(arrayList.map((list, index)=>{
          if(index === i){
            return{...list, state: !list.state}
          }
          return list
        }
        )
        )
      }


  
  
  

  return (
    // * TODO
    <div className="wrap">
      <ListFunctions onHandle={addArray} inputRef={inputRef} addList={addList} onHandleSubmit={onSubmit} string={string}/>

      <List arrayList={arrayList} editIndex={editIndex} deleteIndex={deleteIndex} onEdit={onEdit} onHandleSubmit={onSubmit} inputRef={inputRef} onStrike={onStrike}/>
       
      
    </div>
  );
}

export default ParentComponent;
