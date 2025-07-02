import React, { useState } from "react";

function TodoApp() {
  const [task, settask] = useState("");
  const[tasks,settasks] =useState([])

  const handlechange = (e) => {
    settask(e.target.value);
  };

  const handleaddtask = (e) => {
    e.preventDefault(); 
    if(task.trim()!== "") return(
        settasks([...tasks,task]),
        settask("")
    )
  };
  const handledelete=(index)=>{
     const del= tasks.filter((item ,i)=> i!== index) ;
     settasks(del)
  }
  function clear(){
    settasks([])
  }
  

  return (
    <div>
      <h2>📝 Todo List</h2>
      <form>
        <input type="text" value={task} onChange={handlechange} />
        <button onClick={handleaddtask}>Add</button>
      </form>

      <ol style={{backgroundColor:"black",
      textAlign:"center",
      color:"whitesmoke"
      }}>
        {tasks.map((t,index)=> <li key={index}>{t}
            <button onClick={()=>handledelete(index)}>delete

            </button>
        </li>)}

       
      </ol>
       <button onClick={clear}>clear</button>
    </div>
  );
}

export default TodoApp;
