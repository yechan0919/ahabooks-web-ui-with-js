import { atom } from "recoil";
import { v1 } from "uuid";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const globalState = atom({
  key: `login_token${v1()}`,
  default: {
    login_token: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export { globalState };
