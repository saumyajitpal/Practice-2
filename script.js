const btn = document.getElementById('btn');
const light = document.getElementById('light');
const message = document.getElementById('message');

function toggleLight() {
    btn.classList.toggle('active');
    light.classList.toggle('on');
    message.classList.toggle('active', light.classList.contains('on'));
}
