import { Office as TOffice } from "../api/office/Office";

export const OFFICE_TITLE_FIELD = "officeName";

export const OfficeTitle = (record: TOffice): string => {
  return record.officeName?.toString() || String(record.id);
};
