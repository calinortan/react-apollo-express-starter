import axios from "axios";

export interface UserApiModel {
  id: string;
  name: string;
  age: number;
  companyId: string;
}

export interface CompanyApiModel {
  id: string;
  name: string;
}

const getUsers = async () => {
  const resp = await axios.get<UserApiModel[]>("http://localhost:3030/users");

  return resp.data;
};

const getCompanies = async () => {
  const resp = await axios.get<CompanyApiModel[]>(
    "http://localhost:3030/companies"
  );

  return resp.data;
};

const getCompany = async (companyId: string) => {
  const resp = await axios.get<CompanyApiModel>(
    `http://localhost:3030/companies/${companyId}`
  );

  return resp.data;
};

export interface APIInterface {
  getUsers: () => Promise<UserApiModel[]>;
  getCompanies: () => Promise<CompanyApiModel[]>;
  getCompany: (companyId: string) => Promise<CompanyApiModel>;
}

export const API: APIInterface = {
  getUsers,
  getCompanies,
  getCompany,
};
