function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.classList.remove("hidden");
}

const navHearts = document.querySelector(".nav-hearts");

function createHeart(){
    const heart = document.createElement("span");
    heart.innerText = "💝"

    heart.style.left = Math.random()*100 + "%";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";

    navHearts.appendChild(heart);

    setTimeout(() =>{
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 600);

function goToGallery(){
    window.location.href = "gallery.html";
}

function goToGallery(){
    let pass = prompt("Enter the secret word");

    if(pass === "i am kiddo") {
        window.location.href = "gallery.html";
    }else {
        alert ("Oops😂 Wrong Secret ")
    }
}

