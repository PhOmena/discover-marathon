const Modal = {
    open(){
      // Abrir modal
      // Adicionar a class active ao modal
      document
      .querySelector('.modal-overlay')
      .classList.add('active')
    },
    close(){
      // Fechar o modal
      // Remover a class active no modal
      document
      .querySelector('.modal-overlay')
      .classList.remove('active')
    },
    alertFunction(){
      alert("Oi")
    }
}

const transactions = [
    { 
    id: 1, 
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
    },
    { 
    id: 2, 
    description: 'WebSite',
    amount: -500000,
    date: '23/01/2021'
    },
    { 
    id: 3, 
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
    },
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses(){
        //somar as saídas
    },
    total(){
        // entradas - saídas
    }
}

const DOM = {
    addTransaction(transaction, index){
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },
    innerHTMLTransaction(){
        const html = `
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td class="date">
            <img src="./assets/minus.svg" alt="remover
            transação">
        </td>
        `

      return html
    }
}

DOM.addTransaction(transactions[0])