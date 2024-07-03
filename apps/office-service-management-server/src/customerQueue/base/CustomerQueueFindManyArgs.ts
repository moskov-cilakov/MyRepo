/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerQueueWhereInput } from "./CustomerQueueWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomerQueueOrderByInput } from "./CustomerQueueOrderByInput";

@ArgsType()
class CustomerQueueFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerQueueWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomerQueueWhereInput, { nullable: true })
  @Type(() => CustomerQueueWhereInput)
  where?: CustomerQueueWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomerQueueOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomerQueueOrderByInput], { nullable: true })
  @Type(() => CustomerQueueOrderByInput)
  orderBy?: Array<CustomerQueueOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomerQueueFindManyArgs as CustomerQueueFindManyArgs };
