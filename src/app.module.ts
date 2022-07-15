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
      host: 'ec2-107-22-122-106.compute-1.amazonaws.com',
      port: 5432,
      username: 'ovhnynxtzfpono',
      password: 'b4cfdb4d8fdd9fcad4b2a4e3344e1d61620cbe7e656a0bf3382dd5070050b664',
      database: 'decgb9rcblai96',
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
