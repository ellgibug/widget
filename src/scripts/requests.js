import {variables} from './variables'
import {helpers} from './helpers'

const constants = {
    HELPY_SEARCH_BUTTON: document.getElementById(variables.HELPY_SEARCH_BUTTON),
    HELPY_SEARCH_INPUT: document.getElementById(variables.HELPY_SEARCH_INPUT)
}

const methods = {
    request() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    const r = json.slice(0, 2);
                    helpers.methods.clearHelpyResult();
                    helpers.methods.createHelpyItemsList(r)
                }, 10);
            })
            .catch(() => {
                helpers.methods.clearHelpyResult();
                console.log(document.getElementById(variables.HELPY_RESULT))
                document.getElementById(variables.HELPY_RESULT).appendChild(helpers.methods.createHelpyError())
            })
    },

    sendSearchRequest() {
        if (constants.HELPY_SEARCH_INPUT) {
            console.log(constants.HELPY_SEARCH_INPUT.value)
        }

        helpers.methods.clearHelpyResult();
        document.getElementById(variables.HELPY_RESULT).appendChild(helpers.methods.createHelpyAwait())

        setTimeout(methods.request, 10);
    }
};

export const requests = {
    methods: methods
};
