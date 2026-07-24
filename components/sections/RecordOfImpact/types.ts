export interface ImpactStat {
  icon: "users" | "landmark" | "shield" | "briefcase";
  value: string;
  label: string;
  description: string;
}

export interface ImpactData {
  badge: string;
  title: string;
  description: string;
  stats: ImpactStat[];
}