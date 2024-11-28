"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Import Image component
import Hero from "../components/hero";
import emailjs from "emailjs-com"; // Import EmailJS SDK
// import { HeaderBlurContext } from "./layout";

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
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("Sending...");

        const formData = {
            user_email: email,
            user_subject: subject,
            user_message: message,
        };

        // Send email using EmailJS
        emailjs
            .send(
                "service_i2pvobc",
                "template_dd15ggn",
                formData,
                "Y3KD_37tJXS80YGJE"
            )
            .then(
                () => {
                    setIsSubmitting(false);
                    setStatusMessage("Message sent successfully!");
                },
                () => {
                    setIsSubmitting(false);
                    setStatusMessage(
                        "Error sending message. Please try again."
                    );
                }
            );
    };

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

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Set to true if screen width is less than or equal to 768px
        };

        checkMobile(); // Initial check

        window.addEventListener("resize", checkMobile); // Listen to resize events

        return () => {
            window.removeEventListener("resize", checkMobile);
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
                child.classList.add("blur-sm");
            }
        });
    };

    const resetBlur = () => {
        document.querySelectorAll(".hover-child").forEach((child) => {
            child.classList.remove("blur-sm");
        });
    };

    const Yspeed = 3;

    const items = [
        {
            id: 1,
            type: "video",
            content: "/vids/type-speed.webm",
            alt: "typespeed",
            title: "69WPM",
            description: "My typing speed",
            speed: 0.15 * Yspeed, // Custom parallax speed
            class: "lg:w-[400px]",
            xpos: 50,
            ypos: 100,
            link: "https://www.typing.com/student/typing-test/1-minute",
            tags: [],
        },
        {
            id: 2,
            type: "img",
            content: "/img/fullhouse.jpg",
            alt: "fullhouse",
            title: "Customer Service",
            description: "Customer service at FullHouse Lugait",
            class: "lg:w-[350px]",
            speed: 0.19 * Yspeed, // Custom parallax speed
            xpos: 200,
            ypos: 100,
            link: "https://www.facebook.com/profile.php?id=100086284085429",
            tags: [],
        },
        {
            id: 3,
            type: "img",
            content: "/img/12.jpg",
            alt: "dotted studios",
            title: "Social Media Marketing Intern",
            description: "Photoshoot for one of the clients of Dotted Studios",
            class: "lg:w-[500px] z-10",
            speed: 0.3 * Yspeed, // Custom parallax speed
            xpos: 50,
            ypos: 100,
            link: "",
            tags: [],
        },
        {
            id: 4,
            type: "video",
            content: "/vids/ibotika.webm",
            alt: "ibotika",
            title: "Landing Page",
            description: "Developed landing page for iBotika using Tailwind",
            class: "lg:w-[500px] z-10",
            speed: 0.45 * Yspeed, // Custom parallax speed
            xpos: -50,
            ypos: 500,
            link: "https://www.facebook.com/ibotikaph",
            tags: ["HTML", "CSS", "JS", "Tailwind"],
        },
        {
            id: 5,
            type: "video",
            content: "/vids/AI.webm",
            alt: "AI",
            title: "AI Face Tracker Temperature Detection",
            description:
                "Developed using Python with OpenCV Haar Cascade Model",
            class: "lg:w-[500px]",
            speed: 0.1 * Yspeed, // Custom parallax speed
            xpos: -200,
            ypos: 100,
            link: "https://github.com/mrnurios/FaceDecTemp",
            tags: ["Python", "OpenCV", "AI"],
        },
        {
            id: 6,
            type: "video",
            content: "/vids/excalibur.webm",
            alt: "game",
            title: "2d Shooter Game",
            description: "Excalibur JS Game Engine",
            speed: 0.26 * Yspeed, // Custom parallax speed
            class: "lg:w-[500px]",
            xpos: -60,
            ypos: 100,
            link: "https://excaliburjs.com/",
            tags: ["HTML", "ExcaliburJS", "JS"],
        },
    ];

    return (
        <>
            <Hero />
            <main className="relative font-[family-name:var(--font-geist-sans)] w-full h-full flex flex-col text-white pt-20 md:gap-y-10 overflow-clip">
                <section
                    id="aboutme"
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
                                <h1 className="">
                                    <span className="font-semibold">
                                        Name:&nbsp;
                                    </span>
                                    Clyb Abraham Bongcayao
                                </h1>
                                <h1 className="">
                                    <span className="font-semibold">
                                        Phone:&nbsp;
                                    </span>
                                    +639512577048
                                </h1>
                                <h1 className="">
                                    <span className="font-semibold">
                                        Email:&nbsp;
                                    </span>
                                    cabongcayao@gmail.com
                                </h1>

                                <h1 className="">
                                    <span className="font-semibold">
                                        Address:&nbsp;
                                    </span>
                                    Lugait, Misamis Oriental
                                </h1>
                            </div>
                            <a
                                className="relative group size-fit rounded-lg px-4 py-3 bg-amber-400  transition-all duration-300 hover:scale-110"
                                href="docs/bongcayao.pdf"
                                download="bongcayao_resume.pdf"
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
                    className="relative h-fit md:h-[500vh]"
                >
                    <div className="relative max-w-7xl mx-auto h-full w-full flex flex-col gap-10">
                        <div className="md:absolute top-28 w-full h-fit flex flex-col gap-y-10">
                            <div className="relative w-full flex flex-col items-center justify-center">
                                <span
                                    className="absolute text-5xl md:text-8xl mx-auto font-black w-full text-nowrap text-outline opacity-35"
                                    style={{
                                        transform: `translateX(${
                                            smoothScrollY * 15 * -0.1
                                        }px)`,
                                        willChange: "transform",
                                    }}
                                >
                                    SKILLS & EXPERIENCE SKILLS & EXPERIENCE
                                    SKILLS & EXPERIENCE SKILLS & EXPERIENCE
                                    SKILLS & EXPERIENCE SKILLS & EXPERIENCE
                                    SKILLS & EXPERIENCE SKILLS & EXPERIENCE
                                    SKILLS & EXPERIENCE SKILLS & EXPERIENCE
                                    SKILLS & EXPERIENCE
                                </span>
                                <span className="relative text-amber-400 text-center text-5xl md:text-8xl mx-auto font-black">
                                    SKILLS & EXPERIENCE
                                </span>
                            </div>
                        </div>
                        <div className="md:sticky top-0 w-full p-5 mx-auto gap-5 md:gap-y-20 flex flex-col md:grid grid-flow-col grid-cols-3 grid-rows-2 h-fit">
                            {items.map((item, index) => {
                                const isHovered = hoverStates[index] || false;

                                return (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.link}
                                        key={item.id}
                                        className={`${
                                            isMobile ? "" : "hover-child"
                                        } ${item.class}
                                                relative h-fit rounded-lg overflow-clip p-2 space-y-3 cursor-alias
                                                duration-200 transform hover:z-20
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
                                                              ? "scale(1.3)"
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
                                            <video
                                                className="self-center rounded h-full"
                                                src={item.content}
                                                autoPlay
                                                loop
                                                muted
                                            >
                                                Your browser does not support
                                                the video.
                                            </video>
                                        ) : (
                                            <Image
                                                alt={item.alt}
                                                src={item.content}
                                                layout="responsive"
                                                width={500} // Width as a reference for aspect ratio
                                                height={300}
                                                className={`${item.class}self-center rounded h-full`}
                                            />
                                        )}
                                        {item.tags.length > 0 && (
                                            <div className="text-xs flex gap-2">
                                                {item.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-neutral-800 rounded-full px-2 py-0.5 hover:bg-gradient-to-r from-pink-500 to-indigo-500"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </a>
                                );
                            })}
                        </div>

                        <div className="md:absolute bottom-0 w-full h-screen flex flex-col gap-y-10 justify-center">
                            <div className="relative w-full flex flex-col items-center">
                                <span
                                    className="absolute top-0 text-5xl md:text-8xl mx-auto font-black w-full text-nowrap text-outline opacity-35"
                                    style={{
                                        transform: `translateX(${
                                            smoothScrollY * 15 * -0.1
                                        }px)`,
                                        willChange: "transform",
                                    }}
                                >
                                    HIRE ME NOW HIRE ME NOW HIRE ME NOW HIRE ME
                                    NOW HIRE ME NOW HIRE ME NOW HIRE ME NOW HIRE
                                    ME NOW HIRE ME NOW HIRE ME NOW HIRE ME NOW
                                    HIRE ME NOW HIRE ME NOW HIRE ME NOW HIRE ME
                                    NOW HIRE ME NOW HIRE ME NOW HIRE ME NOW HIRE
                                    ME NOW HIRE ME NOW HIRE ME NOW HIRE ME NOW
                                    HIRE ME NOW HIRE ME NOW HIRE ME NOW HIRE ME
                                    NOW HIRE ME NOW HIRE ME NOW HIRE ME NOW HIRE
                                    ME NOW HIRE ME NOW HIRE ME NOW
                                </span>
                                <span className="relative text-amber-400 text-5xl md:text-8xl mx-auto font-black">
                                    HIRE ME!
                                </span>
                            </div>
                            <div
                                id="contactme"
                                className="max-w-lg w-full mx-auto p-4"
                            >
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4 "
                                >
                                    {/* Email Input */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium "
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    {/* Subject Input */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium "
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={subject}
                                            onChange={(e) =>
                                                setSubject(e.target.value)
                                            }
                                            className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter subject"
                                            required
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium "
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Write your message"
                                            rows={4}
                                            required
                                        />
                                    </div>

                                    {/* Status Message */}
                                    {statusMessage && (
                                        <div className="text-center text-sm text-gray-700 mt-2">
                                            {statusMessage}
                                        </div>
                                    )}

                                    {/* Submit Button */}

                                    <div className="flex">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative group size-fit rounded-lg px-10 py-3 bg-amber-400  transition-all duration-300 hover:scale-110"
                                        >
                                            <span className="absolute transition-opacity duration-500 inset-0 size-full rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100"></span>
                                            <span className="relative font-semibold text-sm">
                                                {isSubmitting
                                                    ? "Sending..."
                                                    : "Send"}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
