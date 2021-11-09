import { Resolvers } from "../generated/graphql";
import { apolloContext } from "../../..";

export const CompanyResolver: Resolvers<apolloContext> = {
  Query: {
    company: async (parent, args, { api }) => {
      return api.getCompanies();
    },
  },
};
