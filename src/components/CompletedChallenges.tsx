import styles from '../styles/components/CompletedChallenges.module.css';

export function CompleteChallenges() {
  return (
    <div className={styles.completeChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}