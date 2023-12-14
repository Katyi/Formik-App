import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import styles from "./Dropdown.module.css";

function Dropdown(props) {
  const [field, state, {setValue, setTouched}] = useField(props.field.name);

  const onChange = ({value}) => {
    setValue(value);
  };
  
  const colourStyles = {
    control: styles => ({ ...styles, 
      width: "100%",
      color: "var(--work-presets-text-white-mode-primary-g-800, #333)",
      fontFamily: "TT Travels",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 200,
      lineHeight: "20px",
    }),
    option: styles => ({...styles,
      backgroundColor: "white",
      color: "var(--work-presets-text-white-mode-primary-g-800, #333)",
      fontFamily: "TT Travels",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
    }),
    placeholder: styles => ({...styles,
      backgroundColor: "white",
      color: "var(--work-presets-text-white-mode-primary-g-800, #333)",
      // fontFamily: "TT Travels",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
    }),
  };
  
  return (
    <Select {...props}
    onChange={onChange}
    // defaultInputValue={field.value}
    onBlur={setTouched} 
    styles={colourStyles}
    className={styles.select} 
    placeholder={field.value}
    />
  );
}

export default Dropdown;