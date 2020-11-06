function capitalize(text) {
    return text[0].toUpperCase() + text.substring(1)

}

function loadComponent(name) {
        let link = document.createElement('link')
    link.rel = "stylesheet"
    link.href = `src/${name}/${name}.css`
    document.head.appendChild(link)
   
    let script = document.createElement('script')
    script.src = `src/${name}/${capitalize(name)}.js`
    document.body.appendChild(script)
}

var msg=""
let t=null
   window.addEventListener('DOMContentLoaded', (event) => { 
            document.addEventListener('error', function (e) {
                msg+=`Cannot load ${name}  ${e.target.tagName}\n`
                }, true) 
                clearTimeout(t)
                t=setTimeout(showError, 1000)
            })

function showError(){
        alert(`ERROR!!! ${msg}`)
        }


///////
loadComponent("ser")