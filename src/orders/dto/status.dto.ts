import { IsEnum, IsOptional } from "class-validator";
import { OrderStatus } from "../../../../orders-ms/generated/prisma";
import { OrderStatusList } from "../enum/order.enum";

export class StatusDto {
    @IsEnum(OrderStatusList, {
        message : `status must be one of ${OrderStatusList}`
    })
    @IsOptional()
    status: OrderStatus;
}