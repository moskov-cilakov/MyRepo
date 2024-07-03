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
import { OfficeWhereUniqueInput } from "../../office/base/OfficeWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumServiceAgentServiceType } from "./EnumServiceAgentServiceType";

@InputType()
class ServiceAgentCreateInput {
  @ApiProperty({
    required: false,
    type: () => OfficeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OfficeWhereUniqueInput)
  @IsOptional()
  @Field(() => OfficeWhereUniqueInput, {
    nullable: true,
  })
  office?: OfficeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumServiceAgentServiceType,
  })
  @IsEnum(EnumServiceAgentServiceType)
  @IsOptional()
  @Field(() => EnumServiceAgentServiceType, {
    nullable: true,
  })
  serviceType?: "Option1" | null;
}

export { ServiceAgentCreateInput as ServiceAgentCreateInput };
