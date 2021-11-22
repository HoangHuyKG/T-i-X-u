
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
            console.log(a,b)
        } 
        if (a+1+b+1>6)
        {
            getresult.innerHTML = '<h1>Xỉu</h1>'
        }
}



