
import React, { FC, Fragment, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from './component/GlobalStyles.styles'
import Load from './component/Load'
import config from './config'
import Home from './feature/user/page/Landing/Home/Home'
import Collection from './feature/user/page/Landing/Collection/Collection'
import Login from './feature/admin/page/Auth/Login/Login'
import Register from './feature/admin/page/Auth/Register/Register'
import HeaderFooter from './feature/user/layout/HeaderFooter'
import PDP from './feature/user/page/Landing/Pdp/Pdp'
import { ProductType, ProductType2 } from './model/Ladingpage.model'
import { ProductContext, ProductContextValue } from './context/Context'
import { productApi } from './api/product/productApi'
import { useAppSelector } from './hook'
import { selectCurrentUser, selectLoggedIn } from './redux/auth.slice'
import HeaderSideBar from './feature/admin/layout/HeaderSideBar'
// import Profile from './feature/user/page/Landing/Profile/Profile'
import AddUser from '~/feature/admin/page/ManageUser/ManageUser'
import ManageTeam from './feature/admin/page/Employee/Employee_Add'
import ContactInfo from './feature/admin/page/ContactInfo/ContactInfo'
import Dashboard from './feature/admin/page/Dashboard/Dashboard'

function ScrollToTopOnLocationChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const App:FC = () => {
  const [productList, setProductList] = useState<ProductType2[]>([])
  const productContextValue:ProductContextValue = {
      productList: productList
  }
  const currentUser = useAppSelector(selectCurrentUser)
  const LoggedIn = useAppSelector(selectLoggedIn)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
      if(!LoggedIn && location.pathname.split('/')[1] === 'admin') {
          navigate(`admin/${config.adminRoutePath.login}`)
      }
  }, [LoggedIn])

  useEffect(() => {
      productApi.search({}).then(result =>  setProductList(result?.data?.results))
  }, []);

  return (
   <Container>
  <GlobalStyles />
  <ScrollToTopOnLocationChange />
  <ProductContext.Provider value={productContextValue}>
    <Suspense fallback={<Load/>}>
      <Routes>
        <Route path='/admin/*' >
          <Route path={config.adminRoutePath.login} element={<Login />}/>
          <Route path={config.adminRoutePath.register} element={<Register />}/>
          {currentUser &&
          <Fragment>
          <Route path={config.adminRoutePath.dashboard} element={<HeaderSideBar><Dashboard /></HeaderSideBar>}/>
          <Route path={config.adminRoutePath.addUser} element={<HeaderSideBar><AddUser /></HeaderSideBar>}/>
          <Route path={config.adminRoutePath.manageTeam} element={<HeaderSideBar><ManageTeam /></HeaderSideBar>}/>
          <Route path={config.adminRoutePath.userContact} element={<HeaderSideBar><ContactInfo /></HeaderSideBar>}/>
          </Fragment> 
          }
        </Route>
      
        <Route path='/' >
          <Route path={config.routePath.home} element={ <HeaderFooter> <Home /></HeaderFooter> } />
          <Route path={config.routePath.collection} element={<HeaderFooter> <Collection/> </HeaderFooter>}/>
          <Route path={config.routePath.product} element={ <HeaderFooter><PDP/></HeaderFooter>}/>
        </Route>
           
      </Routes>
    </Suspense>
  </ProductContext.Provider>
   </Container>
  );
}

export default App;

const Container = styled.div`
  

`