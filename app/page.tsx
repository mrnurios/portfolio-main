import Hero from "../components/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <main className="font-[family-name:var(--font-geist-sans)] relative  w-full h-full flex flex-col text-white md:py-20 md:gap-y-10 overflow-clip">
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
                                I'm a Freelance TALL Stack Developer based in
                                Philippines. A graduate with a Bachelor of
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
                            <div className="relative group size-fit rounded-lg px-4 py-3 bg-amber-400  transition-all duration-300 hover:scale-110">
                                <span className="absolute transition-opacity duration-500 inset-0 size-full rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100"></span>
                                <a
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="center-bottom"
                                    href="docs/clyb_resume.pdf"
                                    download="clyb_resume.pdf"
                                    className="relative font-semibold text-sm"
                                >
                                    DOWNLOAD RESUME
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative h-full w-full p-10 md:px-20 md:p-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-full w-full gap-5 md:gap-10">
                        <div className="group flex space-x-4">
                            {/* Div 1 */}
                            <div className="relative w-32 h-32 bg-gray-300 rounded-lg group-hover:blur-md transition-all duration-300 hover:!blur-none hover:scale-110">
                                <span className="relative z-10 text-white font-semibold flex items-center justify-center h-full">
                                    Div 1
                                </span>
                            </div>

                            {/* Div 2 */}
                            <div className="relative w-32 h-32 bg-gray-300 rounded-lg group-hover:blur-md transition-all duration-300 hover:!blur-none hover:scale-110">
                                <span className="relative z-10 text-white font-semibold flex items-center justify-center h-full">
                                    Div 2
                                </span>
                            </div>

                            {/* Div 3 */}
                            <div className="relative w-32 h-32 bg-gray-300 rounded-lg group-hover:blur-md transition-all duration-300 hover:!blur-none hover:scale-110">
                                <span className="relative z-10 text-white font-semibold flex items-center justify-center h-full">
                                    Div 3
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
