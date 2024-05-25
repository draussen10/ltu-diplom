import React, {ReactNode} from 'react';
import styles from './item.module.scss'

type ItemProps = {
    children: ReactNode;
};

const Item = ({children}: ItemProps) => {
    return (
        <div className={styles.item}>
            {children}
        </div>
    );
};

export default Item;