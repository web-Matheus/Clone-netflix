import React, {useState} from 'react'
import './movierow.css'
 import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
 import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Movierow({title,items}) {
    const[scrollLeft, setScrollLeft] = useState(-400);
    
    const handleLeft = () =>{
       const x = scrollLeft + 160;
       if(x>0){
           x = 0;
       }
       setScrollLeft(x)
    }
    const handleRight = () =>{
        const y = scrollLeft - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 151;
        if((window.innerWidth - listW) > y){
            y = (window.innerWidth - listW)-100;
        }
        setScrollLeft(y)

    }
    return (
        <div>
            <h2>{title}</h2>
            <div className="naviBefore" onClick={handleLeft}>
                <NavigateBeforeIcon style={{fontSize:40}}/>
            </div>
            <div className="naviNext" onClick={handleRight}>
                <NavigateNextIcon style={{fontSize:40}}/>
            </div>
            <div className='listarea'>
                <div className='list'
                style={{
                    marginLeft:scrollLeft,
                    width:items.results.length * 150
                }}
                >
                    {items.results.length > 0 && items.results.map((item,key)=>(
                        <div className='item' key={key}>
                           <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img> 
                        </div>  
                ))}
                </div>
            </div>
        </div>
    )
}
