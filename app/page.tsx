"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "../components/hero";

const useSmoothScroll = () => {
    const [smoothScrollY, setSmoothScrollY] = useState(0);
    const currentScrollY = useRef(0);

    useEffect(() => {
        const handleSmoothScroll = () => {
            currentScrollY.current +=
                (window.scrollY - currentScrollY.current) * 0.1; // Easing factor
            setSmoothScrollY(currentScrollY.current);
            requestAnimationFrame(handleSmoothScroll);
        };
        handleSmoothScroll();
    }, []);

    return smoothScrollY;
};

export default function Home() {
    const [hoverStates, setHoverStates] = useState<boolean[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const smoothScrollY = useSmoothScroll();
    const [sectionTop, setSectionTop] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Scroll and resize effect to control when the section freezes
    useEffect(() => {
        if (sectionRef.current) {
            setSectionTop(sectionRef.current.offsetTop);
        }
        const handleResize = () => {
            if (sectionRef.current) {
                setSectionTop(sectionRef.current.offsetTop);
            }
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Set to true if screen width is less than or equal to 768px
        };

        checkMobile(); // Initial check

        window.addEventListener("resize", checkMobile); // Listen to resize events
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseEnter = (index: number) => {
        setHoverStates((prev) => {
            const updated = [...prev];
            updated[index] = true; // Set the hover state to true for the specific index
            return updated;
        });
        handleHover(index);
    };

    const handleMouseLeave = (index: number) => {
        setHoverStates((prev) => {
            const updated = [...prev];
            updated[index] = false; // Reset the hover state for the specific index
            return updated;
        });
        resetBlur();
    };

    const handleHover = (childIndex: number) => {
        const children = document.querySelectorAll(".hover-child");
        children.forEach((child, index) => {
            if (index !== childIndex) {
                child.classList.add("blur-md");
            }
        });
    };

    const resetBlur = () => {
        document.querySelectorAll(".hover-child").forEach((child) => {
            child.classList.remove("blur-md");
        });
    };

    const Yspeed = 3;

    const items = [
        {
            id: 1,
            type: "video",
            content: "/vids/type-speed.webm",
            title: "69WPM",
            description: "TypeSpeed",
            speed: 0.15 * Yspeed, // Custom parallax speed
            class: "md:w-[500px]",
            xpos: 50,
            ypos: 100,
        },
        {
            id: 2,
            type: "text",
            content: "hello",
            title: "",
            description: "",
            speed: 0.19 * Yspeed, // Custom parallax speed
            xpos: 200,
            ypos: 100,
        },
        {
            id: 3,
            type: "text",
            content: "Div 3",
            title: "69WPM",
            description: "",
            speed: 0.3 * Yspeed, // Custom parallax speed
            xpos: 100,
            ypos: 100,
        },
        {
            id: 4,
            type: "video",
            content: "Div 4",
            title: "4",
            description: "",
            speed: 0.45 * Yspeed, // Custom parallax speed
            xpos: -50,
            ypos: 500,
        },
        {
            id: 5,
            type: "text",
            content: "Div 5",
            title: "69WPM",
            description: "",
            speed: 0.1 * Yspeed, // Custom parallax speed
            xpos: -200,
            ypos: 100,
        },
        {
            id: 6,
            type: "video",
            content: "/vids/excalibur.webm",
            title: "2d Shooter Game",
            description: "Excalibur JS Game Engine",
            speed: 0.26 * Yspeed, // Custom parallax speed
            class: "md:w-[500px]",
            xpos: -60,
            ypos: 100,
        },
    ];

    return (
        <>
            <Hero />
            <main className="relative font-[family-name:var(--font-geist-sans)] w-full h-full flex flex-col text-white md:py-20 md:gap-y-10 overflow-clip">
                <section
                    id="contactme"
                    className="relative h-full w-full p-10 md:px-20 md:p-10"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-full w-full gap-5 md:gap-10">
                        <div className="border-8 border-neutral-800 bg-neutral-800 rounded-lg h-72 md:h-[500px] w-72 md:w-96 overflow-clip mx-auto drop-shadow-xl group">
                            <div className="size-full rounded-lg bg-[url('/img/8.jpg')] bg-center bg-cover bg-no-repeat overflow-clip">
                                <div className="relative rounded-lg size-full grid place-items-center">
                                    <div className="absolute rounded-full bg-amber-400 transition-all ease-in-out duration-500 size-[700px] scale-0 group-hover:scale-100"></div>
                                    <div
                                        className="absolute rounded-full bg-[url('/img/dp.jpg')] bg-red-400 transition-all duration-500 delay-200 scale-50 md:scale-100
                                        size-0 group-hover:size-[700px]

                                        bg-no-repeat
                                        bg-[length:600px_600px]
                                        md:bg-[length:500px_500px]
                                        bg-center"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full md:w-3/5 self-stretch relative gap-y-7">
                            <div>
                                <h1 className="text-2xl font-black">
                                    <span className="decoration-amber-400 underline underline-offset-8">
                                        Abo
                                    </span>
                                    ut Me
                                </h1>
                            </div>
                            <p className="font-thin text-justify leading-8">
                                My name is&nbsp;
                                <span className="font-semibold">
                                    Clyb Abraham Bongcayao.&nbsp;
                                </span>
                                I&apos;m a Freelance TALL Stack Developer based
                                in Philippines. A graduate with a Bachelor of
                                Science in Information Technology from Mindanao
                                State University - Iligan Institute of
                                Technology. I specialize in web developing,
                                programming, hardware and software
                                troubleshooting and enjoy solving technical
                                challenges.
                            </p>
                            <div className="overflow-clip grid md:grid-flow-col md:grid-rows-2 md:grid-cols-2 items-center size-full h-fit gap-y-4 border-2 rounded border-amber-400 p-5 text-sm tracking-wide">
                                <h1
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    className=""
                                >
                                    <span className="font-semibold">Name:</span>
                                    Clyb Abraham Bongcayao
                                </h1>
                                <h1
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos="fade-right"
                                    data-aos-delay="0"
                                    className=""
                                >
                                    <span className="font-semibold">
                                        Phone:
                                    </span>
                                    +639512577048
                                </h1>
                                <h1
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos="fade-right"
                                    data-aos-delay="300"
                                    className=""
                                >
                                    <span className="font-semibold">
                                        Email:
                                    </span>
                                    cabongcayao@gmail.com
                                </h1>

                                <h1
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    className=""
                                >
                                    <span className="font-semibold">
                                        Address:
                                    </span>
                                    Lugait, Misamis Oriental
                                </h1>
                            </div>
                            <a
                                className="relative group size-fit rounded-lg px-4 py-3 bg-amber-400  transition-all duration-300 hover:scale-110"
                                href="docs/clyb_resume.pdf"
                                download="clyb_resume.pdf"
                            >
                                <span className="absolute transition-opacity duration-500 inset-0 size-full rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100"></span>
                                <span
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="center-bottom"
                                    className="relative font-semibold text-sm"
                                >
                                    DOWNLOAD RESUME
                                </span>
                            </a>
                        </div>
                    </div>
                </section>
                <section
                    id="projects"
                    ref={sectionRef}
                    className="relative md:h-[450vh]"
                >
                    <div className="relative max-w-7xl mx-auto h-full w-full flex flex-col gap-10">
                        <div className="md:absolute top-28 w-full flex flex-col">
                            <span
                                className="text-amber-400 text-5xl md:text-8xl font-black w-full text-nowrap text-outline outline-amber-400"
                                style={{
                                    transform: `translateX(${
                                        smoothScrollY * 15 * -0.1
                                    }px)`,
                                    willChange: "transform",
                                }}
                            >
                                PROJECTS & SKILLS PROJECTS & SKILLS PROJECTS &
                                SKILLS PROJECTS & SKILLS PROJECTS & SKILLS
                                PROJECTS & SKILLS PROJECTS & SKILLS PROJECTS &
                                SKILLS PROJECTS & SKILLS
                            </span>
                            <span className="text-amber-400 text-3xl md:text-6xl text-center mx-auto font-black">
                                Projects & Skills
                            </span>
                            <span
                                className="text-amber-400 text-5xl md:text-8xl text-justify mx-auto font-black w-full text-nowrap text-outline-amber-400"
                                style={{
                                    transform: `translateX(${
                                        smoothScrollY * 4 * -0.1
                                    }px)`,
                                    willChange: "transform",
                                }}
                            >
                                PROJECTS & SKILLS PROJECTS & SKILLS PROJECTS &
                                SKILLS PROJECTS & SKILLS PROJECTS & SKILLS
                                PROJECTS & SKILLS PROJECTS & SKILLS PROJECTS &
                                SKILLS PROJECTS & SKILLS
                            </span>
                        </div>
                        <div className="md:sticky top-0 w-full p-5 mx-auto gap-5 md:gap-y-40 flex flex-col md:grid grid-flow-col grid-cols-3 grid-rows-2 h-fit">
                            {items.map((item, index) => {
                                const isHovered = hoverStates[index] || false;
                                // const [isHovered, setIsHovered] =
                                //     useState(false);

                                // const handleMouseEnter = (index: number) => {
                                //     handleHover(index); // Call your existing hover handler
                                //     setIsHovered(true); // Set the hover state to true
                                // };

                                // const handleMouseLeave = () => {
                                //     resetBlur();
                                //     setIsHovered(false); // Set the hover state to true
                                // };

                                return (
                                    <div
                                        key={item.id}
                                        className={`${
                                            isMobile ? "" : "hover-child"
                                        } ${item.class}
                                                relative h-fit rounded-lg overflow-clip p-2 space-y-3
                                                duration-300 transform hover:z-10
                                                bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
                                            `}
                                        onMouseEnter={() =>
                                            handleMouseEnter(index)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(index)
                                        }
                                        style={
                                            isMobile //disable parallax and other styling
                                                ? {}
                                                : {
                                                      transform: `translateY(${
                                                          item.ypos +
                                                          (smoothScrollY -
                                                              sectionTop * 4) *
                                                              -item.speed
                                                      }px) translateX(${
                                                          item.xpos
                                                      }px) ${
                                                          isHovered
                                                              ? "scale(1.1)"
                                                              : ""
                                                      }`,
                                                      willChange: "transform",
                                                  }
                                        }
                                    >
                                        <p className="relative">
                                            <span className="font-bold block">
                                                {item.title}
                                            </span>
                                            <span className="font-thin text-sm block">
                                                {item.description}
                                            </span>
                                        </p>
                                        {item.type === "video" ? (
                                            <div className="">
                                                <video
                                                    className="self-center rounded h-full"
                                                    src={item.content}
                                                    autoPlay
                                                    loop
                                                    muted
                                                >
                                                    Your browser does not
                                                    support the video.
                                                </video>
                                            </div>
                                        ) : (
                                            <div className="">
                                                <span className="relative text-white font-semibold flex items-center justify-center h-full">
                                                    {item.content}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="md:absolute bottom-52 w-full flex flex-col">
                            <span
                                className="text-5xl md:text-8xl mx-auto font-black w-full text-nowrap text-outline"
                                style={{
                                    transform: `translateX(${
                                        smoothScrollY * 30 * -0.1
                                    }px)`,
                                    willChange: "transform",
                                }}
                            >
                                MORE PROJECTS SOON MORE PROJECTS SOON MORE
                                PROJECTS SOON MORE PROJECTS SOON MORE PROJECTS
                                SOON MORE PROJECTS SOON MORE PROJECTS SOON MORE
                                PROJECTS SOON MORE PROJECTS SOON MORE PROJECTS
                                SOON MORE PROJECTS SOON MORE PROJECTS SOON MORE
                                PROJECTS SOON MORE PROJECTS SOON
                            </span>
                            <span className="text-amber-400 text-3xl md:text-6xl text-center mx-auto font-black">
                                More Projects Soon...
                            </span>
                            <span
                                className="text-amber-400 text-5xl md:text-8xl text-justify mx-auto font-black w-full text-nowrap text-outline-amber-400"
                                style={{
                                    transform: `translateX(${
                                        smoothScrollY * 10 * -0.1
                                    }px)`,
                                    willChange: "transform",
                                }}
                            >
                                MORE PROJECTS SOON MORE PROJECTS SOON MORE
                                PROJECTS SOON MORE PROJECTS SOON MORE PROJECTS
                                SOON MORE PROJECTS SOON MORE PROJECTS SOON
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
