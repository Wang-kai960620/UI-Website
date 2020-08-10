# Grid 栅格布局
24 栅格系统。

从堆叠到水平排列。
使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。


## 默认样式

默认一列为24，通过span属性，默认分配不得大于24，（同一个Row内的col的span的和不的超过24）
<Row-demo></Row-demo>

## 区块间隔

通过gutter属性来给每个区块设置间隔，

<Row-demo1></Row-demo1>

## 左右偏移

通过offset属性来设置，一列中的空隙。同样是也分配24
<Row-demo2></Row-demo2>