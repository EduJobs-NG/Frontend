export const getStoredUser = () =>{
    const user = localStorage.getItem('user')
   return  user ? JSON.parse(user) : {user:{}}
}
export const storeUser = (user) =>{
    localStorage.setItem('user', JSON.stringify(user))
    
}