import styles from './Success.module.css';
import Success from "../../assets/Success.svg";

const Succes = ({openModal, setOpenModal, page, setPage, inputs, setInputs}) => {

  const handleClick = () => {
    setOpenModal(false);
    setInputs({
      phone: "",
      email: "",
      nickname: "",
      name: "",
      surname: "",
      sex: "Не выбрано",
      advantages: ["", "", ""],
      checked: [],
      picked: "",
      about: ""
    });
    setPage("main");
  };

  return (
    <div className={styles.container}>
      <div className={styles.successTitle}>Форма успешно отправлена</div>
      <img src={Success} alt="Success" className={styles.successImg} />
      <button className={styles.successButton}
        onClick={handleClick}
      >
        На главную
      </button>
    </div>
  )
}

export default Succes