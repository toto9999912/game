var startBtn = document.querySelector('#startBtn');

startBtn.addEventListener('click',function(){
    let headStatus = $("#headItem").prop('checked');
    let bodyStatus = $("#bodyItem").prop('checked');
    let weaponStatus = $("#weaponItem").prop('checked');
    let shoesStatus = $("#shoesItem").prop('checked');
    let itemStatus = $("#item").prop('checked');
    if(headStatus){
        headStatus = 12;
    }
    if(bodyStatus){
        bodyStatus = 8;
    }
    if(weaponStatus){
        weaponStatus = 12;
    }
    if(shoesStatus){
        shoesStatus = 10;
    }
    if(itemStatus){
        itemStatus = 28;
    }
    start(headStatus,bodyStatus,weaponStatus,shoesStatus,itemStatus);
})

function start(a,b,c,d,e){
    let str = [];
    if(a){
        str.push(a)
    }
    if (b) {
        str.push(b)
    }
    if (c) {
        str.push(c)
    }
    if (d) {
        str.push(d)
    }
    if (e) {
        str.push(e)
    }
    let strLen = str.length;
    if(!strLen){
        alert("不選裝是在哈囉?");
    }
    else if(strLen === 1){
        alert("暴擊率"+str + "%");
    }
    else if(strLen === 2){
        double(str);
    }
    else if (strLen === 3) {
        triple(str);
    }
    else{
        alert("我還沒做到3件裝以上啦!!!功能尚在製作...")
    }

}

function double(a) {
    let two = (a[0]*(100-a[1]) + (100-a[0])*a[1])/100;
    let three = (a[0] * a[1])/100;
    let no = ((100-a[0])*(100-a[1]))/100;
    alert("三爆" + three + "% 暴擊" + two + "%    不爆擊機率" + no + "%" )
}

function triple(a){
    let two = (a[0]*(100-a[1])*(100-a[2]) + (100-a[0])*a[1]*(100-a[2]) + (100-a[0])*(100-a[1])*a[2])/10000;
    let three = (a[0]*a[1]*(100-a[2]) + a[0]*(100-a[1])*a[2] + (100-a[0])*a[1]*a[2])/10000 ; 
    let four =  (a[0]*a[1]*a[2])/10000;
    let no = ((100 - a[0]) * (100 - a[1]) * (100 - a[2]))/10000
    alert("四爆" + four + "% 三爆" + three + "% 爆擊" + two + "%    不爆擊機率" + no +"%");
}
