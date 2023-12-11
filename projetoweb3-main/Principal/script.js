const button = document.getElementById("btn-1");

const modal = document.querySelector("dialog");

const buttonFechar = document.querySelector("dialog button");

button.onclick = function () {
    modal.showModal()
}

buttonFechar.onclick = function () {
    modal.close()
};

const button1 = document.getElementById("btn-2");

const modal1 = document.getElementById("dialog2");

const buttonFechar1 = document.getElementById("fecha01");

button1.onclick = function () {
    modal1.showModal()
}

buttonFechar1.onclick = function () {
    modal1.close()
};

  function abrirPopUp() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }

  document.getElementById('overlay').addEventListener('click', closePopup);