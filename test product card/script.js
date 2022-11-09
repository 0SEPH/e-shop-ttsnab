//# sourceURL=script.js

document.addEventListener('click', e => {
    const isShowButton = e.target.matches('[data-show-button]')
    if (!isShowButton && e.target.closest('[data-show]') != null) return

    let currentShow
    if (isShowButton && !document.getElementById('itemtypes').classList.contains('opened')) {
        currentShow = e.target.closest('[data-show]')
        currentShow.classList.add('opened')
    }

    document.querySelectorAll('[data-show].opened').forEach(itemtypes => {
        if (itemtypes === currentShow) return
        itemtypes.classList.remove('opened')
    })
})

document.addEventListener('click', e => {
  const isShowButton = e.target.matches('[data-show-button]')
  if (!isShowButton && e.target.closest('[data-show]') != null) return
})


// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.getElementById("button");
//     const show = document.getElementById("itemtypes")
//     button.addEventListener("click", () => {
        
//         if (show.classList.contains('opened')){
//             show.classList.remove('opened') 
//             show.classList.add('opened')
//         } else {
//             show.classList.add('opened')
//             show.classList.remove('opened')
//         } 
//     })
// })



// document.getElementById("button").onclick = function() {
//     var show = document.getElementById("itemtypes")
//     console.log(show.classList.contains("opened"))
//     if (show.classList.contains("opened")) {
//       show.classList.remove("opened");
//     } else {
//         show.classList.add("opened");
//         // if (show.classList.contains("opened")){
//         //     show.classList.remove("opened")
//         // }
//     }
//   }