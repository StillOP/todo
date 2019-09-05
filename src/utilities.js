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


export function getRequestedLocale() {
    let urlTab = window.location.pathname.split('/');
    
    return urlTab[1];
}