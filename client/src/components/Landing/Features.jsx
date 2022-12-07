import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Features = () => {
    return (
        <section className="relative">
            <div className="container mx-auto">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={4} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className=" absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/telemedicine.jpeg" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">E-Consulta</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/prescription.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Receta de medicamentos</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/atenttion.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Atención 24/7</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/Area.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Encuentra tu doctor</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/doctor-patient.avif" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Directorio de áreas</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/family.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Conéctate con lo que te hace bien</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>

                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/telemedicine.jpeg" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">E-Consulta</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/prescription.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Receta de medicamentos</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/atenttion.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Atención 24/7</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/Area.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Encuentra tu doctor</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/doctor-patient.avif" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Directorio de áreas</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/family.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Conéctate con lo que te hace bien</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>

                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={1} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/telemedicine.jpeg" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">E-Consulta</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/prescription.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Receta de medicamentos</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/atenttion.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Atención 24/7</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/Area.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Encuentra tu doctor</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/doctor-patient.avif" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Directorio de áreas</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="./images/family.avif" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Conéctate con lo que te hace bien</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>

                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <div>
                <h2 className="text-5xl font-bold mb-10 mx-5">Atención médica 24/7</h2>
                <div className="flex flex-col md:flex-row align-middle items-center gap-10 md:gap-32 mx-20 mb-16">
                    <div className="grid grid-cols-2 gap-5 w-72 text-center">
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Clínica</div>
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Oftalmología</div>
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Pediatría</div>
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Estudios Especiales</div>
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Cardiología</div>
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Kinesiología</div>
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Gastroenterología</div>
                        <div className=" text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded">Traumatología</div>
                    </div>
                    <div>
                        <div className="flex gap-2 items-center justify-center mr-10 text-xs md:text-sm px-4 py-2 bg-[#4ADFDD] rounded cursor-pointer">Ingresar<i className="fa-solid fa-circle-right inline-block"></i></div>
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-around w-full mx-auto mb-14">
                <div>
                    <img src="./images/swissMedical.png" alt="" />
                </div>
                <div>
                    <img src="./images/osde.png" alt="" />
                </div>
                <div>
                    <img src="./images/medicus.png" alt="" />
                </div>
                <div>
                    <img src="./images/galeno.png" alt="" />
                </div>
            </div>

            <div className=" mt-20 mb-14 w-full">
                <h3 className="text-5xl font-bold mb-10 mx-5">Nos puedes conseguir en... </h3>
                <div className="flex flex-col sm:flex sm:flex-row gap-9 justify-center items-center">
                    <div>
                        <div className="rounded-full h-20 py-3 px-8 flex items-center w-64 sm:w-80 shadow-md cursor-pointer">
                            <img className="inline-block w-16" src="./images/google_play_store.png" alt="" />
                            <div className=" flex flex-col ml-4">
                                <span>Get It On</span>
                                <span className="font-bold">Google Play Store</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-full h-20 py-3 px-8 flex items-center w-64 sm:w-80 shadow-md cursor-pointer">
                            <img className="inline-block w-12" src="./images/apple_store.png" alt="" />
                            <div className=" flex flex-col ml-4">
                                <span>Download on the</span>
                                <span className="font-bold">Apple Store</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>

    );
};

export default Features;
