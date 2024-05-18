import React, { FC } from "react";
import { motion } from "framer-motion";

type PillProps = {
    title: string;
    description: string;
};

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

const Pill: FC<PillProps> = ({ title, description }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
            viewport={{ once: true }}
            className=" flex-grow flex flex-col font-semibold justify-center items-center bg-[#1c100f] p-4 lg:p-8 rounded-[98px] gap-5 cursor-pointer  "
        >
            <p className="text-[24px] lg:text-[48px] hover:scale-110 transition-transform duration-300">
                {title}
            </p>
            <p className="">{description}</p>
        </motion.div>
    );
};

export default Pill;
