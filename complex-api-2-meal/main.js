let userAnswer = prompt("What meal would you like to search for?")

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userAnswer}`)
    .then(response => response.json())
    .then(data=> {
      if(data.meals === null){
        alert("Sorry, there are no recipes for this")
      } else {
        console.log(data);
        document.getElementById('middle').innerHTML = data.meals[0].strInstructions
        document.getElementById('name').innerHTML = data.meals[0].strMeal
      }
})
      fetch(`https://pixabay.com/api/?key=18202356-66eac1bb50770104efc7f185f&q=${userAnswer}&image_type=photo`) //select random
          .then(response => response.json())
          .then(data => {
            console.log(data);
            document.querySelector('img').src = data.hits[0].previewURL
            // document.querySelector('h3').innerHTML = random.meals[0].strMeal
          })


    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
