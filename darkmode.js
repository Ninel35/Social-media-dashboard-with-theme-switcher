let darkmode = localStorage.getItem('darkmode')
const toggleswitch = document.getElementById('btn-toggle');


const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}
if (localStorage.getItem("darkmode") === "active") {
    enableDarkmode();
} else {
    disableDarkmode();
}

toggleswitch.addEventListener('change', ()=> {
 !toggleswitch.checked ? enableDarkmode() : disableDarkmode();
})

// toggleswitch.addEventListener('click', ()=> {
//     darkmode = localStorage.getItem('darkmode')
//     darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
// })


// let darkmode = false;
// const toggleswitch = document.getElementById('btn-toggle');

// const enableDarkmode = () => {
//     document.body.classList.add('darkmode')
//     darkmode = true;
// }

// const disableDarkmode = () =>{
//     document.body.classList.remove('darkmode')
//     darkmode = false;
// }

// toggleswitch.addEventListener('click', ()=> {
    
//     !darkmode ? enableDarkmode() : disableDarkmode()
// })
