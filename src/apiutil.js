export const request = async (options) => {
    const headers = new Headers();
    if (options.multipart === undefined) {
        headers.append('Content-Type', 'application/json')
    }
    // if(localStorage.getItem(ACCESS_TOKEN)) {
    //     headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    // }
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    try {
        const response = await fetch(options.url, options);
        try {
            const json = await response.json();
            return json;
        } catch (err) {
            console.log("Error while hiting this api ", options.url, " :: ", err);
        }
    } catch (err_1) {
        console.log("Error while hiting this api ", options.url, " :: ", err_1);
    }
};