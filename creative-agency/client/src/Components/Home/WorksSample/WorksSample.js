import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';

const worksSamle = [
    {
        id:1,
        img:'carousel-1.png',
    },
    
    {
        id:2,
        img:'carousel-2.png',
    },
    {
        id:3,
        img:'carousel-5.png',
    },
    {
        id:4,
        img:'carousel-4.png',
    },
    {
        id:5,
        img:'carousel-5.png',
    },

]

const sectionStyle = {
    backgroundColor: '#111430',
    padding: '100px 0'
}

const WorksSample = () => {
    return (
        <section className="worksample-seciton" style={sectionStyle}>
            <div>
            <h1 className="text-center pb-5" style={{color: '#fff'}}>Provide awesome <span style={{color: '#7AB259'}}>Servicess</span></h1>
                <InfiniteCarousel
                    breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        },
                    },
                    ]}
                    dots={true}
                    arrows={false}
                    slidesSpacing={10}
                    autoCycle={true}
                    cycleInterval={5000}
                    pauseOnHover={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.3}
                    slidesToScroll={4}
                    slidesToShow={2}
                    scrollOnDevice={true}
                >
                    {
                        worksSamle.map(sample => <div height="100" key={sample.id}>
                            <img  src={process.env.PUBLIC_URL + '/images/' + sample.img} alt="" className="img-fluid" />
                        </div>)
                    }
                </InfiniteCarousel>
        </div>
    </section>
    );
};

export default WorksSample;