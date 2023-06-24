export interface dataGames {
    id: number,
    title:string,
    thumbnail: string,
    short_description:string ,
    game_url:string ,
    genre:string ,
    platform:string ,
    publisher:string,
    developer:string ,
    release_date:string ,
    freetogame_profile_url:string 
}

  // useEffect(()=>{
  //     fetch("https://www.freetogame.com/api/games")
  //     .then(r => r.json())
  //     .then(e=> {
  //       const games = {
  //         id:e.id,
  //         title:e.title,
  //         thumbnail:e.thumbnail,
  //         short_description:e. short_description,
  //         game_url:e.game_url,
  //         genre:e.genre,
  //         platform:e.platform,
  //         publisher:e.publisher,
  //         developer:e.developer,
  //         release_date:e.release_date,
  //         freetogame_profile_url:e.freetogame_profile_url
  //       }
  //       setGames(games);
  //     })
  // },[])
  

  // useEffect(()=> {
  //   fetch("https://www.freetogame.com/api/games")
  //   .then(response => response.json())
  //   .then(dataGames => {
  //     console.log(dataGames)
  //     setDataGames(dataGames)
  //   })
  //   .catch(error => {
  //     console.error("Error fetching data:", error);
  //   });
  // },[])