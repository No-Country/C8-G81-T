import React from "react";

const Hero = () => {
  return (
    <section >
      
      {/* <div className="hero min-h-[600px] max-h-11" style={{ backgroundImage: "url('/images/herobg.avif')" }}> */}
      <div className="hero min-h-[600px] max-h-11" style={{ backgroundImage: "url('/images/photoSmart.jpeg')" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content relative">
          <div className="max-w-md">
            <p className="mb-5 text-3xl text-white"><span className="text-sky-normal">Medicalendar</span> donde la salud y la atención al cliente es nuestra prioridad.</p>
            <button className="btn btn-primary bg-[#1AA7EC] text-white">Conocer más</button>
          </div>
        </div>
      </div>

      <div className="resume_features flex justify-around flex-wrap my-6 gap-y-5" >

        <div className="flex flex-col items-center w-[215px]" id="services" >
          <span class="fa-stack fa-3x mb-4">
            <i class="fa fa-circle fa-stack-2x text-sky-light"></i>
            <i class="fa fa-headset fa-stack-1x text-white"></i>
          </span>
          <div className="resume-features__description flex flex-col items-center">
            <p>ORIENTACIÓN MÉDICA</p><p>TELEFÓNICA 24hs.</p><p>011-4363-4710 (AMBA)</p><p>0800-122-1040 (Int del país)</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[215px]" >
          <span className="fa-stack fa-3x mb-4">
            <i className="fa fa-circle fa-stack-2x text-sky-light"></i>
            <i className="fa fa-lock fa-stack-1x fa-truck-medical text-white"></i>
          </span>
          <div className="resume-features__description flex flex-col items-center">
            <p>URGENCIAS y</p><p>EMERGENCIAS</p><p>0800-777-7800</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[215px]">
          <span className="fa-stack fa-3x mb-4">
            <i className="fa fa-circle fa-stack-2x text-sky-light"></i>
            <i className="fa fa-lock fa-stack-1x fa-circle-info  text-white"></i>
          </span>
          <div className="resume-features__description flex flex-col items-center">
            <p>INFORMACIÓN</p><p>AL ASOCIADO</p><p>0800-555-7000</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[215px]">
        <span className="fa-stack fa-3x mb-4">
            <i className="fa fa-circle fa-stack-2x text-sky-light"></i>
          <i class="fa fa-lock fa-stack-1x fa-briefcase  text-white"></i>
          </span>
          <div className="resume-features__description flex flex-col items-center">
            <p>ATENCIÓN DE</p><p>VENTAS</p><p className="">0810-333-2244</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
