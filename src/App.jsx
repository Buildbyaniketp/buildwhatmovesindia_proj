import { useEffect, useReducer, useRef, useState } from 'react'
import { categories, existingServices, journeyStages, rtos, uiCopy } from './journey/data'
import {
  areDocumentsReady,
  areOfficialStagesComplete,
  clearJourney,
  deriveJourneyStages,
  isApplicationReady,
  isOfficialStageUnlocked,
  isRouteReady,
  journeyReducer,
  loadJourney,
  nextJourneyAction,
  OFFICIAL_STAGE_ORDER,
  saveJourney,
  todayInputValue,
} from './journey/state'

const screenPhase = {
  route: 1,
  application: 2,
  documents: 2,
  'official-actions': 3,
  slot: 4,
  'slot-review': 4,
  confirmation: 4,
}

const phaseNames = {
  en: ['Route', 'Prepare', 'Official', 'Book'],
  hi: ['मार्ग', 'तैयारी', 'आधिकारिक', 'बुकिंग'],
}

const stageScreens = {
  route: 'route',
  application: 'application',
  documents: 'documents',
  photo: 'official-actions',
  payment: 'official-actions',
  verification: 'official-actions',
  receipt: 'official-actions',
  slot: 'slot',
}

const fieldOptions = (t) => ({
  identity: [
    ['aadhaar', t.aadhaar, t.aadhaarHelp],
    ['non-aadhaar', t.nonAadhaar, t.nonAadhaarHelp],
  ],
  age: [['adult', t.adult], ['older', t.older]],
  vehicle: [['two', t.two], ['car', t.car]],
  proofs: [['passport', t.passport], ['electoral', t.electoral], ['school', t.school], ['other', t.otherOfficial]],
})

