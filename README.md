# Sheng

Sheng is a Sass and CSS library for laying out type on the Web, which is opinionated about sizing and spacing, but leaves fonts and colours up to you.

It is named after Bì Shēng, the inventor of movable type.

It is intended to be a JS-free alternative to [typography.js][], but is not a pixel-perfect drop-in, instead taking a few different opinions in some places.

[typography.js]: http://kyleamathews.github.io/typography.js/

## Usage

You can either use Sheng as a Sass library, or include its CSS directly if you're not using Sass. Then, you can add further rules to add your fonts, colours, and site-specific customisations.

### Sass

The Sass file provides a `sheng()` mixin, which applies Sheng's styles. It takes the following parameters (all are optional):

- `$scale-ratio`: The multiplier by which each heading's font size is scaled. Defaults to `4/3`.
- `$base-font-size`: The base font size. Defaults to `20px`.
- `$paragraph-spacing`: The spacing between paragraphs, as a multiplier of `$base-font-size`. Defaults to `1`.

You can additionally extend or override styles using Sheng's [placeholder selectors](https://sass-lang.com/documentation/style-rules/placeholder-selectors), and Sheng will apply them to the appropriate selectors. They are:

- `%sheng-heading`: Applied to all headings.
- `%sheng-bold`: Applied to everything Sheng makes bold, aside from headings.
- `%sheng-code`: Applied to `pre` blocks and inline `code` elements.
- `%sheng-inline-code`: Applied to inline `code` elements only. (If you want to style only code blocks, use the `pre` selector.)

```scss
@import "~sheng/sheng.scss";
.content {
  @include sheng();
}
%sheng-heading {
  font-family: sans-serif;
  font-weight: 900;
}
```

### CSS

The CSS version is always applied to the `.type` selector. You can override some of Sheng's defaults using CSS Variables:

- `--heading-font-family`, `--heading-font-weight`: Font family and weight for all headings.
- `--body-font-family`, `--body-font-weight`: Font family and weight for most content.
- `--body-bold-font-weight`: Font weight for everything Sheng makes bold.
- `--code-font-family`: Font family for code and code blocks.

```css
@import "https://unpkg.com/sheng@1.0.0/sheng-compiled.css";
.sheng {
  --body-font-family: Helvetica, sans-serif;
}
```
