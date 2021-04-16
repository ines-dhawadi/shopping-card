var compt = document.querySelectorAll('.btn')

for(let i=0;i<compt.length;i++){
    compt[i].addEventListener("click", () => {
        kl()
    })
}/*********************** */
function onLoadkl(){
    let local = localStorage.getItem('kl')
    if(local){
        document.querySelector('#val').innerHTML = local;
    }
}
/************************* */
function kl(){
    let local=localStorage.getItem("kl")
    local=parseInt(local);
    if (local){
      localStorage.setItem("kl",local+1);
      document.getElementById('val').innerHTML=local+1
    }
    else{
        localStorage.setItem("kl",1)
        document.getElementById('val').innerHTML=1
    }
};
onLoadkl();

/*---------------------------------image hover--------------------------*/
function setNewImahe1(){

    document.getElementById('img1').src ='./images/img01.webp';
}

function setOldImage01(){
    document.getElementById('img1').src ='//cache.mrporter.com/variants/images/11452292647203115/in/w560_q80.jpg';
}
/*******-----------------------2------------------------ */
function setNewImahe2(){

    document.getElementById('img2').src ='./images/img02.webp';
}

function setOldImage02(){
    document.getElementById('img2').src ='//cache.mrporter.com/variants/images/11452292646060097/in/w560_q80.jpg" class="card-img-top shop-item-image';
}
/*******-----------------------3------------------------ */
function setNewImahe3(){

    document.getElementById('img3').src ='./images/img03.webp';
}

function setOldImage03(){
    document.getElementById('img3').src ='//cache.mrporter.com/variants/images/6630340696378567/in/w560_q80.jpg';
}
/*******-----------------------4------------------------ */
function setNewImahe4(){

    document.getElementById('img4').src ='./images/img04.webp';
}

function setOldImage04(){
    document.getElementById('img4').src ='//cache.mrporter.com/variants/images/33599693056300801/in/w560_q80.jpg';
}
/*******-----------------------5------------------------ */
function setNewImahe5(){

    document.getElementById('img5').src ='./images/img05.webp';
}

function setOldImage05(){
    document.getElementById('img5').src ='//cache.mrporter.com/variants/images/33599693056301191/in/w560_q80.jpg';
}
/*******-----------------------6------------------------ */
function setNewImahe6(){

    document.getElementById('img6').src ='./images/img06.webp';
}

function setOldImage06(){
    document.getElementById('img6').src ='//cache.mrporter.com/variants/images/33599693056301202/in/w560_q80.jpg';
}
/*******--------------------7--------------------------- */
function setNewImahe7(){

    document.getElementById('img7').src ='./images/img07.webp';
}

function setOldImage07(){
    document.getElementById('img7').src ='//cache.mrporter.com/variants/images/22527730566098110/in/w560_q80.jpg';
}
/*******-------------------8---------------------------- */
function setNewImahe8(){

    document.getElementById('img8').src ='./images/img08.webp';
}

function setOldImage08(){
    document.getElementById('img8').src ='//cache.mrporter.com/variants/images/6630340696378904/in/w560_q80.jpg" class="card-img-top shop-item-image';
}
/*******-------------------9---------------------------- */
function setNewImahe9(){

    document.getElementById('img9').src ='./images/img09.webp';
}

function setOldImage09(){
    document.getElementById('img9').src ='//cache.mrporter.com/variants/images/16301891330333016/in/w560_q80.jpg';
}
/*******-------------------10---------------------------- */
function setNewImahe10(){

    document.getElementById('img10').src ='./images/img010.webp';
}

function setOldImage010(){
    document.getElementById('img10').src ='//cache.mrporter.com/variants/images/16301891330334242/in/w560_q80.jpg';
}
/*******-----------------11------------------------------ */
function setNewImahe11(){

    document.getElementById('img11').src ='./images/img011.webp';
}

function setOldImage011(){
    document.getElementById('img11').src ='//cache.mrporter.com/variants/images/16301891330335787/in/w560_q80.jpg';
}
/*******--------------------12--------------------------- */
function setNewImahe12(){

    document.getElementById('img12').src ='./images/img012.webp';
}

function setOldImage012(){
    document.getElementById('img12').src ='//cache.mrporter.com/variants/images/16301891330263557/in/w560_q80.jpg';
}
/*******----------------END------------------------------- */