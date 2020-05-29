import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "/my",
        name: "My",
        component: () => import("../views/My.vue"),
        redirect: "/mydata",
        children: [
          {
            path: "/mydata",
            name: "Mydata",
            component: () => import("../views/MyComponents/Mydata.vue"),
          },
          {
            path: "/nysafety",
            name: "Mysafety",
            component: () => import("../views/MyComponents/Mysafety.vue"),
          },

          {
            path: "/myvip",
            name: "Myvip",
            component: () => import("../views/MyComponents/Myvip.vue"),
          },
          {
            path: "/buyvip",
            name: "Buyvip",
            component: () => import("../views/MyComponents/Buyvip.vue"),
          },
          {
            path: "/mybalance",
            name: "Mybalance",
            component: () => import("../views/MyComponents/Mybalance.vue"),
          },
          {
            path: "/mydetailed",
            name: "Mydetailed",
            component: () => import("../views/MyComponents/Mydetailed.vue"),
          },
        ],
      },
      // 我的发布
      {
        path: "/myorder",
        name: "Myorder",
        component: () => import("../views/MyComponents/Myorder.vue"),
      },
      {
        path: "/settlein",
        name: "Settlein",
        component: () => import("../views/MyComponents/Settlein.vue"),
      },
      {
        path: "/mymodel",
        name: "Mymodel",
        component: () => import("../views/MyComponents/Mymodel.vue"),
      },
      {
        path: "/myfactory",
        name: "Myfactory",
        component: () => import("../views/MyComponents/Myfactory.vue"),
      },
      {
        path: "/myschool",
        name: "Myschool",
        component: () => import("../views/MyComponents/Myschool.vue"),
      },
      {
        path: "/sysafe",
        name: "Mysafe",
        component: () => import("../views/MyComponents/Mysafe.vue"),
      },
      {
        path: "/mylaw",
        name: "Mylaw",
        component: () => import("../views/MyComponents/Mylaw.vue"),
      },
      {
        path: "/mywelfare",
        name: "Mywelfare",
        component: () => import("../views/MyComponents/Mywelfare.vue"),
      },
      {
        path: "/mynews",
        name: "Mynews",
        component: () => import("../views/MyComponents/Mynews.vue"),
      },
      {
        path: "/myposter",
        name: "Myposter",
        component: () => import("../views/MyComponents/Myposter.vue"),
      },

      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/HomeComponents/Home.vue"),
      },
      {
        path: "/order",
        name: "order",
        component: () => import("@/views/HomeComponents/Order.vue"),
      },
      {
        path: "/model",
        name: "model",
        component: () => import("@/views/HomeComponents/Model.vue"),
      },
      {
        path: "/mode3ddetails",
        name: "Mode3dDetails",
        component: () =>
          import("../views/HomeComponents/Details/Mode3dDetails.vue"),
      },
      {
        path: "/enterprisedetails",
        name: "Enterprisedetails",
        component: () =>
          import("../views/HomeComponents/Details/Enterprisedetails.vue"),
      },
      {
        path: "/factorydetails",
        name: "Factorydetails",
        component: () =>
          import("../views/HomeComponents/Details/Factorydetails.vue"),
      },
      {
        path: "/newsdetails",
        name: "Newsdetails",
        component: () =>
          import("../views/HomeComponents/Details/Newsdetails.vue"),
      },

      {
        path: "/enterprise",
        name: "enterprise",
        component: () => import("@/views/HomeComponents/Enterprise.vue"),
      },
      {
        path: "/factory",
        name: "Factory",
        component: () => import("@/views/HomeComponents/Factory.vue"),
      },
      {
        path: "/news",
        name: "News",
        component: () => import("@/views/HomeComponents/News.vue"),
      },
      {
        path: "/school",
        name: "Onlineschool",
        component: () => import("@/views/HomeComponents/Onlineschool.vue"),
      },
      {
        path: "/insurance",
        name: "Insurance",
        component: () => import("@/views/HomeComponents/Insurance.vue"),
      },
      {
        path: "/welfare",
        name: "Welfare",
        component: () => import("@/views/HomeComponents/Welfare.vue"),
      },

      {
        path: "/welfare",
        name: "Welfare",
        component: () => import("@/views/HomeComponents/Welfare.vue"),
      },
    ],
  },
  {
    path: "/schooldetails",
    name: "Schooldetails",
    component: () =>
      import("../views/HomeComponents/Details/Schooldetails.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
