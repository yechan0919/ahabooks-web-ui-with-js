import { atom } from "recoil";
import { v1 } from "uuid";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const loginUserState = atom({
  key: `loginUser${v1()}`,
  default: {
    loginUser: {
      id: 0,
      name: "",
      email: "",
      phone: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});

export { loginUserState };
