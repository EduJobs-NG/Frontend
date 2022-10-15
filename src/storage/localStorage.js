export const getStoredUser = () =>{
    const user = localStorage.getItem('user')
   return  user ? JSON.parse(user) : {user:{}}
}
export const storeUser = (user) =>{
    localStorage.setItem('user', JSON.stringify(user))
    
}

export const getStoredEmployerUser = () =>{
    const employerUser = localStorage.getItem('employerUser')
    return employerUser ? JSON.parse(employerUser) : {}
}

export const storeEmployerUser = (employerUser) =>{
    localStorage.setItem('employer_user', JSON.stringify(employerUser))
}