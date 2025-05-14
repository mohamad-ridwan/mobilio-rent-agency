export type ResultRegister = {
  message: string;
  agency?: {
    id: string;
    name: string;
    email: string;
  };
  result: boolean;
};

interface Address {
  street: string;
  district: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

interface Company {
  name: string;
  address: Address;
  phoneNumber: string;
  email: string;
  establishedYear: number;
  password?: string; // Password dibuat opsional dengan '?' karena mungkin tidak selalu ada atau ingin diikutsertakan dalam type publik
}

export type ReqRegisterAgency = Company;
