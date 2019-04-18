
import axios from 'axios'
import router from './router/index'
import store from './store/store'

export default function setAxios() {
   
    //http拦截
axios.interceptors.request.use(
    config => {
        console.log(localStorage.getItem("setToken"))
        if(localStorage.getItem("setToken")){
            console.log(config)
            /* config.headers.common['token'] = localStorage.getItem("setToken"); */
            　config.headers['Authorization'] = `${localStorage.getItem("setToken")}`;
            //  config.headers['Accept'] = 'application/json';
        }
        return config;
    }
    
)

//响应拦截
axios.interceptors.response.use(
    resposne => {
        console.log(resposne.data.code)
        console.log(resposne)
        // console.log("判断:" +store.state.token)
        if(resposne.status == 200){
            if(resposne.data.code == 1){
                // store.commit("setToken","");
                router.replace({path : "/my/login"})
                localStorage.removeItem("setToken");
                
            }
        }
        return resposne;
    }
)
}
