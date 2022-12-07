import React from 'react'

const Steps = () => {
  return (
    <div className="max-w-full text-sm breadcrumbs flex justify-center my-28 sm:my-10">
      <ul>
        <li>
          <div className='flex flex-col items-center'>
            <p>Paso 1</p>
            <p>Iniciar el trámite</p>
          </div>
        </li>
        <li>
          <div className='flex flex-col items-center'>
            <p>Paso 2</p>
            <p>Seleccionar el usuario</p>
          </div>
        </li>
        <li>
          <div className='flex flex-col items-center'>
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