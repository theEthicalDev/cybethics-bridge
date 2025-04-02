
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

const LocalBusinessInfo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        {/*<h2 className="text-2xl font-semibold mb-6">Software Entwicklung in der Zentralschweiz</h2>*/}
        <h2 className="text-2xl font-semibold mb-6">{t('local.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/*<p className="mb-4">*/}
            {/*  Als lokaler Partner für Softwareentwicklung, Automatisierung und DevOps in der Zentralschweiz */}
            {/*  bieten wir massgeschneiderte Lösungen für Unternehmen in Luzern, Zug, Zürich, Schwyz und Umgebung.*/}
            {/*</p>*/}
            <p className="mb-4">
              {t('local.description')}
            </p>
            {/*<p>*/}
            {/*  Unsere Nähe zu Ihnen ermöglicht schnelle Reaktionszeiten und ein tiefes Verständnis der */}
            {/*  lokalen Geschäftsanforderungen.*/}
            {/*</p>*/}
            <p>
              {t('local.description2')}
            </p>
          </div>
          <div>
            {/*<h3 className="text-lg font-medium mb-3">Unsere Tätigkeitsgebiete</h3>*/}
            <h3 className="text-lg font-medium mb-3">{t('local.areas.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span>Emmen | Luzern | Zentralschweiz</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                {/*<span>Verfügbar in der gesamten Deutschschweiz</span>*/}
                <span>{t('local.areas.de')}</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                {/*<span>Remote Arbeit weltweit</span>*/}
                <span>{t('local.areas.remote')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalBusinessInfo;
