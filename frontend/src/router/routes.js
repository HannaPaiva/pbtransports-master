const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "", component: () => import("pages/IndexPage.vue")

      },

      {
        path: 'test',
        component: () => import("pages/TestPage.vue")
      },

      {
        path: 'req',
        component: () => import("pages/RequestPage.vue")
      },


      {
        path: 'pdf',
        component: () => import("pages/MakePdf.vue")
      },

    ],


  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
