import styles from "./Main.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar1 from "../../components/navbar1/Navbar1";
import * as Yup from 'yup';

const Main = ({ page, setPage, inputs, setInputs }) => {
  
  const handleSubmit = (values) => {
    setPage("page1")
    setInputs({...inputs, phone: values.phone, email: values.email});
  };

  const phoneRegExp = /^\+7\s\([1-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/

  const validationSchema = Yup.object().shape ({
    phone: Yup.string().matches(phoneRegExp, 'Введите правильный номер телефона').required('Поле обязательно'),
    email: Yup.string().email('Неправильный email').required('Поле обязательно'),
  })
    

  return (
    <main className={styles.container}>
      <Navbar1/>
      <Formik
        initialValues={{ phone: inputs.phone, email: inputs.email }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor="phone">Номер телефона</label>
          <Field type="text" name="phone" id="phone" className={styles.field} placeholder="+7 999 999-99-99"/>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="phone" component="div" className={styles.error}/>
          </div>
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" id="email" className={styles.field} placeholder="webstudio.fractal@example.com"/>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="email" component="div" className={styles.error}/>
          </div>
          <button 
            type="submit"
            className={styles.nextButton}
          >
            Далее
          </button>
        </Form>
      </Formik>
    </main>
  );
};

export default Main;