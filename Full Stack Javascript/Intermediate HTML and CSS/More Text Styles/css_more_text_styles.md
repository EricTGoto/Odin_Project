<h2>More Text Styles</h2>

- custom fonts, some text related CSS properties

<h3>Fonts</h3>

- if a font is not found (font-family property) then a fallback font will be displayed, if there isn't a fallback, the default HTML font will be used, which does not look good
- therefore, common to see a "system font" stack

```
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```
Browser will go through each of these fonts until it finds one that is installed.

<b>Online Font Libraries</b>

- can also get fonts from the internet
    - google fonts, etc

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

```
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

- instead of linking, can also download the font and link to it
```
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}

h1 {
  font-family: my-cool-font, sans-serif;
}
```

<h3>Text Styles</h3>

<b>font-style</b>

- used to make a font italic, from a stylistic POV
    - as opposed to HTML's <em> tag which has semantic emphasis

```
h1 {
    font-style: italic;
}
```

<b>letter-spacing</b>

- changes spacing between letters in a word

```
.wide {
  font-size: 24px;
  letter-spacing: .5em;
}

.narrow {
  font-size: 48px;
  letter-spacing: -.15em;
}
```

<b>line-height</b>

- adjusts space between lines in text

<b>text-transform</b>

- transforms case of text

<b>text-shadow</b>

- adds shadow around text

<b>ellipsis</b>

- can be useful to truncate overflowing text with an ellipsis
- refer to: https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/