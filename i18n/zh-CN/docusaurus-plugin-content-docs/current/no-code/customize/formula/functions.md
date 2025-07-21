---
sidebar_position: 2
title: 公式运算符及函数
---

在构建公式时使用这些运算符和函数。除非另行指定，否则所有的函数都可用在任何能够包含公式（例如，公式字段、验证规则、批准过程和工作流规则）的位置。

## 函数

函数即系统定义的公式，可能需要您的输入值，并返回一个或几个值。例如，TODAY() 不需要输入值，但会返回当前日期。TEXT(value) 函数需要您输入百分比、数字或货币并返回文本。

## 运算符

一个符号，指定要执行的计算类型或其执行顺序。例如，“+”号指定两个值应相加。左括号和右括号指定想要先计算的表达式。


## 数学运算符

### + 加

计算两个值的和。

**使用：** `值 1 + 值 2`，并用合并字段、表达式或其他数值替换每个值。

**返回值：** 数值

```javascript
Amount + Maint_Amount__c + Services_Amount__c
```

此公式计算产品 Amount（金额）、维护金额与服务费的总和。请注意，Maint amount（维护金额）和 Service Fees（服务费）是自定义金额字段。

```javascript
Monday_Hours__c + Tuesday_Hours__c + Wednesday_Hours__c + Thursday_Hours__c + Friday_Hours__c > 40
```

使用如上验证规则中的公式，可以在为各个工作日输入的工作时间总和大于 40 时显示下面的错误消息：“总工作时间不能超过 40 个小时”。本示例要求自定义对象上有五个自定义字段，每个工作日一个。

### - 减

计算两个值的差。

**使用：** `值 1 - 值 2`，并合并字段、表达式或其他数值替换每个值。

**返回值：** 数值

```javascript
Amount - Discount_Amount__c
```


此公式计算产品 Amount（金额）减去 Discount Amount（折扣金额）的差。请注意，Discount Amount（折扣金额）是一个自定义金额字段。

### \* 乘

乘以其值。

**使用：** `值1 * 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 数值

```javascript
Consulting_Days__c * 1200
```


此公式计算咨询天数乘以 1200 的数值，假定此公式字段是货币数据类型且咨询按每天 1200 美元的价格收费。请注意，Consulting Days（咨询天数）是一个自定义字段。

### / 除

除以其值。

**使用：** `值1 / 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 数值

```javascript
AnnualRevenue/ NumberOfEmployees
```


此公式使用金额字段计算每个员工的收入金额。

```javascript
IF(NumberOfOpportunities > 0,  NumberOfWonOpportunities / NumberOfOpportunities, null)
```


此公式计算市场活动中业务机会的客户赢得率。

### ^ 幂

使一个数字变成指定数字的幂。

**使用：** `数字^整数`，用合并字段、表达式或其他数值替换数字，用包含整数的合并字段、表达式或任何整数替换整数。

**返回值：** 数值

```javascript
NumberOfEmployees^4
```


计算员工数的四次幂。


> 避免使用负整数

### () 括号

指定先计算左括号和右括号内的表达式。所有其他表达式均使用标准运算符优先权进行评估。

**使用：** `(表达式1) 表达式2...`，用合并字段、表达式或其他数值替换每个表达式。

```javascript
(Unit_Value__c - Old_Value__c) / New_Value__c
```


计算旧值与新值的差值，并除以新值。

## 逻辑运算符

### = 与 ==（等于）

计算两个值是否相等。= 和 == 运算符可以互换。

**使用：** `表达式1=表达式2 或表达式1 == 表达式2`，用合并字段、表达式或其他数值替换每个表达式。

**返回值：** 布尔

```javascript
ExpiringDate = CreatedDate + 5
```


如果到期日等于记录的创建日期与五天之和返回 true。

```javascript
IF(Probability = 1, ROUND(Amount*0.02, 2), 0)
```


此公式计算佣金金额，具有 100% 可能性的业务机会按 2% 计算佣金。所有其他业务机会的佣金值为零。

具有 90% Probability（可能性）的业务机将无法获得佣金。

具有 100% Probability（可能性）和 100,000 美元 Amount（金额）的业务机会将获得 2,000 美元的佣金。


> 不要使用此函数进行空比较，如 MyDateTime__c == null。而应使用 ISBLANK。

### `!=`（不等于）

计算两个值是否不相等。

**使用：** `表达式1 <> 表达式2` 或 `表达式1 != 表达式2`，用合并字段、表达式或其他数值替换每个表达式。

**返回值：** 布尔

```javascript
IF(Maint_Amount__c + Services_Amount__c `<>` Amount, "DISCOUNTED", "FULL PRICE")
```


如果产品的维护金额和服务金额之和不等于产品金额，此公式将在产品上显示“DISCOUNTED”（已折扣金额）。否则，显示“FULL PRICE”（全价）。请注意，本示例对 Maint Amount（维护金额）和 Services Amount（服务金额）使用两个自定义金额字段。


> 不要使用此函数进行空比较，如 MyDateTime__c != null。而应使用 ISBLANK。

### （小于）

计算一个值是否小于此符号后面的值。

**使用：** `值1 < 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 布尔

```javascript
IF(AnnualRevenue < 1000000, 1, 2)
```


将值“1”赋予小于一百万的收入，将值“2”赋予大于一百万的收入。

### >（大于）

计算一个值是否大于此符号后面的值。

**使用：** `值1 > 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 布尔

```javascript
IF(commission__c > 1000000, "High Net Worth", "General")
```


将“High Net Worth”（高资产净值）值赋予大于一百万的佣金。请注意，这是使用佣金自定义字段的文本公式字段。

### （小于或等于）

计算一个值是否小于或等于此符号后面的值。

**使用：** `值1 <= 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 布尔

```javascript
IF(AnnualRevenue <= 1000000, 1, 2)
```


将值“1”赋予小于等于一百万的收入，将值“2”赋予大于一百万的收入。

### >=（大于或等于）

计算一个值是否大于或等于此符号后面的值。

**使用：** `值1 >= 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 布尔

```javascript
IF(Commission__c >= 1000000, "YES", "NO")
```


将值“YES”（是）赋予大于或等于一百万的佣金。请注意，这是使用自定义货币字段 Commission（佣金）的文本公式字段。

### &&（与）

评估两个值或表达式是否都为真。使用此运算符作为逻辑函数 AND 的备选。

**使用：** `逻辑1 && 逻辑2`，以及用您希望评估的值或表达式替换逻辑1 和逻辑2。

**返回值：** 布尔

```javascript
IF((Price<100 && Quantity<5),“Small”, null)
```


如果价格小于 100 并且数量小于五，此公式显示 “Small”。否则此字段为空。

### ||（或）

评估多个值或表达式中是否至少有一个为真。使用此运算符作为逻辑函数 OR 的备选。

**使用：** `逻辑1 || 逻辑2`，用您希望评估的值或表达式替换任意数量的逻辑引用。

**返回值：** 布尔

```javascript
IF(Priority = "High" || Status = "New", ROUND(NOW()-CreatedDate, 0), null)
```


如果个案 Status（状态）为“New”（新建）或 Priority（优先级）为“High”（高），则此公式返回个案未被处理的天数。如果个案是今天打开的，则该字段显示零。

```javascript
Discount_Rate__c < 0 || Discount_Rate__c > 0.40
```


当自定义字段 Discount Rate（折扣率）的值不在 0 和 40% 之间时，此验证规则公式显示下面的错误消息：“Discount Rate cannot exceed 40%.”（折扣率不能超过 40%。)

## 文本运算符

### &（串联）

连接两个或两个以上字符串。

**使用：** `字符串1&字符串2`，用合并字段、表达式或其他值替换每个字符串。

**返回值：** 文本

```javascript
"Expense-" & Trip_Name__c & "-" & ExpenseNum__c
```


此公式在行程名称和支出编号前显示文本“Expense-”。这是使用支出编号自定义字段的文本公式字段。

## 日期和时间函数

### ADDMONTHS

返回的日期是，指定日期之前或之后的指定月数。如果剩余月的天数比起始月少，函数会返回剩余月的最后一天。否则，结果包含与指定日期相同的日组件。

**使用：** `ADDMONTHS (date/datetime,number)` ,使用起始日期与添加的月数替换`date/datetime`和`number`。

**参数：**

* *日期、日期时间:* `date/datetime` 日期或日期时间，表示起始日期。
* *数字:* `number` 数值，表示要增加的月数。

**返回值：** 日期

```javascript
ADDMONTHS (StartDate, 5)
```


