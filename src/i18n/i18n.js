import { createI18n } from "vue-i18n";
import en from '../languages/en.json';
import uz from '../languages/uz.json';
import ru from '../languages/ru.json';
const locale = localStorage.getItem("locale") || "uz";
const i18n = createI18n({
  locale: "uz",
  fallbackLocale: "uz",
  silentFallbackWarn: true,
  strategy: "prefix",
  messages: {
    en,
    uz,
    ru,
  },
});
export default i18n;