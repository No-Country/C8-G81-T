import '../../styles/Login.css'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const Register = () => {

  const navigate = useNavigate()

  const initialCredentials = {
    userFirstName: "",
    userLastname: "",
    userEmail: "",
    userDni: "",
    userPhone: "",
    userPassword: "",
    userPasswordConfirm: "",
  };

  const registerSchema = Yup.object().shape({
    userFirstName: Yup.string()
      .min(6, "El nombre de usuario es muy corto.")
      .max(18, "El nombre de usuario es muy largo.")
      .required("El nombre de usuario es requerido"),
    userLastname: Yup.string().min(1, "El apellido de usuario es muy corto."),
    userEmail: Yup.string()
      .email("El e-mail ingresado no es valido.")
      .required("El e-mail es obligatorio")
      .min(6, "El e-mail ingresado es muy corto.")
      .max(38, "El e-mail ingresado es muy largo."),
    userDni: Yup.string()
      .min(7, "El dni del usuario es muy corto.")
      .max(12, "El dni del usuario es muy largo.")
      .required("El dni del usuario es requerido"),
    userPhone: Yup.string()
      .min(9, "El telefono del usuario es muy corto.")
      .max(18, "El telefono del usuario es muy largo.")
      .required("El telefono del usuario es requerido"),
    userPassword: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña es muy corta.")
      .max(18, "La contraseña es muy larga."),
    userPasswordConfirm: Yup.string().when("userPassword", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string()
        .oneOf([Yup.ref("userPassword")], "Las contraseñas no cohinciden.")
        .required("Debes volver a ingresar la contraseña en este campo."),
    }),

  });

const handleLogin = () => {
  navigate('/login')
}

  return (
    <div>
      <Header />
      <div className="flex flex-col sm:flex sm:flex-row gap-9 justify-center items-center mt-20">
        <div>
          <div className="rounded-full h-20 py-3 px-8 flex items-center w-64 sm:w-80 shadow-md cursor-pointer">
            <img className="inline-block w-6" src="./images/facebook.png" alt="" />
            <div className="ml-4">
              <span>Continua con</span>
              <span className="ml-1 font-bold">Facebook</span>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-full h-20 py-3 px-8 flex items-center w-64 sm:w-80 shadow-md cursor-pointer">
            <img className="inline-block w-12" src="./images/google.png" alt="" />
            <div className="gap-1 ml-4">
              <span>Continúa con</span>
              <span className="ml-1 font-bold">Google</span>
            </div>
          </div>
        </div>

      </div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={registerSchema}
        onSubmit={async (values) => {

          await new Promise((r) => setTimeout(r, 1500));

          localStorage.setItem("Creando usuario", values);
          alert(JSON.stringify(values, null, 2));
          navigate('/login')
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className='login flex-1'>
            <Form className='form w-[80%] md:w-[100%]'>
              <p className='text-[1.2rem] mb-3'>o continua con</p>
              <label htmlFor="userEmail">Correo electrónico:</label>
              <Field
                id="userEmail"
                name="userEmail"
                placeholder="tuemail@mail.com"
                type="email"
              />
              {errors.userEmail && touched.userEmail && (
                <ErrorMessage className='error' component="div" name="userEmail" />
              )}

              <label htmlFor="userPassword">Contraseña:</label>
              <Field
                id="userPassword"
                name="userPassword"
                type="password"
                placeholder="*****"
              />
              {errors.userPassword && touched.userPassword && (
                <ErrorMessage className='error' component="div" name="userPassword" />
              )}
              <div>
                <input type="checkbox" />
                <label htmlFor="">Acepto</label>
              </div>
              <button className='rounded' type="submit">Regístrate</button>
              {isSubmitting ? (
                <div>
                  <p>Creando el Registro...</p>
                </div>
              ) : null}
              <p className='mt-8'>¿Tienes una cuenta? <a onClick={handleLogin} href="#;"><p className='font-bold text-cyan-700'>Inicia Sesión</p></a></p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Register