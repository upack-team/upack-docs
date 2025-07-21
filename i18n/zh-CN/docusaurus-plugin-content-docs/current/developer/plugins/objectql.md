ObjectQL
===

ObjectQL 是面向对象的跨数据库查询语法。基于ObjectQL语法编写的函数兼容不同类型的数据库。

开发插件时，可以直接调用内核 `@steedos/objectql` 包操作数据库。

## 添加数据

支持添加单条数据和批量添加数据，以direct前缀表示直接执行相关操作不触发触发器。

### insert

添加单条记录。该函数会触发配置的触发器函数： beforeInsert 、afterInsert 。添加 “任务” 等特殊记录后会发送通知给指定人员。

- **使用**： insert(doc, userSession?)
- **参数**：
   - doc: `Dictionary<any>` 您希望插入的数据。
   - userSession: `SteedosUserSession` 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 插入成功后的数据。

```js
const { spaceId, userId } = this
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
var now = new Date();
// const _id  = await objectql.getObject('contacts')._makeNewID();
const doc = {
    // _id: _id,
    name: '小妹',
    space: spaceId,
    owner: userId,
    created_by: userId,
    modified_by: userId,
    created: now,
    modified: now
};
const result = await objectql.getObject(objectApiName).insert(doc);
console.log('result==>',result)
/*
result==> {
    _id: '84SFjtKFfonskA6CS',
    name: '小妹',
    space: 'M6x6ddKvpj9ddcYYm',
    owner: '606d7baa3393516019dbfb39',
    created_by: '606d7baa3393516019dbfb39',
    modified_by: '606d7baa3393516019dbfb39',
    created: 2021-10-27T08:14:47.158Z,
    modified: 2021-10-27T08:14:47.158Z
}
*/
```

如果doc中包含自定义 _id , 则以此为准，否则会自动生成一个 _id 。

内置生成ID的工具函数： objectql.getObject(objectApiName)._makeNewID()

在触发器函数中可以通过this获取 spaceId、userId的值。


