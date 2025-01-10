import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "id";

export const PropertyTitle = (record: TProperty): string => {
  return record.id?.toString() || String(record.id);
};
