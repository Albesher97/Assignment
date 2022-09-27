import { Employees } from "./Employees";
const { gql } = require("apollo-server-express");

const typeDefs = gql`

 ${Employees.types}
 
 type Query {
 ${Employees.queries}
 }
 
`;

export default typeDefs;
