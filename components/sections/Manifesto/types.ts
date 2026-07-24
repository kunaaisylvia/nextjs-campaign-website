export type IconName =
  | "heart"
  | "education"
  | "water"
  | "people"
  | "infrastructure"
  | "jobs"
  | "environment"
  | "governance";

export interface ManifestoCardData {
  icon: IconName;
  title: string;
  subtitle: string;
  summary: string;
  commitments: string[];
}

export interface ManifestoGroupData {
  title: string;
  description: string;
  pillars: ManifestoCardData[];
}

export interface ManifestoData {
  badge: string;
  title: string;
  description: string;
  groups: ManifestoGroupData[];
}