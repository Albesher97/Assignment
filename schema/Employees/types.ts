export const types = `
type Employee {
    id: ID!
    name: String!
    email: String!
    age: Int!
    nationality: String!
    department: String!
}

input EmployeesFilters {
    deptName: String
    search: String
  }

  type EmployeesOutput {
    results: [Employee!]!
  }
`;