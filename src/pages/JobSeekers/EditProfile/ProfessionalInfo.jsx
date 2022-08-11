import React, {useContext} from 'react'
import AuthContext from '../../../context/AuthContext'

export const ProfessionalInfo = () => {
  const {user} = useContext(AuthContext);
  return (
    <section>
      This is the professional info tab

      {user && user.bio}
    </section>
  )
}
