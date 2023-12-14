import React, { useState } from "react";
import styles from "./Page2.module.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Navbar2 from "../../components/navbar2/Navbar2";
import ProgressBarLine from "../../components/progressBarLine/ProgressBarLine";
import ButtonSquare from "../../assets/ButtonSquare.svg";
import Delete from "../../assets/Delete.svg";
import * as Yup from 'yup';

const Page2 = ({ page, setPage, inputs, setInputs, nextPageNumber }) => {
  const [btnClicked, setBtnClicked] = useState('');

  const validationSchema = Yup.object().shape({
    advantages: Yup.array().of(
        Yup.string().max(50, 'Too Long!').required('Required')
      ),
      checked: Yup.array().min(1).required("Required!"),
      picked: Yup.string().required("A radio option is required"),    
  });

  const handleSubmit = (values) => {
    setInputs({...inputs, advantages: values.advantages, checked: values.checked, picked: values.picked});
    if (btnClicked === "page3") {
      setPage("page3");
    } else {
      setPage("page1");
    }
  };

  return (
    <main className={styles.container}>
      <Navbar2 page={page}>
        <ProgressBarLine page={page} onPageNumberClick={nextPageNumber} />
      </Navbar2>

      <Formik
        initialValues={{ advantages: inputs.advantages, checked: inputs.checked, picked: inputs.picked }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
        <Form className={styles.form}>
          <div className={styles.arraTitle}>Преимущества</div>
          <FieldArray name="advantages">
          {({ insert, remove, push }) => (
            <div>
              {values.advantages.length > 0 && 
                values.advantages.map((advatage, index) => (
                  <div className={styles.row} key={index}>
                    <div className={styles.col}>
                        <Field
                          className={styles.field}
                          name={`advantages.${index}`}
                          placeholder="Placeholder"
                          type="text"
                        />
                        <div className={styles.errorWrapper}>
                          <ErrorMessage
                            name={`advantages.${index}`}
                            component="div"
                            className={styles.error}
                          />
                        </div>
                    </div>
                    <div className={styles.col}>
                      <button
                        type="button"
                        className={styles.arrayButton}
                        onClick={() => remove(`${index}`)}
                      >
                        <img src={Delete} alt="Delete" className={styles.img2} />
                      </button>
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  className={styles.arrayButton}
                  onClick={() => push("")}
                >
                  <img src={ButtonSquare} alt="ButtonSquare" className={styles.img1}/>
                </button>
            </div>
          )}
          </FieldArray>


          {/* CHECBOX-GROUP */}
          <div id="checkbox-group" className={styles.checkboxTitle}>Checkbox группа</div>
          <div role="group" aria-labelledby="checkbox-group" className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel} style={{marginTop:0}}>
              <Field type="checkbox" name="checked" value="1" className={styles.checkbox}/>
              1
            </label>
            <label className={styles.checkboxLabel} style={{marginTop:0}}>
              <Field type="checkbox" name="checked" value="2" className={styles.checkbox}/>
              2
            </label>
            <label className={styles.checkboxLabel} style={{marginTop:0}}>
              <Field type="checkbox" name="checked" value="3" className={styles.checkbox}/>
              3
            </label>
          </div>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="checked" component="div" className={styles.error}/>
          </div>

          {/* RADIO_GROUP */}
          <div id="my-radio-group" className={styles.radioTitle}>Radio группа</div>
          <div role="group" aria-labelledby="my-radio-group" className={styles.radioGroup}>
            <label className={styles.radioLabel} style={{marginTop:0}}>
              <Field type="radio" name="picked" value="1" className={styles.radio}/>
              1
            </label>
            <label className={styles.radioLabel} style={{marginTop:0}}>
              <Field type="radio" name="picked" value="2" className={styles.radio}/>
              2
            </label>
            <label className={styles.radioLabel} style={{marginTop:0}}>
              <Field type="radio" name="picked" value="3" className={styles.radio}/>
              3
            </label>
          </div>
          <div className={styles.errorWrapper}>
            <ErrorMessage name="picked" component="div" className={styles.error}/>
          </div>

          <div className={styles.buttonRow}>
            <button
            type="submit"
              className={styles.backButton}
              onMouseOver={() =>{setBtnClicked("page1")}}
            >
              Назад
            </button>
            <button
              type="submit"
              className={styles.nextButton}
              onMouseOver={() =>{setBtnClicked("page3")}}
            >
              Далее
            </button>
          </div>
        </Form>
        )}
      </Formik>
    </main>
  );
}

export default Page2;