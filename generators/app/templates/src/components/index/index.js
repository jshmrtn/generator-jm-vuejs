import selectors from './index.scss';
import template from './index.html';

export default {
    name: 'index',
    template,
    data() {
        return {
            'message': 'Hello World!',
            selectors,
        };
    },
};
