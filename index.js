const {ipcRenderer, shell} = require('electron')

let previousWeather = undefined
let voice = undefined

document.addEventListener('click', (event) => {
  if (event.target.href) {
    // Open links in external browser
    shell.openExternal(event.target.href)
    event.preventDefault()
  } 
  else if (event.target.classList.contains('js-quit-action')) {
    window.close()
  }
})





const loadUI = function() {

}



// Update initial weather when loaded
document.addEventListener('DOMContentLoaded', loadUI)
