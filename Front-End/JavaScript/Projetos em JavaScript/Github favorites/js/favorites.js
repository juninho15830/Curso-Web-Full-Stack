import { GithubUser } from "./GithubUser.js"

//classe que contem a lógica dos dados, aqui os daddos são estruturados.
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('juninho15830').then(user => console.log(user))
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))//Salva no localstorage para que assim que a pagina for carregada a aplicação volte ao começo.
    }

    async add(username) {
        try {

            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists) {
                throw new Error('Usuário já cadastrado')
            }

            const user = await GithubUser.search(username)

            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries]//Cria um novo array a cada pesquise e adiciona na tabela
            this.update()
            this.save()

        } catch(error) {
            alert(error.message)
        }
    }

    delete(user) { // filter é uma Higher-order function que serve para filtrar um elemento dentro do array.
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

//classe que cria a visualização e os eventos do html.
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => { //value é apenas o valor que aplicação recebe da caixa de texto
            const { value }= this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.creatRow()
    
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja retornar essa linha?')

                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }
    
    creatRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/juninho15830.png" alt="Imagem de Juninho">
            <a href="https://github.com/juninho15830" target="_blank">
                <p>Juninho</p>
                <span>juninho15830</span>
            </a>
        </td>
        <td class="repositories">
            15
        </td>
        <td class="followers">
            5432
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>
    </tr>
        `

        return tr
    }

    removeAllTr() {

        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}