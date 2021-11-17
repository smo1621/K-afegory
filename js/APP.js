import mainAPI from "./mainAPI.js";

export default class APP{
  constructor(page){
    if(page === 'main'){
      this._reset();
      this._setEvent(); 
    }else if(page ==='module'){

    }else{
      console.log('error');
    }
    
  }
  _reset(){
    history.scrollRestoration ='manual';
  }
  _setEvent(){
    const firstBox = document.querySelector('.categories-first-box');
    const fCategory = ['hn','ss','mw','ds'];
    const body = document.querySelector('body');
    
    firstBox.addEventListener('click', (e)=>{
      const value = e.target.dataset.value;
      if(fCategory.includes(value)){
        mainAPI.toScroll();
        body.style.overflow ='scroll';
        setTimeout(mainAPI.preventScroll,500,true);
      }
    })
  }
}