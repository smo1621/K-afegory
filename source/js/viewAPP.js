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
    const ctname = document.querySelector('.cafegory-text .ctname');
    if(obj.sCategory === 'dessert'){
      ctname.textContent = '디저트가 맛있는 카페';
    }else if(obj.sCategory ==='laptop'){
      ctname.textContent = '노트북하기 좋은 카페';
    }else if(obj.sCategory ==='big'){
      ctname.textContent = '대형 카페';
    }else if(obj.sCategory ==='photo'){
      ctname.textContent = '포토존이 있는 카페';
    }else if(obj.sCategory ==='terrace'){
      ctname.textContent = '루프탑&테라스 있는 카페';
    }else {
      ctname.textContent = '맥주와 함께하는 카페';
    }

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