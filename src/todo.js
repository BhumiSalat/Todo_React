import React, { useState, useEffect } from "react";

import './App.css';


const CountApp = () => {


  const [tableContent, setTableContent] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => setTableContent(json));
  }, []);
 


  return (
    <div style= {{textAlign: "center"}}>
        <form>
            <input type="text" placeholder="Enter Todos item" style={{width:"50%",height:"30px"}}></input>
            <button type="submit" style={{height:"30px"}} onClick={() => setCount(count + 1)}>Submit</button>
            <p>You clicked {count} times</p>
            
        </form><br></br>
        <table style={{textAlign: "center",marginLeft:"300px", width:"700px"}}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {tableContent.slice(0,5).map(content => {
            return (
              <tr key={content.id}>
                <td style={{ paddingTop: "10px" }}>{content.userId}</td>
                <td style={{ paddingTop: "10px" }}>{content.title}</td>
                <td><button>Complete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>  
    
  );
};

export default CountApp;
