import { Pagination } from "../pagination";

interface Car {
  _id: string;
  id: string;
  agencyId: string;
  brand: string;
  model: string;
  year: number;
  capacity: number;
  transmission: "Automatic" | "Manual"; // Sesuaikan dengan kemungkinan nilai transmisi
  fuelType: "Petrol" | "Diesel" | string; // Tambahkan kemungkinan tipe bahan bakar lainnya jika ada
  rentalPricePerDay: number;
  available: boolean;
  features: string[];
  imageUrl: string | null;
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
  __v: number;
}

interface CarListResponse {
  message: string;
  data?: Car[];
  pagination?: Pagination;
  result: boolean; // Pagination mungkin opsional tergantung pada API
}

export type CarListResponseType = CarListResponse;
export type CarType = Car;
