//assign values to variable.
//Variables are of type Mapper from HL7 message.
var drNum = $('STF1_1');
var drName = $('STF3_1');
var reason = $('MFI3_1');
//Connection String
var dbConn = DatabaseConnectionFactory.createDatabaseConnection
('net.sourceforge.jtds.jdbc.Driver','jdbc:jtds:sqlserver://ServerName:Port/dbaseName','UserName','Password');
var Query = "SELECT TYPE_CD,NAME,INACT_IND FROM CODE_TABLE WHERE TYPE_CD LIKE '%"+drNum+"%'";;
var result = dbConn.executeCachedQuery(Query);
while (result.next())
{
//Trim Example
//var hold = result.getString("TYPE_CD").trim();
//msg['MSH']['MSH.3']['MSH.3.1'] = hold;
 
//Parse through result and assign to variables.
//This assumes that only one record is returned and not more than one so there is no logic here
//("TYPE_CD") is a column name in the database and so are the other two
 
var typecd = result.getString("TYPE_CD").trim();
var name = result.getString("NAME").trim();
var inactind = result.getString("INACT_IND").trim();
 
//Assign variables to field.  Be sure to use send ${message.encodedData} in your Destination Template
msg['STF']['STF.2']['STF.2.1'] = typecd;
msg['STF']['STF.3']['STF.3.1'] = name;
msg['MFI']['MFI.3']['MFI.3.1'] = inactind;
}
dbConn.close();
return result;