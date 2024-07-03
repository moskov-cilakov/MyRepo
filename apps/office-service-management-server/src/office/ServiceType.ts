import { registerEnumType } from "@nestjs/graphql";

export enum ServiceType {
    Teller = "TELLER",
    TellerPrima = "TELLER_PRIMA",
    CustomerService = "CUSTOMER_SERVICE",
    Kredit = "KREDIT"
}

registerEnumType(ServiceType, {
    name: "ServiceType",
  });