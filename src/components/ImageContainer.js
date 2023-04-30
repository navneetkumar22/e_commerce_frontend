import SimpleImageSlider from "react-simple-image-slider";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
// import banner3 from "../assets/banner-3.jpg";

const bannerImages = [
    banner1,
    banner2
];

const Banner = () => {
    return (
        <div>
            <SimpleImageSlider
                width={830}
                height={395}
                images={bannerImages}
                showBullets={true}
                showNavs={true}
                loop={true}
                slideDuration={3}
                autoPlay={true}
                autoPlayDelay={2}
            />
        </div>
    );
}

export default Banner;