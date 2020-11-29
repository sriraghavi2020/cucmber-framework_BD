package BDFramework.HTTP.Client.API.postPayLoad;

import BDFramework.RetrivingDataFromExcel.DataFromExcel;

public class payLoad_ExcelSheet {
	
	DataFromExcel payloadFromExcel;
	int RowNum;
	String ExcelpayloadAsString;
	
	public void postcallRequestForRownum(int rowNum) {
		RowNum = rowNum; 
	}
	
	public void retrivingData(String excelFilePath, String sheetName) {
		
		payloadFromExcel = new DataFromExcel(System.getProperty("user.dir")+excelFilePath, sheetName);
		payloadFromExcel.ReadData(RowNum);
		
		//Arrays.deepToString(payload.toArray()) --> .toArray() will display the array list items
		//System.out.println("payload    "+Arrays.deepToString(payload.toArray()));
	}
	
	
	public String payload() {
		//JSONArray jsonArray = new JSONArray(payload);
		//System.out.println("JSON Array: "+jsonArray);
		//System.out.println(jsonArray.get(0)); --> to get a single element from an array 
		//payloadFromExcel.arrayPayload();---> returns only json object 
		ExcelpayloadAsString = payloadFromExcel.classpayload();
		return ExcelpayloadAsString;
	}
	
	

}
