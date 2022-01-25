const USER = 'usuario01';
const PASS = '12345678';

(function autenticar (dispositivo, pantalla) {
    console.log(USER + 'Se ha autenticado en el dispositivo '+ dispositivo)
})('iPhone 13', 'inicio');

function autenticar (dispositivo, pantalla) {
    console.log(USER + 'Se ha autenticado en el dispositivo '+ dispositivo)
}
autenticar('iPhone 13', 'inicio');