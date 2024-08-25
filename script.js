function nextStage(stage) {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById(stage).classList.remove('hidden');
}

function handleYes() {
    nextStage('stage3-yes');
}

function handleNo() {
    nextStage('stage3-no');
}

function handleYes1() {
    const container = document.getElementById('stage4');
    container.innerHTML = '<h1 style="color: red;">❤️ Big Heart ❤️</h1>';
}

function handleNo2() {
    const noButton = document.getElementById('noButton');
    noButton.style.left = Math.random() * 80 + 'vw';
    noButton.style.top = Math.random() * 80 + 'vh';
    const noClicks = parseInt(noButton.dataset.clicks || '0') + 1;
    noButton.dataset.clicks = noClicks;

    if (noClicks >= 2) {
        const message = document.createElement('p');
        message.innerText = "Please click yes ma navaye agade pugdaina";
        document.getElementById('stage4').appendChild(message);
    }
}