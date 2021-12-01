import mainAPI from "./mainAPI.js";

export default class APP{
  constructor(page){
    const keyName = 'categories';
    if(page === 'main'){
      this._reset(keyName);
      this._setEvent(keyName); 
    }
    else{
      console.log('error');
    }
  }
  _reset(keyName){
    history.scrollRestoration ='manual';
    mainAPI.initLocalStorage('data');
    mainAPI.initLocalStorage(keyName);
  }
  _setEvent(keyName){
    const firstBox = document.querySelector('.categories-first-box');
    const secondBox = document.querySelector('.categories-second-box');
    const fCategory = ['hn','ss','mw','ds'];
    const body = document.querySelector('body');
    const categories = new Object();
    firstBox.addEventListener('click', (e)=>{
      const value = e.target.dataset.value;
      if(fCategory.includes(value)){
        categories.fCategory = value;
        if(value === 'ss'){
          mainAPI.toScroll();
          body.style.overflow ='scroll';
          setTimeout(mainAPI.preventScroll,500,true);
        }
        else{
          mainAPI.canNotAccess();
        }
      }
    })
    secondBox.addEventListener('click',(e)=>{
      const value = e.target.dataset.value;
      if(value){
        categories.sCategory = value;
        mainAPI.setLocalStorage(keyName,JSON.stringify(categories));
      }
    })
  }
}