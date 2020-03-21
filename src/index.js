import './styles/styles.scss'
import './scripts/queries'
import {variables} from './scripts/variables'
import {load_widget} from './scripts/load_widget'
import './scripts/result'

// переменные


load_widget.methods.addElement();





const HEPLY_BIG_CONTAINER = document.getElementById(variables.HEPLY_BIG_CONTAINER);
const HEPLY_SMALL_CONTAINER = document.getElementById(variables.HEPLY_SMALL_CONTAINER);
const HELPY_SMALL_CONTAINER_EXPANDER = document.getElementById(variables.HELPY_SMALL_CONTAINER_EXPANDER);
const HELPY_BIG_CONTAINER_REDUCER = document.getElementById(variables.HELPY_BIG_CONTAINER_REDUCER);
const HELPY_SEARCH_BUTTON = document.getElementById(variables.HELPY_SEARCH_BUTTON);
const HELPY_SEARCH_INPUT = document.getElementById(variables.HELPY_SEARCH_INPUT);



// функции
function expandHelpySmallContainer(){
    HEPLY_SMALL_CONTAINER.setAttribute("style", "display:none");
    HEPLY_BIG_CONTAINER.setAttribute("style", "display:block");
}

function reduceHelpyBigContainer(){
    HEPLY_BIG_CONTAINER.setAttribute("style", "display:none");
    HEPLY_SMALL_CONTAINER.setAttribute("style", "display:block");
}

function request(){
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
}

function sendSearchRequest(){
    if(HELPY_SEARCH_INPUT){
        console.log(HELPY_SEARCH_INPUT.value)
    }

     clearHelpyResult();
      document.getElementById(variables.HELPY_RESULT).appendChild(createHelpyAwait())

      setTimeout(request(), 10000);
}

function addEventsListeners(){
     if(HELPY_SMALL_CONTAINER_EXPANDER){
        HELPY_SMALL_CONTAINER_EXPANDER.addEventListener("click", expandHelpySmallContainer, false);
     }

    if(HELPY_BIG_CONTAINER_REDUCER){
        HELPY_BIG_CONTAINER_REDUCER.addEventListener("click", reduceHelpyBigContainer, false);
    }

    if(HELPY_SEARCH_BUTTON){
        HELPY_SEARCH_BUTTON.addEventListener("click", sendSearchRequest, false);
    }
}

addEventsListeners()

function createHelpyItem(item){
    return `<div class="helpy-list__item helpy-result">
               <div class="helpy-result__item">
                   <div class="helpy-result__image">
                       <img src="https://f4.bcbits.com/img/a1653763594_5.jpg" alt="" class="helpy-result-image">
                   </div>
               </div>
               <div class="helpy-result__item">
                   <div class="helpy-result__info">
                       <div class="helpy-result-title">
                           ${item.title}
                       </div>
                       <div class="helpy-result-text">
                           ${item.body}
                       </div>
                   </div>
               </div>
           </div>`
}

function createHelpyItemsTotal(total){
    let HELPY_ITEMS_TOTAL = document.createElement('div');
    HELPY_ITEMS_TOTAL.classList.add("helpy-list-total");
    HELPY_ITEMS_TOTAL.innerHTML = `Найдено всего - ${total}`;
    return HELPY_ITEMS_TOTAL;
}



function createHelpyAwait(){
    let HELPY_AWAIT = document.createElement('div');
    HELPY_AWAIT.classList.add("helpy-wait");
    HELPY_AWAIT.innerHTML = 'Загрузка';
    return HELPY_AWAIT;
}
function createHelpyError(){
    let HELPY_ERROR = document.createElement('div');
    HELPY_ERROR.classList.add("helpy-error");
    HELPY_ERROR.innerHTML = 'Произошла ошибка';
    return HELPY_ERROR;
}

function createHelpyItemsList(data){
  let HELPY_ITEMS_LIST = document.createElement("div");
  HELPY_ITEMS_LIST.classList.add("helpy-list");

  let itemsList = '';

  data.forEach(item => {
       itemsList = itemsList + createHelpyItem(item)
  })


  HELPY_ITEMS_LIST.innerHTML = itemsList;

  document.getElementById('helpy-result').appendChild(HELPY_ITEMS_LIST).appendChild(createHelpyItemsTotal(data.length))
}

function clearHelpyResult(){
  document.getElementById('helpy-result').innerHTML = '';
}