import './styles/styles.scss'
import './queries'

// переменные

const HELPY_ELEMENT = `
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

       <div class="helpy-big-container__body helpy-big-container-body" id="helpy-result">

       </div>
   </div>

   <div class="helpy-small-container" id="helpy-small-container">
       <div id="helpy-small-expander-expander">Helpy</div>
   </div>`;

function addElement () {
  let HELPY_WRAPPER = document.createElement("div");
  HELPY_WRAPPER.classList.add("helpy-wrapper");
  HELPY_WRAPPER.innerHTML = HELPY_ELEMENT;
  document.body.appendChild(HELPY_WRAPPER)

  document.getElementById('helpy-result').appendChild(createHelpyReady())
}

addElement();


const HEPLY_BIG_CONTAINER = document.getElementById("helpy-big-container");
const HEPLY_SMALL_CONTAINER = document.getElementById("helpy-small-container");
const HELPY_SMALL_CONTAINER_EXPANDER = document.getElementById("helpy-small-expander-expander");
const HELPY_BIG_CONTAINER_REDUCER = document.getElementById("helpy-big-container-reducer");
const HELPY_SEARCH_BUTTON = document.getElementById("helpy-search-button");
const HELPY_SEARCH_INPUT = document.getElementById("helpy-search-input");



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
//             const r = json.slice(0,2);
//             clearHelpyResult();
//             createHelpyItemsList(r)
//             console.log(r)
          })
          .catch(()=>{
            clearHelpyResult();
              document.getElementById('helpy-result').appendChild(createHelpyError())
          })
}

function sendSearchRequest(){
    if(HELPY_SEARCH_INPUT){
        console.log(HELPY_SEARCH_INPUT.value)
    }

     clearHelpyResult();
      document.getElementById('helpy-result').appendChild(createHelpyAwait())

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
    return `Найдено всего - ${total}`
}

function createHelpyReady(){
      let HELPY_READY = document.createElement('div');
      HELPY_READY.classList.add("helpy-ready");
      HELPY_READY.innerHTML = 'Введите поисковую фразу';
      return HELPY_READY;
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

  let HELPY_ITEMS_TOTAL = document.createElement('div');
  HELPY_ITEMS_TOTAL.classList.add("helpy-list-total");
  HELPY_ITEMS_TOTAL.innerHTML = createHelpyItemsTotal(data.length);


  document.getElementById('helpy-result').appendChild(HELPY_ITEMS_LIST).appendChild(HELPY_ITEMS_TOTAL)
}

function clearHelpyResult(){
  document.getElementById('helpy-result').innerHTML = '';
}