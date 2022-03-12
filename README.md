# unocss-preset-formkit

A UnoCSS preset for [FormKit](https://github.com/formkit/formkit) variants.

> Checkout [UnoCSS](https://github.com/unocss/unocss) for instructions on installation and usage

## Installation

```bash
npm i -D unocss-preset-formkit
```

```ts
import presetFormKit from 'unocss-preset-formkit'

Unocss({
  presets: [
    presetFormKit(),
  ],
})
```

## Usages

This preset adds [FormKit](https://formkit.com/essentials/styling#outer-attributes) attributes for styling using UnoCSS.

For example, you can use `formkit-disabled:gray`, `formkit-invalid:red`.

```css
[data-disabled] .formkit-disabled:\gray { text-color: gray }
[data-invalid] .formkit-invalid:\red { text-color: red }
```

## License

MIT License © 2022-PRESENT [Gustavo Fenilli](https://github.com/gustavofenilli/)
