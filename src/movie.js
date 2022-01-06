const Api_key = "e5cfe1d17ccfa8b2b4063e6a26b871a5";
const Api_base = "https://api.themoviedb.org/3";



const base_Fetch = async (endpoint)=>{
  const req = await fetch(`${Api_base}${endpoint}`);
  const json = await req.json();
  return json;
}


export default async function movie(){
    return[
      {
        categoria:"originais",
        title:"Originais da netflix",
          items: await base_Fetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${Api_key}`)
      },
      {
        categoria:"trending",
        title:"Recomendados para você",
        items: await base_Fetch(`/trending/all/week?language=pt-BR&api_key=${Api_key}`)
      },
      {
        categoria:"Em alta",
        title:"Em alta essa semana",
        items: await base_Fetch(`/movie/top_rated?language=pt-BR&api_key=${Api_key}`)
      },
      {
        categoria:"Filmes de ação",
        title:"Ação",
        items:await base_Fetch(`/discover/movie?with_ganres=28&language=pt-BR&api_key=${Api_key}`)
      },
      {
        categoria:"Comédia",
        title:"Comédia",
        items:await base_Fetch(`/discover/movie?with_ganres=35&language=pt-BR&api_key=${Api_key}`)
      }
    ]
   }

   