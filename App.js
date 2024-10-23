import React, { useEffect,useState } from 'react';
import './App.css'; // Make sure to import the CSS file
import { motion } from "framer-motion"


function App() {
  
  useEffect(() => {


    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 50) {
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }




      },[]);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check to show cards if they are in view on mount
    handleScroll();

  }, []);

  return (
    <div className="app">
      <div className="blurb-background">
        <h1>Welcome to the Blurb Background Page</h1>
        <p>This is a page with blurb-style background and cards.</p>
        
        <div className="card-container">
          <div className="card">
            <h2>Card 1</h2>
            <p>This is the description for card 1.</p>
          </div>
          <div className="card">
            <h2>Card 2</h2>
            <p>This is the description for card 2.</p>
          </div>
          <div className="card">
            <h2>Card 3</h2>
            <p>This is the description for card 3.</p>
          </div>
        </div>
 
<main>
<motion.h1 initial={{opacity:0 ,scale:0.2}} animate={{opacity:1,  scale:0.6}}  > 

 <h1>Akshay</h1>
</motion.h1>

</main>


      </div>
 

      <main>
<motion.h1 initial={{opacity:0 ,scale:0.2}} animate={{opacity:1,color:"lightblue",cursor:"pointer" , scale:0.6}}  whileHover="hovered" transition={{staggerChildren:0.7}} > 

 <h1 id='font'>Akshay I am a MernStack Developer </h1>
</motion.h1>

</main>




    </div>
 
);
}

export default App;
