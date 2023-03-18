import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd07'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '229'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ae3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'bbd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'aec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '534'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '25f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '678'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '031'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '45c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e22'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '563'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fd7'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '275'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '03b'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'a23'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4be'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', 'fa9'),
    exact: true
  },
  {
    path: '/docs/tags/test',
    component: ComponentCreator('/docs/tags/test', '41d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '5cf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '100'),
    routes: [
      {
        path: '/docs/category/petstore-api',
        component: ComponentCreator('/docs/category/petstore-api', '33e'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'b0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/petstore/all-trip-updates-updates-agency-id-trip-updates-all-get',
        component: ComponentCreator('/docs/petstore/all-trip-updates-updates-agency-id-trip-updates-all-get', 'f67'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/all-vehicle-position-updates-agency-id-vehicle-positions-all-get',
        component: ComponentCreator('/docs/petstore/all-vehicle-position-updates-agency-id-vehicle-positions-all-get', '4d0'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/create-user-users-post',
        component: ComponentCreator('/docs/petstore/create-user-users-post', 'c58'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/fastapi',
        component: ComponentCreator('/docs/petstore/fastapi', 'a94'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-agency-agency-id-agency-get',
        component: ComponentCreator('/docs/petstore/get-agency-agency-id-agency-get', '2d3'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-bus-trips-agency-id-trips-trip-id-get',
        component: ComponentCreator('/docs/petstore/get-bus-trips-agency-id-trips-trip-id-get', '56c'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-calendar-agency-id-calendar-service-id-get',
        component: ComponentCreator('/docs/petstore/get-calendar-agency-id-calendar-service-id-get', '18a'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-calendar-dates-from-db-calendar-dates-get',
        component: ComponentCreator('/docs/petstore/get-calendar-dates-from-db-calendar-dates-get', 'c2a'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-canceled-trip-canceled-service-all-get',
        component: ComponentCreator('/docs/petstore/get-canceled-trip-canceled-service-all-get', '4b2'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-canceled-trip-canceled-service-line-line-get',
        component: ComponentCreator('/docs/petstore/get-canceled-trip-canceled-service-line-line-get', 'd46'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-canceled-trip-summary-canceled-service-summary-get',
        component: ComponentCreator('/docs/petstore/get-canceled-trip-summary-canceled-service-summary-get', 'db1'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-gopass-schools-get-gopass-schools-get',
        component: ComponentCreator('/docs/petstore/get-gopass-schools-get-gopass-schools-get', 'aab'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-gtfs-rt-trip-updates-by-field-name-agency-id-trip-updates-field-name-field-value-get',
        component: ComponentCreator('/docs/petstore/get-gtfs-rt-trip-updates-by-field-name-agency-id-trip-updates-field-name-field-value-get', '75e'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-routes-agency-id-route-overview-get',
        component: ComponentCreator('/docs/petstore/get-routes-agency-id-route-overview-get', '9c2'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-routes-agency-id-routes-route-id-get',
        component: ComponentCreator('/docs/petstore/get-routes-agency-id-routes-route-id-get', 'c12'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-shapes-agency-id-shapes-shape-id-get',
        component: ComponentCreator('/docs/petstore/get-shapes-agency-id-shapes-shape-id-get', '3da'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-stop-times-by-route-code-and-agency-agency-id-stop-times-route-code-route-code-get',
        component: ComponentCreator('/docs/petstore/get-stop-times-by-route-code-and-agency-agency-id-stop-times-route-code-route-code-get', '26e'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-stop-times-by-trip-id-and-agency-agency-id-stop-times-trip-id-trip-id-get',
        component: ComponentCreator('/docs/petstore/get-stop-times-by-trip-id-and-agency-agency-id-stop-times-trip-id-trip-id-get', 'a41'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-stops-agency-id-stops-stop-id-get',
        component: ComponentCreator('/docs/petstore/get-stops-agency-id-stops-stop-id-get', '30c'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-time-time-get',
        component: ComponentCreator('/docs/petstore/get-time-time-get', 'bb5'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-trip-detail-agency-id-trip-detail-vehicle-id-get',
        component: ComponentCreator('/docs/petstore/get-trip-detail-agency-id-trip-detail-vehicle-id-get', 'dbf'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/get-trip-shapes-agency-id-trip-shapes-shape-id-get',
        component: ComponentCreator('/docs/petstore/get-trip-shapes-agency-id-trip-shapes-shape-id-get', '88d'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/index-get',
        component: ComponentCreator('/docs/petstore/index-get', 'ac0'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/login-for-access-token-token-post',
        component: ComponentCreator('/docs/petstore/login-for-access-token-token-post', '720'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/login-login-get',
        component: ComponentCreator('/docs/petstore/login-login-get', '7bb'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/populate-route-stops-agency-id-route-stops-route-code-get',
        component: ComponentCreator('/docs/petstore/populate-route-stops-agency-id-route-stops-route-code-get', '7f0'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/populate-route-stops-grouped-agency-id-route-stops-grouped-route-code-get',
        component: ComponentCreator('/docs/petstore/populate-route-stops-grouped-agency-id-route-stops-grouped-route-code-get', '95c'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/read-user-users-username-get',
        component: ComponentCreator('/docs/petstore/read-user-users-username-get', '292'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/vehicle-position-updates-agency-id-vehicle-positions-field-name-field-value-get',
        component: ComponentCreator('/docs/petstore/vehicle-position-updates-agency-id-vehicle-positions-field-name-field-value-get', 'f93'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/petstore/verify-email-route-verify-email-email-verification-token-get',
        component: ComponentCreator('/docs/petstore/verify-email-route-verify-email-email-verification-token-get', '373'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', 'f81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '95d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'ab3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'f8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '384'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '255'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f29'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
