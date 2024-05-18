"use client";
import React from "react";
import Button from "../UI/Button";
import { motion } from "framer-motion";

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

const TextBanner = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={animationVariants}
                viewport={{ once: true }}
                className="text-[32px] lg:text-[84px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] to-[#FF4A59]"
            >
                A new economic primitive for funding decentralized AI
            </motion.h1>
            <p className="text-[24px] mb-4">
                We track, rank and pay for the best open source decentralized
                LLMs to compete against OpenAI
            </p>
            <Button onClick={() => {}}>Buy Spice AI</Button>
        </div>
    );
};

export default TextBanner;
