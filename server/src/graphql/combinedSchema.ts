import "graphql-import-node";
import { makeExecutableSchema } from "@graphql-tools/schema";
import * as baseTypeDef from "./schemas/base.graphql";
import * as userTypeDef from "./schemas/user.graphql";
import * as companyTypeDef from "./schemas/company.graphql";
import { UserResolver } from "./resolvers/user-resolver";
import { CompanyResolver } from "./resolvers/company-resolver";

const schema = makeExecutableSchema({
  typeDefs: [baseTypeDef, userTypeDef, companyTypeDef],
  resolvers: [UserResolver, CompanyResolver],
});

export default schema;