function App() {
  const initialJourney = useRef(loadJourney())
  const [journey, dispatch] = useReducer(journeyReducer, initialJourney.current)
  const [lang, setLang] = useState('en')
  const [screen, setScreen] = useState(initialJourney.current.profileCreated ? 'profile-home' : 'home')
  const [existingService, setExistingService] = useState('')
  const [previewStage, setPreviewStage] = useState('route')
  const [showSavedExit, setShowSavedExit] = useState(false)
  const mainRef = useRef(null)
  const t = uiCopy[lang]

  useEffect(() => {
    if (journey.profileCreated) saveJourney(journey)
    else clearJourney()
  }, [journey])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    mainRef.current?.focus({ preventScroll: true })
  }, [screen, previewStage])

  const go = (next, remember = true) => {
    if (next !== 'profile-home') setShowSavedExit(false)
    setScreen(next)
    if (remember && journey.profileCreated && (screenPhase[next] || next === 'passport')) {
      dispatch({ type: 'SET_RESUME_SCREEN', screen: next })
    }
  }

  const resetDemo = () => {
    dispatch({ type: 'RESET' })
    setExistingService('')
    setShowSavedExit(false)
    setScreen('home')
  }

  const createProfile = () => {
    dispatch({ type: 'CREATE_PROFILE' })
    setScreen('passport')
  }

  const openOfficialStage = (stage) => {
    setPreviewStage(stage)
    go('official-actions')
  }

  const openJourneyStage = (stage) => {
    if (OFFICIAL_STAGE_ORDER.includes(stage)) openOfficialStage(stage)
    else go(stageScreens[stage])
  }

  const resume = () => {
    const nextAction = nextJourneyAction(journey)
    if (nextAction === 'official-actions') {
      openOfficialStage(OFFICIAL_STAGE_ORDER.find((stage) => !journey.officialStages[stage]) || 'photo')
      return
    }
    if (nextAction === 'slot' && journey.resumeScreen === 'slot-review' && journey.slot.date && journey.slot.time) {
      go('slot-review')
      return
    }
    go(nextAction)
  }

  const saveAndExit = (resumeScreen) => {
    dispatch({ type: 'SET_RESUME_SCREEN', screen: resumeScreen })
    setShowSavedExit(true)
    setScreen('profile-home')
  }

  const completeOfficialStage = (stage) => {
    dispatch({ type: 'COMPLETE_OFFICIAL_STAGE', stage })
    const nextStage = OFFICIAL_STAGE_ORDER[OFFICIAL_STAGE_ORDER.indexOf(stage) + 1]
    if (nextStage) openOfficialStage(nextStage)
    else go('slot')
  }
  const selectedExisting = existingServices.find((service) => service.value === existingService)
  const activePhase = screenPhase[screen]

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" type="button" onClick={() => go(journey.profileCreated ? 'profile-home' : 'home', false)} aria-label={t.name}>
            <span className="brand-mark" aria-hidden="true">↗</span><span>{t.name}</span>
          </button>
          <button className="language-button" type="button" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>{t.language}</button>
        </div>
      </header>
      <div className="prototype-banner" role="note"><span aria-hidden="true">ⓘ</span><span>{t.disclosure}</span></div>
      {activePhase && <Progress current={activePhase} lang={lang} lastSaved={journey.lastSaved} t={t} />}

      <main ref={mainRef} id="main-content" className="main-content" tabIndex="-1">
        {screen === 'home' && <Home t={t} hasProfile={journey.profileCreated} onStart={() => go('applicant-choice', false)} onResume={() => go('profile-home', false)} onExisting={() => go('existing', false)} />}
        {screen === 'applicant-choice' && <ApplicantChoice t={t} onFirst={() => go('demo-profile', false)} onExisting={() => go('existing', false)} onBack={() => go('home', false)} />}
        {screen === 'demo-profile' && <DemoProfile t={t} lang={lang} onUse={createProfile} onBack={() => go('applicant-choice', false)} />}
        {screen === 'profile-home' && <ProfileHome t={t} lang={lang} journey={journey} showSavedExit={showSavedExit} onResume={resume} onPassport={() => go('passport')} onExisting={() => go('existing', false)} onPrepared={() => { dispatch({ type: 'LOAD_PREPARED_SCENARIO' }); setShowSavedExit(false); setScreen('profile-home') }} onReset={resetDemo} />}
        {screen === 'passport' && <Passport t={t} lang={lang} journey={journey} onOpen={openJourneyStage} onProfile={() => go('profile-home', false)} />}
        {screen === 'route' && <RouteScreen t={t} lang={lang} journey={journey} dispatch={dispatch} onComplete={() => { dispatch({ type: 'COMPLETE_ROUTE' }); setScreen('passport') }} onExit={() => saveAndExit('route')} onBack={() => go('passport')} />}
        {screen === 'application' && <ApplicationScreen t={t} lang={lang} journey={journey} dispatch={dispatch} onComplete={() => { dispatch({ type: 'COMPLETE_APPLICATION' }); setScreen('passport') }} onResolve={() => go('route')} onExit={() => saveAndExit('application')} onBack={() => go('passport')} />}
        {screen === 'documents' && <DocumentsScreen t={t} lang={lang} journey={journey} dispatch={dispatch} onComplete={() => { dispatch({ type: 'COMPLETE_DOCUMENTS' }); setScreen('passport') }} onResolve={() => go('application')} onExit={() => saveAndExit('documents')} onBack={() => go('passport')} />}
        {screen === 'official-actions' && <OfficialActionsScreen t={t} lang={lang} journey={journey} previewStage={previewStage} onSimulate={completeOfficialStage} onOpenStage={openOfficialStage} onComplete={() => go('slot')} onResolveDocuments={() => go('documents')} onExit={() => saveAndExit('official-actions')} onBack={() => go('passport')} />}
        {screen === 'slot' && <SlotScreen t={t} lang={lang} journey={journey} dispatch={dispatch} onNext={() => go('slot-review')} onResolve={() => openOfficialStage(OFFICIAL_STAGE_ORDER.find((stage) => !journey.officialStages[stage]) || 'photo')} onExit={() => saveAndExit('slot')} onBack={() => go('passport')} />}
        {screen === 'slot-review' && <SlotReview t={t} lang={lang} journey={journey} onConfirm={() => { dispatch({ type: 'CONFIRM_SLOT' }); setScreen('confirmation') }} onExit={() => saveAndExit('slot-review')} onBack={() => go('slot')} />}
        {screen === 'confirmation' && <Confirmation t={t} lang={lang} journey={journey} onProfile={() => go('profile-home', false)} onPassport={() => go('passport')} />}
        {screen === 'existing' && <ExistingScreen t={t} lang={lang} selected={existingService} setSelected={setExistingService} onNext={() => go('existing-guidance', false)} onBack={() => go('home', false)} />}
        {screen === 'existing-guidance' && <ExistingGuidance t={t} lang={lang} service={selectedExisting} onBack={() => go('existing', false)} />}
      </main>
      <footer><strong>{t.disclosure}</strong><span>{lang === 'en' ? 'Use no real personal data in this demo.' : 'इस डेमो में कोई वास्तविक निजी डेटा उपयोग न करें।'}</span></footer>
    </div>
  )
}

