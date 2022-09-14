import styles from './styles.module.scss';

interface SubscribeButton {
  princeId: string;
}

export function SubscribeButton({princeId}:SubscribeButton) {
    return(
        <button
        type="button"
        className={styles.SubscribeButton}
        >
          Subscribe now
        </button>
    )
}