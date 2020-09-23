import React,{useState} from 'react'

function AddTodo () {
    const [value, setValue] = useState("");
    const [todo, settodo] = useState([
 
        {
            id:"1",
            name:"go for shooping",
            isCompleted:true
        },
        {
           id:"2",
           name:"buy vegetables",
           isCompleted:false
       },
       {
           id:"3",
           name:"go for lunch",
           isCompleted:true
       }
   ]);

   const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    
    todoitem(value);
    setValue("");
}

const todoitem = name => {
    const newtodo = [...todo, {name, isCompleted:false}];
    settodo(newtodo);
}
 
const handleAction = e => {
    e.preventDefault();
    return(
    <td className="todo" style={{ textDecoration:todo.isCompleted ? "line-through": ""}}>
        {todo.name}
    </td>
    )
}
// function Todo({ todo }){
// return (
//     <td className="todo" style={{ textDecoration:todo.isCompleted ? "line-through": ""}}>
//         {todo.name}
//     </td>
// )
// }

 
    return (
        <div>
             <form onSubmit={handleSubmit} style={{textAlign: "center",marginLeft:"300px", width:"700px"}} >
            <input type="text" placeholder="Enter Todos item" style={{width:"50%",height:"30px"}} value={value} onChange={e => setValue(e.target.value)}  ></input>
            <button type="submit" style={{height:"30px"}} >Submit</button>
            
        
        </form><br></br>
       
        <table style={{textAlign: "center",marginLeft:"300px", width:"700px"}}>
        <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
        </thead>
        <tbody>
        {todo.map(data => {
           return (
             <tr key={data.id}>
               <td style={{ paddingTop: "10px" }}>{data.id}</td>
               <td className="todo" style={{ paddingTop: "10px" }}>{data.name}</td>
              {/* <td style={{ paddingTop: "10px" }}>{data.isCompleted}</td> */}
               <td><button onSubmit={handleAction} >Complete</button> <button variant="contained" color="red">Remove
               </button></td>
               
             </tr>
           );
         })}
        </tbody>
    </table>
    </div>
    );
};

export default AddTodo
