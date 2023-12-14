import styles from './Failure.module.css';
import FailureIcon from "../../assets/FailureIcon.svg";

const Failure = ({openModal, setOpenModal, page, setPage, inputs, setInputs}) => {

  const handleClick = () => {
    setOpenModal(false)
  };

  return (
    <div className={styles.container}>
      <div className={styles.failureTitle}>Ошибка</div>
      <img src={FailureIcon} alt="Failure" className={styles.failureImg} />
      <div className={styles.buttonWrapper}>
        <button className={styles.failureButton}
          onClick={handleClick}
        >
          Закрыть
        </button>
      </div>
    </div>
  )
}

export default Failure;