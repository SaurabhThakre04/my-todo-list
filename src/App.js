import {useState} from 'react'
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [items,setItems] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(input);
    if(input === '')
    {

    }
    else{
     setItems([...items,input])
      console.log(items);
     setInput('');
    }
  }

  const handleOnClick = (id) =>{
    const updatedItems = items.filter((elem,ind)=>{
       return ind !== id;
    })

    setItems(updatedItems)
  }

  const handleRemoveAll = ()=>{
    setItems([]);
  }

  return (
    <div className="App">
           <div className='heading '><h1>MY TODO LIST </h1></div>

           <div className='todo-form'>
              <form className='form' onSubmit={handleSubmit}>
                   <input className='mx-3' type='text' placeholder='what is your task today?' value={input} onChange={(e)=>{setInput(e.target.value)}} ></input>
                   <button className='btn btn-primary mx-3' type='submit' >ADD</button>
              </form>
            </div>

            <div className='your-task'>
                <h2>MY TASKS</h2>
                {
                  items.map((elem,ind)=>{
                         return (
                          <div className='tasks d-flex justify-content-between my-2' key={ind}>
                          <h3 className='mx-2'>{elem}</h3>
                          <button className='btn btn-secondary' onClick={()=>{handleOnClick(ind)}}>DELETE</button>
                      </div>
                    )
                  })
                }

                <button className='btn btn-danger' onClick={()=>{handleRemoveAll()}}>REMOVE ALL </button>
             </div>
    </div>
  );
}

export default App;
