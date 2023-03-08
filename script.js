let tg = window.Telegram.WebApp;

tg.expand();

window.onload=function(){
    new google.maps.places.Autocomplete((document.getElementById("autocomplete")), {
    types:'geocode'})
    tg.MainButton.text = 'Отправить'
    tg.MainButton.show()
    tg.MainButton.enable()
}

Telegram.WebApp.onEvent('mainButtonClicked', function() {
    console.log('inside!')
    tg.sendData(document.getElementById('autocomplete').value)
    tg.close()
})
