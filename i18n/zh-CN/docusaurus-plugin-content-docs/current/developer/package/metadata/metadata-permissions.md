---
title: 权限元数据
---


## 简档 .profile.yml

简档只约定了一个名称，定义了简档之后，就可以在对象权限中定义此简档对具体对象的访问权限。

一个用户只能属于一个简档。元数据中不能指定具体用户的具体简档。系统管理员可以在用户管理界面中设置用户的简档。

系统有4个默认简档：

* admin： 系统管理员，默认对所有对象有最高权限
* user： 普通用户，通常对大部分对象拥有增删改权限
* customer： 外部客户，默认无权限
* supplier： 外部供应商，默认无权限

```yaml
name: user
license: platform
```

| 属性名 | 属性类型 | 属性含义 |
|----|----|----|
| name | text | API名称 |
| label | text | 显示名称 |
| type | select | 类别 |
| license | lookup | 许可证 |
| assigned_apps | lookup | 授权应用 |
| users | lookup | 成员 |
| is_system | boolean | 系统 |
| password_history | lookup | 强制密码历史 |
| max_login_attempts | select | 最大无效登录尝试次数 |
| lockout_interval | select | 锁定有效期间 |
| enable_MFA | boolean | 多重身份验证(需要开启短信服务) |
| logout_other_clients | boolean | 单例登录 |
| login_expiration_in_days | number | 登录到期时间(天) |
| phone_logout_other_clients | boolean | 手机App单例登录 |
| phone_login_expiration_in_days | number | 手机App登录到期时间(天) |


补充说明：

- **type**: profile（简档）/permission_set（权限集），默认值为profile，简档是一种特殊的权限集。
- **assigned_apps**:	授权对简档/权限集下的用户可以访问的应用，默认为空，表示授权全部应用
- **users**: 分配哪些用户到权限集，如果是简档不需要指定该属性，因为用户属于哪个简档是在用户界面上配置的，一个用户可以属于多个权限集，但是只能属于一个简档。
- **is_system**: 是否是系统简档，表示元数据是否只在代码文件中而没有保存到数据库中，可以点击名为“自定义”的操作按钮把该元数据保存到数据库中以在界面上修改相关属性。
- **password_history**: 强制密码历史，这是一种密码策略。密码的重复使用是一个重要问题，在越长时间内重复使用帐户的相同密码，被攻击破解的可能性就越大。使用该密码策略，可以强制用户在更改密码时，不能使用之前使用过又被该密码策略记住的密码，系统默认会记住3个历史密码，同时提供记住1到24个密码的选项，管理员可以变更该选项来修改属于特定简档用户的密码策略。
- **max_login_attempts**: 最大无效登录尝试次数，也是一种密码策略。设置将导致用户帐户被锁定的登录失败次数，默认最大尝试10次失败才会锁定账户，系统提供3次、5次、10次和无限制的选项，允许管理员变更该选项来修改属于特定简档下用户的密码策略，被锁定的账户将无法登录使用系统。
- **lockout_interval**: 锁定有效期间，也是一种密码策略。设置账户被锁定后，自动解锁之前保持锁定状态的分钟数。默认15分钟后被锁定的账户就会自动解锁，系统提供15分钟、30分钟、60分钟和始终锁定的选项，允许管理员变更该选项来修改属于特定简档下用户的密码策略，另外用户也可以求助管理员手动为用户解除锁定。
- **login_expiration_in_days**: 登录到期时间，这是一种登录策略，系统默认会在用户登录系统后90天自动清除其登录状态强制其重新登录以提升账户安全性，管理员可以在这里配置属于特定简档的账户多少天后会自动登出系统。
- **phone_login_expiration_in_days**: 手机App登录到期时间，也是一种登录策略，与登录到期时间一样，不过这里只针对手机APP客户端上的账户。
- **logout_other_clients**: 单例登录，也是一种登录策略，该策略强制一个账户只能在一处登录，每次登录某个客户端后，会自动注销以当前用户身份登录的其他客户端，默认不开启该策略，管理员可以为属于特定简档的用户开启该策略。
- **phone_logout_other_clients**: 手机App单例登录，也是一种登录策略，与单例登录一样，不过这里只针对手机APP客户端上的账户。
- **enable_MFA**: 多重身份验证，也是一种登录策略，使用该策略需要开启短信服务，默认不开启该策略，管理员可以开启短信服务后再为属于特定简档的用户开启该策略。

## 权限集 .permissionset.yml

权限集只约定了一个名称，定义了权限集之后，就可以在对象权限中定义此权限集对具体对象的访问权限。

一个用户可以拥有多个权限集，最终权限为叠加之后的结果。

元数据中未约定权限集并未绑定到具体用户，系统管理员可以在设置界面中配置适用此权限集的用户清单。

```yaml
name: contract_manager
label: 合同管理员
type: permission_set
```

系统有2个默认权限集：

* organization_admin： 分部管理员，用于为分部管理员额外增加权限。
* workflow_admin： 流程管理员，用于为流程管理员额外增加权限。

因为简档是一种特殊的权限集，所以它们拥有相同的元数据模型，并通过 `type` 属性来标识是属于简档还是普通的权限集，以下表格描述了哪些元数据属性分别属于哪种权限集，

