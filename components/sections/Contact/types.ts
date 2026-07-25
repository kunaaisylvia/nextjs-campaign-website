export interface ContactInfo {
  icon: "location" | "phone" | "email";
  title: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ContactData {
  badge: string;
  title: string;
  description: string;
  info: ContactInfo[];
  socials: SocialLink[];
}