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
    const body = document.querySelector('body');
    const top = document.documentElement.scrollTop;
    if(top === 0){
      console.log('hide');
      body.style.overflow = 'hidden';
    }else{
      console.log('top is not 0');
      const tm = new Promise((resolve,reject) =>{
        clearTimeout(this.timeoutId);
        console.log('in');
        resolve();
      });
      tm.then(res => {
        console.log('promise then');
        window.scrollTo(0,0);
        document.documentElement.scrollTop = 0;
        console.log('done');
      });
    }
    
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
        this.timeoutId = setTimeout(mainAPI.preventScroll,1000,true);
      }
    })
  }
}