import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientLogos = [
    "assets/img/clients/SBI.png",
    "assets/img/clients/pnb.png",
    "assets/img/clients/bob.png",
    "assets/img/clients/canara-hsbc.png",
    "assets/img/clients/canara-bank.png",
    "assets/img/clients/ae.png",
    "assets/img/clients/jdlogosvg.png",
    "assets/img/clients/uni.png",
    "assets/img/clients/lenskart.png",
    "assets/img/clients/no-broker.png",
    "assets/img/clients/classpluss.png",
    "assets/img/clients/shaadi-logo.png",
];

export default function ClientMarquee() {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className="w-full overflow-hidden  py-5">
            <Slider {...settings} className="marquee">
                {clientLogos.map((logo, index) => (
                    <div key={index} className="slick-slide text-center">
                        <div className="inner">
                            <img
                                src={logo}
                                className="mx-auto img-fluid"
                                alt="Client Logo"
                                width="179"
                                height="78"
                                style={{ width: "50%" }}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