|基础属性|属性含义|是否必填|
|  ----  | ----  | ----  |
| name	| 记录名称	    | yes |
| space	| 当前工作区id	| yes |
| owner	| 记录所属人员	 | yes |
| created_by| 创建人员	| yes |
| modified_by| 修改人员 | yes |
| created	| 创建时间	| no (系统会自动维护） |
| modified	| 修改时间	| no (系统会自动维护） |

### directInsert

添加单条记录。不会触发执行相关触发器函数。

- **使用**： directInsert(doc, userSession?)
- **参数**：
   - doc: `Dictionary<any>` 您希望插入的数据。
   - userSession: `SteedosUserSession` 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 插入成功后的数据。

```js
const { spaceId, userId } = this
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
var now = new Date();
// const _id  = await objectql.getObject('contacts')._makeNewID();
const doc = {
    // _id: _id,
    name: '大哥',
    space: spaceId,
    owner: userId,
    created_by: userId,
    modified_by: userId,
    created: now,
    modified: now
};
await objectql.getObject(objectApiName).directInsert(doc);
```
<!--
### insertMany

添加多条记录。该函数会触发配置的触发器函数： beforeInsert 、afterInsert 。添加 “任务” 等特殊记录后会发送通知给指定人员。

- **使用**： insertMany(docs, userSession?)
- **参数**：
   - docs: `Dictionary<any>[]` 您希望插入的数据。
   - userSession: `SteedosUserSession` 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 插入成功后的数据。

```
const { spaceId, userId } = this
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
var now = new Date();
const docs = [
    {
        name: '小白',
        space: spaceId,
        owner: userId,
        created_by: userId,
        modified_by: userId,
        created: now,
        modified: now
    },
    {
        name: '大白',
        space: spaceId,
        owner: userId,
        created_by: userId,
        modified_by: userId,
        created: now,
        modified: now
    }
];
await objectql.getObject(objectApiName).insertMany(docs);
```

### directInsertMany

添加多条记录。不会触发执行相关触发器函数。

- **使用**： directInsertMany(docs, userSession?)
- **参数**：
   - docs: `Dictionary<any>[]` 您希望插入的数据。
   - userSession: `SteedosUserSession` 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 插入成功后的数据。

```
const { spaceId, userId } = this
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
var now = new Date();
const docs = [
    {
        name: '小白',
        space: spaceId,
        owner: userId,
        created_by: userId,
        modified_by: userId,
        created: now,
        modified: now
    },
    {
        name: '大白',
        space: spaceId,
        owner: userId,
        created_by: userId,
        modified_by: userId,
        created: now,
        modified: now
    }
];
await objectql.getObject(objectApiName).directInsertMany(docs);
```
-->

## 修改数据

支持修改单条数据和批量修改数据，以direct前缀表示直接执行相关操作不触发触发器。

### update

更新单条记录。该函数会触发配置的触发器函数： beforeUpdate 、afterUpdate 。更新 “任务” 等特殊记录后会发送通知给指定人员。

- **使用**： update(id, doc, userSession?)
- **参数**：
   - id: number | string 您希望变更数据的id。
   - doc: `Dictionary<any>` 您希望更新的数据。
   - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 更新成功后的数据。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const id = '84SFjtKFfonskA6CS';
const doc = {
    name: "三妹",
};
const result = await objectql.getObject(objectApiName).update(id, doc);
console.log('result==>', result)
/*
result==> {
    _id: '84SFjtKFfonskA6CS',
    name: '三妹',
    space: 'M6x6ddKvpj9ddcYYm',
    owner: '606d7baa3393516019dbfb39',
    created_by: '606d7baa3393516019dbfb39',
    modified_by: '606d7baa3393516019dbfb39',
    created: 2021-10-27T08:14:47.158Z,
    modified: 2021-10-27T08:50:40.918Z
}
*/
```

### directUpdate

更新单条记录。不会触发执行相关触发器函数。

- **使用**： directUpdate(id, doc, userSession?)
- **参数**：
    - id: number | string 您希望变更数据的id。
    - doc: `Dictionary<any>` 您希望更新的数据。
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 更新成功后的数据。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const id = '84SFjtKFfonskA6CS';
const doc = {
    name:"三妹-婉儿",
};
const result = await objectql.getObject(objectApiName).directUpdate(id,doc);
console.log('result==>',result)
/* 
result==> {
    _id: '84SFjtKFfonskA6CS',
    name: '三妹-婉儿',
    space: 'M6x6ddKvpj9ddcYYm',
    owner: '606d7baa3393516019dbfb39',
    created_by: '606d7baa3393516019dbfb39',
    modified_by: '606d7baa3393516019dbfb39',
    created: 2021-10-27T08:14:47.158Z,
    modified: 2021-10-27T08:50:40.918Z
} 
*/
```
<!--
### updateMany

更新多条记录。该函数会触发配置的触发器函数： beforeUpdate 、afterUpdate 。更新 “任务” 等特殊记录后会发送通知给指定人员。

- **使用**： updateMany(filters, doc, userSession?)
- **参数**：
   - filters: SteedosQueryFilters 过滤条件，过滤出符合条件的数据记录。
   - doc: `Dictionary<any>` 您希望更新的数据记录字段。
   - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 更新成功后的数据。

```
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const filters = ["name","contains","Important"];
const doc = {
    important: true,
};
await objectql.getObject(objectApiName).updateMany(filters, doc);
```

### directUpdateMany

更新多条记录。不会触发执行相关触发器函数。

- **使用**： directUpdateMany(filters, doc, userSession?)
- **参数**：
   - filters: SteedosQueryFilters 过滤条件，过滤出符合条件的数据记录。
   - doc: `Dictionary<any>` 您希望更新的数据记录字段。
   - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 更新成功后的数据。

```
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const filters = ["name","contains","Important"];
const doc = {
    important: true,
};
await objectql.getObject(objectApiName).directUpdateMany(filters, doc);
```
-->
## 删除数据

支持删除单条数据和批量删除数据，以direct前缀表示直接执行相关操作不触发触发器。

### delete
删除单条记录。该函数会触发配置的触发器函数： beforeDelete、afterDelete 。
- **使用**： delete(id, userSession?)
- **参数**：
    - id: number | string 您希望删除数据的id。
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 成功：1，  失败：抛出报错信息。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const id = '84SFjtKFfonskA6CS';
const result = await objectql.getObject(objectApiName).delete(id);
console.log('result==>',result)
// result==> 1
```

### directDelete

删除单条记录。不会触发执行相关触发器函数。

- **使用**： directDelete(id, userSession?)
- **参数**：
    - id: number | string 您希望删除数据的id。
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 成功：1， 失败：抛出报错信息。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const id = '9y3QTHCGKwhkTTibg';
const result = await objectql.getObject(objectApiName).directDelete(id);
console.log('result==>',result)
// result==> 1
```
<!--
### deleteMany

批量删除数据。 该函数会触发配置的触发器函数： beforeDelete、afterDelete 。

- **使用**： deleteMany(filters, userSession?)
- **参数**：
    - filters: array 过滤条件，过滤出符合条件的数据记录。
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 成功：1，  失败：抛出报错信息。

```
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const filters = ["name","contains","Important"];
await objectql.getObject(objectApiName).deleteMany(filters);
```

### directDeleteMany

批量删除数据。不会触发执行相关触发器函数。

- **使用**： directDeleteMany(filters, userSession?)
- **参数**：
    - filters: array 过滤条件，过滤出符合条件的数据记录。
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 成功：1，  失败：抛出报错信息。

```
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const filters = ["name","contains","Important"];
await objectql.getObject(objectApiName).directDeleteMany(filters);
```
-->
## 查找数据

提供了五种查找数据的方法和一种查看对象配置详情的方法

### find

查找多条记录。该函数会触发配置的触发器函数： beforeFind、afterFind 。

- **使用**： find(query, userSession?)
- **参数**：
    - query: SteedosQueryOptions 查询数据相关参数[json]。
        - fields: Array字段名数组 , 选填。 例如：['字段名1', '字段名2']
        - filters: SteedosQueryFilters查询条件数组, 选填
        - sort: string排序规则, 选填
        - top: number返回记录数, 选填
        - skip: number跳过记录数，通常用于分页显示, 选填。
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 记录数组。未找到时返回空数组[]。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const query = {
    fields: ['name', 'created_by','created'],
    filters: [['name','contains','领导']],
    sort: 'name desc'
};
const result = await objectql.getObject(objectApiName).find(query);
console.log('result==>',result)
/* 
result==> [
  {
    _id: '2iS93Hv8QNcxfMief',
    name: '李领导',
    created: 2021-08-25T06:25:37.183Z,
    created_by: '606d7baa3393516019dbfb39'
  },
  {
    _id: 'zCETjWE6thjWqeyek',
    name: '张领导',
    created: 2021-10-27T06:50:16.866Z,
    created_by: '606d7baa3393516019dbfb39'
  }
]
*/
```

### findOne

查找单条记录。该函数会触发配置的触发器函数： afterFindOne、beforeFind 。

- **使用**： findOne(id, query, userSession?)
- **参数**：
    - id: number | string 您希望查询单条记录的id。
    - query: SteedosQueryOptions 查询数据相关参数[json]。
        - fields: Array字段名数组, 选填。 例如：['字段名1', '字段名2']
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**： 单条记录[json]。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const id = 'ihJqoP3n4mwSDwGxw';
const query = {
    fields: ['name', 'created_by','created'],
};
const result = await objectql.getObject(objectApiName).findOne(id, query);
console.log('result==>',result)
/* 
result==> {
    _id: 'ihJqoP3n4mwSDwGxw',
    name: '张三',
    created: 2021-04-23T08:48:06.513Z,
    created_by: '606d7baa3393516019dbfb39'
}
*/
```

### directFind

查找多条记录。不会触发执行相关触发器函数。

- **使用**： directFind(query, userSession?)
- **参数**：
    - query: SteedosQueryOptions 查询数据相关参数[json]。
        - fields: Array字段名数组 , 选填。 例如：['字段名1', '字段名2']
        - filters: SteedosQueryFilters查询条件数组, 选填
        - sort: string排序规则, 选填
        - top: number返回记录数, 选填
        - skip: number跳过记录数，通常用于分页显示, 选填。
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**：记录数组。未找到时返回空数组[]。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const query = {
    fields: ['name', 'created_by','created'],
    filters: [['name','contains','领导']],
    sort: 'name desc',
    top: 1
};
const result = await objectql.getObject(objectApiName).directFind(query);
console.log('result==>',result)
/* 
result==> [
  {
    _id: '2iS93Hv8QNcxfMief',
    name: '李领导',
    created: 2021-08-25T06:25:37.183Z,
    created_by: '606d7baa3393516019dbfb39'
  }
]
*/
```

### aggregate

查找聚合记录。该函数会触发配置的触发器函数： beforeAggregate、afterAggregate 。

聚合：聚合操作处理数据记录并返回计算结果。聚合操作将来自多个文档的值组合在一起，并且可以对分组的数据执行各种操作以返回单个结果。

- **使用**： aggregate(query, externalPipeline ,userSession?)
- **参数**：
    - query: SteedosQueryOptions 查询数据相关参数[json]。
        - filters: SteedosQueryFilters查询条件数组, 选填
    - externalPipeline: ArrayMongodb ggregation Pipeline
    - userSession: SteedosUserSession 当前用户登录信息，非必填；如果未传入userSession，则不进行权限校验。
- **返回值**：聚合记录数组。

```js
// 示例1：
const objectql = require('@steedos/objectql');
const objectApiName = "contacts";
const query = {filters: [["name","contains",'领导']]};
const externalPipeline = [{ $count: 'leaders_count'}];
const result = await objectql.getObject(objectApiName).aggregate(query, externalPipeline);
console.log('result==>',result)
// leaders_count: 联系人名称中包含“领导”的人数。
// result==> [ { leaders_count: 7 } ]

// 示例2：
const objectql = require('@steedos/objectql');
const objectApiName = "accounts"; 
const query = {filters: [["is_customer","=",true]]}; 
const externalPipeline = [{ $group: {_id:'total', total: { '$sum': '$number_of_employees'}}}];
const result = await objectql.getObject(objectApiName).aggregate(query, externalPipeline);
console.log('result==>',result)
// total: 属于客户的业务伙伴的员工总人数.
//result==> [ { _id: 'total', total: 450 } ]
```

### directAggregate

查找聚合记录。不会触发执行相关触发器函数。  

聚合：聚合操作处理数据记录并返回计算结果。聚合操作将来自多个文档的值组合在一起，并且可以对分组的数据执行各种操作以返回单个结果。
- **使用**： directAggregate(query, externalPipeline ,userSession?)
- **参数**：
    - query: SteedosQueryOptions 查询数据相关参数[json]。
        - filters: SteedosQueryFilters查询条件数组, 选填
    - externalPipeline: ArrayMongodb ggregation Pipeline
    - userSession: SteedosUserSession 当前用户登录信息，非必填;  如果未传入userSession，则不进行权限校验。
- **返回值**：聚合记录数组。

```js

// 示例1：
const objectql = require('@steedos/objectql');
// contacts: 联系人对象
const objectApiName = "contacts";
// filters：联系人名称中包含 ”领导“
const query = {filters: [["name","contains",'领导']]};
const externalPipeline = [{ $count: 'leaders_count'}];
const result = await objectql.getObject(objectApiName).directAggregate(query, externalPipeline);
console.log('result==>',result)
// leaders_count: 联系人名称中包含“领导”的人数。
// result==> [ { leaders_count: 7 } ]

// 示例2：
const objectql = require('@steedos/objectql');
// accounts：业务伙伴对象
const objectApiName = "accounts"; 
// is_customer: 字段名，业务伙伴是否是客户
const query = {filters: [["is_customer","=",true]]}; 
// number_of_employees: 字段名，员工人数
const externalPipeline = [{ $group: {_id:'total', total: { '$sum': '$number_of_employees'}}}];
const result = await objectql.getObject(objectApiName).directAggregate(query, externalPipeline);
console.log('result==>',result)
// total: 属于客户的业务伙伴的员工总人数.
//result==> [ { _id: 'total', total: 450 } ]
```

### toConfig

- 使用： toConfig()
- 返回值：对象配置详情。

```js
const objectql = require('@steedos/objectql');
const objectApiName = "contracts";
const result = await objectql.getObject(objectApiName).toConfig();
/* result:   
{ 
  name: 'contracts', 
  fields: {
    name:{
      name: 'name',
      label: 'Title',
      type: 'text',
      required: true,
      ...
    },
    ...
  },
  version: 2,
  list_views: {
    all: {
      name: 'all',
      ...
    }
  },
  actions: xxx,
  triggers: xxx,
  permission_set:xxx,
  ...
} 
*/
```

## 查询过滤条件

## 关于参数userSession

以上函数都可以传入可选参数userSession，该参数表示当前登录用户信息，如果传入了该参数，相关操作函数只会执行当前登录用户有权限执行的数据操作。

比如 **insert(doc, userSession?)**函数，如果未传入userSession，则不进行权限校验，直接执行数据插入操作；反之会根据传入的userSession做相关权限校验，只有当前用户对当前对象有新建权限时才会执行数据插入操作。

**update(id, doc, userSession?)**函数也类似，如果未传入userSession，则不进行权限校验，直接执行数据更新操作，反之会根据传入的userSession做相关权限校验，只有当前用户对当前对象及要编辑的记录有编辑权限时才会更新数据。

再比如 **find(query, userSession?)**函数，如果未传入userSession，则不进行权限校验，直接返回所有满足过滤条件的数据；反之会根据传入的userSession做相关权限校验，只会返回当前登录用户有权限查看的数据。

## 关于direct前缀函数

以上函数可以分为两种：一种以direct前缀命名，一种不以direct前缀。

以direct前缀命名：执行direct函数意味着直接操作数据库记录，并不会触发执行相关触发器函数，也不会触发执行任何工作流规则、公式字段或累计汇总字段重新计算等。

不以direct前缀命名：相关操作**insert/update/find**等执行完成后，会进一步触发执行该对象上配置的相关触发器函数，比如beforeUpdate,afterUpdate等触发器函数；然后会进一步触发执行满足条件的工作流规则；接着还会进一步触发关联的公式字段及累计汇总字段重新计算。

## 示例

下面例举了一些实际编程场景下调用ObjectQL相关函数的用法。

### 触发器中使用ObjectQL示例

```js
const auth = require("@steedos/auth");
const generatHtml = (doc)=>{
  ...
}
module.exports = {
    listenTo: 'web_forms',
    afterInsert: async function () {
        let doc = this.doc;
        let generatedHtml = generatHtml(doc);
        if(generatedHtml){
            const object = this.getObject("web_forms");
            const userSession = await auth.getSessionByUserId(this.userId);
            await object.directUpdate(doc._id, {generated_html:generatedHtml}, userSession);
        }
    },
    afterUpdate: async function () {
        // 因为afterUpdate中没有this.doc._id，所以把previousDoc集成过去，编辑单个字段时也需要从previousDoc中集成其他字段
        let doc = Object.assign({}, this.previousDoc, this.doc);
        let generatedHtml = generatHtml(doc);
        if(generatedHtml){
            const object = this.getObject("web_forms");
            const userSession = await auth.getSessionByUserId(this.userId);
            await object.directUpdate(doc._id, {generated_html:generatedHtml}, userSession);
        }
    }
}
```

### Router中使用ObjectQL示例

```js
const express = require("express");
const router = express.Router();
const core = require('@steedos/core');
const objectql = require('@steedos/objectql');

router.post('/api/contracts/locked/:id', core.requireAuthentication, async function (req, res) {
    const userSession = req.user;
    const isSpaceAdmin = userSession.is_space_admin;
    if(isSpaceAdmin){
        const { id } = req.params;
        await objectql.getObject("contracts").update(id, {
            locked: true
        });
        res.status(200).send({ message: '合同已归档成功', success:true });
    }
});
exports.default = router;
```