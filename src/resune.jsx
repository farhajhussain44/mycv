import React from "react";
import $ from "jquery";
import mee from "./mee.jpg"
import d2poker from "./d2poker.png"
import skinscase from "./skinscase.png"
import bang from "./bang.png"
import rohhat from "./rohhat.png"
export default class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        // Change the current window shown by toggling the active class.
        $('.main-menu a').on('click', function (e) {

            var activeClass = $(this).attr('href').substring(1);

            setTimeout(function () {
                $('.content.active').removeClass('active');

                $('.' + activeClass).addClass('active');

                $('html, body').animate({
                    scrollTop: $($('.' + activeClass)).offset().top
                }, 500);

            }, 300);

            // Once a user clicks the portfolio link, animate the portfolio.
            if (activeClass === 'portfolio') {

                setTimeout(function () {

                    $('.filter-controls li')[0].click();

                }, 300);
            }

        });


        // Change the current active window based on the hash value in the url.
        var type = window.location.hash.substr(1);

        if (type) {
            $('.content.active').removeClass('active');

            $('.' + type).addClass('active');

        }


        $('.filter-controls li').on('click', function () {

            if (!$(this).hasClass('active')) {

                $('.filter-controls li.active').removeClass('active');

                $(this).addClass('active')

            }

        });

    }
    render() {
        return (
            <section class="wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-5 col-lg-3 text-white sidebar background-blue">
                            <div class="col-md-12 mx-auto">
                                <figure class="profile-image mx-auto">
                                    <img class="img-fluid rounded-circle"
                                        src={mee}
                                        alt="Profile photo" />
                                    <figcaption class="text-center"><small class="d-block">Farhaj</small>Husain</figcaption>
                                </figure>
                                <ul class="list-unstyled main-menu mt-5">
                                    <li><a class="font-weight-bold text-white" href="#about-me"><i class="fa fa-user-tie "></i>About
                     Me</a>
                                    </li>
                                    <li><a class="font-weight-bold text-white" href="#experience"><i
                                        class="fas fa-book"></i>Experience</a></li>
                                    <li><a class="font-weight-bold text-white" href="#portfolio"><i
                                        class="fas fa-toolbox"></i>Portfolio</a></li>
                                    <li><a class="font-weight-bold text-white" href="#contact"><i
                                        class="far fa-envelope"></i>Contact</a></li>
                                </ul>
                                <ul class="list-unstyled list-inline mt-3 text-center">
                                    <li class="list-inline-item"><a class="text-white" href="#"><i
                                        class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a class="text-white" href="#"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li class="list-inline-item"><a class="text-white" href="#"><i
                                        class="fab fa-linkedin-in"></i></a></li>
                                    <li class="list-inline-item"><a class="text-white" href="#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="about-me" data-simplebar class="col-12 col-sm-12 col-md-7 col-lg-9 content about-me active">
                            <div class="card about-me">
                                <h3 class="sideline font-weight-bold mb-2">About Me</h3>
                                <div class="label title mb-2"><i class="fas fa-code"></i>Node js & React js Developer</div>
                                <p> I grew up in Adri mau, uttar pradesh india , where I also finished
                                   elementary school.
                                   As a kid I would spend my time making toys, reading comics, epic fantasy novels and playing
                                   video games and cricket.
                                   I’ve
                                   learned through education and on my own.
               </p>
                                <p>I’m passionate about technology and developing creative solutions
                                   to whichever problem I come across. I’m an avid reader and music lover.
               </p>
                                <h3 class="sideline font-weight-bold mb-3">Skills</h3>
                                <div class="row interests">
                                    <div class="label title mb-2"><i class="fas fa-code"></i>            Nodejs.js, react.js, redux,react hooks, express.js, socket.io, javascript, jquery, ajax, mongodb, mysql, html, bootstrap, css, core php, amazon web services(aws).
                                        </div>
                                </div>
                                <h3 class="sideline font-weight-bold mb-3">Hobbies and Interests</h3>
                                <div class="row interests">
                                    <div class="col-4 col-md-4 col-lg-2 text-center mt-3">
                                        <i class="fas fa-tree mb-3"></i>
                                        <h6 class="font-weight-bold">Cricket</h6>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-2 text-center mt-3">
                                        <i class="fas fa-guitar mb-3"></i>
                                        <h6 class="font-weight-bold">Badminton</h6>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-2 text-center mt-3">
                                        <i class="fas fa-book mb-3"></i>
                                        <h6 class="font-weight-bold">Books</h6>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-2 text-center mt-3">
                                        <i class="fas fa-desktop mb-3"></i>
                                        <h6 class="font-weight-bold">Computers</h6>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-2 text-center mt-3">
                                        <i class="fas fa-gamepad mb-3"></i>
                                        <h6 class="font-weight-bold">Gyming</h6>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-2 text-center mt-3">
                                        <i class="fas fa-plane mb-3"></i>
                                        <h6 class="font-weight-bold">Travel</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
                                    <div class="card card--stats d-flex flex-row align-items-center">
                                        <i class="fas fa-award ml-2"></i>
                                        <div class="text-wrapper">
                                            <h5 class="font-weight-bold ml-3 mb-0">1.5 Years</h5>
                                            <p class="ml-3 mb-0">Work experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
                                    <div class="card card--stats d-flex flex-row align-items-center">
                                        <i class="fas fa-wrench"></i>
                                        <div class="text-wrapper">
                                            <h5 class="font-weight-bold ml-3 mb-0">Available</h5>
                                            <p class="ml-3 mb-0">For hire</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="experience" data-simplebar class="col-12 col-sm-12 col-md-7 col-lg-9 content experience">
                            <div class="card">
                                <h3 class="font-weight-bold sideline mb-3">Experience</h3>
                                <div class="timeline">
                                    <div class="job row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-3 job-date blue">
                                            <i class="far fa-calendar-alt mr-2"></i>10/18 – present
                     </div>
                                        <div class="col-12 col-md-12 col-lg-9 job-description">
                                            <h6 class="font-weight-bold">Software Developer - Websultanate software technology</h6>
                                            <h6 class="blue">Node.js, React.js, mongodb, socket.io, JavaScript, jQuery, express.js,steam api,waxpeear api, mysql, html, css, Bootstrap</h6>
                                            <p>Build dynamic chance based cashino game like coinflip, highroller, itemdrop, upgrader, etc using node.js ,react.js mongodb, provably fair algorithm.
                                                these games are based on steam csgo, dota2, Tf2, rust2 items and opskins wax blockchain.
                                                also worked on core php and mysql 
                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-5">
                                <h3 class="font-weight-bold sideline mb-3">Education</h3>
                                <div class="timeline">
                                    <div class="job row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-3 job-date blue"><i
                                            class="far fa-calendar-alt mr-2"></i>08/15 – 08/18</div>
                                        <div class="col-md-12 col-lg-9 job-description">
                                            <h6 class="font-weight-bold">KMC UAF UNVERSITY LUCKNOW (U.P) INDIA</h6>
                                            <h6 class="blue">Bachlor of computer application (BCA)</h6>
                                            <p>Department of computer science and information
                                                technology.I have understand about c programming language and also c++. where i also learned about basics of database mysql.
                        </p>
                                        </div>
                                    </div>
                                    <div class="job row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-3 job-date blue"><i
                                            class="far fa-calendar-alt mr-2"></i>11/18 – running</div>
                                        <div class="col-md-12 col-lg-9 job-description">
                                            <h6 class="font-weight-bold">INTEGRAL UNIVERSITY LUCKNOW (U.P) INDIA</h6>
                                            <h6 class="blue">MSC (IT) DISTANCE EDUCATION</h6>
                                            <p>General course.
                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="portfolio" data-simplebar class="col-12 col-sm-12 col-md-7 col-lg-9 content portfolio text-center">
                            <ul class="filter-controls list-unstyled list-inline">
                                <li class="list-inline-item active" data-filter="all"> <i class="fas fa-list-ul"></i> All items
               </li>
                                <li class="list-inline-item" data-filter="1"> <i class="fas fa-code"></i> Development </li>

                            </ul>
                            <div class="row filter-container mt-3">
                                <div class="col-md-3 filtr-item" data-category="1" data-sort="value">
                                    <figure class="figure mb-5">
                                        <a class="popup-link"
                                            href="http://skins-case.com/"><img
                                                src={skinscase}
                                                class="img-fluid"
                                                alt="A generic square placeholder image with rounded corners in a figure." /></a>
                                        <figcaption class="font-weight-bold figure-caption">A skins-case.com a csgo case openning site.
                     </figcaption>
                                    </figure>
                                </div>
                                <div class="col-md-3 filtr-item" data-category="1" data-sort="value">
                                    <figure class="figure mb-5">
                                        <a class="popup-link"
                                            href="http://95.179.132.6:3001/"><img
                                                src={bang}
                                                class="img-fluid"
                                                alt="A generic square placeholder image with rounded corners in a figure." /></a>
                                        <figcaption class="font-weight-bold figure-caption">
                                            bang.gg is online cashino where you can play rullet coinflip

                     </figcaption>
                                    </figure>
                                </div>
                                <div class="col-md-3 filtr-item" data-category="2" data-sort="value">
                                    <figure class="figure mb-5">
                                        <a class="popup-link"
                                            href="https://d2poker.com"><img
                                                src={d2poker}
                                                class="img-fluid popup-link"
                                                alt="A generic square placeholder image with rounded corners in a figure." /></a>
                                        <figcaption class="font-weight-bold figure-caption">d2poker.com a site where you can play poker using dota 2 skins.
                     </figcaption>
                                    </figure>
                                </div>
                                <div class="col-md-3 filtr-item" data-category="2" data-sort="value">
                                    <figure class="figure mb-5">
                                        <a class="popup-link"
                                            href="https://www.rohhat.com/index.php"><img
                                                src={rohhat}
                                                class="img-fluid popup-link"
                                                alt="A generic square placeholder image with rounded corners in a figure." /></a>
                                        <figcaption class="font-weight-bold figure-caption">rohhat is a bussiness and technology company
                     </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div id="contact" data-simplebar class="col-12 col-sm-12 col-md-7 col-lg-9 content contact">
                            <div class="row mt-5">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                    <h3 class="font-weight-bold sideline">Contact</h3>
                                    <p>If you would like to get in touch with me feel free to full out this contact form. I ussualy
                                       reply within 2-5 business days. Thanks!
                  </p>
                                    <ul class="list-unstyled">
                                        <li class="font-weight-bold"><a href="#"><i
                                            class="far fa-envelope mr-2"></i>farhajhussain29@gmail.com</a></li>
                                        <li class="font-weight-bold"><a href="https://github.com/farhajhussain44?tab=repositories"><i
                                            class="fas fa-globe mr-2"></i>https://github.com/farhajhussain44</a></li>
                                        <li class="font-weight-bold"><a href="#"><i class="fas fa-map-marker-alt mr-2"></i>(U.P),
                        INDIA</a>
                                        </li>
                                        <li class="font-weight-bold"><a href="#"><i class="fas fa-map-marker-alt mr-2"></i>+917275619744
                       </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                                    <form class="card">
                                        <div class="form-group">
                                            <label for="full-name label">Full name</label>
                                            <input type="text" class="form-control" id="full-name" placeholder="Full name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="message">Message:</label>
                                            <textarea class="form-control" rows="5" id="message"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}