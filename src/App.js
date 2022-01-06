
import React,{useEffect , useState}from 'react'
import movie from  './movie.js';
import "./App.css";
import Movierow from './components/movierow.js'
import MovieDestaque from './components/MovieDestaque.js'
import Header from './components/Header'
export default function App() {


  const [movielist,setmovie]= useState([])
  const[DestaqueMovie,setDestaque]=useState([])
  const[BlackMenu,SetblackMenu] = useState(false)



  useEffect(()=>{
    const loadAll = async()=>{
    //pegando a lista total
      let list = await movie();
      setmovie(list)
      // console.log(list)



      //pegando o filme em destaque
      let originais = list.filter(i=>i.categoria==="originais")
      let randomChoose = Math.floor(Math.random() * (originais[0].items.results.length -1))
      let choose = originais[0].items.results[randomChoose]
      setDestaque([choose])
      // console.log(choose)
    }
     loadAll();
  },[])

  //monitorar o scroll
  useEffect(()=>{
    const scrollListener =()=>{
      if(window.scrollY > 10){
        SetblackMenu(true)
      }else{
        SetblackMenu(false)
      }
    }
    window.addEventListener('scroll',scrollListener)

  },[])


  return (
    <div >
      <Header black={BlackMenu}/>
      <div>
        {DestaqueMovie.map((item,key)=> 
        <MovieDestaque
         key={key} name={item.name}
          overview={item.overview} img={item.backdrop_path}
          nota={item.vote_average} popularidade={item.popularity}
          
          />
        )}
      </div>
      

      <section>
        {movielist.map((item,key)=>
         
            <Movierow key={key} title={item.title} items={item.items}/>
          
        )}
      </section>
      {movielist.length <= 0 &&
           <div className='loading'>
            <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif"/>
          </div>
      
      }
         
    </div>
  )
}


  