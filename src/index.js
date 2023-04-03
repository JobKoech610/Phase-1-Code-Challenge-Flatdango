
document.addEventListener("DOMContentLoaded", function() {
    
  const fisrtFilmUrl = 'http://localhost:3000/films/1';
  fetch(fisrtFilmUrl)
  .then(resp=>resp.json())
  .then(film=>{

//poster of the film/1
    function fetchPosterDetails(poster){
     const image = document.getElementById('image')
     image .setAttribute("alt", "movie-image");
     image.style.width= "200px";
     image.src = poster;
    }
    fetchPosterDetails(film.poster)

    // details about film/1
    function buyDetails(details){
      console.log(details);
      document.getElementById('ticket').style.border='1px solid red'
      document.getElementById('ticket').style.padding='10px'
     

      //selecting nodes 
      const buyMovieTitle = document.getElementById('MovieTitle')
      const buyrunTime = document.getElementById('runTime')
      const buyDescription = document.getElementById('Description')
      const buyshowtime = document.getElementById('showtime')
      
      const note = document.getElementById('note')
      const buybtn = document.getElementById('buybtn')

      buyMovieTitle.style.margin="2px,auto,1px";
      note.style.padding='10px';

      //text manipulation
      buyMovieTitle.innerText = details.title; 
      buyrunTime.innerText = `${details.runtime} minutes`; 
      buyDescription.innerText = details.description; 
      buyshowtime.innerText = details.showtime; 


      const buyticket = document.getElementById('buyticket')
      
      console.log(buyticket)
      buyticket.innerText = parseInt(`${details.capacity - details.tickets_sold}`,10); 
      note.innerText='remaining-ticket';
      buybtn.innerText = "buy-ticket";

      //eventListener on buy-button
      buybtn.addEventListener('click', (e)=>{
        e.preventDefault()
        if (Number(buyticket.innerText)>0){
          buyticket.innerText= Number(buyticket.innerText)-1;
        }else if (Number(buyticket.innerText)===0){
          buybtn.style.color='red';
          buybtn.innerText = "SOLD-OUT!";
        }
      })

    }

    buyDetails(film);

  })


  //fecting all the films from json list
    const filmUrl = 'http://localhost:3000/films';
    fetch(filmUrl)
    .then(response => response.json())
    .then(function (films) {
   
      //looping through data [objects]
    for (let i = 0; i< films.length; i++){
    //  console.log(data[i]);

    //creating 'li' which will hold the title name
      const movieTitle = document.createElement('li')
      movieTitle.innerText = films[i].title;
      movieTitle.style.padding='10px';
      document.getElementById('list').appendChild(movieTitle);
      //addeventlistener with function calling (hoisting)
      movieTitle.addEventListener('click', () =>{
        fetchPosterDetails(films[i].poster)
        buyDetails(films[i])
      })
    }

    //poster of the films
    function fetchPosterDetails(poster){
    const image = document.getElementById('image')
     image .setAttribute("alt", "movie-image");
     image.style.width= "200px";
     image.src = poster;
  

    }

   //details
    function buyDetails(details){

      //js stlying
      document.getElementById('ticket').style.border='1px solid red'
      document.getElementById('ticket').style.padding='10px'
      document.getElementById('ticket').style.border='1px solid red'
      document.getElementById('ticket').style.padding='10px'
      
  
      //selecting nodes
      const buyMovieTitle = document.getElementById('MovieTitle')
      const buyrunTime = document.getElementById('runTime')
      const buyDescription = document.getElementById('Description')
      const buyshowtime = document.getElementById('showtime')
      
      const note = document.getElementById('note')
      const buybtn = document.getElementById('buybtn')

      buyMovieTitle.style.margin="2px,auto,1px";
      note.style.padding='10px';



      //data manipulation
      buyMovieTitle.innerText = details.title;  
      buyrunTime.innerText = `${details.runtime} minutes`; 
      buyDescription.innerText = details.description; 
      buyshowtime.innerText = details.showtime; 
     
      
      const buyticket = document.getElementById('buyticket')
      
      console.log(buyticket)
      buyticket.innerText = parseInt(`${details.capacity - details.tickets_sold}`,10); 
      // note.innerText='remaining-ticket';
      // buybtn.innerText = "buy-ticket"; 
      
      note.innerText='remaining-ticket';
      buybtn.innerText = "buy-ticket";
      buybtn.addEventListener('click', (e)=>{
        e.preventDefault()
        
        // if ((buyticket.innerText)>0){
        //   buyticket.innerText = Number(buyticket.innerText)-1;
        // }else if (Number(buyticket.innerText)===0){
        //   buybtn.innerText = "SOLD-OUT!";
        // }
      })

    }
    
    });

  });

