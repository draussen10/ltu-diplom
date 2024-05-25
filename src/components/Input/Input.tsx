import React, {useState} from 'react';
import styles from './input.module.scss'
import { useSpring, animated } from '@react-spring/web';

interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    onEnter?: () => void;
    onEscape?: () => void;
}

const Input: React.FC<InputProps> = (props) => {
    const {
        label,
        placeholder,
        value,
        onChange,
        onEscape,
        onEnter
    } = props

    const [isFocused, setIsFocused] = useState(false);

    const inputAnimation = useSpring({
        opacity: isFocused || value !== '' ? 1 : 0.4
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape' && onEscape) {
            onEscape()
        }

        if (e.key === 'Enter' && onEnter) {
            onEnter()
        }
    };

    return (
        <div style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px', display: 'block'}}>{label}</label>
            <animated.input
                className={styles.input}
                style={{...inputAnimation}}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
};

export default Input;
