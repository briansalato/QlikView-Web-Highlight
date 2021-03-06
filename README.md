#QlikView Web Syntax Highlighter

The QlikView Web Highlighting gives basic syntax highlighting of QlikView script and expressions contained within web pages.

The syntax highlighting that is provided is an approximation of what you would get in QlikView's Edit Script and Edit Expression dialogs. It currently supports the following features:

  * Highlighting of all current (v11.20) functions
  * Highlighting of all current (v11.20) keywords and statements
  * Highlighting of line comments (//) and block comments (/* */ and REM ; )
  * Highlighting of variable definitions (SET and LET)
  * Highlighting the usage of variable within dollar-sign expansion $( )
  * Highlighting of field names in most situations

If you find any issues, including missing keywords or functions, then please let me know by raising an issue and I'll add them to the next release.

This syntax highlighter is also packaged as a plugin for  WordPress and an extension for MediaWiki.

##Installation

Here are the steps to get it installed and working yourself:

  1. Download the QlikView Web Highlighting ZIP archive file from https://github.com/MattFryer/QlikView-Web-Highlight/releases/download/v1.0/qvhighlight_v1.0.zip
  2. Unpack the folder and its contained files from the archive to a folder on you hard drive. 
  3. Upload the folder and its contents to your website (eg. using FTP)
  4. Edit the web page(s) in which you wish to display QlikView script and add the following lines within the <head> section:

<link href="/qvhighlight/qlikview.css" rel="stylesheet" title="QlikView"></link>
<script src="/qvhighlight/highlight.pack.js"></script>
<script>
    hljs.configure({tabReplace: '    '});
    hljs.initHighlightingOnLoad();
</script>

##How To Use

Wrap any QlikView script blocks included within the web page in pre and code HTML tags as shown below:

&lt;pre&gt;&lt;code class="qvs"&gt;MyTable: LOAD * RESIDENT MyTempTable;&lt;/code&gt;&lt;/pre&gt;

The class allocated within the code tag will define the type of code which syntax highlighting should be applied for. If you code type is given, the highlighting engine will attempt to work out what code type is contained within the tags. It can't always guess correctly and so it is recommended to always define the code type. The following following code types are currently supported:

    "qvs" - QlikView Script
    "exp" or "qve" - QlikView Expression
    "sql" - SQL
    "vbscript" - Visual Basic Script
    "javascript" - Java Script

Syntax highlighting will then automatically be applied to the block when the page is view by the user.

##Disclaimer

This syntax highlighting is provided free of charge, as is, with no warranties or guarantees. Neither Datoniq Limited or QlikViewAddict.com (including any of it's contributors) accept any liability for problems or loss resulting from it's use. 
