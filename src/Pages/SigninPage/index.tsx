
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ".//style.css";
type FormValues = {
  uname: string;
  psw: string;
}

const initialValues: FormValues = {
  uname: '',
  psw: '',
}

const onSubmit = (values: FormValues) => {
  console.log('Form Data', values);
}

const validationSchema = Yup.object().shape({
  uname: Yup.string().required('Username is required'),
  psw: Yup.string().required('Password is required'),
});

export default function SigninPage(): any {
  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={formik.handleSubmit} action='#'>
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input
            type="text"
            // placeholder="Enter Username"
            name="uname"
            value={formik.values.uname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.uname && formik.errors.uname ? (
            <div style={{ color: 'red' }}>{formik.errors.uname}</div>
          ) : null}

          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            // placeholder="Enter Password"
            name="psw"
            value={formik.values.psw}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.psw && formik.errors.psw ? (
            <div style={{ color: 'red' }}>{formik.errors.psw}</div>
          ) : null}

          <button type="submit">SignIn </button>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
          <div className="container psw-links">
            <span className="psw"><a href="#">Login</a></span>

          </div>
        </div>
      </form>
    </div>
  );
}
