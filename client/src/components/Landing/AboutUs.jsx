const AboutUs = () => {
  return (
    <section id="us">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src= './images/aboutus_bg.jpeg' className=" lg:max-w-3xl md:max-w-2xl sm:max-w-sm max-w-[250px] rounded-lg shadow-2xl" alt="doctor"/>
          <div>
            <h1 className="text-5xl mx-5 font-bold">Quiénes somos</h1>
            <p className="py-6 mx-5">Medicalendar es un software médico diseñado para la gestión global de consultas médicas. Es el programa médico ideal para gestionar todos sus pacientes. Le ayudará a cumplir y disponer de toda la información de forma rápida y precisa. Un gran colectivo de médicos satisfechos y un software médico en constante evolución avalan nuestra trayectoria..</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
