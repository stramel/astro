---
'astro': major
---

Adds SVG component imports

This change enables rendering of SVGs like a component, eg:

```astro
---
import Logo from './path/to/svg/file.svg';
---

<Logo size={24} />
```

If you were previously importing an SVG like so:

```js
import logo from './path/to/svg/file.svg'
```

This can be changed to use the `?raw` parameter instead:

```js
import logo from './path/to/svg/file.svg?raw';
```


