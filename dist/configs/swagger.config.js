"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = swaggerConfig;
const swagger_1 = require("@nestjs/swagger");
function swaggerConfig() {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NFC-Tag')
        .setDescription('NFC-Tag API description')
        .setVersion('1.0')
        .build();
    return config;
}
//# sourceMappingURL=swagger.config.js.map