"use client";
import { useEffect, useRef, useState } from "react";

const items = [
    "Cheese & Dairy",
    "Canned Goods",
    "Rice & Pasta",
    "Grains & Beans",
    "Baking Goods",
    "Oil & Ghee Butter",
    "Nuts & Seeds",
    "Pickles & Olives",
    "Frozen",
    "Smoked Fish",
    "Spices & Herbs",
    "Snacks & Chips",
    "Candy & Wafers",
    "Coffee & Tea",
    "Juices & Drinks",
    "Grape Leaves",
    "Instant Soup & Koshary",
    "Sauce & Harissa",
    "Tahini & Halva",
    "Halal Meat",
    "Charcoal (for grilling)",
    "Seasonal Items",
];

export default function InfiniteTextSlider() {
    const trackRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationFrameId;
        let offset = 0;
        const speedPxPerFrame = 0.8; // control speed

        const getHalfWidth = () => track.scrollWidth / 2;
        let halfWidth = getHalfWidth();

        function handleResize() {
            halfWidth = getHalfWidth();
        }

        function step() {
            if (!isPaused) {
                offset += speedPxPerFrame;
                if (offset >= halfWidth) {
                    offset = 0; // seamless reset after one full set width
                }
                track.style.transform = `translateX(-${offset}px)`;
            }
            animationFrameId = requestAnimationFrame(step);
        }

        window.addEventListener("resize", handleResize);
        animationFrameId = requestAnimationFrame(step);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPaused]);

    return (
        <div
            className="w-full overflow-hidden bg-[#980b15] py-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="will-change-transform">
                <div ref={trackRef} className="flex whitespace-nowrap">
                    {[...items, ...items].map((item, idx) => (
                        <div
                            key={idx}
                            className="px-4 text-white text-sm sm:text-base md:text-lg leading-snug cursor-pointer hover:text-yellow-400 transition-colors duration-200 ease-linear"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
