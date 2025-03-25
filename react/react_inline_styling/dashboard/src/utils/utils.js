export const getFullYear = () => {
    const year = new Date().getFullYear();
    return year;
};

export const getFooterCopy = (isIndex) => {
    return (isIndex ? `ALX` : `ALX main dashboard`);
};

export const getLatestNotification = () => {
    return `<strong>Urgent requirement</strong> - complete by EOD`;
}
