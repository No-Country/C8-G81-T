import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectAppointment = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate('/')
    }
    return (
        <div>

            <div className="hero h-96 md:min-h-screen bg-base-200 relative">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-xl md:text-5xl font-bold">Selecciona...</h1>
                        <div className='flex gap-10 justify-center mt-10 '>
                            <div>
                                <label htmlFor="">Fecha:</label>
                                <input type="date" placeholder='Selecciona una fecha' className='cursor-pointer' />
                            </div>
                            <div>
                                <label htmlFor="">Hora:</label>
                                <input type="time" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <label htmlFor="my-modal" className="absolute bottom-3 sm:bottom-10 sm:left-3/4 rounded-xl bg-cyan-500 px-5 py-0 text-white border-none normal-case">Siguiente</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">Cita elegida</h3>
                        <div className='flex'>
                            <p className="py-4 mr-7">Paciente:</p>
                            <p className="py-4">Alinson Paez</p>
                        </div>
                        <div className='flex'>
                            <p className="py-4 mr-7">Sede:</p>
                            <p className="py-4">Buenos Aires</p>
                        </div>
                        <div className='flex'>
                            <p className="py-4 mr-7">Fecha:</p>
                            <p className="py-4">11-02-2022 09:40 am</p>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="rounded-xl px-5 py-0 border-none normal-case shadow-lg cursor-pointer">Cancelar</label>
                            <label onClick={handleNext} htmlFor="my-modal" className="rounded-xl bg-cyan-500 px-5 py-0 text-white border-none normal-case shadow-lg cursor-pointer">Agendar</label>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SelectAppointment