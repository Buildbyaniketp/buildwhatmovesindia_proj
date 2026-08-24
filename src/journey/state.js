export const STORAGE_KEY = 'licence-path-fictional-profile-v1'
export const STATE_VERSION = 2
export const OFFICIAL_STAGE_ORDER = ['photo', 'payment', 'verification', 'receipt']

const createOfficialStages = () => ({
  photo: false,
  payment: false,
  verification: false,
  receipt: false,
})

export const todayInputValue = (date = new Date()) => {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000)
  return local.toISOString().slice(0, 10)
}

export const createInitialJourney = () => ({
  version: STATE_VERSION,
  profileCreated: false,
  resumeScreen: 'passport',
  lastSaved: '',
  route: {
    state: 'wb',
    category: '',
    identityRoute: '',
    ageBand: '',
    vehicleClass: '',
  },
  routeComplete: false,
  application: {
    rto: '',
    vehicleClass: 'two',
    formOneReady: false,
  },
  applicationComplete: false,
  documents: {
    identityProof: 'passport',
    addressProof: '',
    rtoVisitUnderstood: false,
  },
  documentsComplete: false,
  officialStages: createOfficialStages(),
  slot: {
    date: todayInputValue(),
    time: '',
    confirmed: false,
  },
})

const clearAfterRoute = (state) => ({
  ...state,
  routeComplete: false,
  application: { ...createInitialJourney().application },
  applicationComplete: false,
  documents: { ...createInitialJourney().documents },
  documentsComplete: false,
  officialStages: createOfficialStages(),
  slot: { ...createInitialJourney().slot },
})

const clearAfterApplication = (state) => ({
  ...state,
  applicationComplete: false,
  documents: { ...createInitialJourney().documents },
  documentsComplete: false,
  officialStages: createOfficialStages(),
  slot: { ...createInitialJourney().slot },
})

const clearAfterDocuments = (state) => ({
  ...state,
  documentsComplete: false,
  officialStages: createOfficialStages(),
  slot: { ...createInitialJourney().slot },
})

const saved = (state, resumeScreen = state.resumeScreen) => ({
  ...state,
  resumeScreen,
  lastSaved: new Date().toISOString(),
})

export function journeyReducer(state, action) {
  switch (action.type) {
    case 'CREATE_PROFILE':
      return saved({ ...state, profileCreated: true }, 'passport')
    case 'SET_RESUME_SCREEN':
      return saved(state, action.screen)
    case 'UPDATE_ROUTE':
      return saved(clearAfterRoute({ ...state, route: { ...state.route, [action.field]: action.value } }), 'route')
    case 'COMPLETE_ROUTE':
      return saved({ ...state, routeComplete: true }, 'passport')
    case 'UPDATE_APPLICATION':
      return saved(clearAfterApplication({ ...state, application: { ...state.application, [action.field]: action.value } }), 'application')
    case 'COMPLETE_APPLICATION':
      return saved({ ...state, applicationComplete: true }, 'passport')
    case 'UPDATE_DOCUMENT':
      return saved(clearAfterDocuments({ ...state, documents: { ...state.documents, [action.field]: action.value } }), 'documents')
    case 'COMPLETE_DOCUMENTS':
      return saved({ ...state, documentsComplete: true }, 'passport')
    case 'COMPLETE_OFFICIAL_STAGE':
      if (!isOfficialStageUnlocked(state, action.stage)) return state
      return saved({
        ...state,
        officialStages: { ...state.officialStages, [action.stage]: true },
      }, 'official-actions')
    case 'SELECT_DATE':
      if (!areOfficialStagesComplete(state)) return state
      return saved({ ...state, slot: { date: action.value, time: '', confirmed: false } }, 'slot')
    case 'SELECT_TIME':
      if (!areOfficialStagesComplete(state)) return state
      return saved({ ...state, slot: { ...state.slot, time: action.value, confirmed: false } }, 'slot')
    case 'CONFIRM_SLOT':
      if (!areOfficialStagesComplete(state) || !state.slot.date || !state.slot.time) return state
      return saved({ ...state, slot: { ...state.slot, confirmed: true } }, 'confirmation')
    case 'LOAD_PREPARED_SCENARIO': {
      const prepared = createInitialJourney()
      return saved({
        ...prepared,
        profileCreated: true,
        route: { state: 'wb', category: 'general', identityRoute: 'non-aadhaar', ageBand: 'adult', vehicleClass: 'car' },
        routeComplete: true,
        application: { rto: 'kolkata', vehicleClass: 'car', formOneReady: true },
        applicationComplete: true,
        documents: { identityProof: 'passport', addressProof: 'electoral', rtoVisitUnderstood: true },
        documentsComplete: true,
        officialStages: createOfficialStages(),
      }, 'passport')
    }
    case 'RESET':
      return createInitialJourney()
    default:
      return state
  }
}

