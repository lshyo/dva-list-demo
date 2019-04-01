export const getUrlParamComponentPass=url => {
    let localtionUrl = url;

    if (localtionUrl.indexOf('?') != -1){
        localtionUrl = localtionUrl.substring(localtionUrl.indexOf('?') + 1);
    } else {
        return '';
    }
    const arr = [];

    if (localtionUrl.indexOf('#') != -1){
        arr.push(localtionUrl.substring(0, localtionUrl.indexOf('#')));
        let temp = localtionUrl.substring(localtionUrl.indexOf('#') + 1);

        if (temp.indexOf('?') != -1) {
            temp = temp.substring(temp.indexOf('?') + 1);
            arr.push(temp);
        }
    } else {
        arr.push(localtionUrl);
    }

    const theRequest = {};

    for (let j = 0; j < arr.length; j++){
        const strs = arr[j].split('&');

        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
            // if ($.inArray(strs[i].split('=')[0], window.ommitsParams) != -1) {
            //     alert(`参数：${strs[i].split('=')[0]}，为系统默认，不允许用`);
            //     return;
            // }
        }
    }

    if (theRequest.toPage){
        delete theRequest.toPage;
    }

    return theRequest;
}