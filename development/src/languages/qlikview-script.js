/*
 Language: QlikView Script
 Contributors: Matthew Fryer <matthew_fryer@hotmail.com>
 */
 
 /*
 Notes:
 Forward look for a bracket (?=(\\(|$))
 Built in items are:
	hljs.C_LINE_COMMENT_MODE, //Gives a // comment
	hljs.C_BLOCK_COMMENT_MODE, //Gives a block comment
	hljs.QUOTE_STRING_MODE, //Allows use of RegEx in single quotes
 Variable definitions could be improved to include whole statement and its contained parts
 Need to gave a way to deal with field names in WHERE, WHILE, ORDER BY and GROUP BY clauses of load statements to be  highlighted. Can be on preceding loads and froms, residents, etc
 Identification of field names is repeated. Break out into variable
 */

function(hljs) {
  var QVS_KEYWORDS = {
    keyword: 'Add Alias And As Autogenerate|10 ' +
		'Binary Buffer Bundle By ' +
		'Call Case Comment Concatenate Connect Crosstable ' +
		'Default Directory Disconnect Distinct Do Drop ' +
		'Each Else Elseif End Endif Endsub Endswitch Execute Exit ' +
		'Field Fields First For Force From From_Field ' +
		'Generic Group ' +
		'Hierarchy|10 HierarchyBelongsTo|10 ' +
		'if Image_size In Info Inline Inner Inputfield|10 Intervalmatch|10 Into ' +
		'Join ' +
		'Keep ' +
		'Left Let Load Loop Loosen ' +
		'Map Mapping ' +
		'Next Noconcatenate|10 Not NullAsNull NullAsValue ' +
		'Or Outer ' +
		'Qualify ' +
		'Rename Replace Resident Right ' +
		'Sample Script Section Select Semantic Set Sleep SQL SQLColumns SQLTables SQLTypes Star Step Store Sub ' +
		'Switch ' +
		'Table Tables Tag Then To Trace ' +
		'Unless Unmap Unqualify Untag Until Using ' +
		'When Where While With',
	
    built_in: 'Acos Addmonths Addyears Age Alt Applycodepage Applymap Argb Asin Atan Atan2 Attribute Author Autonumber ' +
		'Autonumberhash128 Autonumberhash256 Avg ' +
		'Bitcount Black Blackandschole Blue Brown ' +
		'Capitalize Ceil Chi2test_chi2 Chi2test_df Chi2test_p Chidist Chiinv Chr Class Clientplatform Color ' +
		'Colormaphue Colormapjet Colormix1 Colormix2 Combin Computername Concat Connectstring Converttolocaltime ' +
		'Correl Cos Cosh Count Cyan ' +
		'Darkgray Day Dayend Daylightsaving Dayname Daynumberofquarter Daynumberofyear Daystart Div ' +
		'DocumentName DocumentPath DocumentTitle Dual ' +
		'E Evaluate Even Exists Exp ' +
		'Fabs Fact False Fdist FieldIndex FieldName FieldNumber FieldValue FieldValueCount FileBaseName FileDir ' +
		'FileExtension FileList FileName FilePath FileSize FileTime FindOneOf Finv FirstSortedValue FirstValue FirstWorkDate ' +
		'Floor Fmod Frac Fractile Fv ' +
		'GetExtendedProperty GetFolderPath GetObjectField GetRegistryString GMT Green ' +
		'Hash128 Hash160 Hash256 Hour HSL ' +
		'InDay InDayToTime Index InLunarWeek InLunarWeekToDate InMonth InMonths InMonthsToDate InMonthToDate ' +
		'Input InputAvg InputSum InQuarter InQuarterToDate Interval Interval# InWeek InWeekToDate InYear ' +
		'InYearToDate IRR IsNull IsNum IsPartialReload IsText IterNo ' +
		'KeepChar Kurtosis ' +
		'LastValue LastWorkDate Len LightBlue LightCyan LightGray LightGreen LightMagenta LightRed LINEST_B ' +
		'LINEST_DF LINEST_F LINEST_M LINEST_R2 LINEST_SEB LINEST_SEM LINEST_SEY LINEST_SSREG LINEST_SSRESID ' +
		'LocalTime log log10 Lookup Lower LTrim LunarWeekEnd LunarWeekName LunarWeekStart ' +
		'Magenta MakeDate MakeTime MakeWeekDate MapSubString Match Max MaxString Median Mid Min MinString Minute ' +
		'MissingCount MixMatch Mod Mode Money Money# Month MonthEnd MonthName MonthsEnd MonthsName MonthsStart ' +
		'MonthStart MsgBox ' +
		'NetWorkDays NoOfFields NoOfReports NoOfRows NoOfTables NORMDIST NORMINV Now nPer NPV Null NullCount Num ' +
		'Num# NumAvg NumCount NumericCount NumMax NumMin NumSum ' +
		'Odd Only Ord OSUser ' +
		'Peek Permut Pi Pick Pmt pow Previous PurgeChar PV ' +
		'QlikTechBlue QlikTechGray QlikViewVersion QuarterEnd QuarterName QuarterStart QvdCreateTime QvdFieldName ' +
		'QvdNoOfFields QvdNoOfRecords QvdTableName QVUser ' +
		'Rand RangeAvg RangeCorrel RangeCount RangeFractile RangeIRR RangeKurtosis RangeMax RangeMaxString RangeMin ' +
		'RangeMinString RangeMissingCount RangeMode RangeNPV RangeNullCount RangeNumericCount RangeOnly RangeSkew ' +
		'RangeStdev RangeSum RangeTextCount RangeXIRR RangeXNPV Rate RecNo Red ReloadTime Repeat Replace ' +
		'ReportComment ReportId ReportName ReportNumber RGB Round RowNo RTrim ' +
		'Second SetDateYear SetDateYearMonth Sign sin sinh Skew sqr sqrt Stdev Sterr STEYX SubField|10 SubStringCount ' +
		'Sum SysColor ' +
		'TableName TableNumber tan tanh TDIST Text TextBetween TextCount TimeZone ' +
		'TINV Today Trim True TTest1_conf TTest1_df TTest1_dif TTest1_lower TTest1_sig TTest1_sterr TTest1_t ' +
		'TTest1_upper TTest1w_conf TTest1w_df TTest1w_dif TTest1w_lower TTest1w_sig TTest1w_sterr TTest1w_t ' +
		'TTest1w_upper TTest_conf TTest_df TTest_dif TTest_lower TTest_sig TTest_sterr TTest_t TTest_upper ' +
		'TTestw_conf TTestw_df TTestw_dif TTestw_lower TTestw_sig TTestw_sterr TTestw_t TTestw_upper ' +
		'Upper UTC ' +
		'Week WeekDay WeekEnd WeekName WeekStart WeekYear White WildMatch WildMatch5 ' +
		'XIRR XNPV ' +
		'Year Year2Date YearEnd YearName YearStart YearToDate Yellow ' +
		'ZTest_conf ZTest_dif ZTest_lower ZTest_sig ZTest_sterr ZTest_upper ZTest_z ZTestw_conf ZTestw_dif ' +
		'ZTestw_lower ZTestw_sig ZTestw_sterr ZTestw_upper ZTestw_z',
  };
  var QVS_HASH_FUNCTIONS = { //Deals with the correct highlighting of the functions that have an interpretation version eg. date() and date#()
		className: 'built_in',
		begin: '\\b(date|interval|money|num|time|timestamp)\\b#?\\s?(?=(\\(|$))', 
		illegal: '\\n'
  };
  var QVS_KEYWORD_FUNCTIONS = { //Deals with the correct highlighting of the functions that have a keyword with the same name eg. if, left, right, etc
		className: 'built_in',
		begin: '\\b(if|left|right)\\b#?\\s?(?=(\\(|$))', 
		illegal: '\\n',
  };
  var QVS_STRING_SINGLE = { //Gives a string when using single quotes
        className: 'string',
        begin: '\'', end: '\'',
		illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}],
			relevance: 0
  };
  var QVS_STRING_DOUBLE = { //Gives a string when using double quotes
		className: 'string', 
        begin: '"', end: '"',
		illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}],
			relevance: 0
  };
  var QVS_REM_COMMENT = { //Gives a REM comment. Correctly matches when it is at the start of a line only.
		className: 'comment', 
		begin: '\^rem\\b', end: ';',
			relevance: 10
  };
  var QVS_VARIABLE_DEF = { //Gives a variable definition when using SET or LET
	    className: 'variable', 
		begin: '\\b(let|set)\\b\\s+', end: '\\w+',
		keywords: 'set let',
		illegal: '\\n',
			relevance: 10
  };
  var QVS_VARIABLE_USE = { //Gives a variable when used inside $()
	    className: 'variable',
		begin: '\\$\\(', end: '\\)', 
		illegal: '\\n',
			relevance: 10
  };
  var QVS_BRACED_FIELD = { //Gives a field when using square braces []
		className: 'field',
		begin: '\\[', end: '\\]', 
			relevance: 0
  };
  return {
    aliases: ['qvs','qlikview'],
	case_insensitive: true,
    keywords: QVS_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE, 
      hljs.C_BLOCK_COMMENT_MODE,
	  hljs.QUOTE_STRING_MODE,
	  QVS_HASH_FUNCTIONS,
	  QVS_KEYWORD_FUNCTIONS,
	  QVS_STRING_SINGLE,
	  QVS_STRING_DOUBLE,
	  QVS_REM_COMMENT,
	  QVS_VARIABLE_DEF,
	  QVS_VARIABLE_USE,
	  QVS_BRACED_FIELD,
	  {
		className: 'sql_statement', //Ensures SQL statements are identified to stop other keywords being highlighted within them
		begin: '\\bsql\\b', end: ';',
		keywords: 'sql',
		contains: [
			hljs.C_LINE_COMMENT_MODE, 
			hljs.C_BLOCK_COMMENT_MODE,
			hljs.QUOTE_STRING_MODE,
			QVS_STRING_SINGLE,
			QVS_STRING_DOUBLE,
			QVS_VARIABLE_USE
		]
	  },
	  {
		className: 'load_statement', //Identifies load statements 
        begin: '\\bload\\b', end: ';',
		keywords: 'load distinct',
		contains: [
			hljs.C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE,
			hljs.QUOTE_STRING_MODE,
			QVS_HASH_FUNCTIONS,
			QVS_KEYWORD_FUNCTIONS,
			QVS_STRING_SINGLE,
			QVS_STRING_DOUBLE,
			QVS_VARIABLE_USE,
			QVS_BRACED_FIELD,
			{
				className: 'load_source', //Identifies if the load statement has a source rather than it being a preceding load.
				begin: '(\\bresident\\b|\\binline\\b|\\bautogenerate\\b|\\bfrom\\b)', end: '(?=(;|$))',
				keywords: QVS_KEYWORDS, 
				contains: [
					hljs.C_LINE_COMMENT_MODE, 
					hljs.C_BLOCK_COMMENT_MODE, 
					hljs.QUOTE_STRING_MODE,
					QVS_STRING_SINGLE,
					QVS_STRING_DOUBLE,
					QVS_VARIABLE_USE,
					QVS_BRACED_FIELD,
					{
						className: 'format_specification', //Identifies the format specification contained in braces ()
						begin: '\\(', end: '\\)',
						keywords: {
							format_specification_items: 'ansi oem mac UTF-8 Unicode txt fix dif biff ooxml html xml qvd ' +
								'delimiter is no eof embedded labels explicit no table header line lines comment record ' +
								'quotes msq filters'
						},
						contains: [
							hljs.C_LINE_COMMENT_MODE, 
							hljs.C_BLOCK_COMMENT_MODE,
							hljs.QUOTE_STRING_MODE,
							QVS_STRING_SINGLE,
							QVS_STRING_DOUBLE,
							QVS_VARIABLE_USE,
						]
					}
				]
			},
			{
				className: 'field', //Identifies field names within the load statement
				begin: '\\b[a-zA-Z_][a-zA-Z0-9_-]*\\b',
				keywords: QVS_KEYWORDS,
				illegal: '\n\s',
			}
		],
			relevance: 10
	  }
    ]
  };
}
