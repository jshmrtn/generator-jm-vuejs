import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { languages, defaultLanguage } from 'src/client.config.json';

Vue.use(VueI18n);

const messages = {};

for (const language of languages) {
    messages[language] = require(`./${language}.json`);
}

const i18n = new VueI18n({
    locale: defaultLanguage,
    fallbackLocale: defaultLanguage,
    messages: messages,
});

export default i18n;
