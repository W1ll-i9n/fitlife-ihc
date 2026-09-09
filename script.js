document.querySelectorAll("[data-page]").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.page)));
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));const target=document.getElementById(id);if(target)target.classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
let toastTimer;function notify(message){const toast=document.getElementById("toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2200);}
showPage("login");