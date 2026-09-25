// Shapes of CMS content, shared by the base layer's UI and the CMS layer's API.
export interface CmsPage {
  title: string
  description?: string
  sections?: CmsPageSection[]
}

export interface CmsMenuItem {
  label: string
  to: string
}

export interface CmsMenu {
  items: CmsMenuItem[]
}

// A button: a link, or a modal opened by name (components/Modal/<Name>.global.vue)
// with optional props passed to it.
export type CmsAction
  = | { label: string, to: string }
    | { label: string, modal: string, props?: Record<string, unknown> }

export interface CmsHeroSection {
  type: 'hero'
  content: {
    title: string
    subtitle?: string
    actions?: CmsAction[]
  }
}

export interface CmsCard {
  content: {
    title: string
    description?: string
    action?: CmsAction
  }
}

export interface CmsCardsSection {
  type: 'cards'
  content: {
    title?: string
    items: CmsCard[]
  }
}

export type CmsPageSection = CmsHeroSection | CmsCardsSection
