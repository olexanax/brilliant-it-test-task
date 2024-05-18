"use client";
import React, { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../UI/Button";

interface Props {
    buttonText: React.ReactNode;
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

const TextBlock: FC<Props> = ({ buttonText, title, subtitle }) => {
    return (
        <div className="flex items-center px-12 w-full ">
            <div className="flex flex-col gap-4">
                <p className="text-[28px]  md:text-[48px]">{title}</p>
                <p>{subtitle}</p>
                <Button onClick={() => {}}>{buttonText}</Button>
            </div>
        </div>
    );
};

export default TextBlock;
