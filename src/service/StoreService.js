import config from '../config/config';
import AxiosService from './AxiosService';


export default class StoreService{
    baseUrl = config.baseUrl;
    
    getAllBooks() {
        return AxiosService.getService(`${this.baseUrl}bookstore/get`);
    }


}
