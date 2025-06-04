// #1. List Function

function list(clients) {
  return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$${client.balance}</strong>
      </li>
    `).join('')
}

// #2. Order Function

function order(clients, property) {
    return clients.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1
        } else if (a[property] > b[property]) {
            return 1
        } else {
            return 0
        }
    })
}

// #3. Total Function

function total(clients) {
  return clients.reduce((sum, client) => {
    return sum += client.balance
  }, 0)
}

// #4. Info function

function info(index) {
  return clients.find(client => client.index === index)
}

// #5. Search function

function search(query) {
  return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()))
}