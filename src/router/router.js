import HomePage from '@/page/home-page/HomePage';
import ChooseCity from "@/page/choose-city/choosecity"
import My from "@/page/my/My"
import Login from "@/page/login/Login"
import SearchPage from '@/page/search-page/SearchPage'
import ProductList from '@/page/product-list/ProductList'
import ProductView from '@/page/product-view/ProductView'


const router = [
  {
    path: '/',
    key: 'HomePage',
    component: HomePage,
  },
  {
    path: '/choosecity',
    component: ChooseCity,
    key: 'ChooseCity'
  },
  {
    path: '/my',
    component: My,
    key: 'My'
  },
  {
    path: '/login',
    component: Login,
    key: 'Login'
  },
  {
    path:'/search',
    component:SearchPage,
    key:'SearchPage'
  },
  {
    path:'/list/:keyWord',
    component:ProductList,
    key:'ProductList'
  },
  {
    path:'/list',
    component:ProductList,
    key:'ProductLists'
  },
  {
    path:'/view',
    component:ProductView,
    key:'ProductView'
  }
];

export default router;
