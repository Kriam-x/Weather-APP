document.addEventListener('DOMContentLoaded', function () {
    // Sabse phele decide karo everything you want to grab 
    // EVery function does one task only and you should map out their order accoridingly kis ke kya leke kis ko kya pass karna hai should be planned out  
    const city_input = document.getElementById("city_input")
    const get_weather_btn = document.getElementById("input_btn")
    const weather_info = document.getElementById("wetherinfo")
    const city_display = document.getElementById("cityname")
    const temp_display = document.getElementById("temp")
    const description = document.getElementById("description")
    const error_msg = document.getElementById("errormsg")
    const API_KEY = "48a89dbbd471dbcfc1a1768facf3d95f";

    get_weather_btn.addEventListener('click', async () => {
        const city = city_input.value.trim() // trim hides extra space 
        if (!city) return; // empty strings are considered flase
        // two things to remember
        // the server may throw you an error 
        // the server/database always takes time ie. is in another continent  
        try {
            const data = await fetch_weather_data(city) // await ka error esliye aaya kyuki fetch_weather_datat humara async func nahi tha jab call kara tha initally 
            display_weather_data(data)
        } catch (error) {
            show_error()
        }
    })

    async function fetch_weather_data(city) { 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        const response = await fetch(url)
        console.log(response)
        console.log(typeof response)
        if(!response.ok) {
            throw new Error("City not found")
        }
        const data =await response.json()
        return data ; 
        

    }
    function display_weather_data(info) {
        console.log(weatherdata)
    }

    function show_error() {
        weather_info.classList.add('hidden');
        error_msg.classList.remove('hidden');
    }


})