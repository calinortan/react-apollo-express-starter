import { Resolvers } from "../generated/graphql";
import { apolloContext } from "../../..";
import { UserApiModel } from "../../api";

export const UserResolver: Resolvers<apolloContext> = {
  Query: {
    user: async (parent, args, { api }) => {
      return api.getUsers();
    },
  },
  User: {
    company: (parent: UserApiModel, args, { api }) => {
      const { companyId } = parent;

      return api.getCompany(companyId);
    },
  },
};
