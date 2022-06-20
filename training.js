const dados = [
    {nome: 'Rodrigo', idade: 23, sexo: 'masculino'},
    {nome: 'Bruna', idade: 17, sexo: 'feminino'},
    {nome: 'Alex', idade: 42, sexo: 'masculino'},
    {nome: "Julio", idade: 28, sexo: 'masculino'},
    {nome: 'Ronaldo', idade: 55, sexo: 'masculino'},
    {nome: "Bianca", idade: 48, sexo: 'feminino'},
    {nome: 'Victor', idade: 36, sexo: 'masculino'}
]

 const getUsers = new Promise((resolve, reject)=>{
    let users = dados

    if(users.length > 0) {
        resolve(users)
    }reject('A base de dados está vazia!')
 });

 const getAdults = (users)=>{
    return new Promise((resolve, reject)=>{
       const adult =  users.filter(isAdult =>{ if(isAdult.idade >= 18)
       return isAdult})
       if(adult.length > 0){
        resolve(adult)
       }reject('Não há usuarios adultos no banco de dados!')
    })
 }

 getUsers
        .then(users=>getAdults(users))
        .then(adults=>console.log(adults))
        .catch(error=>console.log(error))