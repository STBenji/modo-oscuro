const darkmode = document.getElementById('dark-mode')
const mintoggle = document.getElementById('mintoggle')

darkmode.onclick = function() {

    document.body.classList.toggle('dark')
    mintoggle.classList.toggle('move')
    darkmode.classList.toggle('toggle')

}



