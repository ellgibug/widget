import {variables} from './variables'

const methods = {
     request(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            setTimeout(()=>{const r = json.slice(0,2);
                clearHelpyResult();
                createHelpyItemsList(r)
                console.log(r)}, 1000);
        })
        .catch(()=>{
            clearHelpyResult();
            document.getElementById(variables.HELPY_RESULT).appendChild(createHelpyError())
        })
},

 sendSearchRequest(){
    if(HELPY_SEARCH_INPUT){
        console.log(HELPY_SEARCH_INPUT.value)
    }

    clearHelpyResult();
    document.getElementById(variables.HELPY_RESULT).appendChild(createHelpyAwait())

    setTimeout(request(), 10000);
}
}

export const requests = {
    methods: methods
}