// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    breadcrumb: "首頁",
    path: "",
    component: "<div>home</div>",
    items: [
      {
        breadcrumb: "一級目錄",
        path: "/a",
        component: "<div>a</div>",
        items: [
          {
            breadcrumb: "二級目錄",
            path: "/b",
            component: "<div>/a/b</div>",
            items: [
              {
                breadcrumb: "三級目錄1",
                path: "/c1",
                component: "<div>/a/b/c1</div>",
                exact: true,
              },
              {
                breadcrumb: "三級目錄2",
                path: "/c2",
                component: "<div>/a/b/c2</div>",
                exact: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
