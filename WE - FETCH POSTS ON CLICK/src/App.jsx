
import React, {useState, useEffect} from 'react'

const App = () => {
  const [data, setData] = useState([])

  let getData = async ()=>{
    try{
      let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    res = await res.json()
    setData(res)
    }catch(error){
      console.log(error)
    }
  }

  
const clearData = ()=>{
  setData([])
}

  return (
    <div>
      <h1>Hy, I am dummy text..</h1>
      <button onClick={getData}>Click me to get posts</button>
      <button onClick={clearData}>Clear data</button>

      {data.map((el)=>(
        
        <div key = {el.id} style={{border:"1px solid gray", padding:"20px", width:"400px", margin:"auto", marginTop:"20px"}}>

          <h5>User ID : {el.id}</h5>
        <p>{el.title}</p>
        </div>
      ))}

    </div>
  )
}

export default App