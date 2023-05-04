import {Outlet} from 'react-router-dom'

import PnfLogo from './pnf-logo';

function Headers() {
    return (
        <div>
        <h1 style={{"color": "green"}}>Music acts like a magic key, to which the most tightly closed heart opens</h1>
        <PnfLogo/>

        <Outlet/>
        </div>
    )
}

export default Headers;