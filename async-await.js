const usersData = [
    // {name: 'Rodrigo', age: 23, gender: 'male'},
    // {name: 'Paulo', age: 45, gender: 'male'},
    // {name: 'Alexis', age: 18, gender: 'female'},
    // {name: 'Bruno', age: 17, gender: 'male'},
    // {name: 'Amanda', age: 36, gender: 'female'},
    // {name: 'Victoria', age: 29, gender: 'female'}
]

const getUsers = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            const dataBase = usersData;
            if(dataBase.length > 0){
                resolve(dataBase)
            }else{
                reject('Banco de dados vazia!')
            }
        }, 5000);
})}

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

const adultsFemaleUsers = async () =>{  
    try{
    const users = await getUsers()
    const femaleUsers = await getFemaleUsers(users)
    const femaleAdults = await getAdults(femaleUsers)
    console.log(femaleAdults)
}catch(error){
    console.log(error)
}
}


adultsFemaleUsers()

// getUsers.then(users=>getFemaleUsers(users))
//         .then(femaleUsers=>getAdults(femaleUsers))
//         .then(adults=>console.log(adults))
//         .catch(error=>console.log(error))