function Progress({ current, lang, lastSaved, t }) {
  return (
    <nav className="progress-wrap" aria-label={lang === 'en' ? 'Journey progress' : 'यात्रा प्रगति'}>
      <ol className="journey-progress">
        {phaseNames[lang].map((name, index) => {
          const step = index + 1
          return <li key={name} className={step < current ? 'done' : step === current ? 'active' : ''} aria-current={step === current ? 'step' : undefined}><span>{step < current ? '✓' : step}</span><em>{name}</em></li>
        })}
      </ol>
      <p>{lang === 'en' ? `Step ${current} of 4` : `4 में से चरण ${current}`}</p>
      <p className="save-status" role="status" aria-live="polite"><span aria-hidden="true">✓</span>{t.progressSaved}{lastSaved && <> · <time dateTime={lastSaved}>{formatSavedTime(lastSaved, lang)}</time></>}</p>
    </nav>
  )
}

function Home({ t, hasProfile, onStart, onResume, onExisting }) {
  return (
    <section className="home">
      <div className="hero">
        <p className="eyebrow">{t.homeEyebrow}</p><h1>{t.homeTitle}</h1><p className="lead">{t.homeBody}</p>
        <div className="hero-actions">
          <button className="ux4g-btn-primary ux4g-btn-lg" type="button" onClick={hasProfile ? onResume : onStart}>{hasProfile ? t.continueApplication : t.start}<span aria-hidden="true">→</span></button>
          {!hasProfile && <button className="text-button" type="button" onClick={onExisting}>{t.existingStart}</button>}
        </div>
      </div>
      <div className="feature-grid">
        <Feature icon="1" title={t.featureJourney} body={t.featureJourneyText} />
        <Feature icon="2" title={t.featureSave} body={t.featureSaveText} />
        <Feature icon="3" title={t.featureSafe} body={t.featureSafeText} />
      </div>
    </section>
  )
}

function Feature({ icon, title, body }) {
  return <article className="feature-card"><span className="feature-icon" aria-hidden="true">{icon}</span><h2>{title}</h2><p>{body}</p></article>
}

function ApplicantChoice({ t, onFirst, onExisting, onBack }) {
  return <Panel eyebrow={t.homeEyebrow} title={t.applicantQuestion}><div className="stacked-actions"><button className="choice-button" type="button" onClick={onFirst}><strong>{t.firstTime}</strong><span aria-hidden="true">→</span></button><button className="choice-button" type="button" onClick={onExisting}><strong>{t.existing}</strong><span aria-hidden="true">→</span></button></div><BackButton t={t} onClick={onBack} /></Panel>
}

function DemoProfile({ t, lang, onUse, onBack }) {
  return (
    <Panel eyebrow={t.profileEyebrow} title={t.profileTitle} body={t.profileBody}>
      <div className="profile-card"><span className="avatar" aria-hidden="true">MS</span><div><strong>{lang === 'en' ? 'Maya Sen' : 'माया सेन'}</strong><span>{t.profileBadge}</span><span>{lang === 'en' ? '28 · Kolkata · LMV learner' : '28 · कोलकाता · LMV लर्नर'}</span></div></div>
      <div className="info-box"><strong>{t.savedOnDevice}</strong><p>{t.profilePrivacy}</p></div>
      <Actions t={t} back={onBack} next={onUse} nextText={t.useProfile} />
    </Panel>
  )
}

function ProfileHome({ t, lang, journey, showSavedExit, onResume, onPassport, onExisting, onPrepared, onReset }) {
  const [confirmClear, setConfirmClear] = useState(false)
  const nextAction = nextJourneyAction(journey)
  const nextStage = nextAction === 'official-actions' ? OFFICIAL_STAGE_ORDER.find((stage) => !journey.officialStages[stage]) : nextAction
  const next = journeyStages[lang].find(([id]) => id === nextStage)?.[1] || (lang === 'en' ? 'Review next steps' : 'अगले चरण देखें')
  return (
    <section className="dashboard">
      <div className="dashboard-heading"><p className="eyebrow">{t.passportEyebrow}</p><h1>{t.welcome}</h1><p className="lead">{t.savedOnDevice}</p></div>
      {showSavedExit && <p className="completion-banner saved-exit-confirmation" role="status">✓ {t.savedExitConfirmation}</p>}
      <div className="resume-card">
        <div><span>{t.nextAction}</span><h2>{next}</h2><p>{t.lastSaved}: {formatSaved(journey.lastSaved, lang)}</p></div>
        <button className="ux4g-btn-primary ux4g-btn-lg" type="button" onClick={onResume}>{t.continueApplication}<span aria-hidden="true">→</span></button>
      </div>
      <div className="dashboard-links">
        <button className="ux4g-btn-outline-primary ux4g-btn-lg" type="button" onClick={onPassport}>{t.openPassport}</button>
        <button className="text-button" type="button" onClick={onExisting}>{t.existingStart}</button>
        <button className="danger-link" type="button" onClick={() => setConfirmClear(true)}>{t.clear}</button>
      </div>
      <details className="test-controls"><summary>{lang === 'en' ? 'Moderator testing controls' : 'मॉडरेटर टेस्ट नियंत्रण'}</summary><button className="text-button" type="button" onClick={onPrepared}>{t.preparedScenario}</button></details>
      {confirmClear && <div className="confirm-box" role="alertdialog" aria-labelledby="clear-title"><strong id="clear-title">{t.clearConfirm}</strong><div><button className="ux4g-btn-outline-primary" type="button" onClick={() => setConfirmClear(false)}>{lang === 'en' ? 'Cancel' : 'रद्द करें'}</button><button className="danger-button" type="button" onClick={onReset}>{lang === 'en' ? 'Clear now' : 'अभी मिटाएँ'}</button></div></div>}
    </section>
  )
}

