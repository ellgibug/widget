import {variables} from './variables'

const methods = {
    clearHelpyResult() {
        document.getElementById(variables.HELPY_RESULT).innerHTML = '';
    },

    createHelpyItem(item) {
        return `<a class="helpy-list__item helpy-result" href="https://yandex.ru/" target="_blank">
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
           </a>`
    },

    createHelpyItemsTotal(total) {
        let HELPY_ITEMS_TOTAL = document.createElement('div');
        HELPY_ITEMS_TOTAL.classList.add("helpy-list-total");
        HELPY_ITEMS_TOTAL.innerHTML = `Найдено всего - ${total}`;
        return HELPY_ITEMS_TOTAL;
    },

    createHelpyAwait() {
        let HELPY_AWAIT = document.createElement('div');
        HELPY_AWAIT.classList.add("helpy-wait");
        HELPY_AWAIT.innerHTML = 'Загрузка';
        return HELPY_AWAIT;
    },

    createHelpyError() {
        let HELPY_ERROR = document.createElement('div');
        HELPY_ERROR.classList.add("helpy-error");
        HELPY_ERROR.innerHTML = 'Произошла ошибка';
        return HELPY_ERROR;
    },

    createHelpyItemsList(data) {
        let HELPY_ITEMS_LIST = document.createElement("div");
        HELPY_ITEMS_LIST.classList.add("helpy-list");

        let itemsList = '';

        data.forEach(item => {
            itemsList = itemsList + methods.createHelpyItem(item)
        });

        HELPY_ITEMS_LIST.innerHTML = itemsList;

        document.getElementById('helpy-result').appendChild(HELPY_ITEMS_LIST).appendChild(methods.createHelpyItemsTotal(data.length))
    }
};

export const helpers = {
    methods: methods
};
