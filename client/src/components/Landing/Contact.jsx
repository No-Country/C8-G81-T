import React from "react";

const Contact = () => {
  return (
    <section className="bg-light-grey">
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <h1 className="text-5xl font-bold mb-14">Consúltanos</h1>
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="fName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Nombre(s)"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Apellido"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo electrónico..."
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="w-full">
              <div className="w-full px-0 sm:w-100%">
                <div className="mb-5 w-full">
                  <label
                    for="question"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    type="textarea"
                    name="question"
                    id="question"
                    className=" w-full h-[300px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ¿Ya eres socio?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                  />
                  <label
                    for="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Sí
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    className="h-5 w-5"
                  />
                  <label
                    for="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#1AA7EC] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
