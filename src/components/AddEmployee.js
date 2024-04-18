import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import FilteredEmployee from "./FilteredEmployee";

const AddEmployee = () => {
	const [employee, setEmployee] = useState({});
	const [employeeList, setEmployeeList] = useState([]);
	const [filteredEmployee, setFilteredEmployee] = useState(null);
	const [showUpdate, setShowUpdate] = useState(false);
	const [updateEmp, setUpdateEmp] = useState(null);

	const style = {
		margin: "5px",
		padding: "4px",
		width: "300px",
		height: "30px",
	};

	const handleEmployee = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setEmployee({
			...employee,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setEmployeeList((prevEmpList) => {
			return [...prevEmpList, employee];
		});
	};

	const handleClear = (e) => {
		setEmployeeList([]);
		setEmployee(null);
	};

	const handleFilter = (e) => {
		const emp = employeeList.filter(
			(empl) => empl.firstname === employee.firstname && empl.lastname === employee.lastname,
		);

		if (emp.length !== 0) {
			const fltr = emp.reduce((acc, item) => {
				return { ...acc, ...item };
			}, {});
			setFilteredEmployee(fltr);
		}
	};

	const handleDelete = () => {
		const remEmpList = employeeList.filter(
			(emp) => emp.firstname !== employee.firstname && emp.lastname !== employee.lastname,
		);

		setEmployeeList(remEmpList);
	};

	const handleUpdate = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUpdateEmp({
			...updateEmp,
			[name]: value,
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="firstname"
					value={employee ? employee?.firstname : ""}
					onChange={handleEmployee}
					style={style}
				/>
				<br />
				<input
					name="lastname"
					value={employee ? employee?.lastname : ""}
					onChange={handleEmployee}
					style={style}
				/>
				<br />
				<input
					type="submit"
					value="Submit"
					style={{ margin: "4px", padding: "2px", width: "100px" }}
				/>
				<button onClick={handleFilter}>Filter</button>
				<button onClick={handleDelete}>Delete</button>
				<button
					onClick={() => {
						setShowUpdate(!showUpdate);
					}}
				>
					Update
				</button>
				{showUpdate && (
					<div>
						<input
							name="firstname"
							value={!updateEmp ? "" : updateEmp.firstname}
							onChange={handleUpdate}
						/>
						<input
							name="lastname"
							value={!updateEmp ? "" : updateEmp.lastname}
							onChange={handleUpdate}
						/>
					</div>
				)}

				<br />
				<br />
				<FilteredEmployee employee={filteredEmployee} />
				<br />
				<br />
				{employeeList && (
					<DisplayComponent
						empList={employeeList}
						clearHandler={handleClear}
					/>
				)}
			</form>
		</div>
	);
};

export default AddEmployee;
