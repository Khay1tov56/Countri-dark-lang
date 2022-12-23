import Header from './components/Header/Header'; 
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import { Home } from './pages/Home/index';
import { SingleList } from './pages/SingleList';
import { useState, useEffect } from 'react'; 
import { Route, Routes } from 'react-router-dom';


import "./main.css"


const App = () => {
  
  const [til, setTil ] = useState(localStorage.getItem("en") || til)

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); 

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  useEffect(() => {
    localStorage.setItem("en", til)
  })

  const body = document.querySelector(".body")
  body.classList.remove(theme === "light" ? "dark":"light" )
  body.classList.add(theme)


  let [value, setValue] = useState("")
  let [selecvalue, setSelecValue] = useState("")
  let [loading, setLoading] = useState(true)
  let [isError, setIsError] = useState(false)


  const [data, setData] = useState({
    isLoading: true,
    data: [],
    isError: false,
  })

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${value ? `name/${value}`: selecvalue ? `region/${selecvalue}`: "all"}`)
  .then(response => {
    if(response.status == 200) {
      return response.json()
    }else {
      alert("Qidiruv natijasi topilmadi")
      window.location.reload();
    }
  })
  .then(data => {
    setData({
      isLoading:false,
      data: data,
      isError:false,
    })
 

  })
  .catch((err) => {
    setData ({
      isLoading:false,
      isError :true,
      data: []
    })
    console.log(err);
  })
  }, [value, selecvalue])

    // let fakeData = Array(8).fill(1);
  
  const inputValue = (text) => {
    setValue(text);
    setSelecValue("")
  }

  const selectValue = (value) => {
    setSelecValue(value);
    setValue("")
  }

    return  <>
    <Header setTheme={setTheme} setTil={setTil} til={til}/>
   <main>
    <Routes>
      <Route path='/' element={<div className="container">
      <Form getValue={inputValue} getSelect={selectValue} setTil={setTil} til={til}/>
      {data.isLoading && <h1>Loading...</h1>}
      {data.isError && <h1>Error...</h1>}
      {data.data.length !== 0 && (
    <ul className="d-flex flex-wrap justify-content-between">
{
          data.data.map(item => {
            return <Card til={til}
            id={item.id}
            img={item.flags.png}
            population={item.population}
            region={item.region}
            capital={item.capital}
            name={item.name.common}
            />
            
          }) 
        }
      
       
        
    </ul>
      )}
    </div>} />
    <Route path='/country/:name' element={<SingleList til={til} setTil={setTil}/>}/>
    <Route path='*' element={<Home />}/>
    </Routes>
   </main>
    </>
  }

  export default App;