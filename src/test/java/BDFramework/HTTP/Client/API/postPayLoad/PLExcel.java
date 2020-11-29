package BDFramework.HTTP.Client.API.postPayLoad;

public class PLExcel {
	
	String firstName;
	String lastName;
	int departmentID;
	String id;
	int employeeID;
	int subjectID;
	
	public PLExcel(String firstName, String lastName, int departmentID, String id, int employeeID, int subjectID) {
		

		this.firstName = firstName;
		this.lastName= lastName;
		this.departmentID= departmentID;
		this.id= id;
		this.employeeID= employeeID;
		this.subjectID= subjectID;
		
	}

	

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getDepartmentID() {
		return departmentID;
	}

	public void setDepartmentID(int departmentID) {
		this.departmentID = departmentID;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(int employeeID) {
		this.employeeID = employeeID;
	}

	public int getSubjectID() {
		return subjectID;
	}

	public void setSubjectID(int subjectID) {
		this.subjectID = subjectID;
	}

}
