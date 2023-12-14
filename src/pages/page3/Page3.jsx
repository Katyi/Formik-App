import React, { useState } from "react";
import styles from "./Page3.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar2 from "../../components/navbar2/Navbar2";
import ProgressBarLine from "../../components/progressBarLine/ProgressBarLine";
import * as Yup from 'yup';
import ModalTemplate from "../../components/modal/ModalTemplate";
import Succes from "../../components/succes/succes";
import Failure from "../../components/failure/Failure";
import axios from "axios";

const Page3 = ({page, setPage, inputs, setInputs, nextPageNumber}) => {
  const [btnClicked, setBtnClicked] = useState('');
  const [count, setCount] = React.useState(0);
  const [openSuccesModal, setOpenSuccesModal] = useState(false);
  const [openFailureModal, setOpenFailureModal] = useState(false);
  let userId = 1;

  const validationSchema = Yup.object().shape({
    about: Yup.string().max(200, 'Too Long!').required('Required'),
  });
  


  const handleSubmit = async (values) => {
    setInputs({...inputs, about: values.about});
    if (btnClicked === "page2") {
      setPage("page2");
    } else {
      
      try {
        // API call
        let userData = {...inputs, userId: userId};
        console.log(userData);
        // await axios.post(`http://localhost:5000/api/users/${userId}`, userData )
        //   .then((res) => {
        //     console.log(res);
        // });

        // Simulate API call
        setTimeout(() => {
          setOpenSuccesModal(true);
        }, 1000);
      } catch (error) {
        setTimeout(() => {
          setOpenFailureModal(true)
        }, 1000);
      }
    }
  };

  return (
    <main className={styles.container}>
      <Navbar2 page={page}>
        <ProgressBarLine page={page} onPageNumberClick={nextPageNumber} />
      </Navbar2>

      <Formik
        initialValues={{ about: inputs.about }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor="about" className={styles.label}>О себе</label>
          <Field 
            name="about" 
            id="about" 
            component="textarea" 
            className={styles.about} 
            placeholder="placeholder"
            onKeyUp={e => setCount(e.target.value.length)}
          />
          <span className={styles.counter}>Количество символов: {count}</span>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="about" component="div" className={styles.error}/>
          </div>

          <div className={styles.buttonRow}>
            <button
              className={styles.backButton}
              type="submit"
              onMouseOver={() =>{setBtnClicked("page2")}}
            >
              Назад
            </button>
            <button
              className={styles.nextButton}
              type="submit"
              onMouseOver={() =>{setBtnClicked("submit")}}
            >
              Отправить
            </button>
          </div>
        </Form>
      </Formik>

      {openSuccesModal &&
       <ModalTemplate active={openSuccesModal} setActive={setOpenSuccesModal}>
        <Succes openModal={openSuccesModal} setOpenModal={setOpenSuccesModal} page={page} setPage={setPage} inputs={inputs} setInputs={setInputs}/>
       </ModalTemplate>
      }
      {openFailureModal &&
       <ModalTemplate active={openFailureModal} setActive={setOpenFailureModal}>
        <Failure openModal={openFailureModal} setOpenModal={setOpenFailureModal} page={page} setPage={setPage} inputs={inputs} setInputs={setInputs}/>
       </ModalTemplate>
      }
    </main>
  );
}

export default Page3;