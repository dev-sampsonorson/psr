module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
        options: {
            safelist: {
                /**
                 * One thing worth mentioning is if the user wanted to use :host
                 * inside the component's stylesheet, they'd have to include
                 * :host to PurgeCss's safelist like so:
                 */
                greedy: [/\:host/],

                // https://github.com/angular/angular-cli/issues/20015
                // Workaround to run purge only during build task (see: https://github.com/angular/angular-cli/issues/20015)
                // This should match the nx build task name of any project:
                // ex: "app1:build:production" or "app2:build:staging"
                // enabled: process?.argv?.some(arg => arg.includes(':build')),
                // content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],

            },
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography')
    ],
}
