// Shapes of CMS content, shared by the base layer's UI and the CMS layer's API.
export interface CmsPage {
  title: string
  description?: string
}

export interface CmsMenuItem {
  label: string
  to: string
}

export interface CmsMenu {
  items: CmsMenuItem[]
}
