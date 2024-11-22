const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true, // Удаляет содержимое dist при каждом сборке
        },
        module: {
            rules: [
                {
                    test: /\.css$/, // Слушает все файлы .css
                    use: [
                        MiniCssExtractPlugin.loader, // Извлекает CSS в отдельный файл
                        'css-loader', // Позволяет импортировать CSS
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html', // Использует ваш html файл как шаблон
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css', // Задает имя выходного CSS файла
            }),
        ],
        mode: 'production', // Устанавливает режим сборки в production
    };