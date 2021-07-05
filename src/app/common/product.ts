export class Product {
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitInStock: number;
  dateCreated: Date;
  lastUpdated: Date;

  constructor(sku: string, name: string, description: string, unitPrice: number, imageUrl: string, active: boolean, unitInStock: number, dateCreated: Date, lastUpdated: Date) {
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this.active = active;
    this.unitInStock = unitInStock;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }
}
