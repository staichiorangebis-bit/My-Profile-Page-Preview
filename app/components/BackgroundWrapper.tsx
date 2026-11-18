import styles from './BackgroundWrapper.module.css';

type Props = {
  children?: React.ReactNode;
};

export default function BackgroundWrapper({ children }: Props ) {
  return (
    <div className={styles.bgContainer}>     
      <div className={styles.overlayBox}>
        {children}
      </div>
    </div>
  );
}