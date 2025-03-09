import React, { useEffect, useState } from "react";

const LayeredScrollEffect = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="h-[300vh] bg-gray-200">
            {/* Wrapper to enable scrolling effect */}
            <div className="relative h-full">
                {/* Section 1 */}
                <section className="sticky top-0 h-screen flex justify-center items-center bg-blue-500 text-white text-3xl font-bold z-10">
                    Section 1
                </section>

                {/* Section 2 */}
                <section className="sticky top-0 h-screen flex justify-center items-center bg-green-500 text-white text-3xl font-bold z-20">
                    Section 2
                </section>

                {/* Section 3 */}
                <section className="sticky top-0 h-screen flex justify-center items-center bg-red-500 text-white text-3xl font-bold z-30">
                    Section 3
                </section>
            </div>
        </div>
    );
};

export default LayeredScrollEffect;
