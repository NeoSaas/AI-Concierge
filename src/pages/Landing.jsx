import React from 'react'
import './../index.css'
import Navbar from './../components/Navbar'
import BottomBanner from '../components/BottomBanner'
import WeatherWidget from '../components/weatherComponents/WeatherWidget'

function Landing() {

  const bgImages = ["https://cdn.asdfinc.io/media/33665/alfond-inndji_0710-1-copy.jpg?center=0.27848101265822783,0.48739495798319327&mode=crop&width=1920&height=1080&rnd=133510848810000000&quality=80","https://cdn.asdfinc.io/media/32232/alfond-inn-ii4g3a3394-1.jpg?center=0.31645569620253167,0.48739495798319327&mode=crop&width=1920&height=1080&rnd=133433202890000000&quality=60", "https://cdn.asdfinc.io/media/34742/classic_queen_balcony_1_2023.jpg?crop=0.0000000000000002526374171591,0.01666666666666667,0,0.13958333333333317&cropmode=percentage&width=1920&height=1080&rnd=133554224810000000&quality=80", "https://cdn.asdfinc.io/media/29746/alfond-137.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=133289820150000000&quality=80"]

  const [fetchedUrl, setFetchedUrl] = React.useState(bgImages[0])

  const updatePhoto = () => {
    let randomIndex = Math.floor(Math.random() * bgImages.length)
    setFetchedUrl(bgImages[randomIndex])
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      updatePhoto();
    }, 20000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval);
  }, [fetchedUrl]);

  return (
    <div>
      <div className='relative'>
      <Navbar/>
      </div>
      <WeatherWidget />
      <BottomBanner/>
      <div style={{'--image-url': `url(${fetchedUrl})`}} className='h-screen w-full bg-[image:var(--image-url)] bg-cover flex justify-center items-center transition-all ease-in-out'>
          <div className='flex justify-center items-center'>
              <div className='absolute h-[30%] w-[70%] mx-auto rounded-xl bg-gradient-to-b from-black to-transparent'></div>
              <div className='absolute h-[30%] w-[70%] mx-auto rounded-xl bg-gradient-to-t from-black via-transparent to-transparent'></div>
              <div className='flex justify-center items-center flex-col h-full w-[100%] text-center'>
                  <h1 className='text-white font-quicksand z-10 text-7xl mb-10'>Explore</h1>
                  <h1 className='text-white font-cursive z-10 text-9xl flex flex-row'> Winter Park</h1>
                  <h2 className='text-white font-quicksand z-10 text-3xl'>Find great places to eat, drink, shop and discover</h2>
                  <a className='z-10 bg-white text-black font-quicksand text-2xl px-8 py-4 rounded-full mt-5 hover:scale-105 hover:bg-blue-500 duration-300 ease-in-out' href='/home'>Explore</a>
              </div> 
          </div>
      </div>
    </div>
  )
}

export default Landing