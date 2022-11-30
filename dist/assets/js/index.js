let btn = document.getElementsByClassName('quickviewbtn')
let modal = document.getElementById('quickviewmodal')
Array.from(btn).forEach(element => {
    element.onclick = function(e){
        e.preventDefault();
        modal.style.opacity = 100
        modal.style.visibility = 'visible'
        modal.style.transition = 'ease in out'     
    }
});

document.getElementById('close').onclick = function(e){
    e.preventDefault();
    modal.style.opacity = 0
    modal.style.visibility = 'hidden'     
}


// Image Preview On Change Event
let imgpreview  = document.getElementsByClassName('previewImg')
let fileInput  = document.getElementsByClassName('fileInput')

console.log(imgpreview)

Array.from(imgpreview).forEach(el => {
    el.onchange = function(e){
        e.preventDefault();
        console.log(e);
    }
})