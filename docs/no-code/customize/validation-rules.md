# Validation Rules

Improve the quality of your data using validation rules. Validation rules verify that the data a user enters in a record meets the standards you specify before the user can save the record. A validation rule can contain a formula or expression that evaluates the data in one or more fields and returns a value of “True” or “False”. Validation rules also include an error message to display to the user when the rule returns a value of “True” due to an invalid value.



FIELD | DESCRIPTION
-- | --
Rule Name | Unique identifier of up to 40 characters with no spaces or special characters such as extended characters.
Active | Checkbox that indicates if the rule is enabled.
Description | A 255-character or less description that distinguishes the validation rule from others. For internal purposes only.
Error Condition Formula | The expression used to validate the field. See Build a Formula Field and Formula Operators and Functions.
Error Message | The message that displays to the user when a field fails the validation rule.


<!-- 在Steedos中，用户可以为每一个对象创建验证规则。验证规则主要用于验证该对象的数据是否符合特定的规则。当用户对于对象的某个字段的更改不符合用户创建的验证规则时，Steedos会拒绝保存用户的输入。

 ![](https://console.steedos.cn/api/files/images/vtxej7xKQtdABNNLr)

比如：用户可以创建验证规则，使得每一个“业务机会”的“金额”数值必须大于1000，否则拒绝保存。验证规则适用于对象被添加或更改的所有场景。最常见的情况是用户在“编辑”界面点击“保存”按钮时进行验证。

验证规则可以包含公式或表达式，它们会计算一个或多个字段中的数据，然后返回“真”或“假”值。验证规则还包含当规则返回“真”值时要显示给用户的错误消息，以红色文本显示。

#### 管理验证规则

使用验证规则提高数据质量。在某个对象管理详细页的对象验证规则子表栏，您可以：

* 创建验证规则
* 单击规则名称旁边的编辑来修改验证规则
* 单击规则名称旁边的删除来删除验证规则
* 单击验证规则名称以查看更多详细信息

### 创建验证规则

 ![](https://console.steedos.cn/api/files/images/HjBusis6jKwamKHSq)

* 在“设置”应用中点击“对象设置”-“对象”并点击某条详细记录，在对象详细信息页面找到对象验证规则子表，单击新建。
* 为验证规则输入规则名，该名称作为API名称是唯一标识符，只能包含小写字母、数字，必须以字母开头，不能以下划线字符结尾或包含两个连续的下划线字符。
* 如果想立即启用请勾选上已启用。
* 可以为验证规则输入说明。
* 设置错误条件公式，用于验证字段的表达式。
* 设置错误消息，当字段的错误条件公式成立时向用户显示的消息。
* 选择错误位置，确定错误消息显示在页面上的位置。\[暂不支持，目前是统一显示在右上角。\]
* 设置完成后点击保存。

#### 使用验证规则

* 要使用验证规则，请先确保验证规则已经启用。
* 可以通过创建记录或编辑现有记录来测试验证规则效果。
* 当单击保存时将执行验证规则：

> *如果所有数据有效，将保存此记录。*
>
> *如果任一数据无效，将显示关联的错误消息，不保存该记录。*

* 如果验证不通过，用户可进行必要的更改后，再次单击保存，直到所有验证规则都通过才能成功保存记录。


#### 编写提示

* 验证规则是在记录被保存前触发的，如果验证不通过会阻止记录保存。
* 请考虑可能会使记录无法通过验证的所有设置，比如字段更新、隐藏字段、公式及汇总字段。
* 务必小心，不要为同一个字段创建多个冲突的验证规则，否则用户将无法保存记录。
* 设计不当的验证规则会妨碍用户保存有效数据。启用验证规则之前，确保您已充分测试该验证规则。
* 在验证公式中引用相关字段时，确保已部署了这些对象及字段。
* 验证规则中公式应该按返回值为布尔类型来编制，返回值为TRUE才验证不通过。
* 不必使用 IF 函数来开始验证规则公式。只需使用布尔错误条件表达式即可。例如： 正确：`CloseDate < TODAY()` 错误：`IF(CloseDate < TODAY(), TRUE, FALSE)`
* 请记住，当验证规则包含 BEGINS 或 CONTAINS 函数时，它会将空白字段处理为有效字段。例如，如果您的验证规则要测试资产序列号是否以“3”开始，则序列号为空白的所有资产都将视为有效。
* 使用验证规则时需要注意字段值为空的情况，请使用 ISBLANK 函数判断字段是否为空。例如，要验证自定义字段不为空且不能等于1，请使用下面的验证规则以在该字段为空白或1时显示错误：`OR (ISBLANK (field__c), field__c=1)`
* 使用验证规则时需要注意字段值为空的情况，请使用 ISBLANK 函数判断字段是否为空。例如，要验证自定义字段不为空且不能等于1，请使用下面的验证规则以在该字段为空白或1时显示错误：OR (ISBLANK (field**c), field**c=1)


> 与公式字段不同，在配置验证规则时不可以配置空值处理方式，如果公式中引用了值为空的数值类型的字段时，是按0值处理的，即 ISBLANK(count__c) 这样的表达式，只要count__c字段类型是数值，任何情况下在验证规则中它的返回值都是TRUE，另一个空值处理函数 BLANKVALUE 也类似。

#### 编写验证规则错误消息的提示

* **提供操作指导。** “无效条目”这样的错误消息并没有告诉用户哪类条目有效。编写一些更为具体的消息，例如“结束日期必须晚于今天”。
* **始终包括字段标签。** 用户可能不知道哪个字段验证失败，尤其当错误消息不是出现在字段旁边而是出现在右上角时。
* 如果需要多语言提示错误信息，可能需要翻译错误消息。您可以在错误信息中直接输入对应的i18n翻译key，比如`email_format_error`，这会显示错误信息“邮件格式错误”。

### 验证规则注意事项

在实施验证规则前，请先了解以下注意事项。

* 当一条验证规则失败时，Steedos不会继续对该字段或页面中的其他字段检查其他验证规则。
* 如果工作流规则、批准过程等配置了字段更新，且要更新的字段上正好配置了验证规则的话，当触发字段更新时，不会触发相关字段的验证规则。
* 由于公式字段中的公式是在记录被保存(afterInsert/afterUpdate)后才触发的，所以如果验证规则中引用了公式字段，有可能与设计验证规则的初衷不同，因为触发验证规则时其中引用的公式字段值可能是之前已经在数据库中保存过的老值，而且在公式字段本身值变更时不会再次触发执行验证规则。
* 与公式字段一样，如果验证规则中引用了累计汇总字段，当汇总字段值在变更时也不会触发执行验证规则，比如主记录有一个验证规则，要求累计汇总字段值必须小于100。如果用户对相关子记录的更改将输入超过 100 的值，希望用户无法保存该子表记录，实际上子记录变更时主记录的验证规则是不会被触发的，要实现这个需求，通常的做法是把验证规则配置在子表而不是主表中，类似：`lookup_mater_object_field.summary_value + current_value >= 100`。


### 验证规则示例

请按您的实际目的，查看以下有参考价值的验证规则示例。用户保存记录之前，验证规则会验证用户在记录中输入的数据是否符合您指定的标准。


**客户编号为数字**

* **说明：** 验证非空客户编号是否为数字。
* **公式：**

```javascript
AND(
   NOT(ISBLANK(AccountNumber)),
   NOT(ISNUMBER(AccountNumber))
)
```

* **错误消息**：客户编号不为数字。
* **错误位置**：客户编号


> Steedos公式引擎暂时不支持ISNUMBER函数，可以用正则代替，请参考 REGEX 函数,该示例可替换为：


```javascript
AND(
   NOT(ISBLANK(AccountNumber)),
   NOT(REGEX(AccountNumber, "[0-9]+(.[0-9]+)*"))
)
```


**中国手机号码包含11位数字**

* **说明**：验证电话号码的格式是 13800000000。这通过使用 REGEX 函数检查数字是否采用 13800000000 格式的11位数字工作。
* **公式：**`NOT(REGEX(Phone, "1[3-9][0-9]{9}"))`
* **错误消息**：中国手机号码必须为此格式： 13800000000。
* **错误位置**：手机号


**日期必须属于当月**

* **说明**：验证自定义日期字段包含的日期属于当年当月。
* **公式：**

```javascript
OR (
   YEAR( My_Date__c ) <> YEAR ( TODAY() ),
   MONTH( My_Date__c ) <> MONTH ( TODAY() )
)
```

* **错误消息**：日期必须属于当月。
* **错误位置**：我的日期


> `My_Date__c`是一个日期类型字段，而不是日期时间类型字段，否则上述公式会报错。
>
> 如果需要，请关注TODAY函数对于时区方面的偏差，以防止出现预期不一致的效果。

 -->
