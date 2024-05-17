import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // DEFAULT CONFIG FOR GRAPHQL APOLLO TO WORK!
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [
            `'self'`,
            'data:',
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [
            `'self'`,
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    }),
  );

  app.setGlobalPrefix('v1');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Swagger Configuration : START
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Minitube')
    .setDescription('API for Video platform')
    .setVersion('1.0')
    .addTag('minitube')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);
  // Swagger Configuration : END

  await app.listen(3000);
}
bootstrap();
