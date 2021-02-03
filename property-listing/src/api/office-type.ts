import { IOfficeDto } from './propertyDto-type';

export interface IOffice {
  created_at: Date;
  title: string;
  price_per_month: number;
  seats: number;
  sqm: number;
  profile_image: string;
  description: string;
}

export class Office implements IOffice {
  created_at: Date;
  title: string;
  price_per_month: number;
  seats: number;
  sqm: number;
  profile_image: string;
  description: string;

  constructor(source: IOffice) {
    this.created_at = source.created_at;
    this.title = source.title;
    this.price_per_month = source.price_per_month;
    this.seats = source.seats;
    this.sqm = source.sqm;
    this.profile_image = source.profile_image;
    this.description = source.description;
  }

  public static deserialize(dto: IOfficeDto): IOffice {
    return new Office({
      created_at: new Date(dto.created_at),
      title: dto.title,
      price_per_month: dto.price_per_month,
      seats: dto.seats,
      sqm: dto.sqm,
      profile_image: dto.profile_image,
      description: dto.description
    });
  }
}
