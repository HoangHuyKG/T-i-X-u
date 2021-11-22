var getButtontai = document.querySelector('.tai')
var getButtonxiu = document.querySelector('.xiu')
var getagain = document.querySelector('.again')
var x = 100000;
getButtontai.addEventListener ('click', function  (params) {
    tai = '<h1>Tài</h1>'
    getButtonxiu.style.display = 'none'
    xui = ''
})
getButtonxiu.addEventListener ('click', function  (params) {
    xui = '<h1>Xỉu</h1>'
    getButtontai.style.display = 'none'
    tai = ''
})
getagain.addEventListener ('click', function  (params) {
    getButtontai.style.display = 'inline-block'
    getButtonxiu.style.display = 'inline-block'
    tai = ''
    xui = ''
})
// 
var Click = document.querySelector('.clickme')
var clickimg = document.querySelector('.xucxac')
var getresult = document.querySelector('.ketqua')
    Click.onclick = function (params) {
        var a = Math.floor(Math.random()*6)
        var b = Math.floor(Math.random()*6)
        if(a == 0){
            d = '<img class="hinhanhxucxac" src="./img/Mặt 1.png"></img>'
        }
        if(a == 1){
            d = '<img class="hinhanhxucxac" src="./img/Mặt 2.png"></img>'
        }
        if(a == 2){
            d = '<img class="hinhanhxucxac" src="./img/Mặt 3.png"></img>'
        }
        if(a == 3){
            d = '<img class="hinhanhxucxac" src="./img/Mặt 4.png"></img>'
        }
        if(a == 4){
            d = '<img class="hinhanhxucxac" src="./img/Mặt 5.png"></img>'
        }
        if(a == 5){
            d = '<img class="hinhanhxucxac" src="./img/Mặt 6.png"></img>'
        }
        if(b == 0){
            e = '<img class="hinhanhxucxac" src="./img/Mặt 1.png"></img>'
        }
        if(b == 1){
            e = '<img class="hinhanhxucxac" src="./img/Mặt 2.png"></img>'
        }
        if(b == 2){
            e = '<img class="hinhanhxucxac" src="./img/Mặt 3.png"></img>'
        }
        if(b == 3){
            e = '<img class="hinhanhxucxac" src="./img/Mặt 4.png"></img>'
        }
        if(b == 4){
            e = '<img class="hinhanhxucxac" src="./img/Mặt 5.png"></img>'
        }
        if(b == 5){
            e = '<img class="hinhanhxucxac" src="./img/Mặt 6.png"></img>'
        }
        
        clickimg.innerHTML = `${d+e}`
        if (a+1+b+1<=6){
            getresult.innerHTML = '<h1>Tài</h1>'
        } 
        if (a+1+b+1>6)
        {
            getresult.innerHTML = '<h1>Xỉu</h1>'
        }
        // cuo
            
            
   

        //1.  lấy giá trị trong thẻ input người dùng nhập
        var y = document.getElementById("txt_y").value;
        y = parseFloat(y);
        //3. tính toán
        if(y>x){
            alert('Cược đúng số tiền mày có đi')
            location.reload()
        }
        if(x<=0){
            alert('Reload lại trang để chơi tiếp nhé mấy con nghiện')
        }
        if(tai == '<h1>Tài</h1>'){
        if(tai == getresult.innerHTML){
            document.querySelector('.tiencuaban').innerHTML = `<p class="tiencuaban">
            số tiền của bạn: ${x+=y}
            </p>`;       
         }
         else {
            
            document.querySelector('.tiencuaban').innerHTML = `<p class="tiencuaban">
            số tiền của bạn: ${x-=y}
            </p>`;
        }
    }
        if(xui == '<h1>Xỉu</h1>'){
        if (xui == getresult.innerHTML){   
           document.querySelector('.tiencuaban').innerHTML = `<p class="tiencuaban">
           số tiền của bạn: ${x+=y}
           </p>`;
        } else {
           document.querySelector('.tiencuaban').innerHTML = `<p class="tiencuaban">
           số tiền của bạn: ${x-=y}
           </p>`;
       }
    }
}

           


