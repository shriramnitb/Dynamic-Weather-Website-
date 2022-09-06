let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{
e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';


});



const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd`,
   
            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
        {
            tempicon.src="./icons/thunderstorm.svg"
        }
       else  if(id<400 && id>300)
        {
            tempicon.src="./icons/cloud-solid.svg"
        }
       else if(id<600&& id>500)
        {
            tempicon.src="./icons/rain.svg"
        }
       else  if(id<700 && id>600)
        {
            tempicon.src="./icons/snow.svg"
        }
       else  if(id<800 && id>700)
        {
            tempicon.src="./icons/clouds.svg"
        }
         else if(id==800)
        {
            tempicon.src="./icons/clouds-and-sun.svg"
        }



   
    }
catch(error)
{
    alert('city not found');
}





};














