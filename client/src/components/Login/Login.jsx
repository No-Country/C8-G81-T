import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from 'axios'

const Login = () => {

  const submit = (data) => {
    axios
      .post('http://localhost:3001/ruta-login-por-crear', data)
      .then(res => {
        localStorage.setItem('token', res.token)

      })
      .catch(error => {
        if (error.response.status === 404) {
          alert('wrong credentials')
        }
        console.log(error. response);
      })
  }

  return (
    <div>
      <h3>Login</h3>
      <Formik
        onSubmit={submit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              name="email"
              placeholder="example@mail.com"
              type="email"
            />
            {errors.email && touched.email && (
              <ErrorMessage component="div" name="email" />
            )}
            <label htmlFor="password">Contraseña:</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="*****"
            />
            {errors.password && touched.password && (
              <ErrorMessage component="div" name="password" />
            )}
            <button type="submit">Ingresar</button>
            {isSubmitting ? (
              <div>
                <p>Enviando credenciales...</p>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;