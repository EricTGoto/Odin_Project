 <h2>Custom Properties</h2>

 Declaring a custom property:

 --custom_property_name: some css value

 e.g. --div-color

 Access a custom property:

 var(--custom_property_name)

 e.g. var(--div-color)

 color: var(--div-color);

 var() accepts a fallback value as well, in case the first value is unavailable

<b>Scope</b>
Custom properties have scope, similar to many programming languages. Sometimes you want to limit scope, other times you want properies to be available everywhere. For a global property, declare it in the :root selector.