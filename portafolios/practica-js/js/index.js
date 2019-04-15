(function() {

    function cargado() {
        var actual = 1
        var img = document.getElementById('imagen')

        function cambiar() {
            switch (actual) {
                case 1:
                    actual = 2
                    img.src = 'img/002.png'
                    break
                case 2:
                    actual = 3
                    img.src = 'img/003.png'
                    break
                case 3:
                    actual = 4
                    img.src = 'img/004.png'
                    break
                case 4:
                    actual = 1
                    img.src = 'img/001.png'
                    break
            }
        }

        var btn = document.getElementById('boton')
        btn.onclick = cambiar
    }

    window.onload = cargado

})()