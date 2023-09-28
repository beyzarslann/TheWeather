const getResult = (cityName) => {
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d86436bacf99e58c3aedcaac5c8c119e&units=metric&lang=tr`;
    fetch(query)
      .then((response) => response.json())
      .then((result) => {
        if (result.sys && result.main) {
          // result.sys ve result.main öğeleri mevcut
          const city = document.querySelector(".city");
          city.innerText = `${result.name}, ${result.sys.country}`;
  
          const temp = document.querySelector(".temp");
          temp.innerText = `${Math.round(result.main.temp)}°C`;
  
          const desc = document.querySelector(".desc");
          desc.innerText = result.weather[0].description;
  
          const minmax = document.querySelector(".minmax");
          minmax.innerText = `${Math.round(
            result.main.temp_min
          )}°C / ${Math.round(result.main.temp_max)}°C`;
        } else {
          console.log("Hata: result.sys veya result.main öğesi mevcut değil");
          alert("Aradığınız şehir bulunamadı");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Aradığınız şehir bulunamadı");
      });
  };
  
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      getResult(searchBar.value);
    }
  });
  