class ui {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repo = document.getElementById('repo');
  }
  showProfile(data) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${data.profile.avatar_url}" />
          <span>${data.profile.bio}</span>
          <a href="${data.profile.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos :${data.profile.public_repos}</span>
          <span class="badge badge-secondary">Public Gists :${data.profile.public_gists}</span>
          <span class="badge badge-success">Followers:${data.profile.followers}</span>
          <span class="badge badge-info">Following :${data.profile.following}</span>
          <br /><br />
          <ul class="list-group">
            <li class="list-group-item">Company : ${data.profile.company}</li>
            <li class="list-group-item">Website/Blog : ${data.profile.blog}</li>
            <li class="list-group-item">Location : ${data.profile.location}</li>
            <li class="list-group-item">Member Since: ${data.profile.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class=page-heading mb-3> Latest Repos </h3>
    `
  }

  clearProfile() {
    this.profile.innerHTML = '';
    this.repo.innerHTML = '';
  }

  showAlert(message, className) {
    // var div = document.createElement('div');
    // div.className = className;
    // div.appendChild(document.createTextNode(message))
    // var container = document.getElementsByClassName('search-container')
    // var search = document.getElementsByClassName('search')
    // container.insertBefore(div, search)

    this.profile.innerHTML = '<h2 class="alert alert-danger">User Not Found</h2>'
    this.repo.innerHTML = '';
  }

  showRepo(repos) {
    var output = '';
    repos.repo.forEach(function (repodata) {
      //console.log(repodata.name)
      output += `
       <div class = "card card-body mb-3">
        <div class = "row">
         <div class = "col-md-5">
           <a href = ${repodata.html_url} target = _blank>${repodata.name}</a>
         </div>
         <div class="col-md-7">
          <span class="badge badge-primary">Stars :${repodata.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers :${repodata.watchers_count}</span>
          <span class="badge badge-success">Forks:${repodata.forks}</span>
          <span class="badge badge-info">Language :${repodata.language}</span>
         </div>
        </div>
       </div>
       
       `
    })
    this.repo.innerHTML = output;

  }
}