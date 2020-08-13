import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable componets
import Services from './Services';
import Porfolio from './Portfolio';
import Team from './Team';
import About from './About';
import Client from './Client';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S SCINCE TO MEET YOU"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}/>

                <Services/>

                <Porfolio/>

                <About/>

                <Client/>

                <Team/>

                <Contact/>
            </div>
        );
    };
};

export default Home;