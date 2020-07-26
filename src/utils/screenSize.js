const MAX_MOBILE_WIDTH = 600;
const MAX_TAB_WIDTH = 1200;

export function isPC() {
  return window.innerWidth > MAX_TAB_WIDTH;
}

export function isTab() {
  return MAX_MOBILE_WIDTH > window.innerWidth && window.innerWidth <= MAX_TAB_WIDTH;
}

export function isMobile() {
  return window.innerWidth <= MAX_MOBILE_WIDTH;
}