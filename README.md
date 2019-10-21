# Sheng

Sheng is a Sass and CSS library for laying out type on the Web, which is opinionated about sizing and spacing, but leaves fonts and colours up to you.

It is named after Bì Shēng, the inventor of movable type.

It is intended to be a JS-free alternative to [typography.js][], but is not a pixel-perfect drop-in, instead taking a few different opinions in some places.

[typography.js]: http://kyleamathews.github.io/typography.js/

## Usage

You can either use Sheng as a Sass library, or include its CSS directly if you're not using Sass.

### Sass

```scss
@import "sheng/sheng.scss";
.content {
  @include sheng();
}
```

### CSS

The CSS version is always applied to the `.type` selector. You can override the defaults using CSS Variables.

```css
@import "https://unpkg.com/sheng@0.1.0/sheng-compiled.css";
.sheng {
  --body-font-family: Helvetica, sans-serif;
}
```
