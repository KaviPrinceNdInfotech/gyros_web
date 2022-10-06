import {request} from "./apiutil";
import { React,Component } from 'react';
            

class CommonService extends Component {
    getData(formdata) {
        return request({
            url: `https://api.gyros.farm/api/AdminApi/Registration`,
            method: 'POST',
            body: JSON.stringify(formdata),
            // multipart: true
        });
    }
}
export default new CommonService();