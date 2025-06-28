/**getElementById */
const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "eegIIvjKue1gZHh4AWc3rQ==zMjsQLhWxb1w7zHz";




const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}; 

const apiURL = "https://api.api-ninjas.com/v1/jokes";


async function getJoke() {

      try {
         jokeEl.innerText = "Loading...";
    btnEl.disabled = true;
    btnEl.innerText = "Wait a sec...";
  const response =  await  fetch(apiURL, options);
   const data = await response.json();


    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";

  jokeEl.innerText = data[0].joke  
      } catch (error) {
       jokeEl.innerText = "An error happened, try again later"
        btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";


       console.log(error);
        
      }
 }

 btnEl.addEventListener("click", getJoke);


//then(response => {
   // if (!response.ok) {
     //   throw new Error("HTTP error! Status: ${response.status}");
  //  } 
   // return response.json();
  //  })
    //.then(data => {
  //      console.log("Jokes data:",data);
   // })
  //  .catch(error => {
    //    console.error("Error fetching joke:", error);
  //  });




//function getJoke(){
 //   console.log("clicked");
//}





