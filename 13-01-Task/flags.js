
const getCountries = ()=>{


 const xhr= new XMLHttpRequest();
 xhr.open("GET","https://restcountries.com/v3.1/all")
  xhr.send();
    xhr.responseType = "json";
    xhr.onload =()=>{
        const Allcountries = xhr.response;
       
        

        for (const countries of Allcountries) {
           AllCountries(countries)
        }
        


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









        
    }































}
getCountries()