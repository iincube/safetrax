import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages } from './languages';

const LanguageSelector: React.FC<{
  onChange: (languageCode: string) => void;
}> = ({ onChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  useEffect(() => {
    setSelectedLanguage(languages[0]?.code || '');
    i18n.changeLanguage(languages[0]?.code || '');
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const languageCode = event.target.value;
    setSelectedLanguage(languageCode);
    onChange(languageCode);
    i18n.changeLanguage(languageCode);
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleChange}>
        {languages.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

// Initialize i18n with react-i18next
const resources: { [key: string]: { translation: string } } = {};

languages.forEach(({ code }) => {
  resources[code] = {
    translation: require(`./translations/${code}.json`),
  };
});

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
});
