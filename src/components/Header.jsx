import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styles from '~/assets/styles/Header.module.scss';
import LanguageSelector from '~/components/LanguageSelector';
import { FaTasks } from 'react-icons/fa';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <Link to="/" className={styles.logo}>
                        <FaTasks className={styles.icon} />
                        <span>{t('task_manager')}</span>
                    </Link>
                    
                    <ul className={styles.navLinks}>
                        <li>
                            <Link 
                                to="/" 
                                className={location.pathname === '/' ? styles.active : ''}
                            >
                                {t('nav.home')}
                            </Link>
                        </li>
                    </ul>
                    
                    <div className={styles.rightSection}>
                        <LanguageSelector />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;