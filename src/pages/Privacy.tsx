import React, {useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';

const Privacy: React.FC = () => {
  const {t, language} = useLanguage();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16 mt-24">
        <div className="container">
          <div>
            <h2 id="privacy_policy_heading" className="py-4">Datenschutzrichtlinie</h2>
            <p id="privacy_policy_intro" className="pb-5">Gemäss Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen
              des Bundes
              (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre und ihrer persönlichen
              Daten. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und verarbeiten diese entsprechend der
              gesetzlichen Datenschutzvorschriften und dieser Datenschutzerklärung.
            </p>

            <h2 id="data_collection_heading" className="py-4">Datensammlung und -schutz</h2>
            <p id="data_collection_intro" className="pb-5">Die Daten, die wir sammeln sind Google Analytics Analysen und die Daten aus dem Kontaktformular,
              im Falle einer Kontaktaufnahme. Dazu gehören Informationen wie Ihr
              vollständiger Name (falls angegeben), E-Mail-Adresse, Telefonnummer und Ihre Nachricht.
            </p>
            <p id="data_collection_note" className="py-2">Unser Datenverarbeitungsprozess ist darauf ausgerichtet, Ihre Privatsphäre zu schützen. Die von
              Ihnen über
              unser Kontaktformular übermittelten Informationen werden vorübergehend und sicher in der E-Mail gespeichert,
              die wir erhalten. Wir möchten betonen, dass wir diese E-Mail löschen, sobald wir Kontakt mit Ihnen
              aufgenommen haben. Bitte beachten Sie jedoch, dass das physische Löschen von E-Mails durch
              E-Mail-Dienstanbieter (in diesem Fall Microsoft) ausserhalb unserer Kontrolle liegt.
            </p>
            <h2 id="access_security_heading" className="py-4">Zugriff auf Ihre Daten und Sicherheitsmassnahmen</h2>
            <p id="access_security_intro" className="pb-5">Der Zugriff auf die von Ihnen bereitgestellten Daten ist streng auf eine einzige benannte Person
              beschränkt,
              die für die Beantwortung Ihrer Anfragen verantwortlich ist. Dieses Teammitglied ist geschult, um Ihre Daten
              mit grösster Sorgfalt zu behandeln, und wird angewiesen, die E-Mail mit Ihren Informationen zu löschen,
              sobald der Kontakt hergestellt wurde.
            </p>
            <p id="access_security_measures" className="py-2">Wir haben strenge Sicherheitsmassnahmen implementiert, um Ihre Daten zu schützen. Dazu gehören
              HTTPS-Verschlüsselung, robuste Firewalls und von Microsoft bereitgestellte E-Mail-Sicherheitseinstellungen.
              Um Ihre Sicherheit weiter zu verbessern, empfehlen wir Ihnen, Ihr Betriebssystem, Ihre Antivirensoftware,
              Ihr Modem, Ihren Router und Ihre Webbrowser regelmässig gemäss den Empfehlungen ihrer jeweiligen Anbieter zu
              aktualisieren.
            </p>

            <h2 id="third_party_heading" className="py-4">Keine Beteiligung Dritter und Datensicherheitsrisiken</h2>
            <p id="third_party_info" className="pb-5">Ihre Daten werden niemals an externe oder Drittanbieterdienste weitergegeben. Sie verbleiben im Rahmen
              unseres internen Teams, um maximale Privatsphäre und Vertraulichkeit sicherzustellen. Wir möchten jedoch
              darauf hinweisen, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann, die einen
              lückenlosen Schutz der Daten vor dem Zugriff durch Dritte unmöglich machen.
            </p>

            <h2 id="ssl_tls_heading" className="py-4">Datenschutzerklärung für SSL-/TLS-Verschlüsselung</h2>
            <p id="ssl_tls_info" className="pb-5">Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie z. B.
              Ihrer Anfragen an uns als Seitenbetreiber, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
            <p id="copyright_info" className="py-2">Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website
              gehören
              ausschliesslich dem Betreiber dieser Website oder den speziell genannten Rechteinhabern. Für die Reproduktion
              von sämtlichen Dateien ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
            </p>
            <p id="copyright_warning" className="py-2">Wer ohne Einwilligung des jeweiligen Rechteinhabers eine Urheberrechtsverletzung begeht, kann sich
              strafbar
              machen und allenfalls schadenersatzpflichtig werden.
            </p>

            <h2 id="processing_data_heading" className="py-4">Bearbeitung von Personendaten</h2>
            <p id="processing_data_info" className="pb-5">Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen. Eine
              betroffene Person ist eine Person, über die Personendaten bearbeitet werden. Wir bearbeiten Personendaten im
              Einklang mit dem schweizerischen Datenschutzrecht sowie, soweit anwendbar, der EU-DSGVO. Wir bearbeiten
              Personendaten gemäss verschiedenen Rechtsgrundlagen im Zusammenhang mit Art. 6 Abs. 1 DSGVO. Dies umfasst die
              Bearbeitung von Personendaten zur Erfüllung eines Vertrages mit der betroffenen Person sowie zur
              Durchführung vorvertraglicher Massnahmen, zur Erfüllung rechtlicher Verpflichtungen, zur Wahrung
              lebenswichtiger Interessen und zur Wahrung berechtigter Interessen von uns oder Dritten, sofern nicht die
              Interessen der betroffenen Person überwiegen.
            </p>
            <p id="processing_data_duration" className="py-2">
              Wir bewahren Personendaten nur so lange auf, wie dies für den jeweiligen Zweck oder die jeweiligen Zwecke
              erforderlich ist. Bei länger dauernden Aufbewahrungspflichten aufgrund von gesetzlichen und sonstigen
              Pflichten schränken wir die Bearbeitung entsprechend ein.
            </p>

            <h2 id="additional_info_heading" className="py-4">Zusätzliche Informationen und Kontakt</h2>
            <p id="additional_info_intro" className="pb-5">Wenn Sie weitere Informationen zu unseren Datenschutzpraktiken wünschen, zögern Sie bitte nicht,
              uns mit
              Ihren Anfragen zu kontaktieren. Wir sind bestrebt, Ihre Anfragen bestmöglich zu beantworten.
            </p>
            <p id="additional_info_thanks" className="py-2">Vielen Dank, dass Sie unsere Dienste in Anspruch nehmen. Wir sind bemüht, Ihr Vertrauen in unsere
              Datenschutzpraktiken zu rechtfertigen.
            </p>
            <p id="additional_info_contact" className="py-2">Falls Sie Fragen oder Bedenken hinsichtlich unserer Datenschutzrichtlinie oder der Verarbeitung
              Ihrer Daten
              haben, kontaktieren Sie uns bitte über die folgenden Informationen:
            </p>
            <div className="py-2">
              <a href="mailto:privacy@cybethics.com" className="text-primary hover:text-primary/75">privacy@cybethics.com</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Privacy;
