import React, { ReactNode } from 'react';
import styles from './cardPanel.module.scss'

type CardPanelProps = {
    title: ReactNode;
    children: ReactNode;
};

const CardPanel: React.FC<CardPanelProps> = ({ title, children }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default CardPanel;
