import React from 'react';

const Nav = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <ul class="navbar-nav " style={{ marginLeft: '60%' }}>
                        <li ><a class="nav-link m-2  " aria-current="page" href="#" >Home</a></li>
                        <li><a class="nav-link m-2" href="#">About</a></li>
                        <li> <a class="nav-link m-2" href="#">Dental-service</a></li>
                        <li><a class="nav-link m-2 text-white " href="#">Review</a></li>
                        <li> <a class="nav-link m-2 text-white" href="#">Blog</a></li>
                        <li><a class="nav-link m-2 text-white" href="#">Contact</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;