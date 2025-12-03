export interface VehicleCategory {
  categoryNameEn: string;
  categoryNameAm: string;
  categoryNameTi: string;
  categoryNameOr: string;
  categoryImage: string;
  categoryMarkerImage: string;
  priceEstimate?: string;
  isActive: string;
  comment: string;
  brands: Brand[];
}

export interface Brand {
  brandNameEn: string;
  brandNameAm: string;
  brandNameTi: string;
  brandNameOr: string;
  isActive: string;
  comment: string;
  models: Model[];
}

export interface Model {
  modelNameEn: string;
  modelNameAm: string;
  modelNameTi: string;
  modelNameOr: string;
  seatOptions: string;
  luggageCapacity: string;
  fuelType: string;
  fuelConsumption: string;
  electrictyConsumption: string;
  isActive: string;
  comment: string;
}
