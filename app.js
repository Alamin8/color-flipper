const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn')
const colorName=document.getElementById('color-code')

btn.addEventListener('click', function(){
    color=getColor()
    document.body.style.backgroundColor=colors[color]
    colorName.innerText=colors[color]
    
})
const getColor= ()=>{
    return Math.floor(Math.random()*colors.length)
}