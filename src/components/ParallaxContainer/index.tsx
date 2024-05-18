"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import PillsBlock from "../PillsBlock";
import MainTextBanner from "@/components/MainTextBanner";
import Header from "../Header";
import Footer from "../Footer";
import images from "../../../public";
import Image from "next/image";
import TextBlock from "../TextBlock";
import Slider from "../Partners";

const ParallaxContainer = () => {
    const parallax = useRef<IParallax>(null!);

    return (
        <Parallax className="h-screen" ref={parallax} pages={3}>
            <ParallaxLayer
                offset={0}
                speed={1}
                className="p-4 flex flex-col gap-12 z-10"
            >
                <Header />
                <MainTextBanner />
                <PillsBlock />
            </ParallaxLayer>

            <ParallaxLayer
                offset={1.2}
                speed={0.2}
                className="z-10 flex flex-col items-center h-full gap-32"
            >
                <TextBlock
                    buttonText="Use the cutting edge AI"
                    title="Crowdsourcing our collective intelligence to build the best AI"
                    subtitle="Open source AIs have been lagging in development behind OpenAI with billions of dollars.We run competitions between AI models to find and pay for the best AI model. Users will be able to access the best AI models."
                />
                <Slider images={Object.values(images.logos)} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={2}
                speed={-0.1}
                className="p-4 flex flex-col gap-12 z-10 pt-12 justify-between"
            >
                <TextBlock
                    buttonText="Read Whitepaper"
                    title="Text here"
                    subtitle="Every month, we run a competition between all the AI models submitted on a leaderboard. The best model will be featured and will earn tokens."
                />
                <Footer />
            </ParallaxLayer>
            {/* IMAGES */}
            <ParallaxLayer
                offset={0.3}
                speed={0.4}
                className="relative w-full z-1"
            >
                <Image
                    src={images.planet}
                    alt="Planet"
                    className="ml-[60%] w-[60%]"
                />
            </ParallaxLayer>
            <ParallaxLayer
                offset={1.2}
                speed={0.5}
                className="relative  z-2 w-auto ml-[20%]"
            >
                <div className="flex flex-col items-center w-[200px]">
                    <Image
                        src={images.rocket}
                        alt="rocket"
                        className="w-[200px]"
                    />
                    <Image src={images.fire} alt="fire" className="w-[30px]" />
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={2.2}
                speed={-0.2}
                className="relative w-full z-2"
            >
                <Image
                    src={images.moon}
                    alt="Planet"
                    className="ml-[70%] w-[300px] z-2"
                />
            </ParallaxLayer>
            <ParallaxLayer
                offset={2.5}
                speed={0.4}
                className="relative w-full z-1"
            >
                <Image
                    src={images.footer_bg}
                    alt="footer_bg"
                    className="mt-auto w-full z-0"
                />
            </ParallaxLayer>
        </Parallax>
    );
};

export default ParallaxContainer;
