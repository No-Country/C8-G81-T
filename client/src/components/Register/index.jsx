import '../../styles/Login.css'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
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
            <Form className='form'>
            <span>Registro</span>
              <label htmlFor="userFirstName">Nombre:</label>
              <Field
                id="userFirstName"
                name="userFirstName"
                placeholder="Ingresar nombre"
                type="text"
              />
              {errors.userName && touched.userName && (
                <ErrorMessage className='error' component="div" name="userFirstName" />
              )}
              <label htmlFor="userLastname">Apellido:</label>
              <Field
                id="userLastname"
                name="userLastname"
                placeholder="Ingresar apellido"
                type="text"
              />
              {errors.userLastname && touched.userLastname && (
                <ErrorMessage className='error' component="div" name="userLastname" />
              )}
              <label htmlFor="userEmail">Email:</label>
              <Field
                id="userEmail"
                name="userEmail"
                placeholder="tuemail@mail.com"
                type="email"
              />
              {errors.userEmail && touched.userEmail && (
                <ErrorMessage className='error' component="div" name="userEmail" />
              )}
              <label htmlFor="userDni">DNI:</label>
              <Field
                id="userDni"
                name="userDni"
                placeholder=""
                type="number"
              />
              {errors.userDni && touched.userDni && (
                <ErrorMessage className='error' component="div" name="userDni" />
              )}
              <label htmlFor="userPhone">Telefono:</label>
              <Field
                id="userPhone"
                name="userPhone"
                placeholder=""
                type="number"
              />
              {errors.userPhone && touched.userPhone && (
                <ErrorMessage className='error' component="div" name="userPhone" />
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
              <label htmlFor="userPasswordConfirm">Repetir contraseña:</label>
              <Field
                id="userPasswordConfirm"
                name="userPasswordConfirm"
                type="password"
                placeholder="Repite para confirmar la contraseña"
              />
              {errors.userPasswordConfirm && touched.userPasswordConfirm && (
                <ErrorMessage className='error' component="div" name="userPasswordConfirm" />
              )}
              <button type="submit">Registrarme</button>
              {isSubmitting ? (
                <div>
                  <p>Creando el Registro...</p>
                </div>
              ) : null}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Register