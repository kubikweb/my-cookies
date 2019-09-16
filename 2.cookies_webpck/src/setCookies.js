const setCookie = (name, value, hours) => {
    let date = new Date();
    date.setTime(date.getTime() + (hours*60*60*1000));
    let expires = date.toUTCString();
    document.cookie = name + "="+ value + "; expires=" + expires + "; path=/";
};

export default setCookie;