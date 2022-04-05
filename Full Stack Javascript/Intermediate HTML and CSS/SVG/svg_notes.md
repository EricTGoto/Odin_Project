<h2>SVGs- Scalable Vector Graphic</h2>

* can easily scale to any size and retain their quality without increasing their file size
  * this is because vector graphics are formulas
* defined by XML
  * this means SVGs are human readable
  * interoperable with HTML, meaning you can put XML directly into HTML, and image should display
* great for simple images but inefficient at storing complex images
    
<h3>Anatomy of an SVG </h3>

* xmlns - "XML Namespace", specifies XML dialect, must specify the SVG dialect or images will not render or render incorrectly
* viewBox - defines bounds, aspect ratio and origin of SVG
* class, id - attributes, can be used for targetting

<h3>Embedding SVGs</h3>
Two options:

1. Link the svg with an HTML image lement such as <img> or link with CSS
2. paste contents directly into webpage's code

Some SVG repositories:
- https://fonts.google.com/icons
- https://thenounproject.com/browse/icons/term/free/?iconspage=1
