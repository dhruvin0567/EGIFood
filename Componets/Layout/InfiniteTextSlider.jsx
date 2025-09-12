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
        const speedPxPerFrame = 0.8;

        const getHalfWidth = () => track.scrollWidth / 2;
        let halfWidth = getHalfWidth();

        function handleResize() {
            halfWidth = getHalfWidth();
        }

        function step() {
            if (!isPaused) {
                offset += speedPxPerFrame;
                if (offset >= halfWidth) {
                    offset = 0;
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
            className="slider-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="slider-wrapper">
                <div ref={trackRef} className="slider-track">
                    {[...items, ...items].map((item, idx) => (
                        <div key={idx} className="slider-item">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
