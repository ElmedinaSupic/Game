//
$(".forma").on('submit', function(e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  let users = localStorage.getItem('users');
  if (!users) {
    users = [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    $(".poruka").text("Uspjesno ste registrovani");
    setTimeout(function() {
      location.assign('login.html');
    }, 2000);
  } else {
    users = JSON.parse(users);
    let postoji = false;
    users.forEach(function(user) {
      if (user.username === username) {
        postoji = true;
        $(".poruka").text("User vec postoji!");
        return;
      }
    });
    if (!postoji) {
      users.push({ username, password });
      localStorage.removeItem('users');
      localStorage.setItem('users', JSON.stringify(users));
      $(".poruka").text("Uspjesno ste registrovani").fadeOut('slow');
      setTimeout(function() {
        location.assign('login.html');
      }, 2000);
    } else {
      $(".poruka").text("User vec postoji");
    }
  }
});