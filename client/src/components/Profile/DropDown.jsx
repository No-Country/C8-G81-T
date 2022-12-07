import React from 'react'

const DropDown = () => {
    return (
        <div className="navbar rounded-box">
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn h-[70px]">
                            <div className="space-x-0 flex items-center gap-5 btn]">
                                <img className='w-16' src="./images/manface.png" alt="" />
                                <p className='ml-5'>Bienvenido,<span className='font-bold'>Alinson</span></p>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li><a><div className="flex items-center justify-between cursor-pointer">
                                <p>Mi historia clínica</p>
                                <img src="./images/clincal_record.png" alt="" />
                            </div></a></li>
                            <li><a><div className="flex items-center justify-between cursor-pointer">
                                <p>Activar Notificaciones</p>
                                <div><i class="fa-solid fa-toggle-off text-[2rem]"></i></div>
                            </div></a></li>
                            <li><a><div className="flex items-center justify-between cursor-pointer">
                                <p>Descargar Historia</p>
                                <div><i class="fa-solid fa-download text-[2rem]"></i></div>
                            </div></a></li>
                            <li><a><div className="flex items-center justify-between cursor-pointer">
                                <p>Historial de Turnos</p>
                                <img src="./images/cardio.png" alt="" />
                            </div></a></li>
                            <li><a><div className="flex items-center justify-between cursor-pointer">
                                <p>Cerrar Cuenta</p>
                                <div><i class="fa-solid fa-trash-can text-[2rem]"></i></div>
                            </div></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown