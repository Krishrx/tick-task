export const getThemeState = () => {
    let themeState;
    if (localStorage.getItem('tickTaskDark') !== null) {
        const isDarkMode = localStorage.getItem('tickTaskDark') === 'true';
        themeState = isDarkMode;
    }
    else {
        localStorage.setItem('tickTaskDark', 'false');
        themeState = false;
    }

    return themeState;
}
