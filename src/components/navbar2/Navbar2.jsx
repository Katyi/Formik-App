import styles from "./Navbar2.module.css";

const Navbar = ({children, page}) => {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.numbers}>
        <div className={styles.number1}>1</div>
        <div className={page !== 'page1' ? styles.number1 : styles.number}>2</div>
        <div className={page === 'page3' ? styles.number1 : styles.number}>3</div>
      </div>
      
    </div>
  )
}

export default Navbar;