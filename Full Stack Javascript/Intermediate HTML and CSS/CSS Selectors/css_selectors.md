<h2>CSS Selectors</h2>

- go over the most common selectors

<b>Descendant selector</b>

syntax: selector1 selector2


this will match every selector2 that is a child of selector1, no matter the level

<b>Parent and Sibling Combinators</b>

* \>: child combinator, selects direct children
* +: adjacent sibling combinator
* ~: general sibling combinator

<b>Pseudo-classes</b>

- prefixed with a single colon
- allows targeting elements in special ways
    - :focus: applies to an element that is currently selected by the user
    - :hover: affect anything under the mouse pointer
    - :root: targets very top level of document
    - :first-child/:last-child
- long list here: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

<b>Pseudo-elements</b>

- allow styling of specific parts of selected element
    - ::marker: allows styling on <li> elements' bullets/numbers
    - ::first-letter/::first-line
    - ::before/::after: add extra elements onto the page with CSS
    - ::selection: can change highlighted text
- https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

<b>Attribute Selectors</b>

- attribute is anything in the opening tag of an HTML element
    - i.e. src='picture.jpg'

usage:
* [attribute]: general selector, will select any element that has this attribute
* selector[attribute]: can combine with another selector
* [attribute="value"]: selects attributes with specific values

```
  [src] {
    /* This will target any element that has a src attribute. */
  }

  img[src] {
    /* This will only target img elements that have a src attribute. */
  }

  img[src="puppy.jpg"] {
    /* This will target img elements with a src attribute that is exactly "puppy.jpg" */
  }
```

can also use regular expression-esque syntax to match specific parts of strings:

* [attribute^="value"] - ^= match strings from start
* [attribute$="value"] - $= match strings from end
* [attribute*="value"] - *= wildcard selector, will match anywhere inside string

- more here: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

