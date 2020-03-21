import './styles/styles.scss'
import {variables} from './scripts/variables'
import {load_widget} from './scripts/load_widget'
import {helpers} from './scripts/helpers'
import {requests} from './scripts/requests'

load_widget.methods.addElement();


const HEPLY_BIG_CONTAINER = document.getElementById(variables.HEPLY_BIG_CONTAINER);
const HEPLY_SMALL_CONTAINER = document.getElementById(variables.HEPLY_SMALL_CONTAINER);
const HELPY_SMALL_CONTAINER_EXPANDER = document.getElementById(variables.HELPY_SMALL_CONTAINER_EXPANDER);
const HELPY_BIG_CONTAINER_REDUCER = document.getElementById(variables.HELPY_BIG_CONTAINER_REDUCER);
const HELPY_SEARCH_BUTTON = document.getElementById(variables.HELPY_SEARCH_BUTTON);
const HELPY_SEARCH_INPUT = document.getElementById(variables.HELPY_SEARCH_INPUT);

function expandHelpySmallContainer(){
    HEPLY_SMALL_CONTAINER.setAttribute("style", "display:none");
    HEPLY_BIG_CONTAINER.setAttribute("style", "display:block");
}

function reduceHelpyBigContainer(){
    HEPLY_BIG_CONTAINER.setAttribute("style", "display:none");
    HEPLY_SMALL_CONTAINER.setAttribute("style", "display:block");
}

function addEventsListeners(){
     if(HELPY_SMALL_CONTAINER_EXPANDER){
        HELPY_SMALL_CONTAINER_EXPANDER.addEventListener("click", expandHelpySmallContainer, false);
     }

    if(HELPY_BIG_CONTAINER_REDUCER){
        HELPY_BIG_CONTAINER_REDUCER.addEventListener("click", reduceHelpyBigContainer, false);
    }

    if(HELPY_SEARCH_BUTTON){
        HELPY_SEARCH_BUTTON.addEventListener("click", requests.methods.sendSearchRequest, false);
    }
}

addEventsListeners()
