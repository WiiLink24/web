function osdetect() {

    let userAgent = window.navigator.userAgent;
    let os = "Unknown OS";
    
    if (userAgent.indexOf("Win") != -1) os = "Windows";
    if (userAgent.indexOf("Mac") != -1) os = "MacOS";
    if (userAgent.indexOf("X11") != -1) os = "UNIX";
    if (userAgent.indexOf("Linux") != -1) os = "Linux";
    if (userAgent.indexOf("Wii") != -1) os = "Nintendo Wii";
    
    return os;
    }