function Passport({ t, lang, journey, onOpen, onProfile }) {
  const stages = deriveJourneyStages(journey)
  return (
    <section className="passport-page">
      <div className="passport-heading"><div><p className="eyebrow">{t.passportEyebrow}</p><h1>{t.passportTitle}</h1><p className="lead">{t.passportBody}</p></div><button className="text-button" type="button" onClick={onProfile}>{lang === 'en' ? 'My demo profile' : 'मेरी डेमो प्रोफ़ाइल'}</button></div>
      <ol className="passport-grid">
        {journeyStages[lang].map(([id, label], index) => {
          const status = stages.find((item) => item.id === id)?.status || 'pending'
          return (
            <li key={id} className={`stage-card stage-${status}`}>
              <div className="stage-number" aria-hidden="true">{status === 'completed' ? '✓' : index + 1}</div>
              <div className="stage-card-body"><h2>{label}</h2><span className={`status status-${status}`}>{status === 'completed' && <span aria-hidden="true">✓</span>}{t.statuses[status]}</span><p>{t.stageHelp[status]}</p></div>
              <button className="stage-open" type="button" onClick={() => onOpen(id)} aria-label={`${t.preview}: ${label}`}>{t.preview}<span aria-hidden="true">→</span></button>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

function RouteScreen({ t, lang, journey, dispatch, onComplete, onExit, onBack }) {
  const options = fieldOptions(t)
  const special = journey.route.category && journey.route.category !== 'general'
  const ready = isRouteReady(journey) && !special
  const update = (field) => (event) => dispatch({ type: 'UPDATE_ROUTE', field, value: event.target.value })
  return (
    <Panel eyebrow={t.passportEyebrow} title={t.routeTitle} body={t.routeBody}>
      <SelectField id="route-state" label={t.state} value={journey.route.state} onChange={update('state')}><option value="wb">{lang === 'en' ? 'West Bengal (illustrative context)' : 'पश्चिम बंगाल (उदाहरण संदर्भ)'}</option></SelectField>
      <SelectField id="category" label={t.category} hint={t.categoryHint} value={journey.route.category} onChange={update('category')}><option value="">{lang === 'en' ? 'Choose applicant category' : 'आवेदक श्रेणी चुनें'}</option>{categories.map((item) => <option key={item.value} value={item.value}>{item.label[lang]}</option>)}</SelectField>
      {special && <div className="warning-box"><strong>{categories.find((item) => item.value === journey.route.category)?.label[lang]}: {t.specialTitle}</strong><p>{t.specialBody}</p><a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="noreferrer">{t.officialHandoff}<span aria-hidden="true">↗</span></a></div>}
      {!special && <>
        <RadioGroup legend={t.identityRoute} name="identity-route" value={journey.route.identityRoute} onChange={(value) => dispatch({ type: 'UPDATE_ROUTE', field: 'identityRoute', value })} options={options.identity} />
        <RadioGroup legend={t.ageBand} name="age-band" value={journey.route.ageBand} onChange={(value) => dispatch({ type: 'UPDATE_ROUTE', field: 'ageBand', value })} options={options.age} />
        <RadioGroup legend={t.vehicle} name="vehicle" value={journey.route.vehicleClass} onChange={(value) => dispatch({ type: 'UPDATE_ROUTE', field: 'vehicleClass', value })} options={options.vehicle} />
      </>}
      <BlockedHint visible={!ready && !special} text={lang === 'en' ? 'Choose one option in every section to complete this route.' : 'यह मार्ग पूरा करने के लिए हर भाग में एक विकल्प चुनें।'} />
      <Actions t={t} back={onBack} exit={onExit} next={onComplete} nextText={t.completeRoute} disabled={!ready} />
    </Panel>
  )
}

function ApplicationScreen({ t, lang, journey, dispatch, onComplete, onResolve, onExit, onBack }) {
  if (!journey.routeComplete) return <BlockedStage t={t} lang={lang} title={t.applicationTitle} previewBody={t.applicationBody} reason={lang === 'en' ? 'Prepare the applicant route before editing application details.' : 'आवेदन विवरण बदलने से पहले आवेदक मार्ग तैयार करें।'} action={lang === 'en' ? 'Prepare route' : 'मार्ग तैयार करें'} onResolve={onResolve} onExit={onExit} onBack={onBack} />
  const update = (field) => (event) => dispatch({ type: 'UPDATE_APPLICATION', field, value: event.target.type === 'checkbox' ? event.target.checked : event.target.value })
  const ready = isApplicationReady(journey)
  const mismatch = journey.application.vehicleClass !== journey.route.vehicleClass
  return (
    <Panel eyebrow={t.fictionalApplicant} title={t.applicationTitle} body={t.applicationBody}>
      <div className="profile-summary"><span className="avatar small" aria-hidden="true">MS</span><div><strong>{lang === 'en' ? 'Maya Sen' : 'माया सेन'}</strong><p>{lang === 'en' ? '28 · Kolkata' : '28 · कोलकाता'} · {t.car}</p></div></div>
      <dl className="comparison-list"><div><dt>{t.intendedVehicle}</dt><dd>{journey.route.vehicleClass === 'car' ? t.car : t.two}</dd></div></dl>
      <SelectField id="application-vehicle" label={t.applicationVehicle} value={journey.application.vehicleClass} onChange={update('vehicleClass')} error={mismatch ? t.mismatch : ''}><option value="two">{t.two}</option><option value="car">{t.car}</option></SelectField>
      <SelectField id="rto" label={t.rto} value={journey.application.rto} onChange={update('rto')}><option value="">{t.rtoOption}</option>{rtos.map((item) => <option key={item.value} value={item.value}>{item.label[lang]}</option>)}</SelectField>
      <CheckField checked={journey.application.formOneReady} onChange={update('formOneReady')} label={t.formOne} help={t.formOneHelp} />
      <BlockedHint visible={!ready} text={lang === 'en' ? 'Correct the vehicle, choose an illustrative RTO and review the reminder.' : 'वाहन ठीक करें, उदाहरण RTO चुनें और अनुस्मारक देखें।'} />
      <Actions t={t} back={onBack} exit={onExit} next={onComplete} nextText={t.completeApplication} disabled={!ready} />
    </Panel>
  )
}

function DocumentsScreen({ t, lang, journey, dispatch, onComplete, onResolve, onExit, onBack }) {
  if (!journey.applicationComplete) return <BlockedStage t={t} lang={lang} title={t.documentsTitle} previewBody={t.documentsBody} reason={lang === 'en' ? 'Prepare the fictional application details before choosing document types.' : 'दस्तावेज़ प्रकार चुनने से पहले काल्पनिक आवेदन विवरण तैयार करें।'} action={lang === 'en' ? 'Prepare application details' : 'आवेदन विवरण तैयार करें'} onResolve={onResolve} onExit={onExit} onBack={onBack} />
  const options = fieldOptions(t)
  const ready = areDocumentsReady(journey)
  const update = (field) => (event) => dispatch({ type: 'UPDATE_DOCUMENT', field, value: event.target.type === 'checkbox' ? event.target.checked : event.target.value })
  return (
    <Panel eyebrow={t.passportEyebrow} title={t.documentsTitle} body={t.documentsBody}>
      <SelectField id="identity-proof" label={t.identityProof} value={journey.documents.identityProof} onChange={update('identityProof')}>{options.proofs.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</SelectField>
      <SelectField id="address-proof" label={t.addressProof} value={journey.documents.addressProof} onChange={update('addressProof')} error={!journey.documents.addressProof ? t.missingProof : ''}><option value="">{t.chooseProof}</option>{options.proofs.slice(1).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</SelectField>
      {journey.route.identityRoute === 'non-aadhaar' && <CheckField checked={journey.documents.rtoVisitUnderstood} onChange={update('rtoVisitUnderstood')} label={t.rtoVisit} />}
      <BlockedHint visible={!ready} text={t.missingProof} />
      <Actions t={t} back={onBack} exit={onExit} next={onComplete} nextText={t.docsReady} disabled={!ready} />
    </Panel>
  )
}

function OfficialActionsScreen({ t, lang, journey, previewStage, onSimulate, onOpenStage, onComplete, onResolveDocuments, onExit, onBack }) {
  const checkpoints = [
    { id: 'photo', title: t.photoTitle, body: journey.route.identityRoute === 'aadhaar' ? t.photoAadhaarBody : t.photoBody },
    { id: 'payment', title: t.paymentTitle, body: t.paymentBody },
    { id: 'verification', title: t.verifyTitle, body: t.verifyBody },
    { id: 'receipt', title: t.receiptTitle, body: t.receiptBody },
  ]
  const selectedIndex = Math.max(0, checkpoints.findIndex((checkpoint) => checkpoint.id === previewStage))
  const selected = checkpoints[selectedIndex]
  const completed = Boolean(journey.officialStages[selected.id])
  const unlocked = isOfficialStageUnlocked(journey, selected.id)
  const previous = checkpoints[selectedIndex - 1]
  const next = checkpoints[selectedIndex + 1]

  if (!journey.documentsComplete) return <BlockedStage t={t} lang={lang} title={selected.title} previewBody={selected.body} reason={lang === 'en' ? 'Resolve document readiness before performing this official action.' : 'यह आधिकारिक कार्य करने से पहले दस्तावेज़ तैयारी पूरी करें।'} action={lang === 'en' ? 'Resolve documents' : 'दस्तावेज़ तैयार करें'} onResolve={onResolveDocuments} onExit={onExit} onBack={onBack} />

  if (!unlocked) {
    const requiredStage = checkpoints.find((checkpoint) => !journey.officialStages[checkpoint.id]) || checkpoints[0]
    return <BlockedStage t={t} lang={lang} title={selected.title} previewBody={selected.body} reason={lang === 'en' ? `${requiredStage.title} must be completed in the prototype first.` : `पहले प्रोटोटाइप में “${requiredStage.title}” चरण पूरा करें।`} action={lang === 'en' ? `Go to ${requiredStage.title}` : `${requiredStage.title} पर जाएँ`} onResolve={() => onOpenStage(requiredStage.id)} onExit={onExit} onBack={onBack} />
  }

  const continueFromCompleted = () => {
    if (next) onOpenStage(next.id)
    else onComplete()
  }

  return (
    <Panel eyebrow={lang === 'en' ? `Official checkpoint ${selectedIndex + 1} of 4` : `4 में से आधिकारिक चेकपॉइंट ${selectedIndex + 1}`} title={selected.title} body={selected.body}>
      {previous && journey.officialStages[previous.id] && <p className="completion-banner compact-banner" role="status">✓ {previous.title} — {t.previousMockComplete}</p>}
      <div className="mock-boundary" role="note"><strong>{t.mockBoundaries[selected.id]}</strong></div>
      <article className={`focused-checkpoint ${completed ? 'focused-checkpoint-completed' : ''}`}>
        <div className="focused-checkpoint-heading">
          <span className="focused-checkpoint-number" aria-hidden="true">{completed ? '✓' : selectedIndex + 4}</span>
          <span className={`status ${completed ? 'status-completed' : 'status-official-pending'}`}>{completed && <span aria-hidden="true">✓</span>}{completed ? t.statuses.completed : t.statuses['official-pending']}</span>
        </div>
        <h2>{t.demoActionTitle}</h2>
        <p>{t.mockDescriptions[selected.id]}</p>
        {completed && <p className="checkpoint-result" role="status">✓ {t.mockCompletedByStage[selected.id]}</p>}
      </article>
      {selected.id === 'photo' && journey.route.identityRoute === 'non-aadhaar' && <div className="warning-box strong-warning"><strong>{t.rtoReminder}</strong></div>}
      <Actions t={t} back={onBack} exit={onExit} next={completed ? continueFromCompleted : () => onSimulate(selected.id)} nextText={completed ? (next ? t.continueToStages[next.id] : t.checkpointContinue) : t.mockActions[selected.id]} />
    </Panel>
  )
}

function SlotScreen({ t, lang, journey, dispatch, onNext, onResolve, onExit, onBack }) {
  const [showNoTimes, setShowNoTimes] = useState(false)
  if (!areOfficialStagesComplete(journey)) return <BlockedStage t={t} lang={lang} title={t.slotTitle} previewBody={t.slotBody} reason={lang === 'en' ? 'Complete the four illustrative official checkpoints before using the mock slot picker.' : 'मॉक स्लॉट चुनने से पहले चारों उदाहरणात्मक आधिकारिक चेकपॉइंट पूरे करें।'} action={lang === 'en' ? 'Complete illustrative checkpoints' : 'उदाहरणात्मक चेकपॉइंट पूरे करें'} onResolve={onResolve} onExit={onExit} onBack={onBack} />
  const chooseDate = (event) => { dispatch({ type: 'SELECT_DATE', value: event.target.value }); setShowNoTimes(false) }
  const chooseTime = (value) => { dispatch({ type: 'SELECT_TIME', value }); setShowNoTimes(false) }
  return (
    <Panel eyebrow={t.passportEyebrow} title={t.slotTitle} body={t.slotBody}>
      <div className="date-field"><label htmlFor="slot-date">{t.dateLabel}</label><input id="slot-date" type="date" min={todayInputValue()} value={journey.slot.date} onChange={chooseDate} /><small>{journey.slot.date ? formatDate(journey.slot.date, lang) : ''}</small></div>
      <RadioGroup legend={t.timeLabel} name="slot-time" value={journey.slot.time} onChange={chooseTime} options={[['morning', t.morning], ['afternoon', t.afternoon]]} />
      <button className="text-button inline" type="button" onClick={() => setShowNoTimes(true)}>{t.noTimes}</button>
      {showNoTimes && <div className="info-box" role="status"><strong>{t.noTimesTitle}</strong><p>{t.noTimesBody}</p></div>}
      <BlockedHint visible={!journey.slot.time} text={t.timeLabel} />
      <Actions t={t} back={onBack} exit={onExit} next={onNext} disabled={!journey.slot.date || !journey.slot.time} />
    </Panel>
  )
}

function SlotReview({ t, lang, journey, onConfirm, onExit, onBack }) {
  const stateName = lang === 'en' ? 'West Bengal' : 'पश्चिम बंगाल'
  const categoryName = categories.find((item) => item.value === journey.route.category)?.label[lang] || (lang === 'en' ? 'General' : 'सामान्य')
  return (
    <Panel eyebrow={t.confirmationEyebrow} title={t.reviewTitle}>
      <dl className="review-list"><div><dt>{t.selectedDate}</dt><dd>{formatDate(journey.slot.date, lang)} · {journey.slot.time === 'morning' ? t.morning : t.afternoon}</dd></div><div><dt>{t.routeSummary}</dt><dd>{stateName} · {categoryName} · {journey.route.identityRoute === 'non-aadhaar' ? t.nonAadhaar : t.aadhaar} · {journey.route.vehicleClass === 'car' ? t.car : t.two}</dd></div><div><dt>{t.rtoSummary}</dt><dd>{journey.route.identityRoute === 'non-aadhaar' ? t.rtoReminder : t.statuses['official-pending']}</dd></div></dl>
      <div className="warning-box"><strong>{t.disclosure}</strong></div>
      <Actions t={t} back={onBack} exit={onExit} next={onConfirm} nextText={t.confirmSlot} />
    </Panel>
  )
}

function Confirmation({ t, lang, journey, onProfile, onPassport }) {
  return (
    <Panel eyebrow={t.confirmationEyebrow} title={t.confirmationTitle} body={t.confirmationBody}>
      <div className="success-mark" aria-hidden="true">✓</div>
      <dl className="review-list"><div><dt>{t.selectedDate}</dt><dd>{formatDate(journey.slot.date, lang)} · {journey.slot.time === 'morning' ? t.morning : t.afternoon}</dd></div></dl>
      <section className="next-steps"><h2>{t.nextOfficial}</h2><ol>{t.nextSteps.map((step) => <li key={step}>{step}</li>)}</ol><a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="noreferrer">{t.officialHandoff}<span aria-hidden="true">↗</span></a></section>
      <div className="actions"><button className="ux4g-btn-outline-primary ux4g-btn-lg" type="button" onClick={onPassport}>{t.openPassport}</button><button className="ux4g-btn-primary ux4g-btn-lg" type="button" onClick={onProfile}>{t.returnProfile}</button></div>
    </Panel>
  )
}

function ExistingScreen({ t, lang, selected, setSelected, onNext, onBack }) {
  return (
    <Panel eyebrow={t.existingStart} title={t.existingTitle} body={t.existingBody}>
      <RadioGroup legend={t.existingTitle} name="existing-service" value={selected} onChange={setSelected} options={existingServices.map((service) => [service.value, service.label[lang]])} />
      <Actions t={t} back={onBack} next={onNext} disabled={!selected} />
    </Panel>
  )
}

function ExistingGuidance({ t, lang, service, onBack }) {
  if (!service) return null
  return (
    <Panel eyebrow={t.existingStart} title={service.label[lang]} body={t.existingGuidance}>
      <div className="info-box"><strong>{lang === 'en' ? 'Before you open the official service' : 'आधिकारिक सेवा खोलने से पहले'}</strong><ul><li>{lang === 'en' ? 'Confirm the state and service that apply.' : 'लागू राज्य और सेवा की पुष्टि करें।'}</li><li>{lang === 'en' ? 'Keep the current licence details with you, but do not enter them here.' : 'वर्तमान लाइसेंस विवरण पास रखें, पर यहाँ दर्ज न करें।'}</li><li>{lang === 'en' ? 'Check the official service for current documents, fees and appointment rules.' : 'वर्तमान दस्तावेज़, शुल्क और अपॉइंटमेंट नियम आधिकारिक सेवा पर जाँचें।'}</li></ul></div>
      <div className="actions"><button className="ux4g-btn-outline-primary ux4g-btn-lg" type="button" onClick={onBack}>{t.back}</button><a className="ux4g-btn-primary ux4g-btn-lg official-link" href="https://sarathi.parivahan.gov.in/" target="_blank" rel="noreferrer">{t.officialHandoff}<span aria-hidden="true">↗</span></a></div>
    </Panel>
  )
}

function Panel({ eyebrow, title, body, children, wide = false }) {
  return <section className={`flow-panel ${wide ? 'wide-panel' : ''}`}><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{body && <p className="lead">{body}</p>}{children}</section>
}

function RadioGroup({ legend, name, value, onChange, options }) {
  return <fieldset><legend>{legend}</legend>{options.map(([optionValue, label, help]) => <label className={`radio-card ${value === optionValue ? 'selected' : ''}`} key={optionValue}><input type="radio" name={name} value={optionValue} checked={value === optionValue} onChange={() => onChange(optionValue)} /><span className="radio-dot" aria-hidden="true"/><span><strong>{label}</strong>{help && <small>{help}</small>}</span></label>)}</fieldset>
}

function SelectField({ id, label, hint, error, value, onChange, children }) {
  return <div className="field"><label htmlFor={id}>{label}</label>{hint && <small>{hint}</small>}<select id={id} value={value} onChange={onChange} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined}>{children}</select>{error && <span className="field-error" id={`${id}-error`}>{error}</span>}</div>
}

function CheckField({ checked, onChange, label, help }) {
  return <label className="check-field"><input type="checkbox" checked={checked} onChange={onChange} /><span><strong>{label}</strong>{help && <small>{help}</small>}</span></label>
}

function Actions({ t, back, exit, next, nextText, disabled = false }) {
  return <div className="actions"><div className="secondary-actions"><button className="ux4g-btn-outline-primary ux4g-btn-lg" type="button" onClick={back}>{t.back}</button>{exit && <button className="save-exit-button ux4g-btn-lg" type="button" onClick={exit}>{t.saveExit}</button>}</div><button className="ux4g-btn-primary ux4g-btn-lg" type="button" onClick={next} disabled={disabled}>{nextText || t.continue}</button></div>
}

function BackButton({ t, onClick }) {
  return <button className="text-button inline back-only" type="button" onClick={onClick}>← {t.back}</button>
}

function BlockedHint({ visible, text }) {
  return visible ? <p className="blocked-hint" role="status"><span aria-hidden="true">ⓘ</span>{text}</p> : null
}

function BlockedStage({ t, lang = 'en', title, previewBody, reason, action, onResolve, onExit, onBack }) {
  return <Panel eyebrow={t.statuses.pending} title={title || (lang === 'en' ? 'This stage is available to preview.' : 'यह चरण देखने के लिए उपलब्ध है।')} body={previewBody}><div className="info-box"><strong>{reason}</strong><p>{lang === 'en' ? 'Complete the prerequisite to work on it.' : 'इस पर काम करने के लिए पिछली आवश्यकता पूरी करें।'}</p></div><Actions t={t} back={onBack} exit={onExit} next={onResolve} nextText={action} /></Panel>
}

function formatSavedTime(value, lang) {
  if (!value) return ''
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-IN' : 'hi-IN', { hour: 'numeric', minute: '2-digit' }).format(new Date(value))
}

function formatSaved(value, lang) {
  if (!value) return lang === 'en' ? 'Just now' : 'अभी'
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-IN' : 'hi-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

function formatDate(value, lang) {
  if (!value) return ''
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T12:00:00Z`))
}

export default App
