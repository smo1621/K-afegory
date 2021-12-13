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
  static canNotAccess(){
    alert("You can NOT access Yet.");
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
    }else{
      localStorage.removeItem(key);
      localStorage.setItem(key,value);
    }
  }

  static loadLocalStorage(key){
    if(localStorage.getItem(key)){
      return localStorage.getItem(key);
    }
  }
  static jsonToLocalStorage(data){
    this.initLocalStorage('data');
    this.setLocalStorage('data',data);
  }
  static drawMap(data){
    var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), 
        level: 3 
    };  
    console.log(mapContainer);
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.DATA.ADDRESS, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px; text-align:center;padding:6px 0; font-family:EliceDigitalBaeum_Regular;font-size:16px;">${data.DATA.CAFENAME}</div>`
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
        } 
    });    
  }
  static makeInfo(data){
    const infoBox = document.querySelector('#info');
    infoBox.innerHTML =
    `
    <div class = "name"><div class="cafe name icon"><i class="fas fa-check fa-1x"></i></div>
    <div class="cafe name text"><span class="cttext">카페명 : ${data.DATA.CAFENAME}</span></div></div>
            <div class = "work"> <div class = "date"> <div class="cafe date icon"><i class="far fa-calendar-check fa-1x"></i></div>
            <div class="cafe date text"><span class="cttext">영업 날짜 : ${data.DATA.OPTIME}</span></div></div></div>
            <div class = "address"><div class="cafe address icon"><i class="fas fa-location-arrow fa-1x"></i></div>
            <div class="cafe address text"><span class="cttext"> 주소 : ${data.DATA.ADDRESS}</span></div></div>
            <div class="cafe react icon"><i class="fas fa-heart fa-1x"></i></div>
            <div class="cafe react text"><span class="cttext"> 방문자 반응 : ${data.ISUP}</span></div>
    `
  }
  static viewActions(action,data){
    if(action ==='view'){
      this.readJson(data);
    }else if(action === 'click'){
      const body = document.querySelector('body');
      const modal = document.querySelector('.modal');
      modal.classList.add('visual');
      this.drawMap(data);
      this.makeInfo(data);
      console.log('draw');
      modal.addEventListener('click',e=>{
        if(e.target === modal){
          console.log('remove');
          modal.classList.remove('visual');
        }
      })
    }
  }
  static readJson(fileName){
    const path = `../../data/${fileName}.json`;
    fetch(path).then((res)=>{
      return res.json();
    })
    .then((ret)=>{
      const file = JSON.stringify(ret);
      const jsonFile = JSON.parse(file);
      this.viewElements(jsonFile);
      this.jsonToLocalStorage(file);
    })
  }
  static viewElements(jsonFile){
    const data = jsonFile;
    const order = ['first','second','third','fourth'];
    console.log(jsonFile);
    data.forEach((cafe,ind) => {
      const content = document.querySelector('.content-box');
      console.log(cafe);
      const div = document.createElement('div');
      div.classList.add(`${cafe.ISLEFT}-content`);
      div.classList.add('content-item');
      div.id = `${order[ind]}`;
      content.appendChild(div);
      if(cafe.ISLEFT ==='left'){
        div.innerHTML = `
        <div class="cafe-image">
            <img src = ${cafe.IMGLINK[0]}>
            <img src = ${cafe.IMGLINK[1]}>
            <img src = ${cafe.IMGLINK[2]}>
        </div>
        <li class="cafe-information ${cafe.ISLEFT}">
            <div class="cafe name text"><span class="cttext">카페명 : ${cafe.DATA.CAFENAME}</span></div>
            <div class="cafe date text"><span class="cttext">영업 날짜 : ${cafe.DATA.OPTIME}</span></div>
            <div class="cafe address text"><span class="cttext"> 주소 : ${cafe.DATA.ADDRESS}</span></div>
        </li>
      `
      }else{
        div.innerHTML = `
        <li class="cafe-information ${cafe.ISLEFT}">
            <div class="cafe name text"><span class="cttext">카페명 : ${cafe.DATA.CAFENAME}</span></div>
            <div class="cafe date text"><span class="cttext">영업 날짜 : ${cafe.DATA.OPTIME}</span></div>
            <div class="cafe date text"><span class="cttext"> 주소 : ${cafe.DATA.ADDRESS}</span></div>
        </li>
        <div class="cafe-image">
            <img src = ${cafe.IMGLINK[0]}>
            <img src = ${cafe.IMGLINK[1]}>
            <img src = ${cafe.IMGLINK[2]}>
        </div>
      `
      }
    });
  }
  static viewModal(data){

  }
  
}