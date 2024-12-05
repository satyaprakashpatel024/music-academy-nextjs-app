import Link from "next/link";
import React from "react";
import {Spotlight} from "./ui/Spotlight";
import {Button} from "./ui/moving-border";

function HeroSection() {
    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-md flex flex-wrap flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative x-10 w-full text-center">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className="mt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Master the art of Music
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Dive into our comprehensive music courses and transform your
                    musical journey today. Whether you&apos;re beginner or
                    looking to refine your skills, join to unlock your true
                    potential.
                </p>
                <div className="mt-10">
                    <Link href={"/"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
