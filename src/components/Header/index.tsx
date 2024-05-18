"use client";
import React from "react";
import Button from "../UI/Button";

const Header = () => {
    return (
        <header className="flex justify-center gap-1  sm:gap-4  max-w-screen-2xl p-1 sm:p-4 m-auto mb-[120px]">
            <Button onClick={() => {}} type="transparent">
                LLM Leaderboard
            </Button>
            <Button onClick={() => {}}>Buy Spice AI</Button>
        </header>
    );
};

export default Header;
