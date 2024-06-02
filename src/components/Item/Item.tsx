import React, {ReactNode} from 'react';
import styles from './item.module.scss'

type ItemProps = {
    children: ReactNode;
    onClick: () => void
};

const Item = ({children, onClick}: ItemProps) => {
    return (
        <div onClick={onClick} className={styles.item}>
            {children}
        </div>
    );
};

export default Item;