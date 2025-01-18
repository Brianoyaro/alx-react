function getFullYear() {
  return new Date().getFullYear();
}


function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'ALX';
    }
    return 'ALX main dashboard';
}


function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}


export { getFullYear, getFooterCopy, getLatestNotification };