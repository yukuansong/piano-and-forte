
import {signOut, getAuth} from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { displayLogout } from './recoil_state';

function LogOut() {
    signOut(getAuth());
    const showLogout = useSetRecoilState(displayLogout);
    showLogout(false);

}

export default LogOut;