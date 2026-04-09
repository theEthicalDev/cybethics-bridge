import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHelmetProps {
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  path: string;
}

const SEOHelmet = ({ titleDe, titleEn, descriptionDe, descriptionEn, path }: SEOHelmetProps) => {
  const { language } = useLanguage();
  const baseUrl = 'https://cybethics.com';
  const canonical = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{language === 'de' ? titleDe : titleEn}</title>
      <meta name="description" content={language === 'de' ? descriptionDe : descriptionEn} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="de" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <meta property="og:title" content={language === 'de' ? titleDe : titleEn} />
      <meta property="og:description" content={language === 'de' ? descriptionDe : descriptionEn} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};

export default SEOHelmet;
