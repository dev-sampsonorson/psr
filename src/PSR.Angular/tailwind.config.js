module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./projects/psr/src/**/*.{html,ts}'],
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
        // require('@tailwindcss/typography')
    ],
}
