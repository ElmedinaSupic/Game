/*
  Funkcija provjeru da li je user logovan ili nije,
  u slucaju da nije ne moze se otici na game.html,
  ovo je IIFE da se izvrsi odmah kad se laod script
  koja ce provjerit da li je user logovan ili ne.
 */
(function checkLogin() {
  //kupi listu usera sacuvanih u local storage kao JSON
  let checkUsers = localStorage.getItem('users');
  //dobavi usera koji je treutno logvan iz sessionStorage
  let currentlyLogedIn = sessionStorage.getItem('user');
  let logovan = false;
  //provjerava u slucaju da je jedno od navedeno dvoje gore nepostojece
  //redirect radi na login
  if (checkUsers === null || currentlyLogedIn === null) {
    location.assign('login.html');
    return;
  }
  //posto se spasava kao string u local storage
  //funkcija JSON.parse pretvori string u JSON
  checkUsers = JSON.parse(checkUsers);
  currentlyLogedIn = JSON.parse(currentlyLogedIn);
  checkUsers.forEach(function(user) {
    if (user.username === currentlyLogedIn.username)
      if (user.password === currentlyLogedIn.password) {
        logovan = true;
        return;
      }
  });
  if (!logovan) {
    location.assign('login.html');
  }
})();