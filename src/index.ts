import type { Preset } from 'unocss';

const presetFormKit = (): Preset => {
  return {
    name: 'unocss-preset-formkit',
    variants: [
      (matcher) => {
        const match = matcher.match(/^formkit-([_\d\w]+)[:-]/);

        if (match) {
          return {
            matcher: matcher.slice(match[0].length),
            selector: s => `[data-${match[1]}] ${s}, [data-${match[1]}]${s}`
          }
        }
      },
      (matcher) => {
        const match = matcher.match(/^formkit-message-([_\d\w]+)[:-]/);

        if (match)
          return {
            matcher: matcher.slice(match[0].length),
            selector: s => `[data-message-type="${match[1]}"] ${s}, [data-message-type="${match[1]}"]${s}`
          }
      }
    ]
  }
};

export default presetFormKit;