为开始日期添加 5 个月。例如，如果开始日期是 2017 年 9 月 20 日，结果日期是 2018 年 2 月 20 日；如果开始日期是 2017 年 9 月 30 日，结果日期是 2018 年 2 月 28 日。



<alert type="info">
支持传入日期或日期时间类型的参数，但是返回值始终是日期类型，而不可能是日期时间类型。

</alert>

### DATE

从您输入的年、月和日值返回一个日期值。如果公式字段中的 DATE 函数值是无效日期，会返回错误信息。

**使用：** `DATE(年,月,日)` ,用一个四位数字年份替换年，用一个两位数字月份替换月，用一个两位数字日期替换日。

**参数：**

* *年:* `number` 四位数字表示的年份。
* *月:* `number` 表示月份值的数值。
* *日:* `number` 表示日部分的数值。

**返回值：** 日期

```javascript
DATE(2005, 1, 2)
```


创建一个 2005 年 1 月 2 日的日期字段。



<alert type="info">
参数个数只能是三个，也不支持传入`2005-01-01`这种字符串。

</alert>


<alert type="info">
当传入的函数参数格式正确但是数值不符合规范时，并不会报错，而是会返回一个可能错误的值，比如如非闰年的DATE(2021,2,29)将返回2021-03-01，DATE(2021,121,29)将返回2031-01-29。

</alert>

### DATEVALUE

为日期、日期时间或文本表达式返回日期值。

**使用：** DATEVALUE(表达式)

**参数：** `date/datetime/text` 日期、日期时间或日期、日期时间格式的文本值的合并字段或表达式

**返回值：** 日期

```javascript
DATEVALUE(ClosedDate)
```


基于结束日期时间字段值显示日期值，参数ClosedDate可以是日期、日期时间类型，也可以是日期、日期时间格式的字符串类型。

```javascript
DATEVALUE("2005-1-15 12:30")
```


以日期值形式返回“2005-01-15”。



<alert type="info">
■ 如果该函数中所引用的字段不是有效的文本或日期时间字段，则该公式中的字段可能显示为异常字符串或错误信息，比如DATEVALUE("2005-111-15") 将返回NaN-NaN-NaN。

■ 当输入日期时，请将日期放在引号内，并使用如下格式：YYYY-MM-DD，即，四位数字年份、两位数字月份和两位数字日期。

■ 如果表达式不在有效的日期范围内（例如，MM 不在 01 和 12 之间），则该公式中的字段将显示“NaN-NaN-NaN”。

■ 该公式始终会返回utc（协调世界时间）0点值，且除非传入的参数明确带了时区信息，否则将始终使用用户的时区计算，比如DATEVALUE('2018-12-12 06:06:06')返回的是2018-12-11，而DATEVALUE('2018-12-12T06:06:06Z')返回的是2018-12-12。

</alert>

### DATETIMEVALUE

返回年份、月份、日和 GMT 时间值。

**使用：** DATETIMEVALUE（表达式）

**参数：** `text` 不带TZ字符的日期/日期时间格式的文本值、合并字段或表达式

**返回值：** 日期时间

```javascript
DATETIMEVALUE(TEXT(ClosedDate))
```


基于结束日期字段值显示日期时间值，参数ClosedDate必须是日期类型，而不可以是日期时间类型， 因为如果ClosedDate是日期时间类型，TEXT(ClosedDate)返回的会是"2020-11-04 03:45:00Z"这种带Z的字符串。

```javascript
DATETIMEVALUE(SUBSTITUTE(TEXT(ClosedDate), "Z", ""))
```


基于结束日期字段值显示日期时间值，参数ClosedDate可以是日期类型，也可以是时间类型，因为此示例中把最后的Z字符清除掉了。

```javascript
DATETIMEVALUE("2005-11-15 17:00:00")
```


以日期和时间值形式返回“2005-11-15T17:00:00.000Z”（即utc时间2005 年 11 月 15 日17点整）。

### DAY

以 1 与 31 之间的一个数字形式返回一个月中的某一天。

**使用：** DAY(日期)

**参数：** date 日期字段或值（如 TODAY()）

**返回值：** 数值

```javascript
DAY(Code_Freeze__c)
```


返回您的自定义代码冻结日期中的日。请注意，这不适用于“日期时间”字段。



<alert type="info">
只支持传入日期类型值，不支持“日期时间”类型值，也不支持字符串类型值。

</alert>

### HOUR

以 24数字格式（0\~23）返回GMT时区小时值。

**使用：** `HOUR(datetime)` ,使用日期时间值或 DATETIMEVALUE() 等值替换 datetime，不支持传入字符串参数。

**参数：** datetime 日期时间字段或值（如 NOW()）

**返回值：** 数值

```javascript
HOUR(ClosedDate)
```


仅根据日期时间完结字段值显示其中的小时。

```javascript
HOUR(DATETIMEVALUE('2018-12-12 18:06:08'))
```


返回18，而不是10。

### MILLISECOND

以 0 与 999 之间的数字形式，返回毫秒值。

**使用：** `MILLISECOND(datetime)` ,使用日期时间值替换 datetime，例如 NOW()，不支持传入日期类型或字符串参数。

**参数：** datetime 日期时间字段或值（如 NOW()）

**返回值：** 数值

```javascript
MILLISECOND(DATETIMEVALUE(SUBSTITUTE(TEXT(ClosedDate), "Z", "")))
```


仅根据完结时间字段的值显示时间字段中的毫秒值。

```javascript
MILLISECOND(NOW())
```


返回当前时间的毫秒值，比如125。

### MINUTE

以 0 与 60 之间的数字形式，返回分钟值。

**使用：** `MINUTE(datetime)` ,使用日期时间值替换 datetime，例如 NOW()，不支持传入日期类型或字符串参数。

**参数：** datetime 日期时间字段或值（如 NOW()）

**返回值：** 数值

```javascript
MINUTE(DATETIMEVALUE(SUBSTITUTE(TEXT(ClosedDate), "Z", "")))
```


仅根据完结时间字段的值显示时间字段中的分钟值。

```javascript
MINUTE(NOW())
```


返回当前时间的分钟值，比如12。



<alert type="info">
MINUTE函数只授受datetime类型作为参数，不支持time,date,text类型作为参数，可以先用DATETIMEVALUE函数进行类型转换后再调用该函数。

</alert>

### MONTH

以给定日期的数字格式返回月份，即 1（一月）与 12（十二月）之间的一个数字。

**使用：** `MONTH(日期)` ,用包含您希望返回其月份的日期的字段或表达式替换日期。

**参数：** date 日期字段或值（如 TODAY()）

**返回值：** 数值

```javascript
MONTH(SLAExpirationDate__c)
```


返回您的服务级协议到期的月份。本示例使用名为 SLA Expiration Date（SLA 到期日期）的自定义日期字段。

```javascript
MONTH(TODAY())
```


以数字格式返回当前月份。例如，对于月份“February”将返回值“2”。



<alert type="info">
MONTH函数只授受date类型作为参数，不支持time,datetime,text类型作为参数，可以先用DATEVALUE函数进行类型转换后再调用该函数。

</alert>

### NOW

返回表示当前时刻的日期时间。

**使用：** `NOW()`

**返回值：** 日期时间

```javascript
IF(Status = "Open", ROUND(NOW()-CreatedDate, 0), null)
```


此公式检查潜在客户是否未处理；如果是，则通过从当前日期和时间减去创建日期和时间来计算它未被处理的天数。结果是舍入为零小数位的未处理天数。如果潜在客户已处理，则此字段为空。



<alert type="info">
■ 请勿删除括号。

■ 保留括号为空。括号中不能包含值。

■ 在 NOW 函数返回“日期时间”字段而不是“日期”字段。Created Date（创建日期）和 Last Modified Date（上次修改日期）为“日期/间”字段，而 Last Activity Date（上次活动日期）为“日期”字段。

■ 如果您希望使用“日期”字段，请使用 TODAY 函数。

■ 始终使用用户的时区计算日期和时间，该函数本身返回的是utc时间值，比如当前是北京时间2020-11-07 15:28，NOW()返回值为"2020-11-07T07:28:00Z"。

■ 与函数 NOW 和其他“日期时间”字段一起使用加和减运算符，以返回一个代表天数的数字。例如，NOW() - CreatedDate 计算自一个记录创建日期以来的天数。在本示例中，公式字段数据类型为数字。

■ 与 NOW 函数和数字一起使用加和减运算符，以返回一个日期和时间。例如，NOW() +5 计算当前时间之前五天的日期和时间。在本示例中，公式字段数据类型为“日期时间”。

