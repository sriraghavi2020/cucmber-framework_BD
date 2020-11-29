package BDFramework.RetrivingDataFromExcel;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.JSONObject;

import com.google.gson.Gson;

import BDFramework.HTTP.Client.API.postPayLoad.PLExcel;

public class DataFromExcel {

	public static XSSFWorkbook excel;
	public static XSSFSheet sheet;
	
	String firstNameValue = null;
	String lastNameValue = null;
	int departmentIDValue = 0;
	String idValue = null;
	int employeeIDValue = 0;
	int subjectIDValue = 0;

	ArrayList<Object[]> payload =new ArrayList<Object[]>();
	Object obj[] = null;

	
	PLExcel pl;
	public DataFromExcel() {
		
	}
	
	public DataFromExcel(String excelFilePath, String sheetName) {

		try {
			excel = new XSSFWorkbook(excelFilePath);
			sheet = excel.getSheet(sheetName);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void ReadData(int rowNum) {
				
			for(int colNum = 0; colNum<=5; colNum++) {
				
					switch(colNum) {
					case 0:
						firstNameValue = stringValue(rowNum,colNum);
						break;
					case 1:
						lastNameValue = stringValue(rowNum, colNum);
						break;
					case 2:
						departmentIDValue = intValue(rowNum, colNum);
						break;
					case 3:
						idValue = stringValue(rowNum, colNum);
						break;
					case 4:
						employeeIDValue = intValue(rowNum, colNum);
						break;
					case 5:
						subjectIDValue = intValue(rowNum, colNum);
						break;
					}
				
				Object[] ob = {firstNameValue, lastNameValue, departmentIDValue, idValue, employeeIDValue, subjectIDValue};
				obj =ob;
			}
			
			//System.out.println("2."+Arrays.toString(obj));  To display array as whole 
			
		


	}
	
	public void arrayPayload() {
		
		JSONObject j = new JSONObject();
		
		j.put("firstName", Array.get(obj, 0));
		j.put("lastName", Array.get(obj, 1));
		j.put("departmentID", Array.get(obj, 2));
		j.put("id", Array.get(obj, 3));
		j.put("employeeID", Array.get(obj, 4));
		j.put("subjectID", Array.get(obj, 5));
		
		System.out.println("Json object: "+j);
		Gson g = new Gson();
		String s = g.toJson(j);
		System.out.println("Json string: "+s);
			
		
	}
	
	public String classpayload() {
		pl = new PLExcel(Array.get(obj, 0).toString(), Array.get(obj, 1).toString(), (int)Array.get(obj, 2), Array.get(obj, 3).toString(), (int)Array.get(obj, 4), (int)Array.get(obj, 5));
		Gson gson = new Gson();
		String load = gson.toJson(pl);
//		System.out.println("class method Json string: "+load);
		return load;
	}

	public static int intValue(int rowNum, int colNum) {
		int value;
		double d = sheet.getRow(rowNum).getCell(colNum).getNumericCellValue();
		value = (int)d;
		return value;
	}
	
	
	public static String stringValue(int rowNum, int colNum) {
		String value;
		value = sheet.getRow(rowNum).getCell(colNum).getStringCellValue();
		return value;
	}

}
