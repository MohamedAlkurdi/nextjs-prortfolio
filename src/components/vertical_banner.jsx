import { useLocale } from '@/app/lib/i18n_context';
import { useEffect, useRef, useState } from 'react';

const InfiniteScrollingBanner = () => {
    const containerRef = useRef(null);
    const [items, setItems] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const itemHeight = 80; //approximately 

    const skills = [
        "React Developer",
        "JavaScript Expert",
        "UI/UX Designer",
        "Node.js Backend",
        "RESTful API Design",
        "TypeScript",
        "CSS/Tailwind/Bootstrap",
        "Responsive Design",
        "Performance Optimization",
        "Git & GitHub",
        "MongoDB",
        "Express.js",
        "Project Management",
        "Problem Solver",
        "Team Player",
        "Continuous Learner"
    ];

    const locale = useLocale()

    useEffect(() => {
        setItems([...skills, ...skills, ...skills]);
    }, []);

    // Scroll animation logic
    useEffect(() => {
        const scrollSpeed = 0.5; // pixels per frame - adjust for speed
        let animationFrameId;

        const animate = () => {
            if (!isPaused) {
                setScrollPosition(prevPosition => {
                    const newPosition = prevPosition + scrollSpeed;

                    // Reset position when we've scrolled through enough items to keep the scroll smooth
                    if (newPosition > skills.length * itemHeight) { // 40px is approximate height of each item
                        return 0;
                    }
                    return newPosition;
                });
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [skills.length, isPaused]);

    // Calculate opacity based on item position
    const getItemOpacity = (index, itemHeight) => {
        if (!containerRef.current) return 1;

        const containerHeight = containerRef.current.clientHeight; //almost 633x
        const itemPosition = (index * itemHeight) - scrollPosition;
        const relativePosition = itemPosition / containerHeight;

        // Top gradient (0% to 25% of container)
        if (relativePosition < 0.25) {
            return relativePosition * 4; // gradually increase from 0 to 1
        }
        // Bottom gradient (75% to 100% of container)
        else if (relativePosition > 0.75) {
            return (1 - (relativePosition - 0.75) * 4); // gradually decrease from 1 to 0
        }
        // Middle section (25% to 75% of container)
        else {
            return 1;
        }
    };

    return (
        <div className={`${locale == "en" ? "absolute right-10 top-0" : "absolute left-10 top-0"}`}>
            <div 
                className="relative container-element h-screen w-80 mx-auto overflow-hidden rounded-lg bg-transparent" 
                ref={containerRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b bg-transparent z-10"></div>
                <div
                    className="absolute direct-parent left-0 right-0"
                    style={{ transform: `translateY(-${scrollPosition}px)` }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`py-2 px-4 text-center font-medium`}
                            style={{
                                opacity: getItemOpacity(index, itemHeight),
                                transition: 'opacity 0.2s ease-in-out',
                                height:`${itemHeight}px`
                            }}
                        >
                            <span>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t bg-transparent z-10"></div>
            </div>
        </div>
    );
};

export default InfiniteScrollingBanner;