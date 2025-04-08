import React, {useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';

const Imprint: React.FC = () => {
  const {t, language} = useLanguage();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16 mt-24">
      <div className="container text-xl">
        <h2>Impressum</h2>
        <div className="grid content-center items-center grid-cols-2 gap-4">
          <div className="">
            <h3>Firma</h3>
            <p>Cybethics GmbH</p>
            <p>Xaver Brun-Weg 3</p>
            <p>6032 Emmen</p>
          </div>
          <div>
            <div>
              <img src="/media/cybethics.png" alt="Cybethics Logo" className="h-40"/>
              &copy; {new Date().getFullYear()} Cybethics GmbH. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
        <div className="pb-12">
          <h3>Postadresse</h3>
          <p>Xaver Brun-Weg 3</p>
          <p>6032 Emmen</p>
        </div>
        <div className="pb-12">
          <h3>Kontakt</h3>
          <div className="flex gap-1">
            <p>Mail:</p>
            <a className="text-primary hover:text-primary/75" href="mailto:info@cybethics.com">info@cybethics.com</a>
          </div>
          <div className="flex gap-1">
            <p>Tel:</p>
            <a className="text-primary hover:text-primary/75" href="tel:+41 41 521 32 79">+41 41 521 32 79</a>
          </div>
        </div>
        <div className="pb-12">
          <h3>Administrative Angaben</h3>
          <p>MwSt.-Nr.: CHE-167.330.112</p>
          <p>Handelsregister-Nr.: CH-100.4.814.890-2</p>
        </div>
        <div className="pb-12">
          <h3>Datenschutz</h3>
          <div className="flex gap-1">
            <p>Mail:</p>
            <a className="text-primary hover:text-primary/75" href="mailto:privacy@cybethics.com">privacy@cybethics.com</a>
          </div>
        </div>
      </div>
    </div>
  )
    ;
};

export default Imprint;
