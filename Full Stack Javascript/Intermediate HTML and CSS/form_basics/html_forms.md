<h1> Form notes: </h1>
All notes made from MDN articles: https://developer.mozilla.org/en-US/docs/Learn/Forms


<h2> Form overview </h2>

<h2>Form Styling</h2>

Difficulty of styling forms with CSS can be divided into three categories:

<b>Good</b>: can be styled with relative ease across platforms
- \<form>
- \<fieldset>, \<legend>
- single line text \<input> (e.g. type text,url,email, etc), except for search
- multi-line \<textarea>
- buttons (\<input> and \<button>)
- \<label>
- \<output>

Bad: more difficult to style and require tricks
- checkboxes and radio buttons
- \<input type="search">

Ugly: can't be styled thoroughly using CSS
- \<input type="color">
- date related controls, e.g. \<input type="datetime-local">
- \<input type="range">
- \<input type="file">
- dropdown widgets
- \<progress> and \<meter>

<h3> The Good </h3>

<b>Fonts and Text</b>
By default, some widgets do not inherit font-family and font-size from their parents. To make forms' appearance consistent, apply the following:

```
button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
}
```
<b>Box Sizing</b>
All text fields have complete support for every property related to the CSS box model such as width, height, padding, margin and border. Every widget has their own rules for border, padding and margin. To give the same size to several different widgets, use the box-sizing property:

```
input, textarea, select, button {
  width : 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

<h3> The bad and ugly </h3>
Styling of web form controls are largely taken from the underlying OS. To remove the system-level styling:

```
input {
  -webkit-appearance: none;
  appearance: none;
}
```
The prefix means "work in progress", as in it is in the process of being standardized/supported by browsers.

For more examples, refer to html files.

<b>Styling checkboxes and radio buttons</b>

"Ugly" controls have different default looks across browsers, and some parts of their internals are impossible to style. However, there are simple stylings that can be done to make things like sizing, and background-color consistent. You can also use appearance to remove system level styling.

<h3>UI Psuedo-classes</h3>