import type { InjectionKey } from 'vue'
import type { connect as accordionConnect } from '@zag-js/accordion'

type AccordionApi = ComputedRef<ReturnType<typeof accordionConnect>>
export const $accordion = Symbol('accordion') as InjectionKey<AccordionApi>

interface NavPanelApi { onItemClick: () => void }
export const $navPanel = Symbol('navPanel') as InjectionKey<NavPanelApi>
