import { atom } from "recoil";
import { v1 } from "uuid";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
/**
 * recoil로 설정할 값들 : sidebar, modal
 */
const modalState = atom({
  key: `modalKey/${v1()}`,
  default: {
    notiModal: false,
    testModal: false,
  },
  effects_UNSTABLE: [persistAtom],
});

/**
 * dashboard, book, upload, user, payment, statistics, mypage
 * @type {RecoilState<{submenu: string, toggle: boolean, menu: string}>}
 */
const sidebarState = atom({
  key: `sidebarKey${v1()}`,
  default: {
    hidden: false,
    menu: "dashboard",
    toggle: false,
    submenu: "",
  },
  effects_UNSTABLE: [persistAtom],
});

const toggleState = atom({
  key: `toggleKey${v1()}`,
  default: {
    sidebar: false,
  },
});

export { modalState, sidebarState, toggleState };
