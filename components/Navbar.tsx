import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
    const router = useRouter();
    let active;
    switch (router.pathname) {
        case "/builder":
            active = "builder";
            break;
        default:
            active = "home";
    }

    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>Outdoor Email</h1>
            <ul className={styles.links}>
                <Link href="/">
                    <li
                        className={styles.link}
                        style={active == "home" ? { fontWeight: 600 } : {}}
                    >
                        Home
                    </li>
                </Link>
                <Link href="/builder">
                    <li className={styles.link}>Builder</li>
                </Link>
            </ul>
        </div>
    );
}
