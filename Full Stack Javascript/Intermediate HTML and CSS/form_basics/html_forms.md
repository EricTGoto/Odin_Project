<h1> Form notes: </h1>
All notes made from MDN articles: https://developer.mozilla.org/en-US/docs/Learn/Forms


<h2><u> Form overview </u></h2>

The form element is a container element that wraps all of the inputs a user will interact with on a form.

The form element accepts two attributes:
- action: takes URL to tell form where to send data for back end processing
- method: tells browser which HTTP method to use to submit the form

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

<h2>UI Psuedo-classes</h2>

The original pseudo-classes available that are relevant to forms are:
- :hover : selects an element only when it is being hovered over by a mouse
- :focus : selects an element only when it is focused (i.e. tabbed to)
- :active : selects an element only when it is being activated (i.e. clicked on)

Newer ones are:
- :required and :optional
- :valid, :invalid, :in-range, :out-of-range
- :enabled, :disabled, :read-only, :read-write : target enabled or disabled form controls
- :checked, :indeterminate, :default : target checkboxes and radio buttons

Example:

One basic concept with regards to client-side form validation is whether a form input is required.
\<input>, \<select>, \<textarea> elements have a required attribute which, when set, requires the client to fill in the control before the form will submit.

```
<form>
  <fieldset>
    <legend>Feedback form</legend>
    <div>
      <label for="fname">First name: </label>
      <input id="fname" name="fname" type="text" required>
    </div>
    <div>
      <label for="lname">Last name: </label>
      <input id="lname" name="lname" type="text" required>
    </div>
    <div>
      <label for="email">Email address (include if you want a response): </label>
      <input id="email" name="email" type="email">
    </div>
    <div><button>Submit</button></div>
  </fieldset>
</form>
```
```
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
} 
```

<h3> Using Generated content with pseudo-classes </h3>

We can use ::before and ::after pseudo-elements along with the content property to make a chunk of content appear before or after the affected element. This is useful when you want to add a visual indicator to an element, but don't want it to be picked up by assistive technologies.
See the example ui-pseudo-classes.html.


<b> Styling controls based on whether their data is valid </b>

Another fundamental concept in form validation is whether a form control's data is valid or not.

<b>:valid and :invalid</b>

You can target form controls using the :valid and :invalid pseudo-classes.
Read about points to consider here: https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes#styling_controls_based_on_whether_their_data_is_valid

<b>:in-range and :out-of-range</b>

These pseudo-classes match numeric inputs where range limits are specified by min and max.
Read more here: https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes#in-range_and_out-of-range_data


<b> Styling Enabled and disabled inputs, and read-only and read-write </b>

Enabled elements can be activated: selected, clicked on, typed into, etc. Disabled elements cannot be interacted in any way, and its data isn't sent to the server.

The two states can be targeted using :enabled and :disabled.

Example use case for disabled inputs: shipping form: address for billing and shipping

<h2>Form Validation <h2>

Validations allow constraints on what data users can enter into an input.

Some examples:
- required: makes the field required
- minlength/maxlength: sets a min/max length (character)
- min/max: sets a integer min/max
- pattern: sets validation via a regex

<h3>Client-Side Validation</h3>

Two types:
- built in form validation using HTML
- JS validation

When an element is valid,
- element matches :valid CSS pseudo-class
- is form is submitted, browser will submit the form, unless something else is stopping it (e.g. JS)

When an element is invalid,
- element matches the :invalid CSS pseudo-class, and sometimes other UI pseudo-classes (e.g. :out-of-range)
- if form is submitted, browser will block the form and display an error message

<h3>Forms best practice from UX POV </h3>

- use placeholders, and ensure they are real, e.g. a placeholder for a city should be a real city
- make inputs required if needed
- have indicators that show a user has entered information correctly
