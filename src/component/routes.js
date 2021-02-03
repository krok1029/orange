// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    breadcrumb: "首頁",
    path: "",
    component: "<div>home</div>",
    items: [
      {
        breadcrumb: "橘子選擇",
        path: "/a",
        component: "<div>a</div>",
        items: [
          {
            breadcrumb: "特甜橘子",
            path: "/b1",
            component: "<div>/a/b1</div>",
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
          {
            breadcrumb: "特甜雞蛋丁",
            path: "/b2",
            component: "<div>/a/b2</div>",
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
