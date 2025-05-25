export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  icon?: string; // Optional: for display purposes
}
