import React from 'react';
import styles from './exampleComponent.module.scss'
import {useStore} from "../../stores/stores";
import {observer} from "mobx-react-lite";

const ExampleComponent = () => {
    const {exampleStore} = useStore()

    const plus = () => {
        exampleStore.plus(11)
    }

    return (
        <div className={styles.title} onClick={plus}>
            {exampleStore.count}
        </div>
    );
};

export default observer(ExampleComponent);