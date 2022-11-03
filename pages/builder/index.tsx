import * as React from "react";
import Head from "next/head";

import styles from "../../styles/components/Builder.module.scss";
import template from "../../utils/template.html";

export default function Builder() {
    const [text, setText] = React.useState<string>(
        "# Demo Email\n\nThis is demo email content.\n\n> This is a demo email button."
    );

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        e.preventDefault();
        setText(e.target.value);
    };

    const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(text);
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
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <textarea
                            name="editor"
                            autoCorrect="off"
                            autoFocus={true}
                            onChange={handleChange}
                            defaultValue={text}
                        />
                        <button>Rerender</button>
                    </form>
                </div>
                <div className={styles.divider}></div>
                <iframe className={styles.preview} srcDoc={template}></iframe>
            </div>
        </div>
    );
}
