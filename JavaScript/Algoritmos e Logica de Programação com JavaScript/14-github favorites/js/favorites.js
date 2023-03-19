//classe que contem a lógica dos dados, aqui os daddos são estruturados.
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
            login: 'juninho15830',
            name: "Juninho",
            public_repos: '15',
            followers: '5432'
            },
            {
                login: 'maykbrito',
                name: "Mayk Brito",
                public_repos: '76',
                followers: '120000'
            }
        ]


    }

    delete(user) { // filter é uma Higher-order function que serve para filtrar um elemento dentro do array.
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        console.log(filteredEntries)
    }
}

//classe que cria a visualização e os eventos do html.
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.creatRow()
    
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
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