export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)//fetch é uma promessa
        .then(data => data.json())
        .then(({ login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers
        }))
    }
}