export default function Paginado({gamesForPage, allGames, paginado}:any) {
    
    const numPag = []

    for (let i = 1; i <= Math.ceil(allGames/gamesForPage); i++) {
        numPag.push(i)    
    }

    return(  
            <div className="inline" >
                {   
                    numPag?.map(num =>(
                        <div className="inline-block" key={num} >
                        <button onClick={()=> paginado(num)}>{num}</button>
                        </div>
                        
                        
                    ))
                }
            </div>

    )
}