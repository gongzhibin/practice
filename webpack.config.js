const path = require("path");

module.exports = {
    "mode": "development",
    "entry": "./eventBus/index.js",
    "output": {
        "path": path.resolve(__dirname, "eventBus"),
        "filename": "compiled.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /(node_modules|bower_components)/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};
