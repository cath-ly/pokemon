//var PokemonInfoPromise= d3.json("https://pokeapi.co/api/v2/pokedex")
//PokemonInfoPromise.then(function(pokedex)
//{
//    console.log("pokedex",pokedex)
//    console.log(UrlArray)

//    var dex = pokedex.results
//    getRegion(dex)
   //getmon(pokedex)
   // getpokemon-species(pokedex)
                        
    //        },
    //function(Error){
    //    console.log("fail", Error)
        
  //  })
//var getpokemon-species= function(pokedex)

var NumArray= [1,2,3,4,5,6,7,8,9,11,12,13,14,15];
    
var UrlArray= NumArray.map(function(num){
    var URL= "https://pokeapi.co/api/v2/pokedex/"+num
    var URLPromise= d3.json("https://pokeapi.co/api/v2/pokedex/"+ num)
    return URLPromise;
})
Promise.all(UrlArray).then(function(values)
    { 
    console.log(values)
    getRegion(values)
        },
    function(Error){
        console.log("fail", Error)
} )
   
var getRegion= function(Regions)
{
    d3.select(".Regions")
    .selectAll("div")
    .data(Regions)
    .enter()
    .append("div")
    .attr("id", "Regions")
    .text(function(d){
        return d.name;})
    .on("click", function(region){
     getmon(region)
    
    })
}

 var getmon = function(region)
        {
           // console.log(region)
        remove()
        return d3.select(".PokNames")
        .selectAll("div")
        .data(region.pokemon_entries)
        .enter()
        .append("div")
        .attr("class", "Pokemons")
        .text(function(d){
           // console.log(d)
            return d.pokemon_species.name;})
        .on("click", function(Pokemon){
      d3.select(".Description").append("div")
          .text(
           // console.log(d)
             Pokemon.pokemon_species.url)})
}
 
            
 var descript = function(region)
{
    //console.log(region.descriptions[0])
    return d3.select(".Description")
        .selectAll("div")
        .data(region.pokemon_entries)
        .enter()
        .append("div")
        .attr("src", "PokDescription")
        .text( function(d){
           // console.log(d)
            return d.pokemon_species.url;})
}
   

 var remove = function(){
     d3.select("#PokDescription *").remove()
 }
