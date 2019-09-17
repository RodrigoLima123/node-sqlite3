const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex 


// INSERT

// knex('users').insert ({
//     name: 'Teste',
//     email: 'teste@teste.com.br',
//     password: 'teste@gmail.com'
// }).then(data => console.log(data))



// SELECT 

// knex('users').select('*').then(resultado => console.log(resultado))