import { atom } from "recoil";

const displayLogout = atom({
  key: "displayLogout",
  default: false,
});

const inputCollection = atom({
  key: "inputCollection",
  default: {
    name: '',
    email: '',
    phone: '',
    timeDay: '',
    school: 'Ronald McNair Elementary School'
  }

});

export { displayLogout, inputCollection };
