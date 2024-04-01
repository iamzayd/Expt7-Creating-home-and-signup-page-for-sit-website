import React from 'react'
import '../style/Home.css'

function Home() {
  return (
    <div className='Home'>
        <img className='MainImage' src="https://www.sitpune.edu.in/assets/images/banner/1500x557%20(1).jpg" alt="Sit intro"></img>
        
        
        <div className="banner">
            <h1>Symbiosis - The world is one family.
We welcome as one, learn as one and thrive as one.</h1>
        </div>
        
        <div className='Main'>
            <img className="Main-left" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_360,q_100,w_1140/v1/gcs/platform-data-dsc/chapter_banners/Untitled%20design%20(1)_A0KynvM.png" alt="SIT Entrance" width={600} height={300}></img>
            <div className='Main-right'>
                <h1>Why SIT?</h1>
            <p>Symbiosis Institute of Technology, a constituent of Symbiosis International (Deemed University), ranking among the private engineering colleges in Pune, was established in the year 2008 and currently offers B.Tech programmes in Civil, Computer Science Engineering, Electronics & Telecommunication, Mechanical Engineering, Robotics & Automation and Artificial Intelligence & Machine Learning. Being one of thebest engineering college in Pune, SIT helps students learn more via conclaves, seminars and regular academic sessions.</p>

            </div>
        
        </div>
{/* 
        <div className="footer">
            <h1>Contact Us</h1>
        </div> */}
    </div>
  )
}

export default Home
