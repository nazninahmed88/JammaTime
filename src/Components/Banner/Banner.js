import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css'

const Banner = () => {
    return (
        <div >
            <div className='row  '>
            <div class="col-lg-6  col-12 mt-4 ">
    <div className="cards">
    <img className='animate__animated animate__backInLeft ba-img mt-4 rounded-3' width="550"  height="600px"  src='/images/banner1..jpg' />
    
    
    </div>
  </div>

  <div class="col-lg-6  col-12 mt-4 ">
    <div className="cards">
   
      <div class="card-body  animate__animated animate__backInRight">
        <br /> <br />
      <h1 className='headline'>JAMA'AH TIME</h1>
      <br /> 
      <h3 className='fs-2 text-secondary'> Prayer Alert</h3>
      <br />
      <p className='text-secondary fs-5 text-start'> Prayer plays an important role for Muslims in bringing peace to  their lives. It is a beautiful niyamat that  Allah bestows upon the followers of Islam. 
            Today's generation is busy with their work. So, due to heavy workload and noise, sometimes they don't hear the sound of  azan. Our app is here to solve this problem and will let you know in the process of azan. In addition, the sound of the mobile phone will be muted for a certain  time during prayer time. </p>
      <br /> <br />
     
      <button className='text-light bg-dark rounded-3 me-2'> <i  class="fa-solid fa-play fa"></i>   <a className='button-text' target="_blank" href="https://www.apple.com/app-store/">Avallable on the <br /> <span className='fs-5'>App Store</span> </a></button>    
      
        < button className='text-light bg-dark rounded-3 me-2'> <i class="fa-light fa-mobile-screen-button fa"></i>  <a  className='button-text' target="_blank" href="https://play.google.com/store/apps"> Android app on  <br /> <span className='fs-5'> Google Play</span> </a></button>
     
    
    
     
      </div>
    
    </div>
  </div>
            </div>
      
            <br />
            <br />
      <hr />
      <div className='mt-5 container text-light'>
               <div className=' row '>
            <div class="col-lg-4  col-12 mt-2 ">
             
           <br /> <div className='text-start fs-5  text-secondary'>
             <ul>
               <h1>Salah, ritual Islamic prayer, prescribed five times daily:</h1>
               <li>Fajr – the dawn prayer. It is a two Rakat Salah.</li>
               <li>Zuhr – the early afternoon prayer. It is a four Rakat Salah.</li>
               <li> Asr – the late afternoon prayer. It is a four Rakat Salah.</li>
               <li>Maghrib – the sunset prayer. It is a three Rakat Salah.</li>
               <li> Isha'a – the night prayer. It is a four Rakat Salah.</li>
             </ul>
           </div>
              </div>

            <div class="col-lg-4 bg-success col-12 mt-4 ">
              {/* carosel */}
            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img  style={{ maxWidth: '250px' }} src="/images/image3.jpg" class="d-block w-100 mx-auto" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ maxWidth: '250px' }} src="images/image2..jpg" class="d-block w-100 mx-auto" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ maxWidth: '250px' }} src="images/image1.jpg" class="d-block w-100 mx-auto" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ maxWidth: '250px' }} src="images/image5.jpg" class="d-block w-100 mx-auto" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
      
           </div>
              
               
           <div class="col-lg-4  col-12 mt-4 ">
           
            <div className='text-start fs-5 text-secondary'>
              <ul>
                <li> Jumaah - weekly congregational prayer (replaces dhuhr on Fridays two rakat along with khutba)</li>
                <li> Sunnah - These prayers are recommended to be performed as by the Prophet on a regular basis throughout the lifetime; missing once or twice so that it does not become fard is called Sunnat.

                <ul className='ull'>
               
                <li>2 Rak'ats Sunnat for Fajr.</li>
                    <li>6 Rak'ats Sunnat for Zuhr.</li>
                    <li>2 Rak'ats Sunnat for Maghrib.</li>
                    <li>2 Rak'ats Sunnat for Isha.</li>
                    <li>However, there is no Sunnat for Asr.</li>
                  </ul>
                </li>
              </ul>

            </div>
        </div>


        
          </div>

         
            </div>
<br /> <br /> <br /> <br />


        </div>
    );
};

export default Banner;