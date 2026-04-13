import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <p>{t('footer.text')}</p>
      <p>{t('footer.madeWith')}</p>
    </footer>
  )
}

export default Footer