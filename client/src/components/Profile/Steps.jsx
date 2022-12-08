import React from 'react'

const Steps = () => {
  return (
    <div className="max-w-[100%] px-10 text-sm sm:breadcrumbs flex flex-col sm:flex-row justify-center mt-10 mb-10 ">
      <ul>
        <li>
          <div className='flex flex-col items-center mb-4 sm:mb-0'>
            <p>Paso 1</p>
            <p>Iniciar el trámite</p>
          </div>
        </li>
        <li>
          <div className='flex flex-col items-center mb-4 sm:mb-0'>
            <p>Paso 2</p>
            <p>Seleccionar el usuario</p>
          </div>
        </li>
        <li>
          <div className='flex flex-col items-center mb-4 sm:mb-0'>
            <p>Paso 3</p>
            <p>Seleccionar Fecha</p>
          </div>
        </li>
        <li>
          <div className='flex flex-col items-center'>
            <p>Paso 4</p>
            <p>Agendar</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Steps