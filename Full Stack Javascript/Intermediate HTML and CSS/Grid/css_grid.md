<h2>Grid</h2>

To use grid, use the property display: grid.

Then you can define columns and rows with the grid-template-columns and grid-template-rows properties.

A shorthand for it is grid-template. Use a forward slash to distinguish between row and columns. Example:

```
grid-template: row / column;

grid-template: 50px 50px / 150px 200px;
```

<b>Implicit Grid</b>
If more items are added to the grid then the number of grid items defined, then the grid will implicitly define new grid items. The default behaviour is to add new rows and these rows size can be defined with the attribute ```grid-auto-rows``` (size needs to be defined as the grid properties are not carried over). Adding more columns automatically can be set with ```grid-auto-flow: column``` and the size can be defined with ```grid-auto-columns```

<b>Gap</b>
Define a gap with ```column-gap``` or ```row-gap```. Shorthand ```gap```.

<b>Grid Positioning</b>
Can easily position a grid item by using ```grid-column-start``` and ```grid-column-end```.
The property values represent the column grid lines we wish to start and end with. Can also use ```grid-row-start``` and ```grid-row-end```.
Short hand for these is ```grid-column``` and ```grid-row```. Use / and put the start on the left of the slash and the end on the right of the slash.


Can shorthand even further by using grid-area.
Grid-area can also be used to create a visual layout of the grid in words.

<b>fr</b>

fr (fractional units) can be used to make dynamic grid tracks. distributes remaining space in grid.

<b>Dynamic min and max sizes</b>

minmax(): takes two arguments: min size grid track can be, max size grid track can be

clamp(): takes three arguments: min, ideal, max

auto-fit() and auto-fill(): return largest positive integer without overflowing grid, often incorporated with minmax()


auto-fit() will keep grid items at their max size when grid is expanded while auto-fill() will snap items to their min size once space becomes available