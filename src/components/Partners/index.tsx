import React, { FC } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Props {
    images: StaticImageData[];
}

const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
};

const Slider: FC<Props> = ({ images }) => {
    return (
        <div className="flex flex-col gap-12">
            <h2 className="text-[28px] md:text-[42px] font-bold text-center">
                Projects integrated into the Arrakis AI Ecosystem
            </h2>
            <div className="w-full flex items-center justify-between px-12 gap-4 lg:gap-48">
                {images.map((image, i) => (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={animationVariants}
                        viewport={{ once: true }}
                        key={i}
                        className="flex items-center"
                    >
                        <Image
                            src={image}
                            alt="image"
                            className="max-h-48 w-auto"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
