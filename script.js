
document.querySelector(".btn").addEventListener("click",()=>{
      let randomNumber = Math.floor(Math.random()*(7-1))+1
      let  img = document.querySelector("#img-div img")
           img.src=`${randomNumber}.png`
})