import React from 'react'
import VhiNavBar from '../Components/vhi_navbar/VhiNavBar'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
import Lottie from 'lottie-react'
import animationData from '../images/animation_lkw988pr.json'
import './Verified.css'
import { useState,useEffect} from 'react'

const Verified = () => {
  const randomContents = [
    'LAG-256-348',
    'ABJ-459-230',
    'IKJ-234-680',
    'KAN-240-909',
    'ABA-234-000',
  ];

  const [randomContent, setRandomContent] = useState(
    localStorage.getItem('randomContent') || ''
  );

  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (!randomContent) {
      const randomIndex = Math.floor(Math.random() * randomContents.length);
      const newRandomContent = randomContents[randomIndex];
      setRandomContent(newRandomContent);
      localStorage.setItem('randomContent', newRandomContent);
    }
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate()); // Set your expiration date here
    const timeDifference = expirationDate - currentDate;

    setCountdown(timeDifference / 1000); // Convert milliseconds to seconds
  }, [randomContent]);

  useEffect(() => {
    if (countdown > 0) {
      const countdownInterval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdown]);

  const formatCountdown = () => {
    const days = Math.floor(countdown / 86400);
    const hours = Math.floor((countdown % 86400) / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = Math.floor(countdown % 60);

    return `${days} Days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  };
  return (
    <div>
        <VhiNavBar/>
       <h1 className='banner_title3'>Vehicle Plate Renewal</h1>
       <div className='size'>
        <Lottie loop={true} animationData={animationData}/>
       </div>
       <div className='Bottom_text'>
       <h2>Your new plate number is <span className='color'> {randomContent} </span> </h2> 
       <p className='expires'>Expires: {countdown ? <span>{formatCountdown()}</span> : 'Expired'}</p>
       </div>


        <div className='verified_footer'>
        <Vhi_footer/>
        </div>

    </div>
  )
}

export default Verified