| 属性名 | 简档 | 权限集 | 属性含义 |
|----|----|----|----|
| name | Y | Y | API 名称 |
| label | Y | Y | 显示名称 |
| type | Y | Y | 类别 |
| license | Y | Y | 许可证 |
| assigned_apps | Y | Y | 授权应用 |
| users | Y | Y | 成员 |
| is_system | Y | Y | 系统 |
| password_history | Y | N | 强制密码历史 |
| max_login_attempts | Y | N | 最大无效登录尝试次数 |
| lockout_interval | Y | N | 锁定有效期间 |
| login_expiration_in_days | Y | N | 登录到期时间 |
| phone_login_expiration_in_days | Y | N | 手机App登录到期时间 |
| logout_other_clients | Y | N | 单例登录 |
| phone_logout_other_clients | Y | N | 手机App单例登录 |
| enable_MFA | Y | N | 多重身份验证 |

## 对象权限 .permission.yml

设定某一个简档（或权限集）对当前对象的访问权限。

```yaml
name: 合同.用户
allowCreate: true
allowDelete: true
allowEdit: true
allowRead: true
modifyAllRecords: false
modifyCompanyRecords: false
permission_set_id: user
viewAllRecords: false
viewCompanyRecords: false
```

| 属性名 | 属性类型 | 属性含义 |
|----|----|----|
| name | formula | 名称 |
| permission_set_id | master_detail | 权限集 |
| object_name | lookup | 对象 |
| allowRead | boolean | 允许查看 |
| allowCreate | boolean | 允许创建 |
| allowEdit | boolean | 允许编辑 |
| allowDelete | boolean | 允许删除 |
| viewAllRecords | boolean | 查看所有记录 |
| modifyAllRecords | boolean | 修改所有记录 |
| viewCompanyRecords | boolean | 查看本分部 |
| modifyCompanyRecords | boolean | 修改本分部 |
| viewAssignCompanysRecords | lookup | 查看指定分部 |
| modifyAssignCompanysRecords | lookup | 修改指定分部 |
| allowReadFiles | boolean | 允许查看附件 |
| allowCreateFiles | boolean | 允许创建附件 |
| allowEditFiles | boolean | 允许修改附件 |
| allowDeleteFiles | boolean | 允许删除附件 |
| viewAllFiles | boolean | 查看所有附件 |
| modifyAllFiles | boolean | 修改所有附件 |
| disabled_list_views | lookup | 禁用列表视图 |
| disabled_actions | lookup | 禁用操作 |
| unreadable_fields | lookup | 不可见字段 |
| uneditable_fields | lookup | 不可编辑字段 |
| unrelated_objects | lookup | 禁用关联对象 |
| is_system | boolean | 系统 |

## 字段权限 .permission.yml

设定某一个简档（或权限集）对当前对象下的字段的访问权限，与对象权限共用配置文件，相关配置保存在`field_permissions`属性中。

```yaml
name: 合同.用户
allowCreate: true
allowDelete: true
allowEdit: true
allowRead: true
modifyAllRecords: false
modifyCompanyRecords: false
permission_set_id: user
viewAllRecords: false
viewCompanyRecords: false
field_permissions:
  - field: name
    readable: true
    editable: true
  - field: owner
    readable: false
    editable: true
  - field: created
    readable: true
    editable: false
  - field: created_by
    readable: true
    editable: false
  - field: modified
    readable: true
    editable: false
  - field: modified_by
    readable: true
    editable: false
  - field: locked
    readable: false
    editable: false
  - field: company_id
    readable: false
    editable: false
  - field: company_ids
    readable: false
    editable: false
  - field: instance_state
    readable: false
    editable: false
  - field: amount__c
    readable: true
    editable: true
```

| 属性名 | 属性类型 | 属性含义 |
|----|----|----|
| name | text | Api 名称 |
| permission_set_id | lookup | 权限集 |
| permission_object | master_detail | 对象权限 |
| object_name | lookup | 对象 |
| field | lookup | 字段 |
| readable | boolean | 允许查看 |
| editable | boolean | 允许编辑 |
| is_system | boolean | 系统 |

## 限制规则 .restrictionRule.yml

在对象上配置限制规则来收缩用户对业务对象记录级的查看权限，满足此过滤条件的记录，用户始终禁止查看。
该规则并不是基于简档（或权限集）来配置，但是可以在指定条目条件中判断当前用户所属简档（或权限集）。

```yaml
name: test
entry_criteria: '{{$user.roles.indexOf("salesman") > -1}}'
object_name: contracts__c
record_filter: '{{[["profile__c", "=", "customer"], "or", ["owner", "=", $user.userId]]}}'
```

| 属性名 | 属性类型 | 属性含义 |
|----|----|----|
| name | text | Api 名称 |
| object_name | lookup | 对象 |
| active | boolean | 启用 |
| entry_criteria | textarea | 指定条目条件 |
| record_filter | textarea | 记录过滤器 |
| description | textarea | 描述 |
| is_system | boolean | 系统 |

## 共享规则 .shareRule.yml

在对象上配置共享规则来放大用户对业务对象记录级的查看权限，满足此规则的记录，用户始终可以查看。
该规则并不是基于简档（或权限集）来配置，但是可以在指定条目条件中判断当前用户所属简档（或权限集）。

```yaml
name: test
active: true
entry_criteria: '{{$user.roles.indexOf("salesman") > -1}}'
object_name: contracts__c
record_filter: '{{[["company_id", "=", $user.company_id],["profile__c", "=", "customer"]]}}'
```

| 属性名 | 属性类型 | 属性含义 |
|----|----|----|
| name | text | Api 名称 |
| object_name | lookup | 对象 |
| active | boolean | 启用 |
| entry_criteria | textarea | 指定条目条件 |
| record_filter | textarea | 记录过滤器 |
| description | textarea | 描述 |
| is_system | boolean | 系统 |