const DisplayComponent = ({ empList, clearHandler }) => {
	if (empList.length === 0) return <div>List is empty!!</div>;

	return (
		<div>
			{empList?.map((emp, index) => {
				return <div key={emp.firstname + "_" + index}>{emp.firstname + " " + emp.lastname}</div>;
			})}
			<div>
				<button onClick={clearHandler}>Clear</button>
			</div>
		</div>
	);
};

export default DisplayComponent;
