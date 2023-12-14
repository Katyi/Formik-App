import styles from "./Navbar1.module.css";
import Avatar from "../../assets/Avatar.svg";
import Folder from "../../assets/Folder.svg";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={Avatar} alt="Avatar" />
      <div className={styles.navbarRow}>
        <div className={styles.title}>Алексей Иванов</div>
        <div className={styles.iconsRow}>
          <div className={styles.iconsCell}>
            <img src={Folder} alt="Folder" />
            <div className={styles.subTitle}>Telegram</div>
          </div>
          <div className={styles.iconsCell}>
            <img src={Folder} alt="Folder" />
            <div className={styles.subTitle}>GitHub</div>
          </div>
          <div className={styles.iconsCell}>
            <img src={Folder} alt="Folder" />
            <div className={styles.subTitle}>Резюме</div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Navbar;