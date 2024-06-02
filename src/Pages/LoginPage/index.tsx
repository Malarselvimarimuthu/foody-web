
//   import { useFormik } from 'formik';
//   import * as Yup from 'yup';
//   import ".//style.css";
//   import axios from 'axios';
//   type FormValues = {
//       uname: string;
//       psw: string;
//   }
  
//   const initialValues: FormValues = {
//       uname: '',
//       psw: '',
//   }
  
// //   const onSubmit = (values: FormValues) => {
// //       console.log('Form Data', values);
// //   }
  
//   const validationSchema = Yup.object().shape({
//       uname: Yup.string().required('Username is required'),
//       psw: Yup.string().required('Password is required'),
//   });
  
// //   const onSubmit = async (values: FormValues) => {
// //     try {
// //         const response = await axios.post('/api/auth/register', values);
// //         console.log('Form Data', response.data);
// //     } catch (error) {
// //         console.error('Error submitting form', error);
// //     }
// // }
//   export default function LoginPage():any{
//       const formik = useFormik<FormValues>({
//           initialValues,
//           onSubmit,
//           validationSchema,
//       });
  
//       return (
//           <div>
//               <h2>Login Form</h2>
  
//               <form onSubmit={formik.handleSubmit} action='#'>
//                   <div className="container">
//                       <label htmlFor="uname"><b>Username</b></label>
//                       <input
//                           type="text"
//                           // placeholder="Enter Username"
//                           name="uname"
//                           value={formik.values.uname}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                       />
//                       {formik.touched.uname && formik.errors.uname ? (
//                           <div style={{ color: 'red' }}>{formik.errors.uname}</div>
//                       ) : null}
  
//                       <label htmlFor="psw"><b>Password</b></label>
//                       <input
//                           type="password"
//                           // placeholder="Enter Password"
//                           name="psw"
//                           value={formik.values.psw}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                       />
//                       {formik.touched.psw && formik.errors.psw ? (
//                           <div style={{ color: 'red' }}>{formik.errors.psw}</div>
//                       ) : null}
  
//                       <button type="submit">Login</button>
//                   </div>
  
//                   <div className="container">
//                       <button type="button" className="cancelbtn">Cancel</button>
//                       <div className="container psw-links">
//                       <span className="psw"><a href="#">SignUp</a></span>
//                       <span className="psw">Forgot <a href="#">password?</a></span>
//                       </div>
//                   </div>
//               </form>
//           </div>
//       );
//   }
  


// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import "./style.css";
// import { useNavigate } from 'react-router-dom';

// type FormValues = {
//     email: string;
//     password: string;
// }

// const initialValues: FormValues = {
//     email: '',
//     password: '',
// }

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required('Email is required').email('Invalid email format'),
//     password: Yup.string().required('Password is required'),
// });

// const onSubmit = async (values: FormValues,navigate: Function) => {
//     try {
//         const response = await axios.post('http://localhost:8082/api/auth/manual/login', values);
//         console.log('Form Data', response.data);
//         navigate('/home');
//     } catch (error) {
//         console.error('Error submitting form', error);
//     }
// }

// export default function LoginPage(): JSX.Element {
//     const formik = useFormik<FormValues>({
//         initialValues,
//         validationSchema,
//         onSubmit: (values) => onSubmit(values, navigate)
//     });

//     return (
//         <div>
//             <h2>Login Form</h2>

//             <form onSubmit={formik.handleSubmit}>
//                 <div className="container">
//                     <label htmlFor="email"><b>Email</b></label>
//                     <input
//                         type="text"
//                         placeholder="Enter Email"
//                         name="email"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                         <div style={{ color: 'red' }}>{formik.errors.email}</div>
//                     ) : null}

//                     <label htmlFor="password"><b>Password</b></label>
//                     <input
//                         type="password"
//                         placeholder="Enter Password"
//                         name="password"
//                         value={formik.values.password}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.password && formik.errors.password ? (
//                         <div style={{ color: 'red' }}>{formik.errors.password}</div>
//                     ) : null}

//                     <button type="submit">Login</button>
//                 </div>

//                 <div className="container">
//                     <button type="button" className="cancelbtn">Cancel</button>
//                     <div className="container psw-links">
//                         <span className="psw"><a href="#">SignUp</a></span>
//                         <span className="psw">Forgot <a href="#">password?</a></span>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

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
    const response = await axios.post(' http://localhost:8082/api/auth/manual/login', values);
    console.log('Form Data', response.data);
    // Redirect to home page after successful login
    navigate('/home');
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
      <h2>Login Form</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
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

          <label htmlFor="password"><b>Password</b></label>
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

          <button type="submit">Login</button>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
          <div className="container psw-links">
            <span className="psw"><a href="/">Sign Up</a></span>
          </div>
        </div>
      </form>
    </div>
  );
}

