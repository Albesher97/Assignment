import { Employees } from "./Employees";

const resolvers = {
  Query: {
    ...Employees.resolvers.queries,
  },
};
export default resolvers;
