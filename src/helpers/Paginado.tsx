export default function Paginado({countyForPage, allCountry, paginado}:any) {
    
    const numPag = []

    for (let i = 1; i <= Math.ceil(allCountry/countyForPage); i++) {
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