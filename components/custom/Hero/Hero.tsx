import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/HeroImage.avif";

const Hero = () => {
    return (
        <div>
            <Image src={HeroImage} alt="Hero Image" />
        </div>
    );
};

export default Hero;
