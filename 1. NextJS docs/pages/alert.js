import styles from '../styles/components/alert.module.css';
import { clsx } from 'clsx';
import { fetchHelloMessage } from './api/hello';

export default function Alert({ children, type }) {

    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}