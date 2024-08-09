import { DocumentBuilder } from "@nestjs/swagger";

export function swaggerConfig() {
    const config = new DocumentBuilder()
    .setTitle('NFC-Tag')
    .setDescription('NFC-Tag API description')
    .setVersion('1.0')
    .build();

    return config;
}