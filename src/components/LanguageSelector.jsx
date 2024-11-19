import { useTranslation } from 'react-i18next';
import styles from '~/assets/styles/LanguageSelector.module.scss';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    try {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem('language', selectedLanguage);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <div className={styles.languageSelector}>
      <select 
        onChange={changeLanguage} 
        value={i18n.language || 'en'}
        className={styles.select}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
        <option value="ko">한국어</option>
      </select>
    </div>
  );
};

export default LanguageSelector;