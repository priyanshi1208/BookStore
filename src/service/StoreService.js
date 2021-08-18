import config from '../config/config';
import AxiosService from './AxiosService';


export default class StoreService{
    baseUrl = config.baseUrl;
    
    getAllBooks() {
        return AxiosService.getService(`${this.baseUrl}bookstore/get`);
    }
    addUser(userObject){
        return AxiosService.postService(`${this.baseUrl}user/register`,userObject);
    }

    loginUser(loginDetails){
        return AxiosService.postService(`${this.baseUrl}user/login`,loginDetails)
    }
    getUserById(UserId){
        return AxiosService.getService(`${this.baseUrl}user/get/${UserId}`);
    }

    updateUser(userData){
        return AxiosService.putService(`${this.baseUrl}user/update/${userData.id}`,userData)
    }
}
