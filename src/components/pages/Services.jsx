import React, {Component} from 'react';

import SingleService from '../Common/SingleService';

const services = [
    {
        title: "E-Commercer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam arc" +
                "hitecto quo inventore harum ex magni, dicta impedit.",
        icon: 'fa-shopping-cart'
    }, {
        title: "Responsive Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam arc" +
                "hitecto quo inventore harum ex magni, dicta impedit.",
        icon: 'fa-laptop'
    }, {
        title: "Web Security",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam arc" +
                "hitecto quo inventore harum ex magni, dicta impedit.",
        icon: 'fa-lock'
    }
];

class Services extends Component {
    render() {
        return (
            <div>
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {services.map((service, index) => {
                                return <SingleService {...service} key={index}/>
                            })}
                        </div>
                    </div>
                </section>

            </div>
        );
    };
};

export default Services;