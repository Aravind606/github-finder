var git = new github;
var uisetup = new ui;
var searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {

  var userText = e.target.value;
  if (userText != '') {
    git.getuser(userText)
      .then(function (data) {
        if (data.profile.message == "Not Found") {
          //show alert
          uisetup.showAlert('User Not Found', 'alert alert-danger')
          //console.log('error invalid user')
        } else {
          //show profile
          // console.log(data.profile)
          uisetup.showProfile(data)
          uisetup.showRepo(data);
        }
        //console.log(res.profile.id);
      })
      .catch(function (err) {
        console.log(err)
      })
  } else {
    //clear profile
    uisetup.clearProfile()
  }

})