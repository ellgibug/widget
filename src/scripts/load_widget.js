import {variables} from './variables'

const constants = {
    HELPY_ELEMENT: `
   <div class="helpy-big-container" id="helpy-big-container">

       <div class="helpy-big-container__header helpy-big-container-header">
           <div class="helpy-big-container-header__title helpy-big-container-header-title">
               Helpy
           </div>
           <div class="helpy-big-container-header__action helpy-big-container-header-action">
               <button id="helpy-big-container-reducer" class="helpy-big-container-header-action__button">
                   &#9747;
               </button>
           </div>
       </div>

       <div class="helpy-big-container__search helpy-big-container-search">
           <div class="helpy-big-container-search__input helpy-big-container-search-input">
               <input type="text" placeholder="Search ..." class="helpy-big-container-search-input__input" id="helpy-search-input">
           </div>
           <div class="helpy-big-container-search__action helpy-big-container-search-action">
               <button class="helpy-big-container-search-action__button" id="helpy-search-button">
                   &#128269;
               </button>
           </div>
       </div>

       <div class="helpy-big-container__body helpy-big-container-body" id="helpy-result"></div>
   </div>

   <div class="helpy-small-container" id="helpy-small-container">
       <div id="helpy-small-expander-expander">Helpy</div>
   </div>`,

     HEPLY_BIG_CONTAINER: document.getElementById(variables.HEPLY_BIG_CONTAINER),
 HEPLY_SMALL_CONTAINER: document.getElementById(variables.HEPLY_SMALL_CONTAINER),
 HELPY_SMALL_CONTAINER_EXPANDER: document.getElementById(variables.HELPY_SMALL_CONTAINER_EXPANDER),
 HELPY_BIG_CONTAINER_REDUCER: document.getElementById(variables.HELPY_BIG_CONTAINER_REDUCER),
};

const methods = {
    createHelpyReady(){
        let HELPY_READY = document.createElement('div');
        HELPY_READY.classList.add(variables.HELPY_READY);
        HELPY_READY.innerHTML = 'Введите поисковую фразу';
        return HELPY_READY;
    },

    addElement () {
        let HELPY_WRAPPER = document.createElement("div");
        HELPY_WRAPPER.classList.add(variables.HELPY_WRAPPER);
        HELPY_WRAPPER.innerHTML = constants.HELPY_ELEMENT;
        document.body.appendChild(HELPY_WRAPPER);

        document.getElementById(variables.HELPY_RESULT).appendChild(methods.createHelpyReady())
    },

};

export const load_widget = {
    methods: methods
};


