import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style.css";

type FormValues = {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required'),
});

const onSubmit = async (values: FormValues, navigate: Function) => {
  try {
    const response = await fetch('http://localhost:8082/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    });
    const data =  await response.json();
    console.log('Form Data',data);
    // Redirect to home page after successful login
    if (response.status === 200) {
      console.log('Logged in:', data);
      localStorage.setItem('usid', data.userId);
      navigate('/home');
    } else {
      if (response.status === 404) {
        alert('Account Not yet Registered');
      }
      if (response.status === 401) {
        alert('Invalid Credentials!');
      }
    }
    
  } catch (error) {
    console.error('Error submitting form', error);
  }
}


export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => onSubmit(values, navigate)
  });

  
  
  return (
   
    <div>
    <h1 style={{fontFamily:'times new roman',color:'red'}}><b>Foodie Go</b></h1>
    <div className='card' style={{borderBlockWidth:3,borderLeftWidth:3,borderRightWidth:3}}>
      {/* <h2 style={{color:'white'}}>Login Form</h2> */}

      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <label htmlFor="email" style={{ color: 'black',fontSize:20}}>Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password" style={{ color: 'black',fontSize:20 }}>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}

          <button type="submit" style={{backgroundColor:'orangered'}}>Login</button>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn"style={{backgroundColor:'orangered'}}>Cancel</button>
          <div className="container psw-links">
            <span className="psw" ><a href="/" style={{color:'orangered'}} >Login</a></span>
          </div>
        </div>
      </form>
    </div>
    </div>
   
  );
}

