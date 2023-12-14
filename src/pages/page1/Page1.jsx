import React, { useState } from "react";
import styles from "./Page1.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar2 from "../../components/navbar2/Navbar2";
import ProgressBarLine from "../../components/progressBarLine/ProgressBarLine";
import Dropdown from "../../components/dropdown/Dropdown";
// import { Select } from "react-select";
import Select from 'react-select';
import * as Yup from 'yup';

const Page1 = ({ page, setPage, inputs, setInputs, nextPageNumber}) => {
  const [btnClicked, setBtnClicked] = useState('');

  const nicknameRegExp = /^[a-zA-Zа-яёА-ЯЁ0-9]*$/;
  const nameRegExp = /^[a-zA-Zа-яёА-ЯЁ]*$/;
  const sexRegExp = /^(мужской|женский)$/

  const validationSchema = Yup.object().shape({
    nickname: Yup.string().max(30, 'Too Long!').matches(nicknameRegExp, 'Nickname не валиден').required('Required'),
    name: Yup.string().max('50', 'Too Long').matches(nameRegExp, 'Name is not valid').required('Required'),
    surname: Yup.string().max('50', 'Too Long').matches(nameRegExp, 'Surname is not valid').required('Required'),
    sex: Yup.string().matches(sexRegExp, "You must choose" ).required("Required")
  });

  const handleSubmit = (values, e) => {
    setInputs({...inputs, nickname: values.nickname, name: values.name, surname: values.surname, sex: values.sex});
    if (btnClicked === "page2") {
      setPage("page2");
    } else {
      setPage("main");
    }
  };

  const options = [
    {value: "мужской", label: 'мужской'},
    {value: "женский", label: 'женский'},
  ]

  return (
    <main className={styles.container}>
      <Navbar2 page={page}>
        <ProgressBarLine page={page} onPageNumberClick={nextPageNumber} />
      </Navbar2>
      <Formik
        initialValues={{ nickname: inputs.nickname, name: inputs.name, surname: inputs.surname, sex: inputs.sex }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor="nickname" className={styles.label}>Никнейм</label>
          <Field type="text" name="nickname" id="nickname" className={styles.field} placeholder="Placeholder"/>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="nickname" component="div" className={styles.error}/>
          </div>
          <label htmlFor="name" className={styles.label}>Имя</label>
          <Field type="text" name="name" id="name" className={styles.field} placeholder="Placeholder"/>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="name" component="div" className={styles.error}/>
          </div>

          <label htmlFor="surname" className={styles.label}>Фамилия</label>
          <Field type="text" name="surname" id="surname" className={styles.field} placeholder="Placeholder"/>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="surname" component="div" className={styles.error}/>
          </div>
          <label htmlFor="sex" className={styles.label}>Пол</label>
          <Field component={Dropdown} name="sex" id="sex" options={options} />
          <div className={styles.errorWrapper}>
            <ErrorMessage name="sex" component="div" className={styles.error}/>
          </div>
          
          <div className={styles.buttonRow}>
            <button
              className={styles.backButton}
              type="submit"
              onMouseOver={() =>{setBtnClicked("main")}}
            >
              Назад
            </button>
            <button
              type="submit"
              className={styles.nextButton}
              onMouseOver={()=>setBtnClicked("page2")}
            >
              Далее
            </button>
          </div>
        </Form>
      </Formik>
    </main>
  );
}

export default Page1;