</alert>

### SECOND

以 0 与 60 之间的数字形式，返回秒值。

**使用：** `SECOND(datetime)`,使用日期时间值或 DATETIMEVALUE() 等值替换 datetime，不支持传入日期类型值或字符串参数。

**参数：** datetime 日期时间字段或值（如 NOW()）

**返回值：** 数值

```javascript
SECOND(ClosedDate)
```


仅根据完结时间字段的值显示其中的秒值。

```javascript
SECOND(DATETIMEVALUE('2018-12-12 18:06:08'))
```


返回 8。

### TIMENOW

返回表示当前时刻的时间值 (GMT)。如果您仅想要跟踪时间，而非日期，使用此函数，而不是 NOW 函数。

**使用：** `TIMENOW()`

**返回值：** 时间

```javascript
IF(Rating="Hot", TEXT(TIMENOW()), TEXT(TIMEVALUE(CreatedDate)))
```


此公式会检查并了解潜在客户是否评级为“热门”；如果是，返回正确时间。否则，返回自某人创建潜在客户之后的时间。



<alert type="info">
■ 请勿删除括号。

■ 保留括号为空。括号中不能包含值。

■ 如果您希望使用“日期”字段，请使用 TODAY 函数。

■ 显示的值为GMT时区值。

■ 因Steedos还未支持time类型字段，所以暂时只能用TEXT函数输出文本值。

</alert>

### TIMEVALUE

返回没有日期的当地时间值，例如工作时间。

**使用：** `TIMEVALUE(value)`,并使用时间格式的文本值、合并字段或表达式替换 value。

**参数：** text 时间格式的字符串，如17:30:45.125

**返回值：** 时间

```javascript
TEXT(TIMEVALUE("17:30:45.125"))
```


返回 "17:30:45.125"。



<alert type="info">
■ 请勿对日期时间字段使用 TIMEVALUE。

■ 因Steedos还未支持time类型字段，所以暂时只能用TEXT函数输出文本值。

</alert>

### TODAY

将当前日期返回为日期数据类型。

**使用：** `TODAY()`

**返回值：** 日期

```javascript
TODAY()-Sample_date_c
```


计算样本中还剩多少天。

```javascript
SampleDate < TODAY()
```


本示例可确保用户无法将 Sample Date（采样日期）更改为过去的日期。



<alert type="info">
■ 请勿删除括号。

■ 保留括号为空。括号中不能包含值。

■ 使用含 TODAY 函数的“日期”字段而不是“日期时间”字段。Last Activity Date（上次活动日期）是“日期”字段；而 Created Date（创建日期）和 Last Modified Date（上次修改日期）为“日期时间”字段

■ 如果您希望使用日期时间字段，请参阅 NOW 函数。

■ 始终使用用户的时区计算日期和时间，TODAY()返回的是当天GMT时区0点值。

■ 与 TODAY 函数和其他“日期”字段一起使用加和减运算符，以返回一个代表天数的数字。例如，TODAY()-LastActivityDate 计算自上次活动日期后的天数。在本示例中，公式字段数据类型为数字。

■ 与 TODAY 函数和数字一起使用加和减运算符，以返回一个日期。例如，TODAY() +5 计算今天之前五天的日期。在本示例中，公式字段数据类型为日期。

</alert>

### WEEKDAY

返返回指定日期是周几，用 1 表示周日，2 表示周一，以此类推，7 表示周六。

**使用：** `WEEKDAY(date)`

**参数：** date 日期字段或值（如 TODAY()）

**返回值：** 数值

```yaml
WEEKDAY(customdate1__c)
```


使用 customdate1__c 返回指定日期的周数。



<alert type="info">
■ 该函数只支持日期类型值，不支持日期时间或字符串类型值作为参数。

■ 该函数与javascript编程语言的Date.getDay函数有差异，后者用0表示周日，1表示周一，以些类推，6表示周六。

</alert>

### YEAR

以给定日期的数字格式返回四位数字表示的年份。

**使用：** `YEAR(日期)`，用包含您希望返回的年份的字段或表达式替换日期。

**参数：** date 日期字段或值（如 TODAY()）

**返回值：** 数值

```yaml
YEAR(TODAY() )- YEAR(Initial_Meeting__c )
```


返回自您与客户初次会面后的年数。本示例使用名为 Initial Meeting（初次会面）的自定义日期字段。



<alert type="info">
■ 该函数只支持日期类型值，不支持日期时间或字符串类型值作为参数。

■ 该函数与javascript编程语言的Date.getYear函数表现一致。

</alert>

## 逻辑函数

### AND

如果所有的值均为真，则返回 TRUE（真）响应；如果一个或多个值为假，则返回 FALSE（假）响应。使用此函数作为运算符 && (AND) 的备选。

**使用：** AND(逻辑1,逻辑2...)

**参数：**

* *逻辑表达式1:* `boolean` 您希望计算的返回布尔类型值的公式表达式1。
* *逻辑表达式2:* `boolean` 您希望计算的返回布尔类型值的公式表达式2。
* ... 更多返回布尔类型值的其他表达式。

**返回值：** 布尔

```javascript
IF(AND(Price<1,Quantity<1),"Small", null)
```


如果价格和数量小于 1，此公式将显示“Small”。如果资产有大于 1 的价格或数量，则此字段为空。

### BLANKVALUE

判断表达式是否具有值，如果没有值则返回一个置换表达式。如果表达式具有值，则返回表达式的值。

**使用：** BLANKVALUE(表达式, 置换表达式)

**参数：**

* *表达式:* `text/number/date/datetime` 您希望计算的表达式，支持除布尔类型外的常用字段类型值。
* *置换表达式:* `text/number/date/datetime` 您希望替换任何空白值的值，数据类型应该跟第一个参数一致，当不一致时将返回错误信息。

**返回值：** 与传入的参数一样的数据类型

```yaml
BLANKVALUE(Department, "Undesignated")
```


如果部门字段包含值则此公式返回部门字段的值。如果部门字段为空，则此公式返回词语未指定。

```yaml
BLANKVALUE(Payment_Due_Date__c, StartDate + 5)
```


此公式返回当 Payment Due Date（付款到期日期）为空时，合同开始日期之后第五天的日期。Payment Due Date（付款到期日期）是自定义日期字段。

> * 如果字段包含字符、空白或零，则字段不为空。例如，如果字段包含使用空格键插入的空格，则该字段不为空。
> * 如果字段没有值，则使用 BLANKVALUE 函数返回指定置换表达式对应的值；如果您只想检查字段是否有值，则使用 ISBLANK函数。
> * 传入的两个参数值类型应该一样，否则公式将直接报错。
> * 传入的参数不支持布尔类型值。
> * 传入的参数不支持select字段类型值。
> * 如果您对数值字段判断空值，比如`BLANKVALUE(Amount, 100)`，则字段没有值且配置将空白字段处理为空白时，该公式才返回第二个参数中的指定的置换表达式值，如果字段没有值且配置将空白字段处理为0时，则按0值返回而不是返回第二个参数中的指定表达式值。
> * 因为我们的空白字段处理方式默认值是“将空白字段视为零”，所以低代码中要小心，不配置这个属性时，默认为按0值处理。零代码配置时问题不大，因为空白字段处理属性是必填的，不存在默认值问题。



<alert type="info">
■ 该函数与 ISBLANK很像，但是该函数会进一步返回字段值为空时的置换表达式对应的值，一般来说，如果您只是想判断字段值是否为空，应该使用后者而不是该函数。

■ 该函数不支持传入select字段类型参数，但是如果字段是单选的，可以先用TEXT函数选把select类型转换为text类型，比如`BLANKVALUE(TEXT(Leave__c), "error")`，多选的select字段类型无法使用BLANKVALUE函数。

</alert>


<alert type="info">
* 字段类型为 `text` 时：`BLANKVALUE(FieldName, "替换值")`
* 字段类型为 `select` 时：`IF(ISBLANK(FieldName), 替换值, FieldName)`
* 字段类型为 `number/currency` 时： `BLANKVALUE(FieldName, "替换值")`
* 字段类型为 `date/datetime` 时： `BLANKVALUE(FieldName, "替换值")`
* 字段类型为 `lookup/master_detail` 时： `BLANKVALUE(FieldName._id, "替换ID值")`
* 字段类型为 `boolean` 时：`IF(FieldName, ValueA, ValueB)`

</alert>

### CASE

根据一系列值检查一个给定表达式。如果表达式等于其中一个值，则返回相应结果。如果它不等于任何值，则返回其他结果。

