
import React, { FC, Fragment, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from './component/GlobalStyles.styles'
import Load from './component/Load'
import config from './config'
import Home from './page/Landing/Home/Home'
import Collection from './page/Landing/Collection/Collection'
import Login from './page/Admin/Auth/Login/Login'
import Register from './page/Admin/Auth/Register/Register'
import HeaderFooter from './layout/user/HeaderFooter'
import PDP from './page/Landing/Pdp/Pdp'
import { ProductType, ProductType2 } from './model/Ladingpage.model'
import { ProductContext, ProductContextValue } from './context/Context'
import { productApi } from './api/product/productApi'
import { useAppSelector } from './hook'
import { selectCurrentUser, selectLoggedIn } from './redux/auth.slice'
import HeaderSideBar from './layout/admin/HeaderSideBar'
import Profile from './page/Admin/Profile/Profile'
import AddUser from '~/page/Admin/ManageUser/ManageUser'
import ManageTeam from './page/Admin/Employee/Employee_Add'
import ContactInfo from './page/Admin/ContactInfo/ContactInfo'
import Dashboard from './page/Admin/Dashboard/Dashboard'

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
          <Route path={config.adminRoutePath.profile} element={<HeaderSideBar><Profile /></HeaderSideBar>}/>
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