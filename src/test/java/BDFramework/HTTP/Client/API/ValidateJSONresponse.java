package BDFramework.HTTP.Client.API;

import org.json.JSONArray;
import org.json.JSONObject;

public class ValidateJSONresponse {
	
	public String validateResponseJSONObject(JSONObject jsonResponse, String jData) {
		Object ary = jsonResponse;
		for(String s: jData.split("/")) {
			if(!s.isEmpty()) 
					if(!(s.contains("[")|| s.contains("]")))
						ary = ((JSONObject)ary).get(s);
					else if(s.contains("[")|| s.contains("]"))
						ary = ((JSONArray) ((JSONObject)ary).get(s.split("\\[")[0])).get(Integer.parseInt(s.split("\\[")[1].replace("]", "")));
			
		}
		return ary.toString();
	}

}
