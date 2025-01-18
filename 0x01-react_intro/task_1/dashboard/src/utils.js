function getFullYear() {
  return new Date().getFullYear();
}
function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'ALX';
    }
    return 'ALX main dashboard';
}
export { getFullYear, getFooterCopy };