**使用：** CASE(表达式,​值1, 结果1, 值2,​ 结果2,...,其他结果)，用要与所指定的每个值进行比较的字段或值替换表达式。必须用相等的值替换每个值和结果以返回结果项。当表达式不等于任何值时，用您希望返回的值替换其他结果。

**参数：**

* *表达式:* `text/number/currency/percent/date/datetime/select` 要与所指定的每个值进行比较的字段或值。
* *值1:* `text/number/currency/percent/date/datetime` 第一个要与第一个参数值进行比较的值。
* *结果1:* `text/number/currency/percent/date/datetime` 当第一个参数值等于参数“值1”时，函数返回该结果值。
* *值2:* `text/number/currency/percent/date/datetime` 第二个要与第一个参数值进行比较的值。
* *结果2:* `text/number/currency/percent/date/datetime` 当第二个参数值等于参数“值2”时，函数返回该结果值。
* ...
* *其他结果:* `text/number/currency/percent/date/datetime` 当表达式不等于之前参数中的任何值时，函数返回该结果值。

**返回值：** 与传入的最后一个参数一样的数据类型


***公式字段示例：***

***1.个案未处理的天数***

这是一个自定义公式字段 Days Open 的示例，使用该示例可根据个案未处理的天数显示不同的文本：

```javascript
CASE(Days_Open__c, 3,  "Reassign", 2, "Assign Task", "Maintain")
```


显示下面的文本：

* 为任何三天未处理的个案显示“Reassign”（重新指定）。
* 为任何有两天未处理的个案显示“Assign Task”（分配任务）。
* 为所有其他个案显示“Maintain”（维护）。


***2.上次活动的月份***

此公式字段显示上次活动的月份，如果没有活动，则显示“None”（无）。

```yaml
CASE(MONTH(LastActivityDate),
1, "January",
2, "February",
3, "March",
4, "April",
5, "May",
6, "June",
7, "July",
8, "August",
9, "September",
10, "October",
11, "November",
12, "December",
"None")
```


***默认值示例：***

***1.折扣率***

使用下面的默认值公式，可以根据业务机会创建人所在的部门在业务机会中插入另一个折扣率：

```yaml
CASE(User.Department,​​ "IT", 0.25, "Field", 0.15, 0)
```


在本示例中，该公式在“IT”部门的用户所创建的所有业务机会上插入了 25% 的折扣率，或在“Field”部门的人员所创建的所有业务机会上插入了 15% 的折扣率。如果创建者不属于其中任何一个部门，则折扣率为零。这是业务机会中使用标准用户字段 Department（部门）的自定义百分比字段。

 \n ***2.产品语言***

您可能希望将产品与其语言关联起来，以便用户了解要包含的文档或适配器的类型。使用下面的默认值公式可根据创建某产品的用户所属的国家自动设置该产品的语言。在本示例中，如果用户所属国家是“Japan”（日本），则默认值为“Japanese”（日语），如果用户所属国家是“US”（美国），则默认值为“English”（英语）。如果两者都不是，则会将默认值“unknown”（未知）插入产品语言字段。

```yaml
CASE($User.Country ,​​ "Japan", "Japanese", "US", "English","unknown")
```



<alert type="info">
■ 请确保您的`值1`、`值2`等表达式属于相同的数据类型，且必须与第一个参数值数据类型一致。

■ 请确保您的`结果1`、`结果2`等表达式以及最后的`其他结果`表达式属于相同的数据类型，但是不必与第一个参数值数据类型一致，且它们往往不一致。

■ CASE 函数中不能包含返回布尔类型，即真或假的参数值，而应当确保真或假表达式返回被支持的数据类型，例如：

`CASE(1, IF(ISPICKVAL(Term__c,"12"),​ 1, 0), 12 * Monthly_Commit__c,​​ IF(ISPICKVAL(Term__c,"24"), 1, 0),​​ 24 * Monthly_Commit__c, 0)`

在该公式中，Term（期限）是一个选项列表字段，当它包含表示真的值 1 时，将与“每月提交量”相乘。

■ 需包含其他结果值。

■ 如果任何表达式返回一个错误，那么，即使其他表达式返回的值正确，`CASE`函数也将返回一个错误。例如，在`CASE(Field__c,"Partner", "P",​ "Customer", "C", LEFT(Field__c, -5))` 公式中，即使其中字段的值是“Partner”（合作伙伴）或“Customer”（客户），该公式也会由于上一条语句不合逻辑而返回一个错误。

■ 如果 CASE 函数中的字段为空，它将返回其他结果值。例如，如果 Days Open（未处理天数）字段为空、0 或者 2 和 3 以外的任何值，`CASE(Days_Open__c, 3, "Reassign", 2,​ "Assign Task", "Maintain")`公式将显示“Maintain”（维护）。

■ 使用 CASE 函数可以确定选项列表值是否等于特定的值。例如，当 Term（期限）为 12 时，`CASE(Term__c, "12", 12*Monthly_Commit__c, "24",​ 24 * Monthly_Commit__c, 0)` 公式将 Monthly Commit（每月提交量）乘以 12；当 Term（期限）为 24 时，该公式将 Monthly Commit（每月提交量）乘以 24。否则，结果为零。

</alert>


<alert type="info">
* CASE函数中的任何参数都不支持布尔类型值，这不只表示第一个参数及后续用于比较值的其他参数不能是布尔类型值，最后一个参数也一样不支持布尔类型值，也就是说整个函数的返回值不可能是布尔类型值。
* 表达式参数，即传入的第一个参数支持select字段，但是只支持单选的，如果传入多选的select将直接报错。

</alert>

### IF

确定表达式为真或为假。如果为真则返回一个给定值，如果为假则返回另一个值。

**使用：** IF(逻辑测试, value_if_true, value_if_false)

**参数：**

* *逻辑表达式:* `boolean` 最终返回布尔类型值的逻辑表达式。
* *value_if_true:* `text/number/currency/percent/date/datetime` 您希望当表达式为真时所返回的值，支持除布尔类型外的常用字段类型值。
* *value_if_false:* `text/number/currency/percent/date/datetime` 您希望表达式为假时所返回的值，支持除布尔类型外的常用字段类型值。

**返回值：** 第一个及第二参数中相同的数据类型

***公式字段示例：***

***1.付款逾期***

```javascript
IF(AND(Payment_Due_Date__c < TODAY(),​​Payment_Status__c = "UNPAID") , "PAYMENT OVERDUE", ​null)
```


此公式确定付款到期日期是否已过，以及付款状态是否为“UNPAID”（未付）。如果是，则返回文本“PAYMENT OVERDUE”（付款逾期）；如果不是，则保持该字段为空。本示例使用名为 Payment Due Date（付款到期日期）的自定义日期字段和一个名为 Payment Status（付款状态）的自定义文本字段。


***2.插入税率***

使用该默认值公式可根据用户所在城市设置资产的税率。使用以下默认值创建自定义百分比字段：

```yaml
IF($user.city = "Napa", 0.0750, IF($user.city = "Paso Robles", 0.0725,  IF($user.city = "Sutter Creek", 0.0725,   IF($user.city = "Los Olivos", 0.0750,    IF($user.city = "Livermore", 0.0875, null    )   )  ) ))
```



<alert type="info">
* 请确保您的 value_if_true 和 value_if_false 表达式属于相同的数据类型，且不为布尔类型值。
* IF函数不支持返回值为布尔类型的情况，即第二个及第三个参数不能是布尔类型。

</alert>

### ISBLANK

判断表达式是否具有值，如果没有值则返回 TRUE（真）。如果它包含一个值，则该函数返回 FALSE（假）。

**使用：** ISBLANK(表达式)

**参数：** `text/number/date/datetime/select` 您希望计算的表达式。

**返回值：** 布尔

```yaml
(IF(ISBLANK(Maint_Amount__c), 0, 1) + ​ IF(ISBLANK(Services_Amount__c), 0,1) + ​  IF(ISBLANK(Discount_Percent__c), 0, 1) + ​   IF(ISBLANK(Amount), 0, 1) +​    IF(ISBLANK(Timeline__c), 0, 1)) / 5
```


此公式可提取一组字段，并计算人员所用的百分比。此公式字段检查五个字段以查看它们是否为空。如果为空，则该字段计数为 0。对于任何包含一个值的字段计数“1”，且该总和除以五（计算的字段数）。此公式需要您选中“空白字段处理”下面的将空白字段视为空白选项，否则公式中的ISBLANK会始终返回FALSE。



<alert type="info">
■ 请不要用`MyDateTime__c == null`这种表达式判断空值，而应该使用`ISBLANK(MyDateTime__c)`。

