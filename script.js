document.getElementById('generaBtn').addEventListener('click', function() {
    const nome = document.getElementById('nomeMinore').value.trim();
    const luogoDataNascita = document.getElementById('luogoDataNascita').value.trim();
    const residenza = document.getElementById('residenza').value.trim();
    const cartellaClinica = document.getElementById('cartellaClinica').value.trim();
    const asl = document.getElementById('asl').value.trim();
    const equipe = document.getElementById('equipe').value.trim();
    const referenti = document.getElementById('referenti').value.trim();
    const caseManager = document.getElementById('caseManager').value.trim();
    const familiari = document.getElementById('familiari').value.trim();
    const diagPrincipale = document.getElementById('diagPrincipale').value.trim();
    const codIcd10P = document.getElementById('codIcd10P').value.trim();
    const motivoInvio = document.getElementById('motivoInvio').value.trim();
    const anamnesi = document.getElementById('anamnesi').value.trim();

    const fPsico = document.getElementById('forzaPsico').value.trim();
    const cPsico = document.getElementById('criticaPsico').value.trim();
    const fCura = document.getElementById('forzaCura').value.trim();
    const cCura = document.getElementById('criticaCura').value.trim();
    const fRela = document.getElementById('forzaRela').value.trim();
    const cRela = document.getElementById('criticaRela').value.trim();
    const fScuola = document.getElementById('forzaScuola').value.trim();
    const cScuola = document.getElementById('criticaScuola').value.trim();
    const fAutonomie = document.getElementById('forzaAutonomie').value.trim();
    const cAutonomie = document.getElementById('criticaAutonomie').value.trim();
    const fFamiglia = document.getElementById('forzaFamiglia').value.trim();
    const cFamiglia = document.getElementById('criticaFamiglia').value.trim();
    const fContesti = document.getElementById('forzaContesti').value.trim();
    const cContesti = document.getElementById('criticaContesti').value.trim();

    const osservazioniRecenti = document.getElementById('osservazioniRecenti').value.trim();
    const durataMesi = document.getElementById('durataMesi').value.trim();
    const decorrenza = document.getElementById('decorrenza').value.trim();

    if (!nome) {
        alert("Inserisci almeno il Cognome e Nome del minore.");
        return;
    }

    const testoPtrp = `S.I.R.M.I.V. "Esperanza"
Via Vecchia Sarno n. 54 - Ottaviano (NA)
--------------------------------------------------------------------------------
PIANO TERAPEUTICO RIABILITATIVO PERSONALIZZATO (PTRP)
--------------------------------------------------------------------------------
- Cognome e Nome: ${nome}
- Luogo e data di nascita: ${luogoDataNascita}
- Abitazione: ${residenza}
- Cartella Clinica: ${cartellaClinica}
- ASL Distretto Sanitario: ${asl}
- Équipe Territoriale: ${equipe}
- Referenti: ${referenti}
- Case Manager: ${caseManager}
- Familiari referenti: ${familiari}

DIAGNOSI CLINICA PRINCIPALE:
${diagPrincipale} [Cod. ICD10: ${codIcd10P}]

MOTIVO DELL'INVIO DA PARTE DELL'ÉQUIPE TERRITORIALE:
${motivoInvio || 'Nessuna annotazione.'}

INFORMAZIONI ANAMNESTICHE RILEVANTI:
${anamnesi || 'Nessuna annotazione.'}

--------------------------------------------------------------------------------
ANALISI DELLA SITUAZIONE
--------------------------------------------------------------------------------
1. AREA PSICOPATOLOGICA
- Punti di forza: ${fPsico || 'N/D'}
- Criticità: ${cPsico || 'N/D'}

2. AREA DELLA CURA DI SÉ / AMBIENTE
- Punti di forza: ${fCura || 'N/D'}
- Criticità: ${cCura || 'N/D'}

3. AREA DELLA COMPETENZA RELAZIONALE
- Punti di forza: ${fRela || 'N/D'}
- Criticità: ${cRela || 'N/D'}

4. AREA DEL FUNZIONAMENTO SCOLASTICO
- Punti di forza: ${fScuola || 'N/D'}
- Criticità: ${cScuola || 'N/D'}

5. AREA DELLE AUTONOMIE E ABILITÀ SOCIALI
- Punti di forza: ${fAutonomie || 'N/D'}
- Criticità: ${cAutonomie || 'N/D'}

6. FAMIGLIA
- Punti di forza: ${fFamiglia || 'N/D'}
- Criticità: ${cFamiglia || 'N/D'}

7. CONTESTI DI VITA
- Punti di forza: ${fContesti || 'N/D'}
- Criticità: ${cContesti || 'N/D'}

--------------------------------------------------------------------------------
DURATA E PIANIFICAZIONE
- Durata prevista nello specifico setting assistenziale: mesi ${durataMesi}
- Decorrenza dal: ${decorrenza}

Data: ${new Date().toLocaleDateString('it-IT')}
Firma del Responsabile della Struttura: ___________________________
Firma dei Genitori: ___________________________________________
Firma del Referente Équipe Territoriale: _______________________
`;

    const testoRelazione = `S.I.R.M.I.V. "Esperanza"
RELAZIONE PERIODICA SULL'ANDAMENTO DEL MINORE
--------------------------------------------------------------------------------
Il sottoscritto operatore della comunità SIRMIV Esperanza redige la presente relazione d'andamento relativa al percorso terapeutico-riabilitativo di ${nome}, inserito in struttura.

SINTESI DEL PERCORSO E ATTIVITÀ RECENTI:
${osservazioniRecenti || 'Nessuna attività o osservazione recente registrata.'}

ANALISI EVOLUTIVA DELLE AREE CHIAVE:
- Area Psicopatologica: ${fPsico ? 'Punti di forza: ' + fPsico : ''} ${cPsico ? '| Criticità: ' + cPsico : ''}
- Area Relazionale e Sociale: ${fRela ? 'Punti di forza: ' + fRela : ''} ${cRela ? '| Criticità: ' + cRela : ''}
- Area Scolastica e Autonomie: ${fScuola ? 'Scuola: ' + fScuola : ''} ${fAutonomie ? '| Autonomie: ' + fAutonomie : ''}

CONCLUSIONI DELL'ÉQUIPE:
L'équipe ritiene opportuno proseguire con gli obiettivi tracciati nel PTRP, monitorando costantemente l'evoluzione comportamentale e relazionale del minore.

Data: ${new Date().toLocaleDateString('it-IT')}
L'Équipe Socio-Sanitaria SIRMIV Esperanza
`;

    document.getElementById('previewPtrp').textContent = testoPtrp;
    document.getElementById('previewRelazione').textContent = testoRelazione;

    const outputSection = document.getElementById('outputSection');
    outputSection.classList.remove('hidden');
    outputSection.scrollIntoView({ behavior: 'smooth' });
});

function mostraTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

document.getElementById('stampaBtn').addEventListener('click', function() {
    window.print();
});