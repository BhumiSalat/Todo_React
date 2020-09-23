import React, {useState} from 'react'

// function Task({ task }){
// return (
//     <div className="task" style={{ textDecoration:task.isCompleted ? "line-through": ""}}>
//         {task.name}
//     </div>
// )
// }


function Todolist(){
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

//  useEffect(() => {
//     settodo((todos));
//   }, []);


 
 return(
    <div style={{textAlign: "center"}}>
  
    
    </div> 
 );

};



export default Todolist