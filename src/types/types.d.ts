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
export interface GamesDetails{
  id: number,
  title:string,
  thumbnail:string,
  status:string,
  short_description:string,
  description:string,
  game_url:string,
  genre:string,
  platform:string,
  publisher:string,
  developer:string,
  release_date:string,
  freetogame_profile_url:string,
  minimum_system_requirements: {
    os:string,
    processor:string,
    memory:string,
    graphics:string,
    storage:string
    },
}

interface Props {
  games: Array<dataGames>
}

interface PropsPagesGames{
  pagesGames: Array<dataGames>
}