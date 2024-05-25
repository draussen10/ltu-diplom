import React, { ReactNode } from 'react';
import styles from './cardPanel.module.scss'

type CardPanelProps = {
    title: ReactNode;
    children: ReactNode;
};

const CardPanel: React.FC<CardPanelProps> = ({ title, children }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default CardPanel;
