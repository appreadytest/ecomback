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
      host: 'ec2-3-217-14-181.compute-1.amazonaws.com',
      port: 5432,
      username: 'kiqnetnkqvramt',
      password: '97a6ade9e534b3492e2cdd42409044281ad23b64956c9ed0dc91d56e5402b4c8',
      database: 'd2kqvg7808bip3',
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
