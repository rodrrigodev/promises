// const check = new Promise((resolve, reject)=>{
//     let error = true

//     if(!error){
//         resolve('A promise foi resolvida!')
//     }else{
//         reject('A promise foi rejeitada!')
//     }
// })

// console.log(check)

// check
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

const usersData = [
    {name: 'Rodrigo', age: 23, gender: 'male'},
    {name: 'Paulo', age: 45, gender: 'male'},
    {name: 'Alexis', age: 18, gender: 'female'},
    {name: 'Bruno', age: 17, gender: 'male'},
    {name: 'Amanda', age: 36, gender: 'female'},
    {name: 'Victoria', age: 29, gender: 'female'}
]

const getUsers = new Promise((resolve, reject)=>{
    const dataBase = usersData;
    if(dataBase.length > 0){
        resolve(dataBase)
    }else{
        reject('Banco de dados vazia!')
    }
})

const getFemaleUsers = (users=>{
    return new Promise((resolve, reject)=>{
        let femaleUsers = usersData.filter(usersF=>{
            if(usersF.gender=== 'female'){
                return usersF
            }
        })

        if(femaleUsers.length > 0){
            resolve(femaleUsers)
        }else{
            reject('Nenhum usuário do sexo feminino presente no banco de dados!')
        }
    })
})

const getAdults = (users=>{
    return new Promise((resolve, reject)=>{
        let adults = users.filter(user=>{
            if(user.age >=18){
                return user
            }
        })
        
        if(adults.length > 0){
            resolve(adults)
        }else{
            reject('Nenhum usuário adulto do sexo feminino presente no banco de dados')
        }
    })
})

// getUsers.then(users=>getFemaleUsers(users))
        // .then(femaleUsers=>getAdults(femaleUsers))
        // .then(adults=>console.log(adults))
        // .catch(error=>console.log(error))
    getUsers.then(result => getFemaleUsers(result))
        // .then(result => console.log(result))