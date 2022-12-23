import { FC } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyles } from './component/GlobalStyles/GlobalStyles.styles'
import config from './config'
import Home from './page/Home/Home'
import Login from './page/Login/Login'
import Register from './page/Register/Register'
import HeaderSideBar from './layout/admin/HeaderSideBar'
import Profile from './page/Profile/Profile'

const App:FC = () => {
  return (
   <Container>
    <GlobalStyles />


    <div className="admin">
      <Routes>
        <Route path={config.routePath.login} element={<Login />}/>
        <Route path={config.routePath.register} element={<Register />}/>
        <Route path={config.routePath.home} element={<HeaderSideBar><Home /></HeaderSideBar>}/>
        <Route path={config.routePath.profile} element={<HeaderSideBar><Profile /></HeaderSideBar>}/>

      </Routes>
    </div>
    
   </Container>
  );
}

export default App;

const Container = styled.div`
  
`