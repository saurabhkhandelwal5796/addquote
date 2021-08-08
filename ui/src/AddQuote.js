import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';
import axios from 'axios';
import './index.css'
 
const AddQuote = () => { 
    const history = useHistory();
   return (
       <>
      <Formik
       initialValues={{ quote: '', author: '' }} // props
       validationSchema={Yup.object({             // props
         quote: Yup.string()
           .max(200, 'Must be 200 characters or less').required('Required'),// if-else condition
         author: Yup.string()
           .max(40, 'Must be 40 characters or less').required('Required'),
       })}
       onSubmit={async(values, { setSubmitting }) => {
        let obj = {
          "quote":values.quote,
          "author":values.author,
          "likes":Math.ceil(Math.random()*100)
        }
        setSubmitting(false);
        let data = await axios.post('http://localhost:4040/',obj)
        console.log(data.data);
        setSubmitting(true);
        history.push('/home')
       }}
     >

       {/* The code of formik & form  starts from here. */}
       {formik => (
         <div className='container'>
             <form onSubmit={formik.handleSubmit}>
            <div className='form-row'>
            <div className="form-group"> 
              <label for="quote">Quote</label>
              <input id="quote" type="text"  {...formik.getFieldProps('quote')} className="form-control" />
              {formik.touched.quote && formik.errors.quote ? (<div>{formik.errors.quote}</div>) : null}
            </div><br/>
            <div className="form-group">
              <label for="author">Author</label>
              <input id="author" type="text" {...formik.getFieldProps('author')} className="form-control" />
              {formik.touched.author && formik.errors.author ? (<div>{formik.errors.author}</div>) : null}
            </div><br/>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div> 
        </form>
       
         </div>
)}
     </Formik>
     </>
   );
 };

 export default AddQuote