var PokemonInfoPromise= d3.json("https://pokeapi.co/api/v2/pokedex")
PokemonInfoPromise.then(function(pokedex)
{
    console.log("pokedex",pokedex)
    var dex = pokedex.results
    getRegion(dex)
    //getmon(pokedex)
   // getpokemon-species(pokedex)
                        
            },
    function(Error){
        console.log("fail", Error)
        
    })
//var getmon=function(pokedex)
            
var getRegion= function(pokedex)
{
    d3.select(".Regions")
    .selectAll("div")
    .data(pokedex)
    .enter()
    .append("div")
    .attr("id", "Regions")
    .text(function(d){
        return d.name;})
    .on("click", function(pokedex){
     getmon(dex)
    
    })
}