■ 如果字段包含字符、空白或零，则字段不为空。例如，如果字段包含使用空格键插入的空格，则该字段不为空。

■ 如果字段没有值，则使用 BLANKVALUE 函数返回指定表达式；如果您只想检查字段是否有值，则使用 ISBLANK 函数。

■ 如果您对数值字段使用该函数,比如`ISBLANK(Amount)`，则字段没有值且配置将空白字段处理为空白时，该函数才返回 TRUE。

■ 因为我们的空白字段处理方式默认值是“将空白字段视为零”，所以低代码中要小心，不配置这个属性时，默认为按0值处理。零代码配置时问题不大，因为空白字段处理属性是必填的，不存在默认值问题。

■ 对于select字段类型，单选多选语法是一样的，直接传入参数值即可。

</alert>


<alert type="info">
ISBLANK函数返回值为布尔类型，但是不支持参数值本身为布尔类型的情况。

</alert>


<alert type="info">
* 字段类型为 `text/select` 时：`ISBLANK(FieldName)`。
* 字段类型为 `number/currency` 时： `ISBLANK(FieldName)`，但是只有配置将空白字段处理为空白时才有效，否则永远返回false。
* 字段类型为 `date/datetime` 时： `ISBLANK(FieldName)`。
* 字段类型为 `lookup/master_detail` 时： `ISBLANK(FieldName._id)`。
* 字段类型为 `boolean` 时：`FieldName`。

</alert>

### NOT

对于 TRUE（真）返回 FALSE（假），对于 FALSE（假）返回 TRUE（真）。

**使用：** NOT(逻辑表达式)

**参数：** `boolean` 您希望计算的表达式。

```javascript
IF(NOT(Status = "Closed"), ROUND(NOW()-CreatedDate, 0), null)
```


检查变量是否未处理；如果是，则通过从当前日期和时间减去创建日期和时间来计算它未被处理的天数。结果是舍入为零小数位的未处理天数。如果变量已处理，则此字段为空。

### OR

如果任何表达式为真，则返回 TRUE（真）。如果所有表达式均为假，则返回 FALSE（假）。使用此函数作为运算符 || (OR) 的备选。

**使用：** OR(逻辑1,逻辑2...)

**参数：**

* *逻辑表达式1:* `boolean` 您希望计算的返回布尔类型值的公式表达式1。
* *逻辑表达式2:* `boolean` 您希望计算的返回布尔类型值的公式表达式2。
* ... 更多返回布尔类型值的其他表达式。

**返回值：** 布尔

```javascript
IF(OR(Priority="High",Status="New"), ROUND(NOW()-CreatedDate, 0), null)
```


如果个案 Status（状态）为“New”（新建）或 Priority（优先级）为“High”（高），则此公式返回个案未被处理的天数。如果个案是今天打开的，则该字段显示零。

## 数学函数

### ABS

计算一个数字的绝对值。数字的绝对值是不含正、负号的数字。

**使用：** ABS(数字)

**参数：** `number` 带有您希望删除的符号的合并字段、表达式或其他数值。

**返回值：** 数值

```javascript
ABS(ExpectedRevenue)
```


计算 Expected Revenue（预期收入）金额的正值，而无论其为正还是为负。

### CEILING

将数字向上四舍五入为最接近的整数；如果是负数，先把正数部分舍入为最接近的整数然后加上负号前缀。

**使用：** CEILING(数字)

**参数：** `number` 您希望舍入的字段或表达式。

**返回值：** 数值

```javascript
CEILING(2.3)
```


返回 3，即 2.3 向上舍入为最接近的整数。

```javascript
CEILING(-2.3)
```

会返回 -3，即 -2.3 舍入为 0 以下的最接近的正整数后加上负号前缀。

### EXP

返回一个值，该值等于所指定数字的 e 幂。

**使用：** EXP(数字)

**参数：** `number` 一个数字字段或值（如 5）。

**返回值：** 数值

```javascript
EXP(3)
```


此公式返回一个值，该值等于 e 的三次幂。

```javascript
Principal__c  EXP(Rate__c  Years__c)
```


此公式基于本金的自定义货币字段、利率的自定义百分比字段和年份的自定义数字字段计算复利。

### FLOOR

返回向下舍入为最接近整数的数字；如果是负数，按整数部分舍入后加负号。

**使用：** FLOOR(数字)

**参数：** `number` 一个数字字段或值（如 5.245）。

**返回值：** 数值

```javascript
FLOOR(2.5)
```


返回 2，即 2.5 向下舍入为最接近的整数。

```javascript
FLOOR(-2.5)
```


会返回 -2，即 -2.5 舍入为 0 以上的负数。

### LN

返回一个指定数值的自然对数。自然对数以常数 e（值为 2.71828182845904）为底。

**使用：** LN(数字)

**参数：** `number` 您希望获得其自然对数的字段或表达式。注意：LN 函数是 EXP 函数的反函数。

**返回值：** 数值

```javascript
LN(10)
```


返回 10 的自然对数，即 2.30。

```javascript
LN(Value__c)
```


返回名为 Value（值）的自定义数字字段的自然对数。

### LOG

返回数字以 10 为底的对数。

**使用：** LOG(数字)

**参数：** `number` 您希望从中计算以 10 为底的对数的字段或表达式。

**返回值：** 数值

```javascript
LOG(Salary__c)
```


计算某人的工资的对数。

在本示例中，Salary（工资）是自定义金额字段。

### MAX

返回一系列数字中的最大数字。

**使用：** MAX(数字, 数字,...)

**参数：**

* *数字:* `number` 您希望从中检索最大数字的字段或表达式之一。
* *数字:* `number` 您希望从中检索最大数字的字段或表达式之一。
* ... 更多您希望从中检索最大数字的字段或表达式。

**返回值：** 数值

***示例：***

***1.服务费***

```javascript
MAX(0.06 * Total_Cost__c , Min_Service_Charge__c)
```


***2.书籍版税***

本示例中的公式字段计算服务费，取总成本的 6% 与最低服务费之间的较大者。请注意，最低服务费是默认值为 $15 的自定义货币字段。但是，如果最低服务费并不总是为同一金额，则可以使该字段为公式字段。

```javascript
MAX(0.10 * Pages__c, (Retail_Price__c * 0.07) * Total_Sold__c)
```


***3.佣金***

此公式确定要支付的书籍版税。它显示两个金额中的较大的一项：每卖一本书 0.07 美元或每页 0.10 美元。它假设您有名为 Pages（页数）和 Total Sold（销售总额）的自定义数字字段，以及名为 Retail Price（零售价格）的自定义货币字段。

```javascript
MAX($user.Commission_Percent__c * Price, Price * Account_Discount__c, 100)
```


该示例确定要根据以下较大值为资产记录的佣金：用户的价格佣金百分比、价格乘以为金额存储的折扣百分比或 100 美元。本示例假设您有两个针对用户和资产的自定义百分比字段。

### MCEILING

将数字向上四舍五入为最接近的整数；如果是负数，一样按值大小向上舍入为最接近的负整数。

**使用：** MCEILING(number)

**参数：** `number` 您希望计算的字段或表达式。

**返回值：** 数值

```javascript
MCEILING(2.3)
```


返回 3，即 2.3 向上舍入为最接近的整数。

```javascript
MCEILING(-2.3)
```


返回 -3，即对于负数，-2.3 向下舍入为最接近的负整数。


> MCEILING函数与CEILING在传入的参数是正数时用法一样，区别是参数为负数时后者是先按正数值向上舍入后再加上负号前缀。

### MFLOOR

将数字向下四舍五入为最接近的整数；如果是负数，一样按值大小向下舍入为最接近的负整数。

**使用：** MFLOOR(number)

**参数：** `number` 您希望计算的字段或表达式。

**返回值：** 数值

```javascript
MFLOOR(2.3)
```


返回 2，即 2.3 向下舍入为最接近的整数。

```javascript
MFLOOR(-2.3)
```


返回 -3，即对于负数，-2.3 向下舍入为最接近的负整数。


> MFLOOR函数与FLOOR在传入的参数是正数时用法一样，区别是参数为负数时后者是先按正数值向下舍入后再加上负号前缀。

### MIN

返回一系列数字中的最小数字。

**使用：** MIN(数字, 数字,...)

**参数：**

* *数字:* `number` 您希望从中检索最小数字的字段或表达式之一。
* *数字:* `number` 您希望从中检索最小数字的字段或表达式之一。
* ... 更多您希望从中检索最小数字的字段或表达式。

**返回值：** 数值

