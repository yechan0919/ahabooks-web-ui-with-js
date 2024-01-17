export const RecoilUtils = {
  /**
   * 모달 선택
   * @param type
   * @param state
   * @param setState
   */
  toggleModal: (type, state, setState) => {
    const cp = { testModal: false, notiModal: false };
    cp[type] = !state[type];
    setState(cp);
  },

  /**
   * 메뉴 클릭 시 자동으로 토글됨 (대시보드 제외)
   * 서브메뉴 클릭 시 토글 안됨
   * @param menu
   * @param submenu
   * @param state
   * @param setState
   * @param useToggle
   */
  clickMenu: (menu, submenu, state, setState, useToggle) => {
    const cp = { ...state };
    cp.menu = menu;
    cp.toggle = useToggle ? !state.toggle : state.toggle;
    cp.submenu = submenu !== "" ? submenu : "";
    setState(cp);
  },

  toggleEvent: (key, state, setState) => {
    const cp = { ...state };
    cp[key] = state[key] ? false : true;
    setState(cp);
  },
};
