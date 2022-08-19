import React, {useContext} from 'react'
import AuthContext from '../../../context/AuthContext';


export const Credentials = () => {
  const { user } = useContext(AuthContext);
  const credentials = user?.credentials;
  return (
  <section>
    {credentials.map((credential) =>{
      return (
        <div key={credential.id}>

        <p>{credential.credential_type}</p>
        <p>{credential.file}</p>
        {/* <input type="file" value='' /> */}
        </div>

      )
    })}

  </section>
  )
}
