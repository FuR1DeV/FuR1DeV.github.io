let tg = window.Telegram.WebApp;

tg.expand()

document.getElementById('send').onclick = myClick;

function myClick() {
    Telegram.Webapp.onEvent('send', function() {
        tg.sendData(document.getElementById('autocomplete').value)
    })
}