export function isRouteReady(state) {
  return Boolean(state.route.state && state.route.category && state.route.identityRoute && state.route.ageBand && state.route.vehicleClass)
}

export function isApplicationReady(state) {
  return Boolean(state.application.rto && state.application.formOneReady && state.application.vehicleClass === state.route.vehicleClass)
}

export function areDocumentsReady(state) {
  return Boolean(state.documents.identityProof && state.documents.addressProof && (state.route.identityRoute !== 'non-aadhaar' || state.documents.rtoVisitUnderstood))
}

export function areOfficialStagesComplete(state) {
  return OFFICIAL_STAGE_ORDER.every((stage) => state.officialStages?.[stage])
}

export function isOfficialStageUnlocked(state, stage) {
  const index = OFFICIAL_STAGE_ORDER.indexOf(stage)
  if (index < 0 || !state.documentsComplete) return false
  return OFFICIAL_STAGE_ORDER.slice(0, index).every((previousStage) => state.officialStages?.[previousStage])
}

export function deriveJourneyStages(state) {
  const profileMismatch = state.routeComplete && state.application.vehicleClass !== state.route.vehicleClass
  return [
    { id: 'route', status: state.routeComplete ? 'completed' : 'pending' },
    { id: 'application', status: state.applicationComplete ? 'completed' : profileMismatch ? 'needs-attention' : 'pending' },
    { id: 'documents', status: state.documentsComplete ? 'completed' : state.applicationComplete ? 'needs-attention' : 'pending' },
    ...OFFICIAL_STAGE_ORDER.map((id) => ({ id, status: state.officialStages?.[id] ? 'completed' : 'official-pending' })),
    { id: 'slot', status: state.slot.confirmed ? 'completed' : 'pending' },
  ]
}

export function nextJourneyAction(state) {
  if (!state.routeComplete) return 'route'
  if (!state.applicationComplete) return 'application'
  if (!state.documentsComplete) return 'documents'
  if (!areOfficialStagesComplete(state)) return 'official-actions'
  if (!state.slot.confirmed) return 'slot'
  return 'confirmation'
}

export function loadJourney() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return createInitialJourney()
    const parsed = JSON.parse(raw)
    if (parsed?.version === STATE_VERSION) {
      return { ...createInitialJourney(), ...parsed, officialStages: { ...createOfficialStages(), ...parsed.officialStages } }
    }
    if (parsed?.version === 1) {
      const { officialActionsReviewed: _legacyAcknowledgement, ...legacy } = parsed
      return {
        ...createInitialJourney(),
        ...legacy,
        version: STATE_VERSION,
        officialStages: createOfficialStages(),
        slot: { ...createInitialJourney().slot },
        resumeScreen: 'passport',
      }
    }
    return createInitialJourney()
  } catch {
    return createInitialJourney()
  }
}

export function saveJourney(state) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function clearJourney() {
  window.localStorage.removeItem(STORAGE_KEY)
}
