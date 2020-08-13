import React, {Component} from 'react';
import PortfolioItem from '../Common/PortfolioItem';

// Images
import img1 from '../assets/portfolio/01-thumbnail.jpg';
import img2 from '../assets/portfolio/02-thumbnail.jpg';
import img3 from '../assets/portfolio/03-thumbnail.jpg';
import img4 from '../assets/portfolio/04-thumbnail.jpg';
import img5 from '../assets/portfolio/05-thumbnail.jpg';
import img6 from '../assets/portfolio/06-thumbnail.jpg';

const portfolio = [
    {
        title: 'Threads',
        subtitle: 'Illustration',
        image: img1
    }, {
        title: 'Explore',
        subtitle: 'Graphic Design',
        image: img2
    }, {
        title: 'Finish',
        subtitle: 'Identity',
        image: img3
    }, {
        title: 'Lines',
        subtitle: 'Website Design',
        image: img4
    }, {
        title: 'Southwest',
        subtitle: 'Illustration',
        image: img5
    }, {
        title: 'Window',
        subtitle: 'Photography',
        image: img6
    }
]

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {portfolio.map((item, index) => {
                                return <PortfolioItem {...item} key={index}/>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};

export default Portfolio;