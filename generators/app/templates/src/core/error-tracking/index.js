import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import {
  version
} from 'root/package.json';
import {
  sentryDsn
} from 'src/client.config.json';

// Config Sentry
if (sentryDsn) {
  Raven
    .config(sentryDsn, {
      release: version
    })
    .addPlugin(RavenVue, Vue)
    .install();
}
