//Jquery kad se forma submit trigger se event
$(".forma").on('submit', function(e) {
  e.preventDefault();
  //Uzimanje vrijednosti iz fieldova za username i password
  let username = $("#username").val();
  let password = $("#password").val();
  let logovan = false;
  //Uzimanje liste uzernja iz local storage
  users = localStorage.getItem('users');
  //Provjera da li postoje useri u localStorage
  //ako ne onda nema smisla radit login
  if (!users) {
    location.assign('login.html');
  }
  //provjeri unijete podatke sa onima u local storage od liste usera
  users = JSON.parse(users);
  users.forEach(function(user) {
    if (user.username === username)
      if (user.password === password) {
        logovan = true;
        sessionStorage.setItem('user', JSON.stringify({ username, password }));
        location.assign('chooseGame.html');
        logovan = true;
        sessionStorage.setItem('user', JSON.stringify({ username, password }));
        location.assign('chooseGame.html');
        return;
      }
  });
  //u slucaju da nije logvan da se prikaze poruka
  if (!logovan) {
    $(".poruka").attr('display', 'block').text("Invalid username/password!").fadeOut(3000);
    $('.forma').trigger('reset');
  }
});