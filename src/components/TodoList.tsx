import  { useState } from 'react';


const TodoList = () => {
    const [todos, setTodos]  = useState(["Buy groceries", "Clean the house", "Walk the dog"]); 
    const [name,setName] = useState('');
   
   
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setTodos([...todos, name]);
        setName('');
       
    }

    
   
    return (
        <>
      <h1>To do List</h1>      
            <input  type='text' value={name} onChange={(e) => setName(e.target.value)} />
    
           <button  onClick={handleSubmit} >add</button>
   
           {todos.map((list,index)=>{
            // 
            if(list.length > 0 && name.length < 1 ){
                return   <ul className="list-group">
                <li  className="list-group-item"key={index}>{list}
                <br></br> 
               
               
        </li>
                {/* <li className="list-group-item">
         </li> */}
                </ul>
                //  <input type="text" value={this.state.variable} onChange={this.onValueChange}/>
                //  <br/>
                //  value : {this.state.variable}
            
            }
            {
               return <li>no records todo list</li>
            }
           }
          
             )}

        </>
    )
    
  }

export default TodoList


