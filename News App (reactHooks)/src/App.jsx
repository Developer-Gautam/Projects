
import React, {useState, useEffect} from 'react'


const App = () => {
  
  const [news, setNews] = useState([])
  const [query, setQuery] = useState("India")
  const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search?query=India")
  const [loading, setLoading] = useState(false)

  let fetchNews = () => {
    setLoading(true)
    fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
    .then( result => result.json())
    .then(data => (setNews(data.hits), setLoading(false)))
    .catch (error => console.log(error))
    
  }

  useEffect(()=>{
    fetchNews()
  },[url])
  
  let handleChange = (e)=>{
    setQuery(e.target.value)
  }

  let handleClick = (e) =>{
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
  }

  const showLoading = ()=>(loading ?<h2 style={{color:"red"}}>Loading...</h2>: " ")

  const form = ()=>(
    <div>
        <input type="text" onChange={handleChange} value={query} placeholder="Search by title"/>
        <button onClick={handleClick}>Search</button>
    </div>
  )

  const showData = ()=>(
    news.map((el, i)=>(
      <p key = {i}>{el.title}</p>
      ))
  )




  return (
    <div>
      <h1>News</h1>
        
      {showLoading()}
      {form()}
      {showData()}
      
    </div>
  )
}

export default App