```javascript
MIN(250, Contribution__c /2)
```


本示例中的公式根据一半员工的捐献或 250 美元（较小者为准）的匹配计划来确定在员工 401K 匹配中提供多少金额。它假设您有一个名为 Contribution（贡献）的自定义货币字段。

```javascript
MIN(Gross__c * Bonus_Percent__c, ​  Performance__c / Number_of_Employees__c)
```


该示例确定了基于两个金额最小值的员工奖金金额：员工的总时间奖金百分比或在所有员工中平分公司的绩效奖金金额。它还假设您有一个名为 Number of Employees（职员数）的自定义数字字段，一个名为 Bonus Percent（奖金百分比）的自定义百分比字段，以及针对员工 Gross（毛利）和公司的 Performance（绩效）的自定义货币字段。

### MOD

返回一个数字除以指定除数后的余数。

**使用：** MOD(数字, 除数)

**参数：**

* *数字:* `number` 您希望被除的字段或表达式。
* *除数:* `number` 要用作除数的数字。


**返回值：** 数值

```javascript
MOD(3, 3)MOD(4, 3)MOD(123, 100)
```


返回 0； 返回 1； 返回 23。

您可能希望禁止用户将会议安排在星期六或星期日。使用下面的示例可以对名为 My Date（我的日期）的自定义日期字段应用验证规则。

```yaml
CASE(MOD(My_Date__c - DATE(1900, 1, 7), 7),
0, 0,
6, 0,
1) = 0
```

 \n 当 My Date（我的日期）的值不在星期一至星期五范围内时，本示例返回下面的错误消息：“My Date is not a weekday.”（我的日期不是工作日）。


> 请不要使用0值作为除数传入。


### ROUND

返回与所指定的数字最接近的一个数字，并通过指定的位数来约束新数字。

**使用：** ROUND(数字, 数字位数)

**参数：**

* *数字:* `number` 您希望舍入的字段或表达式。
* *数字位数:* `number` 您希望在舍入时考虑的小数位数。

**返回值：** 数值

```javascript
ROUND (1.5, 0) = 2ROUND (1.2345, 0) = 1ROUND (-1.5, 0) = -2ROUND (225.49823, 2) = 225.50
```


```javascript
ROUND( Amount-Amount* Discount_Percent__c,2)
```


使用此公式可以计算舍入到两位数的业务机会折扣金额。本示例是业务机会的数字公式字段，使用名为 Discount Percent（折扣百分比）的自定义百分比字段。


> ■ 为数字位数输入零以将数值舍入为最接近的整数。
>
> ■ 该函数会根据您指定的小数位数自动舍入数字。例如，当您输入 1.49999 时，设置为两位小数的自定义数字字段存储为 1.50。
>
> ■ 该函数使用四舍五入算法。半数值始终要前一位加一。例如，1.45 四舍五入为 1.5。–1.45 四舍五入为 –1.5。
>
> ■ 界面上显示的数字取决于在字段在定义时您所选的小数位数。这里数字位数表示公式运算舍入时考虑的数字位数。
>
> ■ 第一个参数值为负数时，将按正数部分四舍五入后再加上负号前缀作为最终返回值，而不是像javascript编程语言Math.round函数一样按值进行四舍五入。


### SQRT

返回给定数字的正平方根。

**使用：** SQRT(数字)

**参数：** `number` 您希望计算其平方根的字段或表达式。

**返回值：** 数值

```javascript
SQRT(25)
```


返回 25 的平方根（即 5）。

```javascript
SQRT(Amplitude__c)
```


返回代表地震振幅的自定义数字字段的平方根。


> ■ 计算一个负数的平方根是不支持的，会返回错误信息。
>
> ■ 可通过包含 IF 函数来避免出现零除数，例如：IF( Amplitude__c >= 0, SQRT( Amplitude__c ), null)。

## 文本函数

### BEGINS

确定文本是否以特定字符开头，如果是则返回 TRUE（真）。如果不是，则返回 FALSE（假）。

**使用：** BEGINS(文本, 比较文本)

**参数：**

* *文本:* `text` 您希望进行比较的字符全文或字段。
* *比较文本:* `text` 用于比较的文本片断。

**返回值：** 布尔

```yaml
IF(BEGINS (Product_type__c , “ICU”), “Medical”, “Technical”)
```


如果产品类型自定义文本字段中的文本以“ICU”开头，则此示例返回文本“Medical”（医疗）。对于所有其他产品显示“Technical”（技术）。



<alert type="info">
■ 此函数区分大小写，因此，请确保比较文本值的大小写正确无误。

■ 在验证规则或工作流规则中使用此函数时，留空的字段被视为有效。例如，如果您的验证规则要测试资产序列号是否以“3”开始，则序列号为空的所有资产都将视为有效。

</alert>

### BR

在文本字符串中插入一个换行符。

**使用：** BR()

**返回值：** 文本

```yaml
CASE(ShippingCountry,"USA",  ShippingStreet & BR() &  ShippingCity & ",  " & ShippingState & " " &  ShippingPostalCode & BR()  & ShippingCountry,"France",  ShippingStreet & BR() &  ShippingPostalCode & " " &  ShippingCity & BR() &  ShippingCountry, "etc")
```


此公式字段以标准格式显示联系人的带格式邮寄地址，根据所在的国家/地区，可能会在该地址的适当位置中包含空格和换行符。



<alert type="info">
■ 请勿删除函数名称后面的括号。

■ 保留括号为空。括号中不必包含值。

■ 请勿忘记在 BR() 两侧加上串联运算符：&。

</alert>

### CASESAFEID

将 15 个字符的 ID 转换成区分大小写的 18 个字符 ID。

**使用：** CASESAFEID(id)

**参数：** `text` 对象 ID。

**返回值：** 文本

```javascript
CASESAFEID (Id)
```


此公式将 15 个字符的 ID 替换为 18 个字符、区分大小写的 ID。 假设Id值为abcdefghijklmno，该公式将返回"abcdefghijklmnoAAA"。

### CONTAINS

比较两个文本参数，如果第一个参数包含第二个参数，则返回 TRUE（真）。如果不包含，则返回 FALSE（假）。

**使用：** CONTAINS(文本, 比较文本)

**参数：**

* *文本:* `text` 原始文本全文。
* *比较文本:* `text` 用于比较的文本片断。

**返回值：** 布尔

```javascript
IF(CONTAINS(Product_Type__c, "part"), "Parts", "Service")
```


此公式检查自定义文本字段 Product_Type（产品类型）的内容，并针对任何包含单词“part”的产品返回“Parts”。否则，将返回“Service”。请注意，如果 Product_Type（产品类型）字段包含“Part”或“PART”文本，此公式将返回“Services”。



<alert type="info">
■ 此函数区分大小写，因此，请确保比较文本值的大小写正确无误。

■ 在验证规则或工作流规则中使用此函数时，留空的字段被视为有效。例如，如果您的验证规则用来测试资产序列号是否包含“A”，那么，所有具有空序列号的资产将被视为有效。

■ CONTAINS 函数不支持多选选项列表。

</alert>

### FIND

返回某个字符串在文本字符串内的位置（以数字形式表示）。

**使用：** FIND(搜索文本, 文本\[, 起始字符数\])

**参数：**

* *搜索文本:* `text` 要查找的字符串。
* *文本:* `text` 要搜索的字段或表达式。
* *起始字符数:* `number` 要从左边算起的作为搜索起始位置的字符数。

**返回值：** 数值

```javascript
FIND(" ", Street)
```


返回 Street 字段中的第一个空格所在的字符位置。可以使用此数字来确定街道地址的长度，以便将地址字段中的街道地址与街道名称分开。

```javascript
SUBSTITUTE(Email, LEFT(Email, FIND("@", Email)), "www.")
```


查找 @ 符号在个人电子邮件地址中的位置，以确定要用`“www.”`替换的文本长度，从而派生其网址。



<alert type="info">
■ 请确保在验证公式之前去掉其中的中括号、\[ 和 \]。

■ 如果文本参数中引用的字段为空，则该公式字段显示“0”。

■ 您的 search_text 参数区分大小写，且不能包括任何通配符。

■ 如果在执行搜索后未返回任何结果，则字段中将显示“0”。

■ 起始字符数参数是可选的。如果未输入起始字符数 值，则该公式将使用值 1 或者字符串中的第一个字符。

■ 如果起始字符数不大于零，则该字段中将显示“0”。

■ 如果起始字符数大于文本的长度，则该字段中将显示“0”。

