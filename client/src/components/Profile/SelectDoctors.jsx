import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectDoctors = () => {

    const navigate = useNavigate()

const handleNext = () => {
    navigate('/SelectDate')
}

    return (
        <div className="hero h-96 md:min-h-screen bg-base-200 relative">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-xl md:text-5xl font-bold">Selecciona...</h1>
                    <div className='flex flex-col gap-10 justify-center mt-10 '>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Médicos</option>
                            <option>Clínica Médica</option>
                            <option>Pediatría</option>
                            <option>Traumatología</option>
                            <option>Oftalmología</option>
                            <option>Dermatología</option>
                            <option>Cirugía</option>
                            <option>Ginecología</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Estudios Médicos</option>
                            <option>Rayos X</option>
                            <option>Laboratorio</option>
                            <option>Tomografía</option>
                            <option>Estudios Alta Calidad</option>
                            <option>Ecografías</option>
                            <option>Estudios Cardiológicos</option>
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={handleNext} className='absolute bottom-3 sm:bottom-10 sm:left-3/4 rounded-xl bg-cyan-500 px-5 py-0 text-white'>Siguiente</button>
        </div>
    )
}

export default SelectDoctors