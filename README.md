# winkblue

[![NPM Version](https://img.shields.io/npm/v/winkblue)](https://www.npmjs.com/package/winkblue)

An DOM element detector which API compatible to [sentinel-js](https://github.com/muicss/sentineljs)

## Installation

### CDN

```html
<script src="https://unpkg.com/winkblue/dist/winkblue.umd.js"></script>
```

### CDN + ESM

```html
<script type="importmap">
  {
    "imports": {
      "winkblue": "https://esm.sh/winkblue"
    }
  }
</script>

<script type="module">
  import winkblue from 'winkblue';
</script>
```

## Usage

```js
// Start observing elements by class
winkblue.on('.dynamic-load-components', (el) => {
  // do something on `el`
});

// Stop observing elements by class
winkblue.off('.dynamic-load-components');

// Stop observing all elements
winkblue.reset();
```

## Why?

1. sentinel-js can not find the `display: none;` elements.
2. sentinel-js can not trigger multiple times if multiple selectors match the same element.
3. sentinel-js can not work with multiple instances.

## Limitation

1. if you reuse the same element instance, the callback will not be triggered.

## Playground

1. [simple usage](https://flandredaisuki.github.io/winkblue/play/simple)
2. [hidden elements](https://flandredaisuki.github.io/winkblue/play/hidden)
3. [fizzbuzz](https://flandredaisuki.github.io/winkblue/play/fizzbuzz)
4. [multiple instance](https://flandredaisuki.github.io/winkblue/play/multi-instance)
5. [blink](https://flandredaisuki.github.io/winkblue/play/blink)
6. [scattergun](https://flandredaisuki.github.io/winkblue/play/scattergun)

## LICENSE

[ISC](LICENSE)
