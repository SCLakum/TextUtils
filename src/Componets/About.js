import React from 'react'

export default function About(props) {
    return (
        <div className="container">
            <div class="aboutus-section">
                <div class="aboutus my-3">
                    <h1 class="aboutus-title">About Us</h1>
                    <p class="aboutus-text">{props.title} is a dynamic ReactJs application designed to elevate your text processing experience. Whether you're a content creator, student, or just someone who loves playing with words, TextUtils offers a range of powerful tools to make working with text more efficient and enjoyable
                        The most eminent features of the website are as follows :</p>
                </div>


                <div class="card my-4">
                    <div class="card-header">
                        <h5 class="aboutus-title">What can you do with TextUtils?</h5>
                    </div>
                    <div class="card-body">

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Case Conversion
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Instantly convert your text to uppercase or lowercase with just a click.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Copy Text
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Copy your processed text to the clipboard effortlessly.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Remove Extra Spaces
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Tidy up your text by eliminating unnecessary spaces, making it cleaner and more readable.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Remove Extra Spaces
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Tidy up your text by eliminating unnecessary spaces, making it cleaner and more readable.
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div >

            <div className='container-fluid mx-auto mt-3 mb-5 col-12 text-center'>
                <div className="hd">Why People Believe in Us</div>
                <p><small className="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
                <div className="row d-flex justify-content-around">
                    <div className="card col-md-3  my-2 col-12">
                        <div className="card-content">
                            <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" alt='Demo'/>
                                <div className="shadow"></div>
                                <div className="card-title"> We're Free </div>
                                <div className="card-subtitle">
                                    <p> <small className="text-muted">We spent hours creating on algorithm that does this for you in seconds. We are not collect any fee from you.</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3  my-2 col-12 ml-2">
                        <div className="card-content">
                            <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" alt='Demo'/>
                                <div className="card-title"> We're Unbiased </div>
                                <div className="card-subtitle">
                                    <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3  my-2 col-12 ml-2">
                        <div className="card-content">
                            <div className="card-body"> <img className="img" style={{ height: 100, widows: 100 }} src="https://i.imgur.com/rG3CGn3.png" alt='Demo'/>
                                <div className="card-title"> We Guide you </div>
                                <div className="card-subtitle">
                                    <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
