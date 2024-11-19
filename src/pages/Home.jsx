import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '~/assets/styles/Home.module.scss';

function Home() {
    const { t } = useTranslation();

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>
                        {t('home.title')}
                        <span className={styles.highlight}> {t('home.highlight')}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t('home.subtitle')}
                    </p>
                    <div className={styles.features}>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>📝</div>
                            <h3>{t('home.features.create_tasks.title')}</h3>
                            <p>{t('home.features.create_tasks.description')}</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>✓</div>
                            <h3>{t('home.features.track_progress.title')}</h3>
                            <p>{t('home.features.track_progress.description')}</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>🎯</div>
                            <h3>{t('home.features.achieve_goals.title')}</h3>
                            <p>{t('home.features.achieve_goals.description')}</p>
                        </div>
                    </div>
                    <div className={styles.cta}>
                        <Link to="/todo" className={styles.primaryBtn}>
                            {t('home.buttons.get_started')}
                        </Link>
                        <a href="#learn-more" className={styles.secondaryBtn}>
                            {t('home.buttons.learn_more')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 