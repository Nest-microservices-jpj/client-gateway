import { PaginationDto } from 'src/common';
import { Order, OrderStatus } from '../../../../orders-ms/generated/prisma/index';
import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';
export class OrderPaginationDto extends PaginationDto {
    @IsOptional()
    @IsEnum(OrderStatusList, {
        message: `status must be one of ${OrderStatusList}`
    })
    status?: OrderStatus
}