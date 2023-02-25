import { Routes, Route } from 'react-router-dom'
import config from '~/config'

import Home from './Home/Home'
import HeaderOnly from '~/layout/user/HeaderOnly/HeaderOnly'
import Collection from './Collection/Collection'
import PDP from './Pdp/Pdp'

const UserRoutes = () => {


    return ( 
        <Routes>

            <Route path={config.routePath.home} element={<HeaderOnly><Home /></HeaderOnly>}/>
            <Route path={config.routePath.collection} element={<HeaderOnly><Collection/></HeaderOnly>}/>
            <Route path={config.routePath.product} element={<HeaderOnly><PDP/></HeaderOnly>}/>

            {/* <Route path={config.adminRoutePath.register} element={<Register />}/>
            <Fragment>
                
                <Route path={config.adminRoutePath.home} element={<HeaderSideBar><Home /></HeaderSideBar>}/>
                <Route path={config.adminRoutePath.profile} element={<HeaderSideBar><Profile /></HeaderSideBar>}/>
            </Fragment> */}

        </Routes>
    )

}
 
export default UserRoutes;