■ 在输入起始字符数参数时，请记住，一些字段（如网址字段）是唯一的，因为系统会自动在您输入的文本开头附加“http://”。

■ 请注意，字符串中的第一个字符指定为 1（而非 0）。

</alert>

### HYPERLINK

从指定文本创建一个到可链接的指定 URL 的链接。

**使用：** HYPERLINK(url, friendly_name \[,target\])

**参数：**

**返回值：** 文本

* *url:* `text` 网址。
* *friendly_name:* `text` 链接文本。
* *target:* `text` 要在其中显示内容的窗口或帧。

```javascript
HYPERLINK("/00U/e?retURL=%2F006x0000001T8Om&what_id="& Id,"Create Event")
```


添加一个名为“Create Event”（创建事件）的链接，当用户单击该链接时，系统会创建一个与当前的目标相关联的新事件。

```javascript
HYPERLINK("http://servername/call?id=" & Id & "&phone=" & Phone, Phone)
```


创建一个可链接的电话号码字段，当用户单击该字段时，系统会自动拨打其中的电话号码。在本示例中，用您的拨号工具名称及其用来拨号的命令替换“servername”（服务器名）和“call”（呼叫）。并在合并字段 Id 中插入联系人、业务机会或客户记录的标识符。第一个 Phone（电话）合并字段通知拨号工具要拨打的号码，最后一个 Phone（电话）合并字段使用 Phone（电话）字段的值作为用户单击时拨号的可链接文本。



<alert type="info">
■ 超链接公式字段属于文本类型。

■ 包含如 `HYPERLINK("http://www.cnet.com", "cnet")` 中引号内的协议和 URL。

■ 避免在 HYPERLINK 函数结果中使用文本函数，如 LEN、LEFT 或 RIGHT。

■ URL 不得包含 JavaScript。这会提高贵组织的安全性。

■ 使用相对链接，以链接到站内页面。如果您的完整链接是 `https://yourInstance.steedos.com/a/b`，相对链接是“/a/b”。通过相对链接，超链接可在所有站内页面上正常工作。请确保使用斜杠“/”在相对 URL 前增加。

■ 如果起始字符数不大于零，则该字段中将显示“0”。

■ 如果起始字符数大于文本的长度，则该字段中将显示“0”。

■ 在输入起始字符数参数时，请记住，一些字段（如网址字段）是唯一的，因为系统会自动在您输入的文本开头附加“http://”。

■ Steedos在界面上暂时不支持把该函数返回值显示为链接。

</alert>

### INCLUDES

决定多选选项列表字段中选择的任何值是否等于您所指定的文本文字。

**使用：** INCLUDES(multiselect_picklist_field, text_literal)

**参数：**

* *multiselect_picklist_field:* `select` 选项列表字段名。
* *text_literal:* `text` 要用作比较的文本。

**返回值：** 布尔

***示例：***

```javascript
INCLUDES(Hobbies__c, "Golf")
```


如果爱好自定义多选选项列表字段中选择的某个值是“高尔夫”，则 INCLUDES(Hobbies__c, "Golf") 将返回 TRUE（真）。



<alert type="info">
■ 该函数只支持多选的选项列表字段，要使用单选选项列表字段请使用 ISPICKVAL 。

■ 可以使用  ISBLANK 决定选项列表字段是否为空。


</alert>

### ISPICKVAL

确定选项列表字段的值是否等于所指定的文本文字。

**使用：** ISPICKVAL(picklist_field, text_literal)

**参数：**

* *picklist_field:* `select` 选项列表字段名。
* *text_literal:* `text` 要用作比较的文本。

**返回值：** 布尔

***示例：***

***1.合同启用***

```javascript
IF(ISPICKVAL( Status , "Activated"), NOW()-ActivatedDate, null)
```


计算自合同被启用以来的天数。如果合同状态不是“Activated”，则此字段为空。

***2.佣金金额***

```javascript
IF(ISPICKVAL(StageName, "Closed Won"),   ROUND(Amount *0.02, 2), 0)
```


本示例计算处于“Closed Won”（已结束并赢得客户）阶段的任何业务机会的佣金金额。该字段的值将是任何已结束／赢得客户的业务机会的金额乘以 0.02。对于未处理或已丢失的业务机会，佣金值为零。



<alert type="info">
■ 该函数只支持单选的选项列表字段，要使用多选选项列表字段请使用 INCLUDES 。

■ 可以使用  ISBLANK 决定选项列表字段是否为空。


</alert>

### LEFT

返回从文本字符串开头算起的指定数量的字符。

**使用：** LEFT(文本, 字符数)

**参数：**

* *文本:* `text` 您希望返回的字段或表达式。
* *字符数:* `number` 您希望返回的从左边算起的字符数。

**返回值：** 文本

```javascript
TRIM(LEFT(LastName, 5)) & “-” & TRIM(RIGHT(SSN__c, 4))
```


此公式显示名称的前五个字符和社会保险编号的后四个字符（由连字符分隔）。请注意，本示例使用了名为 SSN 的自定义文本字段。



<alert type="info">
如果字符数值小于零，公式会用零替换该值。

</alert>

### LEN

返回指定的文本字符串中所含的字符数。

**使用：** LEN(文本)

**参数：** `text` 您希望返回其长度的字段或表达式。

**返回值：** 数值

```javascript
LEN(PartNumber__c)
```


此公式返回 Product Code（产品代码）字段中所含的字符数。

### LOWER

将指定文本字符串中的所有字母转换为小写。不是字母的任何字符不受此函数的影响。如果提供区域则应用区域规则。

**使用：** LOWER(text)

**参数：** `text` 您要转换为小写的字段或文本。

**返回值：** 文本

```javascript
LOWER("MYCOMPANY.COM")
```


返回“mycompany.com.”。

```javascript
LOWER( TickerSymbol )
```


以小写字符返回 Ticker Symbol 中的文本。

### LPAD

将指定的字符插入文本字符串的左侧。

**使用：** LPAD(文本, 填充长度, 填充字符串)

**参数：**

* *文本:* `text` 文本是要在其左侧插入字符的字段或表达式。
* *填充长度:* `number` 填充长度是文本中将返回的总字符数。
* *填充字符串:* `text` 填充字符串是应插入的字符。填充字符串是必须的，可以传入空字符串表示不填充。

**返回值：** 文本

***示例：***

***1.字段名：截断***

如果文本中值的长度超过了填充字符串，则将文本截断为填充长度的大小。

```javascript
LPAD(Name, 20, "")
```


在 20 个字符后截断名称字段。例如，如果初始值为"mycompany.com"，则返回值为"mycompany.com"，如果初始值为"mycompany_is_good_in_china.com"，则返回值为"mycompany_is_good_in"。

***2.My_Company: 无更改***

```javascript
LPAD( 'my_company.com' , 14, 'z')
```


返回“my_company.com”而没有更改，因为它包含 14 个字符。

***3.使用 Z 填充的字段名***

```javascript
LPAD("my_company.com", 15, "z")
```


返回名称"zmy_company.com"。



<alert type="info">
不会忽略前置空格。

</alert>

### MID

从文本字符串中间返回从给定的起始位置算起的指定数量的字符。

**使用：** MID(文本, 起始字符数, 字符数)

**参数：**

* *文本:* `text` 返回字符时要使用的字段或表达式。
* *起始字符数:* `number` 从左边算起的作为起始位置的字符数（作为起始位置的字符数）。
* *字符数:* `number` 要返回的总字符数。

**返回值：** 文本

```javascript
MID( Division , 3, 4)
```


返回 Division（分部）名称中从左数第三个字符开始的四个字符。对于用户记录，这代表部门代码。

```javascript
MID("ABCDEFGH" , 3, 4)
```


返回"CDEF"。

```javascript
MID("ABCDEFGH", 0, 10)
```


返回"H"，即起始位置是从0开始而非1，传入0值作为起始位置时公式将不能按预期返回值。



<alert type="info">
请注意，文本中的第一个字符指定为 1（而非 0）。

</alert>

### RIGHT

返回从文本字符串右边算起的指定数量的字符。

**使用：** RIGHT(文本, 字符数)

**参数：**

* *文本:* `text` 您希望返回的字段或表达式。
* *字符数:* `number` 您希望返回的从右边算起的字符数。

**返回值：** 文本

```javascript
TRIM(LEFT(LastName, 5))&"-"&TRIM(RIGHT(SSN__c, 4))
```


显示名字的前五个字符和社会保险编号的后四个字符（由连字符分隔）。请注意，本示例假定您拥有名为 SSN 的文本自定义字段。



<alert type="info">
如果字符数值小于零，则公式会用零替换该值。

