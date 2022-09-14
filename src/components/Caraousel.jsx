import { Flex, Box } from "@theme-ui/components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const Caraousel = ({ slidesToShow = 1, slidesToScroll = 1, fade = false, children, dots = true, carouselChngFunc, carouselRef = null, autoplaySpeed = 3000, carouselChngAfter, speed=500 }) => {
    const sliderRef = carouselRef || useRef()
    const settings = {
        focusOnSelect: true,
        dots,
        autoplay: false,
        speed,
        autoplaySpeed,
        infinite: true,
        fade,
        slidesToShow,
        slidesToScroll,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: dots => <Box as="ul">{dots}</Box >,
        customPaging: index => <Flex sx={{ width: "100%", height: "100%" }} onClick={() => sliderRef.current.slickGoTo(index)}></Flex>,
        beforeChange: (oldIndex, newIndex) => carouselChngFunc ? carouselChngFunc(newIndex + 1) : undefined,
        afterChange: index => carouselChngAfter ? carouselChngAfter(index) : undefined,
    };
    return (
        <Slider {...settings} ref={sliderRef}>
            {children}
        </Slider>
    )
}

export default Caraousel