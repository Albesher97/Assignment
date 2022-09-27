import { pg } from "../../data";
import { getFilters } from "../../Utils/filters";
import dotenv from "dotenv";

dotenv.config();

const queries = {
  employees: async (root, args) => {
    const { filters } = args;
    const { employee_search, department_name } = getFilters(filters);

    const SQL = `SELECT * FROM employees
        JOIN departments ON employees.department = departments.dept_id
        ${employee_search ? "WHERE" : ""} 
        ${employee_search}
        ${department_name && employee_search ? "AND" : ""}
        ${department_name}
        ORDER BY id DESC;`;

    const results = await pg.query(SQL).then((result) => result.rows);
    return {
      total: 0,
      results: results.map((result) => {
        return {
          ...result,
          name: result.name,
          department: result.dept_name,
        };
      }),
      args,
    };
  },
};

export const resolvers = { queries };
