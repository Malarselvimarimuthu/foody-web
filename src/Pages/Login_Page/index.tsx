import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style.css";

type FormValues = {
    name: string;
    email: string;
    password: string;
}

const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
});

const onSubmit = async (values: FormValues, navigate: Function) => {
    try {
        const response = await axios.post('http://localhost:8082/api/auth/register', values);
        console.log('Form Data', response.data);
        // Redirect to login page after successful signup
        navigate('/signup');
    } catch (error) {
        console.error('Error submitting form', error);
    }
}

export default function SigninPage(): JSX.Element {
    const navigate = useNavigate();
    const formik = useFormik<FormValues>({
        initialValues,
        validationSchema,
        onSubmit: (values) => onSubmit(values, navigate)
    });

    return (
        <div className='whole'>
            {/* <h2 style={{color:'white'}}>Signin Form</h2> */}
         <div className='card'>
            <form onSubmit={formik.handleSubmit}>
                <div className="container">
                    <label htmlFor="name" style={{ color: 'grey' }}>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: 'red' }}>{formik.errors.name}</div>
                    ) : null}

                    <label htmlFor="email" style={{ color: 'grey' }}>Email</label>
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

                    <label htmlFor="password" style={{ color: 'grey' }}>Password</label>
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

                    <button type="submit" style={{backgroundColor:'orangered'}}>Signin</button>
                </div>

                <div className="container">
                    <button type="button" className="cancelbtn" style={{backgroundColor:'orangered'}}>Cancel</button>
                    <div className="container psw-links">
                        <span className="psw"><a href="/signup" style={{color:'orangered'}}>Signup</a></span>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}

