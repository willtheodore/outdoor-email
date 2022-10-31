import Head from "next/head";

import styles from "../../styles/components/Builder.module.scss";

export default function Builder() {
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Head>
                <title>Outdoor Email Builder</title>
                <meta
                    name="description"
                    content="HTML Email generator for Outdoor Emory."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.editor}>
                    <h1>Editor</h1>
                    <form className={styles.form}>
                        <textarea name="editor" />
                        <button onClick={handleSubmit}>Rerender</button>
                    </form>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.preview}></div>
            </div>
        </div>
    );
}
