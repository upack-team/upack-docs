---
title: Page Layouts
---

Page layouts control the layout and organization of buttons, fields and related lists on object record pages. They also help determine which fields are visible, read only, and required. Use page layouts to customize the content of record pages for your users.

## Create Page Layouts

With the enhanced page layout editor, you can tailor record page layouts to the needs of your users.

## Assign Page Layouts to Profiles or Record Types

After defining page layouts, assign which page layouts users see. A user’s profile determines which page layout he or she sees. In addition, if your organization is using record types for a particular object, the combination of the user’s profile and the record type determine which page layout is displayed when a user views records for that object.

## Customize Related Lists

You can customize the buttons, columns displayed, column order, and record sort order of related lists on record detail pages in Steedos.

## Customize Standard and Custom Buttons on Page Layouts

When customizing page layouts, you can control which standard and custom buttons are displayed and the order in which the custom buttons appear.



<!-- 页面布局用于控制按钮、字段和相关子表的布局和组织方式。它们也帮助确定哪些字段可见、只读和必填。使用页面布局，为您的用户自定义记录页面的内容。

## 默认显示页面

在创建对象时，我们已经给对象增加了相应的字段，系统会自动生成对象记录的详情显示页面。

系统默认的详情显示页面，主要包括以下内容：

* 对象信息，按字段的排序号，显示所有字段的值
* 操作按钮，包括：新建、编辑、删除等
* 相关子表的记录列表，并附新建按钮

如果希望修改这个显示页面，就可以自定义页面布局。  
以下步骤描述了如何自定义页面布局。

## 创建页面布局

在对象设置详情页中找到“页面布局”子表，新建页面布局。

 ![](https://console.steedos.cn/api/files/images/KoLia3v33FxMPaD96)              ![](https://console.steedos.cn/api/files/images/ru3Boe5u7saDG9XYi)

其中，简档可选择“用户”

> 每个页面布局都需对应一个简档，关于内置/自定义简档的详情，会在后续课程中展开。这里，先理解为：每个用户都属于一个简档；除管理员外，其他用户都默认属于用户这个简档。

## 配置操作按钮
默认显示全部操作按钮。如果不想显示某些操作按钮，直接从列表中移除即可；如果想在特定情况下显示某些操作按钮，就在操作按钮的“显示条件”属性中输入对应的显示公式。

 ![](https://console.steedos.cn/api/files/images/GNcw9zGmjjWXNQutX)

 ![](https://console.steedos.cn/api/files/images/nyvgQvXWkBzo59EPS)
## 配置显示字段

默认显示全部字段。如果不想显示某些字段，直接从列表中移除即可；如果想在特定情况下显示某些字段，就在字段的“显示条件”属性中输入对应的显示公式。

 ![](https://console.steedos.cn/api/files/images/ardLNmdHx3kL2BGf4)

### 调整字段的显示顺序

点击字段最左侧的图标，并上下拖动，就能调整字段的显示顺序。

 ![](https://console.steedos.cn/api/files/images/uz8KQRKj69Lghw7oc)

### 调整字段的属性

每个字段可以修改只读、必填、分组、显示条件这些属性。

## 配置相关子表

默认显示全部子表。如果不想显示某些子表，直接从列表中移除即可；如果想在特定情况下显示某些子表，就在子表的“显示条件”属性中输入对应的显示公式。
 ![](https://console.steedos.cn/api/files/images/5qxpbqMg4Y8gmpPJ2)

### 调整子表的显示顺序

点击相关子表最左侧的图标，并上下拖动，就能调整相关子表在详情页的显示顺序。

 ![](https://console.steedos.cn/api/files/images/gNGqZgbBhhPtz7gzt)

### 调整子表的属性

在相关子表的这一行，可以修改相关子表的属性，包括：
* 显示标题：默认取该子表对象名作为当前的显示标题。
* 显示的字段：默认取该子表对象的”所有“列表视图中的字段作为当前子表显示的字段。系统内置对象会自动将该对象中”所有“列表视图中显示的字段填充在此；自定义对象不会填充对应的字段，但其是生效的。
* 排序字段
* 排序方式：正序/倒序。
* 过滤规则
* 显示条件
* 每页显示数量

![](https://console.steedos.cn/api/files/images/gR3dc23TJESy88bSK) -->