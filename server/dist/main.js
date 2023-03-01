"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix("api/v1");
    const options = new swagger_1.DocumentBuilder()
        .setTitle("LA RECETTE API")
        .setDescription("API rest para la recipe en mongodb")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("docs", app, document);
    const PORT = (process.env.PORT || 4000);
    await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map