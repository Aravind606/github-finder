class github {
  constructor() {
    this.client_id = '4b1c36cc3b9c1bc7fa7f';
    this.client_secret = '4516e8635f5179ad60ea80e2dfd059908ed51128'
    this.per_page = 5;
    this.sort = 'created:asc'
  }
  async getuser(userText) {
    const profileResponse = await fetch(`https://api.github.com/users/${userText}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const repoResponse = await fetch(`https://api.github.com/users/${userText}/repos?per_page=${this.per_page}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile: profileData,
      repo: repoData
    }
  }
}