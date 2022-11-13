import VueRouter from "vue-router";
import Map from "../views/Map";
import TextData from "../views/TextData";

export default new VueRouter({
    routes: [
        {
            path: '/', component: () => import('@/views/Main'), children: [
                {
                    name:'input',
                    path:'/input',
                    component:()=>import('@/views/Input')
                },
                {
                    name: 'TextData',
                    path: 'textdata',
                    component: () => import('@/views/TextData')
                },
                {
                    name: 'Map',
                    path: 'map',
                    component: () => import('@/views/Map')
                },
            ]
        }
    ]
})