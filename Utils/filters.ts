export const getFilters = (
  filters
): {
  employee_search: string;
  department_name: string;
} => {
  return {
    employee_search: filters?.search
      ? `(employees.name ILIKE '%${filters.search}%' OR email ILIKE '%${filters.search}%')`
      : "",
    department_name: filters?.name
      ? `departments.dept_name = '${filters.name}'`
      : "",
  };
};
