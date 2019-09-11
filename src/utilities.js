export function getPathName() {
    let pathnameTab = window.location.pathname.split('/');
        let pathname = '';
          
        for(let i = 0; i < pathnameTab.length; i++) {
            if(pathnameTab[i] == 'en-US' || pathnameTab[i] == 'fr-FR' || pathnameTab[i] == 'ja-JP' || pathnameTab[i] == 'ko-KR') {
                continue;
            }
            
            pathname += pathnameTab[i] + '/';
        }
        
    return pathname.slice(1).slice(0, -1);
}

export function getPathNameA(location) {
    let pathnameTab = location.split('/');
        let pathname = '';
          
        for(let i = 0; i < pathnameTab.length; i++) {
            if(pathnameTab[i] == 'en-US' || pathnameTab[i] == 'fr-FR' || pathnameTab[i] == 'ja-JP' || pathnameTab[i] == 'ko-KR') {
                continue;
            }
            
            pathname += pathnameTab[i] + '/';
        }
        
    return pathname.slice(1).slice(0, -1);
}


export function getRequestedLocale() {
    let urlTab = window.location.pathname.split('/');
    
    return urlTab[1];
}

export function getLocaleName(locale) {
    if(locale == "en-US") { return "English (US)"; }
    else if(locale == "fr-FR") { return "Français"; }
    else if(locale == "ja-JP") { return "日本語"; }
    else if(locale == "ko-KR") { return "한국어"; }
}