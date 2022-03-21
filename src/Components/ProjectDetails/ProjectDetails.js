import React from 'react';

const ProjectDetails = () => {
    return (
        <div>
              <br /> 
              <div class="container px-4">
                <div class="row gx-5">
                    <div class="col-lg-7 col-12">
                        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img  style={{ maxWidth: '300px' }} src="images/image1.jpg" class="d-block w-100 mx-auto" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ maxWidth: '300px' }} src="images/image2.jpg" class="d-block w-100 mx-auto" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ maxWidth: '300px' }} src="images/image3.jpg" class="d-block w-100 mx-auto" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ maxWidth: '300px' }} src="images/image4.jpg" class="d-block w-100 mx-auto" alt="..." />
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
                    <div class="col-lg-4 col-12 text-light">
                        <br /><br />
                        <h1 style={{fontFamily: 'Playfair Display'}} >BILPAR MOSQUE</h1>
                       
                        
                    </div>

                </div>
            </div>
            <br /> <br />
        </div>
    );
};

export default ProjectDetails;