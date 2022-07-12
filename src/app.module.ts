import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductEntity } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-71-69-66.compute-1.amazonaws.com',
      port: 5432,
      username: 'kldksvyfniirts',
      password: 'e8f4534fa99030a93c0e79449ae0118e33c5744f9c4fde7515ec1b751d56619d',
      database: 'd66sjg7udnh0dd',
      entities: [ProductEntity],
      synchronize: true,
      logging: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
