import React, { useState } from "react";

function AddTodo() {
  const [value, setValue] = useState("");
  const [todo, settodo] = useState([
    {
      id: "1",
      name: "go for shooping",
      isCompleted: true,
    },
    {
      id: "2",
      name: "buy vegetables",
      isCompleted: false,
    },
    {
      id: "3",
      name: "go for lunch",
      isCompleted: true,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    todoitem(value);
    setValue("");
  };

  const todoitem = (name) => {
    var id = Math.floor(Math.random() * 1000).toString();
    const newtodo = [...todo, { id, name, isCompleted: false }];
    console.log(newtodo);
    settodo(newtodo);
  };

  function useToggle(intialVal = false) {
    const [state, setState] = useState(intialVal);

    const toggle = () => {
      setState(!state);
    };
    return [state, toggle];
  }
  const [isEditing, toggle] = useToggle(false);
  function EditTodoFrom(todoId) {
    const [value, setValue] = useState("");

    return (
      <form onSubmit={editSubmit} style={{ marginLeft: "550px" }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" onClick={() => editTodo(todoId, value)}>
          Done
        </button>
      </form>
    );
  }
  const editSubmit = (e) => {
    e.preventDefault();
    console.log("Edit");
    if (!value) return;
    edittodoitem(value);

    setValue("");
  };

  const edittodoitem = (name) => {
    alert("Edit");
    var id = Math.floor(Math.random() * 1000).toString();
    const newtodo = [...todo, { id, name, isCompleted: false }];
    console.log(newtodo);
    settodo(newtodo);
  };

  function editTodo(todoId) {
    //alert('Edit')
    let editTodos = todo.map((todo) => {
      if (todo.id === todoId) {
        const edidata = [...todo, { todoId, value, isCompleted: false }];
        alert("Edit");
      }
      return todo;
    });
    settodo(editTodos);
  }

  const editTodoItem = (t) => {
    const newTodos = todo.map((td) => {
      if (td.id === t.id) {
        return t;
      } else {
        return td;
      }
    });

    settodo(newTodos);
  };

  function toggleTodo(todoId) {
    let completeTodos = todo.map((todo) => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    settodo(completeTodos);
  }

  function markAll() {
    let completeTodos = todo.map((todo) => {
      todo.isCompleted = !todo.isCompleted;

      return todo;
    });
    settodo(completeTodos);
  }
  function markAllComplete() {
    let completeTodos = todo.map((todo) => {
      todo.isCompleted = true;

      return todo;
    });
    settodo(completeTodos);
  }
  function markAllIncomplete() {
    let completeTodos = todo.map((todo) => {
      todo.isCompleted = false;

      return todo;
    });
    settodo(completeTodos);
  }
  function deleteAllComplete() {
    const deletedTodos = todo.filter(({ id }) => {
      // if(todo.isCompleted === true)
      //  var deletedTodos  = todo.filter(({id}) => {
      //     return id === todo.id
      // })
      return todo.isCompleted === true;
    });
    settodo(deletedTodos);
  }

  function todoRemove(todoId) {
    const deletedTodos = todo.filter(({ id }) => {
      return id !== todoId;
    });
    settodo(deletedTodos);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginLeft: "300px", width: "700px" }}
      >
        <input
          type="text"
          placeholder="Enter Todos item"
          style={{ width: "50%", height: "30px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" style={{ height: "30px" }}>
          Submit
        </button>
      </form>
      <br></br>
      <button type="submit" onClick={markAll} style={{ marginLeft: "300px" }}>
        Mark All Complete/Incomplete
      </button>
      <button
        type="submit"
        onClick={markAllComplete}
        style={{ marginLeft: "30px" }}
      >
        Mark All Complete
      </button>
      <button
        type="submit"
        onClick={markAllIncomplete}
        style={{ marginLeft: "30px" }}
      >
        Mark All Incomplete
      </button>
      <button
        type="submit"
        onClick={deleteAllComplete}
        style={{ marginLeft: "30px" }}
      >
        Delete All Completed
      </button>
      <br></br>
      <br></br>
      {/* { isEditing ? <EditTodoFrom/>  */}
      <table
        style={{ textAlign: "center", marginLeft: "300px", width: "700px" }}
      >
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </thead>
        <tbody>
          {todo.map((data) => {
            return (
              <tr key={data.id}>
                <td style={{ paddingTop: "10px" }}>{data.id}</td>
                <td className="todo" style={{ paddingTop: "10px" }}>
                  <input
                    value={data.name}
                    onChange={(e) => {
                      console.log(e.target.value);
                      editTodoItem({ ...data, name: e.target.value });
                    }}
                  />
                  {/* <p style={{textDecoration:data.isCompleted ? "line-through":"none" }}>   {data.name}</p> */}
                </td>
                {/* <td style={{ paddingTop: "10px" }}>{data.isCompleted}</td> */}
                <td>
                  <button type="submit" onClick={() => toggleTodo(data.id)}>
                    Complete
                  </button>{" "}
                  <button type="submit" onClick={() => todoRemove(data.id)}>
                    Remove
                  </button>
                  <button
                    type="submit"
                    onClick={() => (toggle() ? editTodo(data.id) : "")}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AddTodo;
