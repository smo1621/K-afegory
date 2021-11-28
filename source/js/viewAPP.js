import mainAPI from "./mainAPI.js";

export default class viewAPP{
  constructor(page){
    const keyName = 'categories';
    const obj = JSON.parse(mainAPI.loadLocalStorage(keyName));
    if(page === 'view'){
      this._reset(obj);
      this._setEvent(obj); 
    }
    else{
      console.log('error');
    }
  }
  _reset(obj){
    history.scrollRestoration ='manual';
    console.log(obj.sCategory);

    mainAPI.viewActions("view",obj.sCategory);
  }
  _setEvent(){
    const contentBox = document.querySelector('.content-box');
    contentBox.addEventListener('click',(e)=>{
      const target = e.target.closest('.content-item');
      const order = ['first','second','third','fourth'];
      const ind = order.indexOf(target.id);
      const data = JSON.parse(mainAPI.loadLocalStorage('data'))[ind];
      if(target){
        console.log('true');
        mainAPI.viewActions('click',data);
      }
    })
    
  }
}