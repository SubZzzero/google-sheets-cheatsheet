import { useEffect, useState } from 'react';
import s from './Card.module.css';

export const Card = ({ formula }) => {
    const [isCopied, setCopied] = useState(false);
    const exampleDetails = formula.exampleDetails;

    useEffect(() => {
        if (!isCopied) {
            return undefined;
        }

        const timeoutId = setTimeout(() => {
            setCopied(false);
        }, 1400);

        return () => clearTimeout(timeoutId);
    }, [isCopied]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(formula.syntax);
            setCopied(true);
        } catch {
            setCopied(false);
        }
    };

    return (
        <article className={s.card}>
            <header className={s.cardHeader}>
                <h2 className={s.name}>{formula.name}</h2>
                <button type="button" className={s.copyButton} onClick={handleCopy}>
                    {isCopied ? 'COPIED' : 'COPY'}
                </button>
            </header>

            <div className={s.group}>
                <p className={s.label}>Синтаксис</p>
                <code className={s.syntax}>{formula.syntax}</code>
            </div>

            <div className={s.group}>
                <p className={s.label}>Что делает</p>
                <p className={s.text}>{formula.description}</p>
            </div>

            <div className={s.group}>
                <p className={s.label}>Example</p>
                <div className={s.exampleBlock}>
                    <div className={s.exampleSection}>
                        <p className={s.exampleTitle}>Назначение</p>
                        <p className={s.text}>{exampleDetails.purpose}</p>
                    </div>

                    <div className={s.exampleSection}>
                        <p className={s.exampleTitle}>Переменные</p>
                        <ul className={s.variableList}>
                            {exampleDetails.variables.map((variable) => (
                                <li key={variable} className={s.variableItem}>
                                    {variable}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={s.exampleSection}>
                        <p className={s.exampleTitle}>Пример расчета</p>
                        <code className={s.syntax}>{formula.example}</code>
                        <p className={s.text}>{exampleDetails.calculation}</p>
                    </div>

                    <div className={s.exampleSection}>
                        <p className={s.exampleTitle}>Что получится</p>
                        <p className={s.text}>{exampleDetails.result}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};
