import HomePage from '@/page/home-page/HomePage';
import ChooseCity from "@/page/choose-city/choosecity"
import My from "@/page/my/My"

const router = [
  {
    path: '/',
    key:'HomePage',
    component: HomePage,
  },
  {
    path:'/choosecity',
    component:ChooseCity,
    key:'ChooseCity'
  },
  {
    path:'/my',
    component:My,
    key:'My'
  }
];

export default router;
