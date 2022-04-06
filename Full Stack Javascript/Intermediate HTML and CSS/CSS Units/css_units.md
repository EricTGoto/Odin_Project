<h2> CSS Units </h2>

<h3>Absolute Units</h3>

- units that are the same in any context, e.g. px

<h3>Relative Units</h3>

- units that change based on their context

<b>em and rem</b>
<p>Using a relative size like rem increases accessability as browsers will be able to adjust font-size.</p>

- em and rem both refer to a font size, but often used to define other sizes in CSS
  - rule of thumb: use rem
- 1 em is the font-size of a specific element
- 1 rem is the font-size of the root element

<b>Viewport Units (vh and vw)</b>

- vh: viewport height, e.g. 1vh is 1% of viewport height
- vw: viewport width

Interesting reading on tricks with viewport units: https://css-tricks.com/fun-viewport-units/

<h3>Suggestion </h3>

- use rem for font-size and px for everythign else