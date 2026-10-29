export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HighlightItem {
  id: string;
  icon: 'home' | 'architecture' | 'garden' | 'hospitality';
  title: string;
}
