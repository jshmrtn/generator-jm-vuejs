import selectors from './not-found.scss';
import template from './not-found.html';

export default {
    name: 'not-found',
    template,
    data() {
        return {
            'message': 'Bollocks! The component could not be found...',
            selectors,
        };
    },
};
