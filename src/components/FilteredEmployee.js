const FilteredEmployee = ({ employee }) => {
	if (!employee) {
		return <div>No employee found!!</div>;
	}
	return (
		<div>
			<h1>Filterd Employee</h1>
			<div>{employee?.firstname + " " + employee?.lastname}</div>
		</div>
	);
};

export default FilteredEmployee;
