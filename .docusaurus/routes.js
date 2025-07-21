import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd88'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f8e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd9f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '30c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '135'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '68a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e1f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e08'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1cb'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '0cd'),
    exact: true
  },
  {
    path: '/videos/',
    component: ComponentCreator('/videos/', '69f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '486'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd67'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '0d7'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '012'),
            routes: [
              {
                path: '/admin',
                component: ComponentCreator('/admin', '387'),
                exact: true
              },
              {
                path: '/admin/organization/',
                component: ComponentCreator('/admin/organization/', 'f2c'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/organization/audit-logs',
                component: ComponentCreator('/admin/organization/audit-logs', '952'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/organization/company-info',
                component: ComponentCreator('/admin/organization/company-info', '29d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/organization/import',
                component: ComponentCreator('/admin/organization/import', 'eb3'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/organization/installed-packages',
                component: ComponentCreator('/admin/organization/installed-packages', '33f'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/organization/organizations',
                component: ComponentCreator('/admin/organization/organizations', 'ddb'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/organization/users',
                component: ComponentCreator('/admin/organization/users', '547'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/organization/white-label',
                component: ComponentCreator('/admin/organization/white-label', '64a'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/',
                component: ComponentCreator('/admin/permissions/', '5de'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/app-permissions',
                component: ComponentCreator('/admin/permissions/app-permissions', '22d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/before-find',
                component: ComponentCreator('/admin/permissions/before-find', 'ef1'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/division',
                component: ComponentCreator('/admin/permissions/division', '757'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/field-permissions',
                component: ComponentCreator('/admin/permissions/field-permissions', '78a'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/object-permissions',
                component: ComponentCreator('/admin/permissions/object-permissions', '860'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/overview',
                component: ComponentCreator('/admin/permissions/overview', 'ccd'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/permission-set',
                component: ComponentCreator('/admin/permissions/permission-set', '5f3'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/profile',
                component: ComponentCreator('/admin/permissions/profile', 'b9c'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/restriction-rules',
                component: ComponentCreator('/admin/permissions/restriction-rules', '4dd'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/admin/permissions/sharing-rules',
                component: ComponentCreator('/admin/permissions/sharing-rules', 'd69'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/apps/collaboration/',
                component: ComponentCreator('/apps/collaboration/', '445'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/collaboration/approval-king/',
                component: ComponentCreator('/apps/collaboration/approval-king/', 'a8c'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/collaboration/milestone/',
                component: ComponentCreator('/apps/collaboration/milestone/', 'fc1'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/customer-relationship-management/',
                component: ComponentCreator('/apps/customer-relationship-management/', '6d3'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/customer-relationship-management/sales/',
                component: ComponentCreator('/apps/customer-relationship-management/sales/', '86d'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/customer-relationship-management/service/',
                component: ComponentCreator('/apps/customer-relationship-management/service/', '5ae'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/getting-started/overview',
                component: ComponentCreator('/apps/getting-started/overview', '25b'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/human-capital-management/',
                component: ComponentCreator('/apps/human-capital-management/', 'e9a'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/human-capital-management/attendance/',
                component: ComponentCreator('/apps/human-capital-management/attendance/', '3da'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/human-capital-management/employee/',
                component: ComponentCreator('/apps/human-capital-management/employee/', '135'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/human-capital-management/performance/',
                component: ComponentCreator('/apps/human-capital-management/performance/', '59e'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/spend-management/',
                component: ComponentCreator('/apps/spend-management/', '55f'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/spend-management/contract/',
                component: ComponentCreator('/apps/spend-management/contract/', 'dde'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/spend-management/expense/',
                component: ComponentCreator('/apps/spend-management/expense/', '612'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/spend-management/invoice/',
                component: ComponentCreator('/apps/spend-management/invoice/', 'b29'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/spend-management/project/',
                component: ComponentCreator('/apps/spend-management/project/', 'c97'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/spend-management/supplier/',
                component: ComponentCreator('/apps/spend-management/supplier/', 'f51'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/apps/spend-management/tender/',
                component: ComponentCreator('/apps/spend-management/tender/', '553'),
                exact: true,
                sidebar: "apps"
              },
              {
                path: '/automation',
                component: ComponentCreator('/automation', 'd1e'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/automation/approval-king/',
                component: ComponentCreator('/automation/approval-king/', 'de9'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/automation/approval-king/admin-guide',
                component: ComponentCreator('/automation/approval-king/admin-guide', '09a'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/automation/approval-king/getting-started',
                component: ComponentCreator('/automation/approval-king/getting-started', '1a0'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/automation/approval-process',
                component: ComponentCreator('/automation/approval-process', 'bb1'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/automation/automated-actions',
                component: ComponentCreator('/automation/automated-actions', '01d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/automation/workflow-rules',
                component: ComponentCreator('/automation/workflow-rules', 'f0e'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/company/about-us',
                component: ComponentCreator('/company/about-us', '8c1'),
                exact: true
              },
              {
                path: '/company/contact-us',
                component: ComponentCreator('/company/contact-us', '71e'),
                exact: true
              },
              {
                path: '/company/privacy',
                component: ComponentCreator('/company/privacy', '51f'),
                exact: true
              },
              {
                path: '/customer-success-stories/',
                component: ComponentCreator('/customer-success-stories/', '4c8'),
                exact: true
              },
              {
                path: '/customer-success-stories/cmbchina-poc',
                component: ComponentCreator('/customer-success-stories/cmbchina-poc', '2b4'),
                exact: true
              },
              {
                path: '/customer-success-stories/contract',
                component: ComponentCreator('/customer-success-stories/contract', 'ed3'),
                exact: true
              },
              {
                path: '/customer-success-stories/COVID-19',
                component: ComponentCreator('/customer-success-stories/COVID-19', 'f02'),
                exact: true
              },
              {
                path: '/customer-success-stories/ctms',
                component: ComponentCreator('/customer-success-stories/ctms', 'bd4'),
                exact: true
              },
              {
                path: '/customer-success-stories/dzug',
                component: ComponentCreator('/customer-success-stories/dzug', '754'),
                exact: true
              },
              {
                path: '/customer-success-stories/hbyt',
                component: ComponentCreator('/customer-success-stories/hbyt', '13b'),
                exact: true
              },
              {
                path: '/customer-success-stories/jianhuabm',
                component: ComponentCreator('/customer-success-stories/jianhuabm', 'c28'),
                exact: true
              },
              {
                path: '/customer-success-stories/porthebei',
                component: ComponentCreator('/customer-success-stories/porthebei', '2ea'),
                exact: true
              },
              {
                path: '/customer-success-stories/scrm',
                component: ComponentCreator('/customer-success-stories/scrm', '60e'),
                exact: true
              },
              {
                path: '/customer-success-stories/steedos-oem',
                component: ComponentCreator('/customer-success-stories/steedos-oem', 'ac3'),
                exact: true
              },
              {
                path: '/customer-success-stories/tsinghua',
                component: ComponentCreator('/customer-success-stories/tsinghua', '00a'),
                exact: true
              },
              {
                path: '/customer-success-stories/yz',
                component: ComponentCreator('/customer-success-stories/yz', '762'),
                exact: true
              },
              {
                path: '/customer-success-stories/zqy',
                component: ComponentCreator('/customer-success-stories/zqy', 'ead'),
                exact: true
              },
              {
                path: '/deploy',
                component: ComponentCreator('/deploy', '50b'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/deploy/deploy-docker',
                component: ComponentCreator('/deploy/deploy-docker', '08c'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/deploy/deploy-k8s',
                component: ComponentCreator('/deploy/deploy-k8s', 'a1f'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/deploy/gitpod',
                component: ComponentCreator('/deploy/gitpod', '6da'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/deploy/intranet',
                component: ComponentCreator('/deploy/intranet', 'cca'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/deploy/steedos-config',
                component: ComponentCreator('/deploy/steedos-config', '08b'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/developer',
                component: ComponentCreator('/developer', '7b8'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/api/',
                component: ComponentCreator('/developer/api/', '5fe'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/api/analytics-api',
                component: ComponentCreator('/developer/api/analytics-api', '375'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/api/api-process',
                component: ComponentCreator('/developer/api/api-process', '95b'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/api/api-validate',
                component: ComponentCreator('/developer/api/api-validate', 'b23'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/api/graphql-api',
                component: ComponentCreator('/developer/api/graphql-api', '763'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/api/openapi',
                component: ComponentCreator('/developer/api/openapi', 'd0c'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/api/overview',
                component: ComponentCreator('/developer/api/overview', '4f0'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/integration/',
                component: ComponentCreator('/developer/integration/', '36a'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/integration/api-jwt-sso',
                component: ComponentCreator('/developer/integration/api-jwt-sso', 'e72'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/integration/node-red',
                component: ComponentCreator('/developer/integration/node-red', '114'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/',
                component: ComponentCreator('/developer/micro-page/', 'c45'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/',
                component: ComponentCreator('/developer/micro-page/amis/', 'd12'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/base_config',
                component: ComponentCreator('/developer/micro-page/amis/base_config', 'e26'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/data',
                component: ComponentCreator('/developer/micro-page/amis/data', 'aa6'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/data_mapping',
                component: ComponentCreator('/developer/micro-page/amis/data_mapping', '82b'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/event',
                component: ComponentCreator('/developer/micro-page/amis/event', '6c4'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/expression',
                component: ComponentCreator('/developer/micro-page/amis/expression', 'a6d'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/linkage',
                component: ComponentCreator('/developer/micro-page/amis/linkage', '1e7'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/styles',
                component: ComponentCreator('/developer/micro-page/amis/styles', '299'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/amis/tpl',
                component: ComponentCreator('/developer/micro-page/amis/tpl', '1c2'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/components/',
                component: ComponentCreator('/developer/micro-page/components/', '945'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/components/object_form',
                component: ComponentCreator('/developer/micro-page/components/object_form', 'a3d'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/components/object_listview',
                component: ComponentCreator('/developer/micro-page/components/object_listview', '952'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/components/object_table',
                component: ComponentCreator('/developer/micro-page/components/object_table', 'ba5'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/components/record_detail_header',
                component: ComponentCreator('/developer/micro-page/components/record_detail_header', 'bb6'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/components/record_detail_related_list',
                component: ComponentCreator('/developer/micro-page/components/record_detail_related_list', '0a9'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/custom_components',
                component: ComponentCreator('/developer/micro-page/custom_components', 'aad'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/getting_start',
                component: ComponentCreator('/developer/micro-page/getting_start', 'ee7'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/micro-page/overview',
                component: ComponentCreator('/developer/micro-page/overview', '39e'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/',
                component: ComponentCreator('/developer/package/', '46d'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/metadata/',
                component: ComponentCreator('/developer/package/metadata/', '875'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/metadata/metadata-automation',
                component: ComponentCreator('/developer/package/metadata/metadata-automation', '790'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/metadata/metadata-object',
                component: ComponentCreator('/developer/package/metadata/metadata-object', 'd9a'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/metadata/metadata-permissions',
                component: ComponentCreator('/developer/package/metadata/metadata-permissions', 'd01'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/metadata/metadata-ui',
                component: ComponentCreator('/developer/package/metadata/metadata-ui', 'eea'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/overview',
                component: ComponentCreator('/developer/package/overview', 'f4b'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/package-install',
                component: ComponentCreator('/developer/package/package-install', '064'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/package-publish',
                component: ComponentCreator('/developer/package/package-publish', '75d'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/package/sync-metadata',
                component: ComponentCreator('/developer/package/sync-metadata', '69b'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/plugins/',
                component: ComponentCreator('/developer/plugins/', '6c1'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/plugins/objectql',
                component: ComponentCreator('/developer/plugins/objectql', '0bf'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/plugins/overview',
                component: ComponentCreator('/developer/plugins/overview', '5a4'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/plugins/trigger',
                component: ComponentCreator('/developer/plugins/trigger', '363'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/',
                component: ComponentCreator('/developer/service/', '96d'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/action-api',
                component: ComponentCreator('/developer/service/action-api', 'e74'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/action-trigger',
                component: ComponentCreator('/developer/service/action-trigger', '1b4'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/locale',
                component: ComponentCreator('/developer/service/locale', 'cfe'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/moleculer/',
                component: ComponentCreator('/developer/service/moleculer/', 'db9'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/moleculer/actions',
                component: ComponentCreator('/developer/service/moleculer/actions', 'e3b'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/moleculer/events',
                component: ComponentCreator('/developer/service/moleculer/events', 'e1e'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/moleculer/repl',
                component: ComponentCreator('/developer/service/moleculer/repl', 'dd1'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/objectql',
                component: ComponentCreator('/developer/service/objectql', 'd9a'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/overview',
                component: ComponentCreator('/developer/service/overview', '190'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/package-service',
                component: ComponentCreator('/developer/service/package-service', 'd5b'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/service-api/',
                component: ComponentCreator('/developer/service/service-api/', '8b4'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/service-api/service-graphql',
                component: ComponentCreator('/developer/service/service-api/service-graphql', '5d5'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/service-api/service-push',
                component: ComponentCreator('/developer/service/service-api/service-push', '08f'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/service/service-api/service-sms',
                component: ComponentCreator('/developer/service/service-api/service-sms', '4cb'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/setup/',
                component: ComponentCreator('/developer/setup/', 'd40'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/setup/create-steedos-app',
                component: ComponentCreator('/developer/setup/create-steedos-app', 'ddd'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/setup/overview',
                component: ComponentCreator('/developer/setup/overview', 'bbb'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/setup/project-start',
                component: ComponentCreator('/developer/setup/project-start', '9bb'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/setup/sample-repository',
                component: ComponentCreator('/developer/setup/sample-repository', '00c'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/setup/setup-env',
                component: ComponentCreator('/developer/setup/setup-env', '110'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/developer/setup/steedos-cli',
                component: ComponentCreator('/developer/setup/steedos-cli', 'd10'),
                exact: true,
                sidebar: "developer"
              },
              {
                path: '/getting-started/',
                component: ComponentCreator('/getting-started/', '0a2'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/tutorials/',
                component: ComponentCreator('/getting-started/tutorials/', 'a94'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/tutorials/the-basics/',
                component: ComponentCreator('/getting-started/tutorials/the-basics/', '707'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/tutorials/the-basics/app',
                component: ComponentCreator('/getting-started/tutorials/the-basics/app', '9cd'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/tutorials/the-basics/object',
                component: ComponentCreator('/getting-started/tutorials/the-basics/object', 'e2d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/tutorials/the-basics/relationship',
                component: ComponentCreator('/getting-started/tutorials/the-basics/relationship', '4c2'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/tutorials/the-basics/workflow-rules',
                component: ComponentCreator('/getting-started/tutorials/the-basics/workflow-rules', '392'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/user/',
                component: ComponentCreator('/getting-started/user/', '190'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/user/download-apps',
                component: ComponentCreator('/getting-started/user/download-apps', '46d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/getting-started/user/overview',
                component: ComponentCreator('/getting-started/user/overview', 'b66'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code',
                component: ComponentCreator('/no-code', 'c31'),
                exact: true
              },
              {
                path: '/no-code/application/',
                component: ComponentCreator('/no-code/application/', 'e66'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/application/app',
                component: ComponentCreator('/no-code/application/app', 'ebd'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/application/overview',
                component: ComponentCreator('/no-code/application/overview', '519'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/application/pages',
                component: ComponentCreator('/no-code/application/pages', '5af'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/application/tab',
                component: ComponentCreator('/no-code/application/tab', '360'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/',
                component: ComponentCreator('/no-code/customize/', '51e'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/button',
                component: ComponentCreator('/no-code/customize/button', '952'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/external-datasources',
                component: ComponentCreator('/no-code/customize/external-datasources', 'a36'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/fields/',
                component: ComponentCreator('/no-code/customize/fields/', '5ba'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/fields/field-attributes',
                component: ComponentCreator('/no-code/customize/fields/field-attributes', 'eb0'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/fields/field-type-autonumber',
                component: ComponentCreator('/no-code/customize/fields/field-type-autonumber', '5bd'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/fields/field-type-summary',
                component: ComponentCreator('/no-code/customize/fields/field-type-summary', '091'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/fields/field-types',
                component: ComponentCreator('/no-code/customize/fields/field-types', '921'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/fields/relationship',
                component: ComponentCreator('/no-code/customize/fields/relationship', 'c5d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/formula/',
                component: ComponentCreator('/no-code/customize/formula/', 'e03'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/formula/cross-object',
                component: ComponentCreator('/no-code/customize/formula/cross-object', '39b'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/formula/datetime',
                component: ComponentCreator('/no-code/customize/formula/datetime', '621'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/formula/formula-field',
                component: ComponentCreator('/no-code/customize/formula/formula-field', 'b7d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/formula/functions',
                component: ComponentCreator('/no-code/customize/formula/functions', 'fde'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/formula/overview',
                component: ComponentCreator('/no-code/customize/formula/overview', '9e6'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/listview',
                component: ComponentCreator('/no-code/customize/listview', '1d0'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/object',
                component: ComponentCreator('/no-code/customize/object', '5b3'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/object-functions',
                component: ComponentCreator('/no-code/customize/object-functions', '53d'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/object-relationship',
                component: ComponentCreator('/no-code/customize/object-relationship', 'c59'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/object-triggers',
                component: ComponentCreator('/no-code/customize/object-triggers', '8af'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/page-layout',
                component: ComponentCreator('/no-code/customize/page-layout', 'c8b'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/no-code/customize/validation-rules',
                component: ComponentCreator('/no-code/customize/validation-rules', 'f9f'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/architecture',
                component: ComponentCreator('/platform/architecture', 'bf3'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/',
                component: ComponentCreator('/platform/features/', '9d3'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/analytics',
                component: ComponentCreator('/platform/features/analytics', '0ec'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/app-builder',
                component: ComponentCreator('/platform/features/app-builder', '647'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/approval-workflow',
                component: ComponentCreator('/platform/features/approval-workflow', '8ba'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/automation',
                component: ComponentCreator('/platform/features/automation', '6c4'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/data-modeling',
                component: ComponentCreator('/platform/features/data-modeling', 'db7'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/form-builder',
                component: ComponentCreator('/platform/features/form-builder', '103'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/integration',
                component: ComponentCreator('/platform/features/integration', '808'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/page-builder',
                component: ComponentCreator('/platform/features/page-builder', 'c79'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/features/permission',
                component: ComponentCreator('/platform/features/permission', 'b92'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/lowcode',
                component: ComponentCreator('/platform/lowcode', '20e'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/open-source-low-code',
                component: ComponentCreator('/platform/open-source-low-code', '2a1'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/platform/solutions',
                component: ComponentCreator('/platform/solutions', 'b2f'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/plugins',
                component: ComponentCreator('/plugins', '75c'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/plugins/integration-ding',
                component: ComponentCreator('/plugins/integration-ding', '356'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/plugins/integration-qywx',
                component: ComponentCreator('/plugins/integration-qywx', '979'),
                exact: true,
                sidebar: "platform"
              },
              {
                path: '/solutions/assets',
                component: ComponentCreator('/solutions/assets', '955'),
                exact: true,
                sidebar: "solutions"
              },
              {
                path: '/solutions/contract',
                component: ComponentCreator('/solutions/contract', '608'),
                exact: true,
                sidebar: "solutions"
              },
              {
                path: '/solutions/expense',
                component: ComponentCreator('/solutions/expense', '8e7'),
                exact: true,
                sidebar: "solutions"
              },
              {
                path: '/solutions/files',
                component: ComponentCreator('/solutions/files', '124'),
                exact: true,
                sidebar: "solutions"
              },
              {
                path: '/solutions/overview',
                component: ComponentCreator('/solutions/overview', '54d'),
                exact: true,
                sidebar: "solutions"
              },
              {
                path: '/solutions/pcmes',
                component: ComponentCreator('/solutions/pcmes', '351'),
                exact: true,
                sidebar: "solutions"
              },
              {
                path: '/solutions/project',
                component: ComponentCreator('/solutions/project', '8c0'),
                exact: true,
                sidebar: "solutions"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
