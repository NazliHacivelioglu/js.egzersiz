const SMİLE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
 <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`




let notBilgisi = prompt("Not Bilginizi Giriniz:")
let textInfo;
let info = document.querySelector("#info")

if (notBilgisi >= 0 && notBilgisi <= 100) {


    textInfo = SMİLE

    info.classList.add('text-primary')



    if (notBilgisi >= 90) {
        textInfo += " AA"

    }
    else if (notBilgisi >= 85) {
        textInfo += " BA"

    }
    else if (notBilgisi >= 80) {
        textInfo += " BB"

    }
    else if (notBilgisi >= 75) {
        textInfo += " CB"

    }
    else if (notBilgisi >= 70) {
        textInfo += " CC"

    }
    else if (notBilgisi >= 65) {
        textInfo += " DC"

    }
    else if (notBilgisi >= 60) {
        textInfo += " DD"

    }
    else if (notBilgisi >= 50) {
        textInfo += " FD"

    }
    else if (notBilgisi >= 0) {
        textInfo = `${SAD}FF`

        info.classList.remove("text-primary")
        info.classList.add("text-danger")

    }
} else {
    textInfo = "Bilgiler Doğru Değildir.Lütfen Geçerli Bir Not Giriniz :"
}


info.innerHTML = `${textInfo} -->${notBilgisi}`





