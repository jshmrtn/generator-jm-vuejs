import {
  mount
} from 'vue-test-utils';
import {
  createRenderer
} from 'vue-server-renderer';

import component from './<%= props.componentName %>';

describe('integration: <%= props.componentName %>', () => {

  it('should have matching snapshot', () => {

    const renderer = createRenderer();
    const wrapper = mount(component);

    renderer.renderToString(wrapper.vm, (error, renderedTemplate) => {
      if (error) {
        throw new Error(error);
      }
      expect(renderedTemplate).toMatchSnapshot();
    });

  });

});
