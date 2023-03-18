//classe que contem a lógica dos dados, aqui os daddos são estruturados.
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

//classe que cria a visualização e os eventos do html.
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()
    }
    
    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}