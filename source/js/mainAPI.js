export default class mainAPI{
  static toScroll(){
    const loc = document.querySelector('#tohere').offsetTop;
    window.scrollTo({top: loc, behavior:'smooth'});
    
  }
  static preventScroll(isPrevented){
    const loc = document.querySelector('#tohere').offsetTop;
    const prevent = ()=>{
      const top = document.documentElement.scrollTop;
      const body = document.querySelector('body');
      if(top < loc && isPrevented){
        document.documentElement.scrollTop = loc;
      }
    };
    document.addEventListener('scroll',prevent);
  }

  static isInLocalStorage(key){
    if(localStorage.getItem(key)){
      return true;
    }else{
      return false;
    }
  }
  static initLocalStorage(key){
    if(this.isInLocalStorage(key)){
      localStorage.removeItem(key);
    }
  }

  static setLocalStorage(key,value){
    if(!localStorage.getItem(key)){
      localStorage.setItem(key,value);
    }
  }

  static loadLocalStorage(){

  }
}