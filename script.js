let tg = window.Telegram.WebApp;

tg.expand()

document.getElementById('send').onclick = myClick;

function myClick() {
    let a = document.getElementById('autocomplete').value;
    Telegram.Webapp.onEvent('send', function() {
        tg.sendData(a)
    })
    
}



