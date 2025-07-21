---
sidebar_position: 8
sidebar_label: Import Data
---
# Import Data Into Steedos

Steedos offers several ways to import your data. You can import up to 50,000 records into Steedos.



<!-- ---
title: 数据导入
description: 本文档介绍系统管理员如何通过对象数据导入功能，批量导入来维护对象相关数据。
---

## 数据导入功能使用

### 导入入口

管理员登录进入系统后点击右上角的“⚙”--“设置”进入设置界面，当我们需要批量导入对象数据时点击“对象设置”->"数据导入”界面右上角的“新建”按钮，来自定义对象导入设置。

 ![](https://console.steedos.cn/api/files/images/Yxfss7K2L8AYRBv7g)

### 导入配置

点击新建，创建对象导入相关配置；

 ![](https://console.steedos.cn/api/files/images/ihzXCcEEgXwT9gay5)

* **导入描述**：填写创建记录的描述性说明文字；
* **导入对象**：选择需要批量导入的对象；
* **导入操作**：包含新增、更新，以及存在则更新，不存在则新增三种数据导入方式；
* **字段映射**：用来配置excel表格和对象字段的映射关系，通过点击“+新建”按钮来逐一增加导入相关字段信息；其中，**表头**部分填写excel表格里第一行的部分(excel表格必须拥有表头)，**导入对象的字段**选择导入对象上对应属性。当导入的某个属性是lookup或者master-detail类型时，使用**关联对象的key**来指定本列数据对应关联对象上哪个属性(类似reference_to_field)；不是lookup或者master-detail类型时则填写无效；
* **表示数据唯一性字段**：可通过设置字段来针对对象数据重复导入时跟进设置的字段来更新相关记录；


<alert type="tip">
用户简档在excel里填写的是admin，对应到profile对象上是profile的name，就在这一列填上“name”；此外，如果根据给定的简档name找不到对应的profile，例如表格里是test，没有名为test的简档，此条数据会报错被跳过，如果需要在报错的情况下仍然向数据库内导入profile=test的人员，勾选“**关联失败时保存key**”即可.

</alert>


以上配置完成后设置好后，对象导入配置记录详细页如下：

 ![对象配置页面](https://console.steedos.cn/api/files/images/wtkZTpdFJJLobCQp4)


### 数据导入

Steedos支持用户前台数据导入功能，对象数据导入映射关系配置完成后，同时用户对配置的导入对象有新增权限，此时就在相关对象的列表页出现“导入数据”的按钮来执行数据导入操作。

 ![](https://console.steedos.cn/api/files/images/w3HafnvrwgHYkjqyw)

点击“导入数据”按钮，选择管理员配置好的数据导入记录，同时可以在弹出的记录页下载导入模版；

 ![](https://console.steedos.cn/api/files/images/S3idXen7gfzeCBzx2)

上传维护好的导入信息，点击“**提交**”保存导入信息，同时进行数据导入操作。

 ![](https://console.steedos.cn/api/files/images/hFHgEs3KtPeoHZe2p)

### 导入结果

导入完成后，页面顶部会提示导入完成，同时可以点击查看导入的详细信息。

 ![](https://console.steedos.cn/api/files/images/ETmX5AatHFeL23EMu)

若无报错，则导入成功，显示相应导入记录数，同时相应对象列表可以看到相关数据。

 ![](https://console.steedos.cn/api/files/images/oB3Astb4i634mwRQ4)

若有报错，会显示在数据导入的**错误信息**字段里，刷新页面即可看到。调整相应错误数据或者检查对象配置的映射关系重新进行导入操作即可。

 ![](https://console.steedos.cn/api/files/images/tkctaQP8cnBmqYHKC)另外，管理员能够后后台配置的导入记录中能够看到所有的导入明细记录情况，点击记录序号，也可以查看导入完成后的相关信息。

 ![](https://console.steedos.cn/api/files/images/qthEZ8RzWjnvuK5sh) -->