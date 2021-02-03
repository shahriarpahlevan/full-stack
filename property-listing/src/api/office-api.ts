import { IOfficeDto } from './propertyDto-type';
import { Office } from './office-type';
import jsonData from './office.json';

export function fetchOffice(): Office[] {
  const data: Office[] = jsonData.map((x: IOfficeDto) => Office.deserialize(x));
  return data;
}
