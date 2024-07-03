/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceAgentWhereInput } from "./ServiceAgentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ServiceAgentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ServiceAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceAgentWhereInput)
  @IsOptional()
  @Field(() => ServiceAgentWhereInput, {
    nullable: true,
  })
  every?: ServiceAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceAgentWhereInput)
  @IsOptional()
  @Field(() => ServiceAgentWhereInput, {
    nullable: true,
  })
  some?: ServiceAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceAgentWhereInput)
  @IsOptional()
  @Field(() => ServiceAgentWhereInput, {
    nullable: true,
  })
  none?: ServiceAgentWhereInput;
}
export { ServiceAgentListRelationFilter as ServiceAgentListRelationFilter };
