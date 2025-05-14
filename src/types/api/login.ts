export type ReqLogin = {
  email: string;
  password: string;
};

interface AgencyInfo {
  id: string;
  name: string;
  email: string;
}

interface LoginResponse {
  message: string;
  token?: string;
  agency?: AgencyInfo;
  result: boolean;
}

export type ResultLogin = LoginResponse;
