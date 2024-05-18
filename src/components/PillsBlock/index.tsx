"use client";
import React from "react";
import Pill from "./Pill";

const PILLS_DATA = [
    {
        title: "10,873",
        description: "LLM models",
    },
    {
        title: "$72,470,728",
        description: "paid to data scientists",
    },
    {
        title: "6,557",
        description: "members",
    },
];

const PillsBlock = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-2 lg:gap-4 w-full">
            {PILLS_DATA.map((pill) => (
                <Pill key={pill.title} {...pill} />
            ))}
        </div>
    );
};

export default PillsBlock;
