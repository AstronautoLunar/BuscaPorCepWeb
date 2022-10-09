import api from "./api";

const getByCep = async (cep: string) => {
  const cepFormatted = cep.replace("-", "");

  return await api.get(`${cepFormatted}/json`);
};

export const cepService = { getByCep };