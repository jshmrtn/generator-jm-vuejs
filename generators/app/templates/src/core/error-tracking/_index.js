// Import Version
import { version } from 'root/package.json';
import { sentryDsn } from 'src/client.config.json';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

// Config Sentry
if (sentryDsn) {
  Raven
      .config(sentryDsn, { release: version })
      .addPlugin(RavenVue, Vue)
      .install();
}
