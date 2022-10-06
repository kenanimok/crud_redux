import React from 'react'
import styled from 'styled-components'
import { Body, Container, InputCustom, Label} from './login.style'
const Login = ()=> {
  return (
    <Body>
        <Container>

             <div className='left'>
             <h1 className="welcome">Welcome</h1>

             </div>


             <div className='right'>
             <h1 className="login">LogIn</h1>
               {/* <Label>ss</Label>
               <InputCustom type={'email'}/> */}
             {/* <input type="email" id="email" class="client-info" ></input> */}
             <InputCustom type="email"></InputCustom>
             <Label>email</Label>

             <InputCustom type="password"></InputCustom>
             <Label>password</Label>
             <InputCustom type="submit"  style={{background: " #df98fa",color:"white",border:"none"}}></InputCustom>

             </div>

        </Container>
    </Body>
  )
}

export default Login