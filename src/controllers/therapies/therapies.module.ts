import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TherapiesController } from "./therapies.controller";
import { TherapyService } from "src/services/therapy.service";
import { Therapy } from "src/entities/therapy.entity";

@Module({
    imports:[ TypeOrmModule.forFeature([Therapy]) ],
    controllers: [TherapiesController],
    providers: [TherapyService]
})
export class TherapiesModule {}