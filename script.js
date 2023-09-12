const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const submitForm = document.getElementById("submit-form");
const modalText = document.getElementById("modal-text");
const innerModal = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const choiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function() {
    modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function() {
    choiceBtns.classList.toggle('reverse');
});

submitForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // modalText.style.display = "none";

    let formDataEl = new FormData(submitForm);
    const name = formDataEl.get("name");

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="loading.svg" class="loading">
        <p id="uploadText" class="uploading">
            Uploading your data to the dark web...
        </p>
    </div>`;
    setTimeout(function() {
        document.getElementById("uploadText").textContent = "Making the sale...";
    }, 1500);
    setTimeout(function() {
        innerModal.innerHTML = `
            <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="https://media.giphy.com/media/CsA9ldJhWDHCo/giphy.gif">
            </div>
        `
        closeBtn.disabled = false;
    }, 3000);
});


