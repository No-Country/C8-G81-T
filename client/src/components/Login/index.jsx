import '../../styles/Login.css'
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function Login() {

  const navigate = useNavigate()

  const handleProfile = () => {
    navigate('/profile')
  }

  return (
    <>
    <Header/>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          alert(`Hola, lamentamos decirte que no puedes iniciar sesión en estos momentos, aún seguimos desarrolando la aplicación.
            Correo ingresado: ${values.email}`)
          navigate('/profile')

        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Bienvenido</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text w-full"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button onClick={handleProfile} >Iniciar sesión</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Login;