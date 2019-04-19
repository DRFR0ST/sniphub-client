import { UI_DRAWER_HIDE, UI_DRAWER_SHOW } from "./types";

export const uiShowDrawer = () => {
    return {
        type: UI_DRAWER_SHOW,
        payload: true
    }
}
export const uiHideDrawer = () => {
    return {
        type: UI_DRAWER_HIDE,
        payload: false
    }
}