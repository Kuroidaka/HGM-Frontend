
import React, { FC, Fragment, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from './component/GlobalStyles.styles'
import Load from './component/Load'
import config from './config'
import Home from './feature/user/page//Home/Home'
import Collection from './feature/user/page//Collection/Collection'

import HeaderFooter from './feature/user/layout/HeaderFooter'
import PDP from './feature/user/page//Pdp/Pdp'
import { ProductType, ProductType2 } from './model/Ladingpage.model'
import { ProductContext, ProductContextValue } from './context/Context'
import { productApi, productApiTest } from './api/product/productApi'
import { useAppSelector } from './hook'
import { selectCurrentUser, selectLoggedIn } from './redux/auth.slice'
import AboutUs from './feature/user/page/AboutUs/AboutUs'


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
  const { home, collection, productId, about} = config.routePath
  useEffect(() => {
      if(!LoggedIn && location.pathname.split('/')[1] === 'admin') {
          navigate(`admin/${config.adminRoutePath.login}`)
      }
  }, [LoggedIn])

  // useEffect(() => {
  //     productApi.search({}).then(result =>  setProductList(result?.data?.results))
  // }, []);


  useEffect(() => {
      productApiTest.getListProduct()
      .then((res:any) => {
          setProductList(res.products)
      })
  }, []);


  return (
    <Suspense fallback={<Load/>}>
      <Container>
        <GlobalStyles />
        <ScrollToTopOnLocationChange />
        <ProductContext.Provider value={productContextValue}>
          <Routes>
              <Route path={home} element={ <HeaderFooter> <Home /></HeaderFooter> } />
              <Route path={collection} element={<HeaderFooter> <Collection/> </HeaderFooter>}/>
              <Route path={productId} element={ <HeaderFooter><PDP/></HeaderFooter>}/>
              <Route path={about} element={ <HeaderFooter><AboutUs/></HeaderFooter>}/>
              
          </Routes>
        </ProductContext.Provider>
      </Container>
    </Suspense>
  );
}

export default App;

const Container = styled.div`
  

`