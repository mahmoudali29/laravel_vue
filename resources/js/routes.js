import ExampleComponent from "./components/ExampleComponent" ;
import ExampleSecond from "./components/ExampleSecond" ;
import Bookables from "./bookables/Bookables" ;
import Bookable from "./bookable/Bookable" ;
import VueRouter from "vue-router";
const routes = [
	{
		path : "/",
		component : Bookables,
		name:"home",
	},
	{
		path : "/second",
		component : ExampleSecond,
		name:"second",
	},
	{
		path : "/bookables/:id",
		component : Bookable,
		name:"bookable",
	},
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:"history",
});

export default router;