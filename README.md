# type

A Sass and CSS library for laying out type on the Web, which is opinionated about sizing and spacing, but leaves fonts and colours up to you.

It is based on the same concept as [typography.js][], but is not a pixel-perfect JS-free drop-in, instead taking a few different opinions in some places.

[typography.js]: http://kyleamathews.github.io/typography.js/

## Usage

You can either use type as a Sass library, or include its CSS directly if you're not using Sass.

### Sass

```scss
@import "type/type.scss";
.content {
  @include type();
}
```

### CSS

The CSS version is always applied to the `.type` selector. You can override the defaults using CSS Variables.

```css
@import "type/type-compiled.css" .type {
  --body-font-family: Helvetica, sans-serif;
}
```
