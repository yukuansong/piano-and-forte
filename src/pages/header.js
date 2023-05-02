import {Outlet} from 'react-router-dom'

import PnfLogo from './pnf-logo';

function Headers() {
    return (
        <div>
        <h1>Music gives color to the air of moment</h1>
        <PnfLogo/>

        <Outlet/>
        </div>
    )
}

export default Headers;