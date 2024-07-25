import { LocalePrefix } from "next-intl/routing";

export const locales = ["en", "de"] as const;

export const localPrefix: LocalePrefix = {
  mode: "always",
  prefixes: {
    en: "/us",
    de: "/eu/at",
  },
} satisfies LocalePrefix<typeof locales>;
