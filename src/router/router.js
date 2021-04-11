import HomePage from '@/page/home-page/HomePage';
import ChooseCity from "@/page/choose-city/choosecity"

const router = [
  {
    path: '/',
    key:'HomePage',
    component: HomePage,
    children:[
      {
        path:'/choosecity',
        component:ChooseCity,
        key:'ChooseCity'
      }
    ]
  },
];

export default router;
