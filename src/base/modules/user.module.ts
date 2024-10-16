import { UserController } from "@controllers/user.controller";
import { PrismaModule } from "@modules/prisma.module";
import { Module } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserRepository],
})

export class UserModule { }