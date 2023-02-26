import { Routes, Route } from 'react-router-dom'
import config from '~/config'

import Home from './Home/Home'
import Collection from './Collection/Collection'
import PDP from './Pdp/Pdp'
import HeaderFooter from '~/layout/user/HeaderFooter/HeaderFooter'

const UserRoutes = () => {


    return ( 
        <Routes>

            <Route path={config.routePath.home} element={<HeaderFooter><Home /></HeaderFooter>}/>
            <Route path={config.routePath.collection} element={<HeaderFooter><Collection/></HeaderFooter>}/>
            <Route path={config.routePath.product} element={<HeaderFooter><PDP/></HeaderFooter>}/>

            {/* <Route path={config.adminRoutePath.register} element={<Register />}/>
            <Fragment>
                
                <Route path={config.adminRoutePath.home} element={<HeaderSideBar><Home /></HeaderSideBar>}/>
                <Route path={config.adminRoutePath.profile} element={<HeaderSideBar><Profile /></HeaderSideBar>}/>
            </Fragment> */}

        </Routes>
    )

}
 
export default UserRoutes;