import React, { FC } from "react";

interface Props {
    onClick: () => void;
    children: React.ReactNode;
    type?: "default" | "transparent";
}

const Button: FC<Props> = ({ onClick, children, type = "default" }) => {
    return (
        <div
            tabIndex={0}
            onClick={() => onClick()}
            className={`${
                type === "default" && "border-gradient-custom"
            } rounded-[28px] p-[2px] hover:scale-105 transition-transform duration-300 cursor-pointer w-max`}
        >
            <div className="bg-[#010101] rounded-[32px] py-2 px-3 sm:py-4 sm:px-6">
                {children}
            </div>
        </div>
    );
};

export default Button;
