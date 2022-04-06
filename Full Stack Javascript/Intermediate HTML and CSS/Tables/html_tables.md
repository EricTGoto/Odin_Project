<h2>Tables</h2>

Use \<table></table> to create a table.

* \<tr> to create a table row
* \<th> to create a table heading
  * has a scope attribute that allows screenreaders to tell what cells the header is a header for
    * has four possible values: col, row, colgroup, rowgroup
* \<td> to create a cell
* wrap header with \<thead>, footer with \<tfoot>, body with \<tbody>
  * makes it easy to target sections with CSS
* Can easily make cells (th and td) span multiple rows or columns by using the colspan and rowspan attributes.
* Can style columns by using \<colgroup> and applying styles to specific rows by using \<col> and applying a style and/or span. For example:

In the table below, the first two columns will have a background colour of brown. The third column will have a width of 100px.

```
<table>
  <colgroup>
    <col style="background-color: brown span="2">
    <col style="width: 100px>
  </colgroup>
  <tr>
    <td>hello</td>
    <td>another cell</td>
    <td>third col</td>
  </tr>
</table>
```
* Can add a caption by using \<caption>


