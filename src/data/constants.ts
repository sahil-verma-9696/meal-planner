export const APP_NAME: string = "MealPlanner";

export type Area =
  | "American"
  | "British"
  | "Canadian"
  | "Chinese"
  | "Croatian"
  | "Dutch"
  | "Egyptian"
  | "Filipino"
  | "French"
  | "Greek"
  | "Indian"
  | "Irish"
  | "Italian"
  | "Jamaican"
  | "Japanese"
  | "Kenyan"
  | "Malaysian"
  | "Mexican"
  | "Moroccan"
  | "Polish"
  | "Portuguese"
  | "Russian"
  | "Spanish"
  | "Thai"
  | "Tunisian"
  | "Turkish"
  | "Ukrainian"
  | "Uruguayan"
  | "Vietnamese";

export const AREA_TO_COUNTRY_CODE: Record<Area, string> = {
  American: "us",
  British: "gb",
  Canadian: "ca",
  Chinese: "cn",
  Croatian: "hr",
  Dutch: "nl",
  Egyptian: "eg",
  Filipino: "ph",
  French: "fr",
  Greek: "gr",
  Indian: "in",
  Irish: "ie",
  Italian: "it",
  Jamaican: "jm",
  Japanese: "jp",
  Kenyan: "ke",
  Malaysian: "my",
  Mexican: "mx",
  Moroccan: "ma",
  Polish: "pl",
  Portuguese: "pt",
  Russian: "ru",
  Spanish: "es",
  Thai: "th",
  Tunisian: "tn",
  Turkish: "tr",
  Ukrainian: "ua",
  Uruguayan: "uy",
  Vietnamese: "vn",
};
