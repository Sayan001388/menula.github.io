Menu.style.display = "none";
function ShowHide(x) {
  x.classList.toggle("change");
  var Menu = document.getElementById("Menu");
  if (Menu.style.display === "none" || Menu.style.display === '') {
    Menu.style.display = "block";
    document.querySelector('.content-box').style.display = 'none';
  } else {
    Menu.style.display = "none";
    document.querySelector('.content-box').style.display = 'block';
  }
}

