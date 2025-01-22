import type { App } from 'vue';
import components from './component';

export * from './components';

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component((component as any).name, component);
    });
  },
};
