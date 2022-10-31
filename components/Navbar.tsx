import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.links}>
                <li className={styles.link}>Home</li>
                <li className={styles.link}>Builder</li>
            </ul>
        </div>
    );
}