</alert>

### RPAD

将指定的字符插入文本字符串的右侧。

**使用：** RPAD(文本, 填充长度, 填充字符串)

**参数：**

* *文本:* `text` 文本是要在其后插入字符的字段或表达式。
* *填充长度:* `number` 填充长度是文本中将返回的总字符数。
* *填充字符串:* `number` 填充字符串是应插入的字符。填充字符串是必须的，可以传入空字符串表示不填充。 如果文本中值的长度超过了填充字符串，则将文本截断为填充长度的大小。

**返回值：** 文本

***示例：***

***1.字段名：截断***

```javascript
RPAD(Name, 20, "")
```


在 20 个字符后截断名称字段。例如，如果初始值为"mycompany.com"，则返回值为"mycompany.com"，如果初始值为"mycompany_is_good_in_china.com"，则返回值为"mycompany_is_good_in"。

***2.My_Company: 无更改***

```javascript
RPAD( 'my_company.com' , 14, 'z')
```


返回“my_company.com”而没有更改，因为它包含 14 个字符。

***3.使用 Z 填充的字段名***

```javascript
RPAD("my_company.com", 15, "z")
```


返回名称"my_company.comz"。



<alert type="info">
■ 不会忽略结尾空格。

■ 在截断字符时与函数LPAD一样从右侧开始截断保留左侧部分，而不是相反。

</alert>

### SUBSTITUTE

用新文本替换文本字符串中的旧文本。

**使用：** SUBSTITUTE(文本, 旧文本, 新文本)

**参数：**

* *文本:* `text` 要进行值替换的字段或值。
* *旧文本:* `text` 要被替换的文本。
* *新文本:* `text` 要用来替换旧文本的文本。

**返回值：** 文本

```javascript
SUBSTITUTE(Name, "Coupon", "Discount")
```


返回包含术语“Coupon”（赠券）的业务机会的名称，返回名称时，将名称中的“Coupon”替换为“Discount”。

```javascript
SUBSTITUTE(Email, LEFT(Email, FIND("@", Email)), "www.")
```


查找 @ 符号在个人电子邮件地址中的位置，以确定要用 `“www.”` 替换的文本长度，从而派生其网址，比如Email值为"`abc@steedos.cn`"的话运行公式将返回"[www.steedos.cn"。](https://www.steedos.cn)



<alert type="info">
■ 引号中的每个术语都区分大小写。

■ 如果旧文本出现多次，则所出现的每个“旧文本”都将用所提供的新文本值替换，即使这会导致重复项也是如此。

</alert>

### TEXT

在使用公式的任何地方将百分比、数字、日期、日期时间或货币类型字段转换为文本。

**使用：** TEXT(值)

**参数：** `number/date/datetime/select` 您希望转换为文本格式的字段或表达式。

**返回值：** 文本

```javascript
TEXT(ExpectedRevenue)
```


以文本格式返回业务机会的预期收入金额。例如，如果市场活动的 Expected Revenue（预期收入）是200000，此公式的字段中将显示“200000”。

```javascript
SerialNumber &"-"& TEXT(Quantity)
```


返回一个资产 ID 号，ID 号以序列号开头，以数量结尾，二者之间用连字符分隔。Serial Number（序列号）字段是文本字段，但 Quantity（数量）字段为数字字段，其前面需要使用 TEXT 函数。



<alert type="info">
■ `TEXT(null)`返回值为"NULL"而不是空字符串。

■ `TEXT(FieldName)`参数为字段名的话，当字段值为空时，返回的是空字符串而不是"NULL"。

■ 不支持传入文本类型值，否则将直接报错。

■ 返回的文本未使用任何货币、百分比符号或逗号进行自动格式处理。

■ 百分数以小数形式返回。

■ 日期以 YYYY-MM-DD 格式（即四位数字年份、两位数字月份和两位数字日期）返回。

■ 日期时间值以 YYYY-MM-DD HH:MM:SSZ 格式返回，其中 YYYY 是四位数字年份，MM 是两位数字月份，DD 是两位数字日期，HH 是两位数字小时，MM 是两位数字分钟，SS 是两位数字秒钟，Z 代表本初子午线，指示时间以 UTC 时区返回。

■ 只支持传入单选的select字段，不支持多选。

</alert>

### TRIM

删除文本字符串开头和末尾处的空格和制表符。

**使用：** TRIM(文本)

**参数：** `text` 用您希望修整的字段或表达式替换文本。

**返回值：** 文本

```javascript
TRIM(LEFT(LastName,5))& "-" & RIGHT(FirstName, 1)
```


为用户返回一个网络 ID，该 ID 用连字符分隔其姓氏的前五个字符和其名字的第一个字符。

### UPPER

将指定文本字符串中的所有字母转换为大写。不是字母的任何字符不受此函数的影响。如果提供区域则应用区域规则。

**使用：** UPPER(text)

**参数：** `text` 将 text 用您要转换为大写的字段或表达式替换。

**返回值：** 文本

```javascript
UPPER("mycompany.com")
```


返回“MYCOMPANY.COM.”。

```javascript
UPPER("Mycompany.com 123")
```


返回“MYCOMPANY.COM 123.”。

### VALUE

将文本字符串转换为数字。

**使用：** VALUE(文本)

**参数：** `text` 您希望转换为数字的字段或表达式。

**返回值：** 数值

***示例：***

***1.潜在客户编号***

```javascript
VALUE( Lead_Number__c )
```


返回自动编号字段 Lead Number（潜在客户编号）中的文本值所对应的数字。如果您希望在计算中使用 Lead Number（潜在客户编号）字段，则这可能非常有用。请注意，自动编号字段实际上是文本字段，必须转换为数字字段才能进行数值计算。

***2.潜在客户循环分配***

```javascript
MOD(VALUE(Lead_Number__c), 3)
```


该公式适用于名称为 Round_Robin_ID 的自定义公式字段，它为每个潜在客户分配 0、1 或 2。该公式使用名称为 Lead Number 的自定义自动数字字段，它为每个潜在客户分配从 1 开始的唯一号码。MOD 函数使用潜在客户数量除以可用潜在客户队列的数量（在本示例中为 3），然后返回剩余值 0、1 或 2。在您的潜在客户分配规则中使用该公式字段的值向不同的队列分配潜在客户记录。例如：

* Round_Robin_ID = 0 分配到队列 A
* Round_Robin_ID = 1 分配到队列 B
* Round_Robin_ID = 2 分配到队列 C



<alert type="info">
请确保 VALUE 函数中的文本不包含除小数点（句点）或负号（连字符）以外的任何特殊字符。例如，公式 VALUE(Text_field__c) 产生以下结果：

■ 如果文本字段为123，则结果为 123。

■ 如果文本字段为0，则返回错误信息。

■ 如果文本字段为空白，则返回错误信息。

■ 如果文本字段为$123，则返回错误信息。

</alert>

## 高级函数

### REGEX

将文本字段与正则表达式进行比较，如果匹配则返回 TRUE（真）。反之，返回 FALSE（假）。正则表达式是一个字符串，它根据一定语法规则描述字符串的格式。

**使用：** REGEX(文本, regex_text)

**参数：**

* *文本:* `text` 您希望进行比较的字符全文或字段。
* *比较文本:* `text` 您要匹配的正则表达式。

**返回值：** 布尔

***验证规则示例：***

本示例确保名为 ID 的字段与表示***身份证号***的正则表达式匹配，即具备 310000YYYYMMDD0000 数字格式。

```javascript
NOT(REGEX(ID, "[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)"))
```



<alert type="info">
■ 正则表达式的语法基于Java Platform SE 6 语法。但是，转义字符 () 未被支持，更改为两个反斜杠 (\\)一样不支持，需要匹配特殊符号请用中括号包裹，比如要匹配符号点`.`可以写为`[.]`。

■ 公式中正则表达式引擎匹配整个字符串，而不是在字符串内查找匹配。例如，如果您在搜索姓名 Marc Benioff，那么使用正则表达式.\*Marc Benioff.\*在如下字符串中找到匹配： `According to Marc Benioff, the social enterprise increases customer success.` 如果使用正则表达式 `Marc Benioff`，则它只会匹配到以下字符串： `Marc Benioff`

■ 公式中正则表达式引擎匹配的是整个字符串，这表示正则表达起始^结尾$占位符默认是已经加在表达式的起止位置的，您不需要再加上这些占位符。

■ 捕获分组和替换都将被忽略。

■ 不支持\\w、\\d等表达试语法\[a-zA-Z0-9_\]、\[0-9\]代替。

</alert>
