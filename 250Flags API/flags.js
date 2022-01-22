
       
fetch("https://restcountries.com/v3.1/all").then(function(data) {
return data.json()
.then(function (Countrylist) {
  var details = Countrylist


        function AllCountries(countries) {
    
            const all= document.createElement("div")
            all.className = "container";
            all.innerHTML =`
            <img src= ${countries.flags.png} alt="" class="img">
            <h3>${countries.name.common}</h3>
            <span>Population :${countries.population}</span>
            <span>Region : ${countries.region}</span>
          <span>Capital : ${countries.capital}</span>
            
            `
            document.body.append(all)
            
            
            
            
            
            }


for (const countries of details) {
             AllCountries(countries)
          }
























})

})
        








        
    































// }
// getCountries()