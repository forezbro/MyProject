import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Concent from '../components/Concent'
import List from '../components/List'
import Weare from '../components/Weare'
import Detail from '../components/Detail'
import All from '../components/All'
import Section from '../components/Section'
import Registe from '../components/Registe'
import Car from '../components/Car'


Vue.use(VueRouter)

const routes = [
     {path:'/home',component:Home},
		{path:'/concent',component:Concent},
		{path:'/list',component:List},
		{path:'/weare',component:Weare},
		{path:'/detail/:id',component:Detail},
		{path:'/all',component:All},
		{path:'/Section/:id',component:Section},
		{path:'/Registe',component:Registe},
		{path:'/car',component:Car},
		{path:'/*',redirect:'/home'}
  ]
const router =new VueRouter({
	 routes,
	 model:'history'
})

export default router

// const router =new VueRouter({
// 	 routes,
// 	 model:'history'
// })

// export default router

// export default new VueRouter({
// 	routes[
// 		{path:'/home',component:Home},
// 		{path:'/concent',component:Concent},
// 		{path:'/list',component:List},
// 		{path:'/weare',component:Weare},
// 		{path:'/*',redirect:'/home'}

// 	]
// })