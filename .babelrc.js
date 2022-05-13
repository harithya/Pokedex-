function babelConfig(api) {
    if (api) {
        api.cache(false)
    }

    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['.'],
                    extensions: [
                        '.ios.ts',
                        '.android.ts',
                        '.ts',
                        '.ios.tsx',
                        '.android.tsx',
                        '.tsx',
                        '.jsx',
                        '.js',
                        '.json',
                    ],
                    alias: {
                        "@components": "./src/components",
                        "@pages": "./src/pages",
                        "@routes": "./src/routes",
                        "@utils": "./src/utils",
                        "@types": "./src/types",
                        "@services": "./src/services",
                    },
                },
            ],
        ],
    };
}

module.exports = babelConfig;