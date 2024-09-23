import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueEslintParser from 'vue-eslint-parser';

export default [
    ...pluginVue.configs['flat/recommended'],
    {
        ...js.configs.recommended,
        files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
        ignores: ['**/*.config.js', '**/*.config.ts', '**/*.config.cjs', '.gitignore'],
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },
        rules: {
            'no-console': 'error',
            'no-unused-vars': 'warn',
            'vue/no-unused-vars': 'warn',
            'vue/multi-word-component-names': 'warn',
            'vue/valid-v-for': 'warn',
            'vue/require-v-for-key': 'warn',
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always'
                    },
                    svg: 'always',
                    math: 'always'
                }
            ],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {
                        max: 3
                    },
                    multiline: {
                        max: 2
                    }
                }
            ],
            'vue/singleline-html-element-content-newline': 'off'
        }
    }
];
