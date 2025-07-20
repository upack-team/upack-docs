import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Project-Instructions/blog',
    component: ComponentCreator('/Project-Instructions/blog', 'cfe'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/archive',
    component: ComponentCreator('/Project-Instructions/blog/archive', '2b0'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/authors',
    component: ComponentCreator('/Project-Instructions/blog/authors', '249'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Project-Instructions/blog/authors/all-sebastien-lorber-articles', '36e'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/authors/yangshun',
    component: ComponentCreator('/Project-Instructions/blog/authors/yangshun', '80d'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/first-blog-post',
    component: ComponentCreator('/Project-Instructions/blog/first-blog-post', 'b2d'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/long-blog-post',
    component: ComponentCreator('/Project-Instructions/blog/long-blog-post', '20d'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/mdx-blog-post',
    component: ComponentCreator('/Project-Instructions/blog/mdx-blog-post', '6b6'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/tags',
    component: ComponentCreator('/Project-Instructions/blog/tags', 'a19'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/tags/docusaurus',
    component: ComponentCreator('/Project-Instructions/blog/tags/docusaurus', 'b96'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/tags/facebook',
    component: ComponentCreator('/Project-Instructions/blog/tags/facebook', '263'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/tags/hello',
    component: ComponentCreator('/Project-Instructions/blog/tags/hello', 'e71'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/tags/hola',
    component: ComponentCreator('/Project-Instructions/blog/tags/hola', '646'),
    exact: true
  },
  {
    path: '/Project-Instructions/blog/welcome',
    component: ComponentCreator('/Project-Instructions/blog/welcome', '676'),
    exact: true
  },
  {
    path: '/Project-Instructions/markdown-page',
    component: ComponentCreator('/Project-Instructions/markdown-page', 'bf5'),
    exact: true
  },
  {
    path: '/Project-Instructions/docs',
    component: ComponentCreator('/Project-Instructions/docs', 'd09'),
    routes: [
      {
        path: '/Project-Instructions/docs',
        component: ComponentCreator('/Project-Instructions/docs', '705'),
        routes: [
          {
            path: '/Project-Instructions/docs',
            component: ComponentCreator('/Project-Instructions/docs', '251'),
            routes: [
              {
                path: '/Project-Instructions/docs/category/tutorial---basics',
                component: ComponentCreator('/Project-Instructions/docs/category/tutorial---basics', 'ff7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/category/tutorial---extras',
                component: ComponentCreator('/Project-Instructions/docs/category/tutorial---extras', '75d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/intro',
                component: ComponentCreator('/Project-Instructions/docs/intro', '121'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-basics/congratulations', '2b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-basics/create-a-blog-post', '850'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-basics/create-a-document', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-basics/create-a-page', '45d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-basics/deploy-your-site', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-basics/markdown-features', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-extras/manage-docs-versions', '31b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Project-Instructions/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Project-Instructions/docs/tutorial-extras/translate-your-site', '650'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Project-Instructions/',
    component: ComponentCreator('/Project-Instructions/', '353'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
