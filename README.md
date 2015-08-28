## Modules
<dl>
<dt><a href="#module_datejs">datejs</a> : <code>string</code></dt>
<dd><p>Date utility initially used for inkincardine.com</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#pad">pad(num)</a> ⇒ <code>string</code></dt>
<dd><p>Pad a string with the default options. In time we should pass an options object so each call can override the defaults</p>
</dd>
</dl>
<a name="module_datejs"></a>
## datejs : <code>string</code>
Date utility initially used for inkincardine.com


* [datejs](#module_datejs) : <code>string</code>
  * [.isThisWeek(target, offset)](#module_datejs.isThisWeek) ⇒ <code>Boolean</code>
  * [.getStartOfWeek(date)](#module_datejs.getStartOfWeek) ⇒ <code>Date</code>
  * [.isNextWeek(target)](#module_datejs.isNextWeek) ⇒ <code>Boolean</code>
  * [.isToday(date)](#module_datejs.isToday) ⇒ <code>Boolean</code>
  * [.isTomorrow(date)](#module_datejs.isTomorrow) ⇒ <code>Boolean</code>
  * [.isNowBetween(left, right)](#module_datejs.isNowBetween) ⇒ <code>Boolean</code>
  * [.format(date, format)](#module_datejs.format) ⇒ <code>String</code>

<a name="module_datejs.isThisWeek"></a>
### datejs.isThisWeek(target, offset) ⇒ <code>Boolean</code>
Checks if a date is in this week

**Kind**: static method of <code>[datejs](#module_datejs)</code>  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Date</code> | date we're looking for |
| offset | <code>Int</code> | day offset, used with the isNextWeek, so that we can use the same logic, but just add 7 to the equations. |

<a name="module_datejs.getStartOfWeek"></a>
### datejs.getStartOfWeek(date) ⇒ <code>Date</code>
Gets the first day of the week.

**Kind**: static method of <code>[datejs](#module_datejs)</code>  
**Returns**: <code>Date</code> - first day of the week  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | a target date, or if not suplied, it'll be today's date. |

<a name="module_datejs.isNextWeek"></a>
### datejs.isNextWeek(target) ⇒ <code>Boolean</code>
Is a specified date in next week

**Kind**: static method of <code>[datejs](#module_datejs)</code>  
**Returns**: <code>Boolean</code> - if it is or isnt in next week  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Date</code> | date that we're comparing |

<a name="module_datejs.isToday"></a>
### datejs.isToday(date) ⇒ <code>Boolean</code>
Is a supplied date today?

**Kind**: static method of <code>[datejs](#module_datejs)</code>  
**Returns**: <code>Boolean</code> - it is or it isnt  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | the target date |

<a name="module_datejs.isTomorrow"></a>
### datejs.isTomorrow(date) ⇒ <code>Boolean</code>
Is a supplied date tomorrow?

**Kind**: static method of <code>[datejs](#module_datejs)</code>  
**Returns**: <code>Boolean</code> - it either is or isnt tomorrow  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | is the date tomorrow |

<a name="module_datejs.isNowBetween"></a>
### datejs.isNowBetween(left, right) ⇒ <code>Boolean</code>
Is the current time between two dates?

**Kind**: static method of <code>[datejs](#module_datejs)</code>  
**Returns**: <code>Boolean</code> - if it's in the range or not.  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Date</code> | start of date range |
| right | <code>Date</code> | end of date range |

<a name="module_datejs.format"></a>
### datejs.format(date, format) ⇒ <code>String</code>
Simple date formatting

**Kind**: static method of <code>[datejs](#module_datejs)</code>  
**Returns**: <code>String</code> - formatted date.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | date we're going to format |
| format | <code>String</code> | formatting string |

<a name="pad"></a>
## pad(num) ⇒ <code>string</code>
Pad a string with the default options. In time we should pass an options object so each call can override the defaults

**Kind**: global function  
**Returns**: <code>string</code> - the new string  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>int</code> | the number to be pad |

