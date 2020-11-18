package BDFramework.HTTP.Client.API.postPayLoad;

public class payLoad {

	
	String FirstName;
	String LastName;
	int DepartmentID;
	String id;
	int EmployeeID;
	int subjectID;
	
	
	public payLoad() {
		
	}
	
	public payLoad(String FirstName, String LastName, int DepartmentID, String id, int EmployeeID, int subjectID) {
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.DepartmentID = DepartmentID;
		this.id=id;
		this.EmployeeID = EmployeeID;
		this.subjectID = subjectID;
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}
	
	public int getDepartmentID() {
		return DepartmentID;
	}

	public void setDepartmentID(int departmentID) {
		DepartmentID = departmentID;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getSubjectID() {
		return subjectID;
	}

	public void setSubjectID(int subjectID) {
		this.subjectID = subjectID;
	}
	
	public void setEmployeeID(int employeeID) {
		EmployeeID = employeeID;
	}

	public int getEmployeeID() {
		return EmployeeID;
	}

}
