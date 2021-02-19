const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById('btn')
const colorName=document.getElementById('color-code')

btn.addEventListener('click', function(){
    let color='#'
    for(let i=0; i<6; i++){
        color=color+hex[getColor()]
    }
    document.body.style.backgroundColor=color;
    colorName.innerText=color;
})

const getColor=()=>{
    return Math.floor(Math.random()*hex.length)
}