import React, { useState } from 'react'

import NavbarComponent from './NavbarComponent'
import Widget from './Widget';
import ProductTable from './ProductTable';
function Base() {
    const [userType,setUserType] = useState('admin');
    return (
      <div className='dark'>
      <NavbarComponent defaultRole={userType} setRole={(role)=>setUserType(role)}/>
        <Widget></Widget>
        {userType}
        <ProductTable userType={userType}/>
      </div>  
    )
}

export default Base
