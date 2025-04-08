import React, {useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';

const Terms: React.FC = () => {
  const {t, language} = useLanguage();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16 mt-24">
        <div className="container">
          <div>
            <h1 className="py-2" id="general_terms">Allgemeine Geschäftsbedingungen</h1>
            <h3 className="py-2" id="general_provisions">A. Allgemeine Bestimmungen</h3>

            <p className="py-2" id="scope_and_applicability">1. Geltungsbereich und Anwendbarkeit</p>
            <p className="py-2" id="scope_description">1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Durchführung, den Inhalt
              und die Abwicklung von
              Verträgen zwischen den Parteien "Kunde" und "Dienstleister", nachfolgend als "Vertragspartner" bezeichnet,
              für Dienstleistungen aller Art im Bereich Informations- und Kommunikationstechnologie (IKT). Diese
              Allgemeinen Geschäftsbedingungen regeln Verträge für Werkverträge, Dienstleistungsverträge sowie Kauf- und
              Leasingverträge, einschliesslich, aber nicht beschränkt auf Softwarelizenzierung, Beschaffung, Wartung und
              Support von Hardware und Software, Dienstleistungen zur Entwicklung, Anpassung, Implementierung und Betrieb
              von Anwendungen, Outsourcing, Online-Diensten und Kommunikationsdiensten.</p>
            <p className="py-2" id="customer_referral">1.2 Der Kunde verweist in den Ausschreibungsunterlagen oder bei der
              Anfrage eines Angebots auf diese AGB. Der Dienstleister erkennt an, dass diese AGB gelten, indem er ein
              schriftliches Angebot abgibt oder, falls kein Angebot vorliegt, spätestens bei Annahme des Auftrags. Die
              Allgemeinen Geschäftsbedingungen des Dienstleisters gelten nicht, auch wenn sie im Angebot oder in anderen
              damit zusammenhängenden Dokumenten erwähnt werden.</p>
            <p className="py-2" id="deviations_requirement">1.3 Abweichungen von diesen AGB müssen ausdrücklich in den
              Ausschreibungsunterlagen oder in der Angebotsanfrage und/oder im Angebot angegeben werden und sind nur
              wirksam,
              wenn sie im Vertrag genannt werden.</p>

            <h3 className="py-2" id="contract_components_ranking">B. Vertragsbestandteile und Rangfolge</h3>

            <p className="py-2" id="contract_components">2. Vertragsbestandteile und Rangfolge</p>
            <p className="py-2" id="ranking_conflict_resolution">2.1 Im Falle von Konflikten zwischen den verschiedenen Vertragsbestandteilen
              hat der Vertrag Vorrang vor
              diesen AGB, die wiederum Vorrang vor dem Angebot haben, das Vorrang vor den Spezifikationen hat. Die
              Vertragspartner können im Vertrag eine andere Regelung treffen.</p>

            <h3 className="py-2" id="offer">C. Angebot</h3>

            <p className="py-2" id="offer_description">3. Angebot</p>
            <p className="py-2" id="offer_free">3.1 Das Angebot, einschliesslich etwaiger Präsentationen, wird kostenlos zur Verfügung
              gestellt.</p>
            <p className="py-2" id="offer_divergence">3.2 Falls das Angebot und/oder die Ausschreibungsunterlagen von der Anfrage des Kunden
              abweichen, muss der Kunde dies
              dem Dienstleister unverzüglich mitteilen. Andernfalls wird der Vertrag gemäss dem Angebot und/oder den
              Ausschreibungsunterlagen geschlossen.</p>

            <h3 className="py-2" id="contract_conclusion">D. Vertragsabschluss</h3>

            <p className="py-2" id="contract_description">4. Vertragsabschluss</p>
            <p className="py-2" id="contract_binding">4.1 Der Vertrag kommt zustande, sobald der Kunde das Angebot des Dienstleisters
              schriftlich annimmt. Im Falle eines
              mündlichen Angebots kann der Vertrag auch mündlich abgeschlossen werden. Der Vertrag kann auch durch
              schlüssiges Verhalten zustande kommen.</p>
            <p className="py-2" id="contract_clarification">4.2 Nach Annahme des Angebots wird der Dienstleister den Vertrag schriftlich
              bestätigen und dem Kunden eine Kopie des
              Vertrags zur Verfügung stellen.</p>

            <h3 className="py-2" id="contract_duration_termination">E. Vertragsdauer und -beendigung</h3>

            <p className="py-2" id="duration_description">5. Vertragsdauer</p>
            <p className="py-2" id="duration_initial_term">5.1 Der Vertrag wird für die in den Ausschreibungsunterlagen oder im Angebot
              angegebene Laufzeit abgeschlossen. Bei
              Fehlen solcher Angaben wird der Vertrag auf unbestimmte Zeit abgeschlossen.</p>
            <p className="py-2" id="duration_termination_notice">5.2 Die Kündigungsfrist beträgt mindestens 30 Tage, es sei denn, im Vertrag
              ist eine andere Frist vorgesehen.</p>

            <h3 className="py-2" id="contract_changes">F. Vertragsänderungen</h3>

            <p className="py-2" id="changes_description">6. Vertragsänderungen</p>
            <p className="py-2" id="changes_request">6.1 Änderungen des Vertrags können schriftlich beantragt werden. Der Dienstleister wird
              innerhalb angemessener Zeit nach
              Erhalt des Änderungsantrags eine schriftliche Stellungnahme abgeben.</p>
            <p className="py-2" id="changes_agreement">6.2 Änderungen des Vertrags bedürfen der schriftlichen Zustimmung beider
              Vertragspartner.</p>

            <h3 className="py-2" id="contract_prices_payment">G. Vertragspreise und -zahlungen</h3>

            <p className="py-2" id="prices_description">7. Vertragspreise und -zahlungen</p>
            <p className="py-2" id="prices_currency">7.1 Alle Preise sind in der Währung angegeben, die im Angebot oder im Vertrag festgelegt
              ist.</p>
            <p className="py-2" id="prices_payment_terms">7.2 Die Zahlungsbedingungen werden im Angebot oder im Vertrag festgelegt. Falls
              keine speziellen Zahlungsbedingungen
              vereinbart wurden, sind die Rechnungen innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zu zahlen.</p>

            <h3 className="py-2" id="contract_performance">H. Vertragserfüllung</h3>

            <p className="py-2" id="performance_description">8. Vertragserfüllung</p>
            <p className="py-2" id="performance_quality">8.1 Der Dienstleister erbringt seine Leistungen in Übereinstimmung mit dem Vertrag
              und den geltenden Qualitätsstandards.</p>
            <p className="py-2" id="performance_report">8.2 Der Dienstleister stellt dem Kunden regelmässige Berichte über den Fortschritt
              seiner Leistungen zur Verfügung.</p>

            <h3 className="py-2" id="contract_acceptance">I. Vertragsannahme</h3>

            <p className="py-2" id="acceptance_description">9. Vertragsannahme</p>
            <p className="py-2" id="acceptance_criteria">9.1 Die Vertragsannahme erfolgt durch den Kunden, nachdem er die Leistungen des
              Dienstleisters überprüft und für
              zufriedenstellend befunden hat.</p>
            <p className="py-2" id="acceptance_certificate">9.2 Auf Wunsch des Kunden stellt der Dienstleister ein Abnahmeprotokoll aus.</p>

            <h3 className="py-2" id="contract_warranties">J. Vertragsleistungen und -gewährleistungen</h3>

            <p className="py-2" id="warranties_description">10. Vertragsleistungen und -gewährleistungen</p>
            <p className="py-2" id="warranties_performance">10.1 Der Dienstleister gewährleistet, dass seine Leistungen den vertraglichen
              Anforderungen und den geltenden
              Qualitätsstandards entsprechen.</p>
            <p className="py-2" id="warranties_defects">10.2 Der Kunde ist verpflichtet, Mängel unverzüglich schriftlich zu melden. Der
              Dienstleister wird die Mängel
              innerhalb angemessener Zeit beheben.</p>

            <h3 className="py-2" id="contract_liability">K. Haftung</h3>

            <p className="py-2" id="liability_description">11. Haftung</p>
            <p className="py-2" id="liability_limitation">11.1 Die Haftung des Dienstleisters ist auf Vorsatz und grobe Fahrlässigkeit
              beschränkt, es sei denn, es handelt sich
              um Schäden an Leben, Körper oder Gesundheit.</p>
            <p className="py-2" id="liability_exclusion">11.2 Die Haftung des Dienstleisters für mittelbare Schäden, entgangenen Gewinn,
              Datenverlust oder
              Folgeschäden ist ausgeschlossen.</p>

            <h3 className="py-2" id="contract_termination">L. Vertragsbeendigung</h3>

            <p className="py-2" id="termination_description">12. Vertragsbeendigung</p>
            <p className="py-2" id="termination_reasons">12.1 Der Vertrag kann aus wichtigen Gründen von beiden Vertragsparteien fristlos
              gekündigt werden.</p>
            <p className="py-2" id="termination_notice">12.2 Die Kündigung muss schriftlich erfolgen.</p>

            <h3 className="py-2" id="contract_final_provisions">M. Schlussbestimmungen</h3>

            <p className="py-2" id="final_provisions_description">13. Schlussbestimmungen</p>
            <p className="py-2" id="final_provisions_entire_agreement">13.1 Dieser Vertrag enthält die gesamte Vereinbarung der Parteien und
              ersetzt alle vorherigen Vereinbarungen,
              Zusagen und Absprachen, sowohl schriftlich als auch mündlich, in Bezug auf den Vertragsgegenstand.</p>
            <p className="py-2" id="final_provisions_amendments">13.2 Änderungen oder Ergänzungen dieses Vertrags bedürfen der Schriftform
              und müssen von beiden Vertragsparteien
              unterzeichnet werden.</p>
          </div>
        </div>
    </div>
  );
};

export default Terms;
