import { useTranslation } from 'react-i18next';

export function NxWelcome({ appName }: { appName: string }) {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>{t('greeting')}</h1>
            <h2>This is micrfrontend app {appName}</h2>
          </div>
        </div>
      </div>
  );
}

export default NxWelcome;
