import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0px</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300px
                </span>
            </div>
            <span>600px</span>
        </header>
    )
}