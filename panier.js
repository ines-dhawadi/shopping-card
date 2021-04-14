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