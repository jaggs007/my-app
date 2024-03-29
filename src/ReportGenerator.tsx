import React from "react";
import html2pdf from "html2pdf.js";

const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: mimeString });
};

const generatePDF = async (htmlContent) => {
  try {
    // Create a data URI from the HTML content
    const pdfDataURI = await html2pdf().from(htmlContent).toPdf().save()
      // .from(htmlContent).toPdf().output('blob').then(async (pdfBlob) => {
      //   const formData = new FormData();
      //   formData.append("file", pdfBlob, "generated.pdf");
      //   // Create a FormData object and append the Blob
    
      //   // Send the FormData to the backend API
      //   const response = await fetch("/send-mail", {
      //     method: "POST",
      //     body: formData,
      //   });
    
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log("Backend response:", data);
    
      //     // Optionally, you can trigger a file download on the frontend
      //     const downloadLink = document.createElement("a");
      //     downloadLink.href = pdfDataURI;
      //     downloadLink.download = "generated.pdf";
      //     downloadLink.click();
      //   } else {
      //     console.error(
      //       "Error sending file to the backend. HTTP status:",
      //       response.status
      //     );
      //   }
      // })
  } catch (error) {
    console.error("Error generating or sending PDF:", error);
  }
};

const ReportGenerator = () => {
  const htmlContent = `
<table  id="treeview-1281-tableadded" class="x-treeview-1281-table x-grid-table" border="0"
	cellspacing="0" cellpadding="0">
	<colgroup>
		<col class="x-grid-cell-actioncolumn-1276" style="width:70px">
	</colgroup>
	<colgroup>
		<col class="x-grid-cell-treecolumn-1277" style="width:200px">
	</colgroup>
	<colgroup>
		<col class="x-grid-cell-gridcolumn-1278" style="width: 426px;">
	</colgroup>
	<colgroup>
		<col class="x-grid-cell-gridcolumn-1279" style="width: 426px;">
	</colgroup>
	<colgroup>
		<col class="x-grid-cell-gridcolumn-1280" style="width: 425px;">
	</colgroup>
	<tbody id="treeview-1281-bodyadded">
		<tr role="row" id="treeview-1281-record-ext-record-262added" data-boundview="treeview-1281"
			data-recordid="ext-record-262added" data-recordindex="0"
			class="x-grid-row x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1746added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1747added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2002added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:43:12</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1748added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2012added">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1749added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1750added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-292added" data-boundview="treeview-1281"
			data-recordid="ext-record-292added" data-recordindex="1"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1751added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1752added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2004added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line" id="ext-gen2003added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1753added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen1994added"><a
						href="javascript: void(0)" class="drilldown" onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1754added">
				<div class="x-grid-cell-inner" style="text-align:left;">3</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1755added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-293added" data-boundview="treeview-1281"
			data-recordid="ext-record-293added" data-recordindex="2"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1756added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1757added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2006added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end" id="ext-gen2005added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1758added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2010added"><a
						href="javascript: void(0)" class="drilldown" onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1759added">
				<div class="x-grid-cell-inner" style="text-align:left;">22</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1760added">
				<div class="x-grid-cell-inner" style="text-align:left;">10516.77</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-263added" data-boundview="treeview-1281"
			data-recordid="ext-record-263added" data-recordindex="3"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1761added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1762added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:43:32</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1763added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen1995added">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1764added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1765added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-294added" data-boundview="treeview-1281"
			data-recordid="ext-record-294added" data-recordindex="4"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1766added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1767added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2007added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1768added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2009added"><a
						href="javascript: void(0)" class="drilldown" onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1769added">
				<div class="x-grid-cell-inner" style="text-align:left;">68</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1770added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-295added" data-boundview="treeview-1281"
			data-recordid="ext-record-295added" data-recordindex="5"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1771added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1772added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2008added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1773added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen1996added"><a
						href="javascript: void(0)" class="drilldown" onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1774added">
				<div class="x-grid-cell-inner" style="text-align:left;">15</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1775added">
				<div class="x-grid-cell-inner" style="text-align:left;">52776.27</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-264added" data-boundview="treeview-1281"
			data-recordid="ext-record-264added" data-recordindex="6"
			class="x-grid-row x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1776added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1777added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:43:52</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1778added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2011added">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1779added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1780added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-296added" data-boundview="treeview-1281"
			data-recordid="ext-record-296added" data-recordindex="7"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1781added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1782added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1783added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen1997added"><a
						href="javascript: void(0)" class="drilldown" onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1784added">
				<div class="x-grid-cell-inner" style="text-align:left;">1</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1785added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-297added" data-boundview="treeview-1281"
			data-recordid="ext-record-297added" data-recordindex="8"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1786added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1787added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1788added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen1998added"><a
						href="javascript: void(0)" class="drilldown" onclick="" id="ext-gen1999added"> LogPoint </a>
				</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1789added">
				<div class="x-grid-cell-inner" style="text-align:left;">32</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1790added">
				<div class="x-grid-cell-inner" style="text-align:left;">10522.81</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-265added" data-boundview="treeview-1281"
			data-recordid="ext-record-265added" data-recordindex="9"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1791added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1792added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2001added"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:44:12</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1793added">
				<div class="x-grid-cell-inner" style="text-align:left;" id="ext-gen2000added">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1794added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1795added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-298added" data-boundview="treeview-1281"
			data-recordid="ext-record-298added" data-recordindex="10"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1796added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1797added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1798added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1799added">
				<div class="x-grid-cell-inner" style="text-align:left;">2</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1800added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-299added" data-boundview="treeview-1281"
			data-recordid="ext-record-299added" data-recordindex="11"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1801added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1802added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1803added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1804added">
				<div class="x-grid-cell-inner" style="text-align:left;">11</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1805added">
				<div class="x-grid-cell-inner" style="text-align:left;">10516.64</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-266added" data-boundview="treeview-1281"
			data-recordid="ext-record-266added" data-recordindex="12"
			class="x-grid-row x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1806added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1807added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:44:32</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1808added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1809added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1810added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-300added" data-boundview="treeview-1281"
			data-recordid="ext-record-300added" data-recordindex="13"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1811added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1812added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1813added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1814added">
				<div class="x-grid-cell-inner" style="text-align:left;">1</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1815added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-301added" data-boundview="treeview-1281"
			data-recordid="ext-record-301added" data-recordindex="14"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1816added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1817added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1818added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1819added">
				<div class="x-grid-cell-inner" style="text-align:left;">17</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1820added">
				<div class="x-grid-cell-inner" style="text-align:left;">10510.65</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-267added" data-boundview="treeview-1281"
			data-recordid="ext-record-267added" data-recordindex="15"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1821added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1822added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:44:52</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1823added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1824added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1825added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-302added" data-boundview="treeview-1281"
			data-recordid="ext-record-302added" data-recordindex="16"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1826added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1827added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1828added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1829added">
				<div class="x-grid-cell-inner" style="text-align:left;">3</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1830added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-303added" data-boundview="treeview-1281"
			data-recordid="ext-record-303added" data-recordindex="17"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1831added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1832added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1833added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1834added">
				<div class="x-grid-cell-inner" style="text-align:left;">18</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1835added">
				<div class="x-grid-cell-inner" style="text-align:left;">10512.28</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-268added" data-boundview="treeview-1281"
			data-recordid="ext-record-268added" data-recordindex="18"
			class="x-grid-row x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1836added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1837added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:45:12</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1838added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1839added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1840added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-304added" data-boundview="treeview-1281"
			data-recordid="ext-record-304added" data-recordindex="19"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1841added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1842added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1843added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1844added">
				<div class="x-grid-cell-inner" style="text-align:left;">4</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1845added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-305added" data-boundview="treeview-1281"
			data-recordid="ext-record-305added" data-recordindex="20"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1846added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1847added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1848added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1849added">
				<div class="x-grid-cell-inner" style="text-align:left;">18</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1850added">
				<div class="x-grid-cell-inner" style="text-align:left;">10512.11</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-269added" data-boundview="treeview-1281"
			data-recordid="ext-record-269added" data-recordindex="21"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1851added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1852added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:45:32</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1853added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1854added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1855added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-306added" data-boundview="treeview-1281"
			data-recordid="ext-record-306added" data-recordindex="22"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1856added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1857added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1858added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1859added">
				<div class="x-grid-cell-inner" style="text-align:left;">68</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1860added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-307added" data-boundview="treeview-1281"
			data-recordid="ext-record-307added" data-recordindex="23"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1861added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1862added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1863added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1864added">
				<div class="x-grid-cell-inner" style="text-align:left;">17</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1865added">
				<div class="x-grid-cell-inner" style="text-align:left;">47807.29</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-270added" data-boundview="treeview-1281"
			data-recordid="ext-record-270added" data-recordindex="24"
			class="x-grid-row x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1866added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1867added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:45:52</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1868added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1869added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1870added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-308added" data-boundview="treeview-1281"
			data-recordid="ext-record-308added" data-recordindex="25"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1871added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1872added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1873added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1874added">
				<div class="x-grid-cell-inner" style="text-align:left;">3</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1875added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-309added" data-boundview="treeview-1281"
			data-recordid="ext-record-309added" data-recordindex="26"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1876added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1877added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1878added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1879added">
				<div class="x-grid-cell-inner" style="text-align:left;">21</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1880added">
				<div class="x-grid-cell-inner" style="text-align:left;">10512.33</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-271added" data-boundview="treeview-1281"
			data-recordid="ext-record-271added" data-recordindex="27"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1881added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1882added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:46:12</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1883added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1884added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1885added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-310added" data-boundview="treeview-1281"
			data-recordid="ext-record-310added" data-recordindex="28"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1886added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1887added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1888added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1889added">
				<div class="x-grid-cell-inner" style="text-align:left;">69</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1890added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-311added" data-boundview="treeview-1281"
			data-recordid="ext-record-311added" data-recordindex="29"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1891added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1892added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1893added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1894added">
				<div class="x-grid-cell-inner" style="text-align:left;">24</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1895added">
				<div class="x-grid-cell-inner" style="text-align:left;">36936.79</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-272added" data-boundview="treeview-1281"
			data-recordid="ext-record-272added" data-recordindex="30"
			class="x-grid-row x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1896added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1897added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:46:32</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1898added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1899added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1900added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-312added" data-boundview="treeview-1281"
			data-recordid="ext-record-312added" data-recordindex="31"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1901added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1902added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1903added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1904added">
				<div class="x-grid-cell-inner" style="text-align:left;">71</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1905added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-313added" data-boundview="treeview-1281"
			data-recordid="ext-record-313added" data-recordindex="32"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1906added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1907added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1908added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1909added">
				<div class="x-grid-cell-inner" style="text-align:left;">16</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1910added">
				<div class="x-grid-cell-inner" style="text-align:left;">50136.5</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-273added" data-boundview="treeview-1281"
			data-recordid="ext-record-273added" data-recordindex="33"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1911added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1912added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:46:52</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1913added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1914added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1915added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-314added" data-boundview="treeview-1281"
			data-recordid="ext-record-314added" data-recordindex="34"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1916added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1917added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1918added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1919added">
				<div class="x-grid-cell-inner" style="text-align:left;">5</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1920added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-315added" data-boundview="treeview-1281"
			data-recordid="ext-record-315added" data-recordindex="35"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1921added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1922added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1923added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1924added">
				<div class="x-grid-cell-inner" style="text-align:left;">17</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1925added">
				<div class="x-grid-cell-inner" style="text-align:left;">10512.71</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-274added" data-boundview="treeview-1281"
			data-recordid="ext-record-274added" data-recordindex="36"
			class="x-grid-row x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1926added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1927added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:47:12</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1928added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1929added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1930added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-316added" data-boundview="treeview-1281"
			data-recordid="ext-record-316added" data-recordindex="37"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1931added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1932added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1933added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1934added">
				<div class="x-grid-cell-inner" style="text-align:left;">60</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1935added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-317added" data-boundview="treeview-1281"
			data-recordid="ext-record-317added" data-recordindex="38"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1936added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1937added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-end"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1938added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> LogPoint </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1939added">
				<div class="x-grid-cell-inner" style="text-align:left;">21</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1940added">
				<div class="x-grid-cell-inner" style="text-align:left;">40706.52</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-275added" data-boundview="treeview-1281"
			data-recordid="ext-record-275added" data-recordindex="39"
			class="x-grid-row x-grid-row-alt x-grid-tree-node-expanded x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen1941added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen1942added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-plus x-tree-expander"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-parent "><span class="x-tree-node-text">2024/03/22
						08:47:32</span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen1943added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen1944added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen1945added">
				<div class="x-grid-cell-inner" style="text-align:left;">&nbsp;</div>
			</td>
		</tr>
		<tr role="row" id="treeview-1281-record-ext-record-318added" data-boundview="treeview-1281"
			data-recordid="ext-record-318added" data-recordindex="40"
			class="x-grid-row x-grid-tree-node-leaf x-grid-data-row" tabindex="-1">
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1276 x-grid-cell-first  x-action-col-cell"
				id="ext-gen2053added">
				<div class="x-grid-cell-inner" style="text-align:left;"><span alt=""
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-action-col-icon x-action-col-0   undefined" data-qtip="Search"></span></div>
			</td>
			<td role="gridcell"
				class="x-grid-cell x-grid-td x-grid-cell-treecolumn-1277 x-grid-cell-treecolumn x-grid-cell-treecolumn"
				id="ext-gen2054added">
				<div class="x-grid-cell-inner" style="text-align:left;"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow-line"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-elbow"><img
						src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						class="x-tree-icon x-tree-icon-leaf "><span class="x-tree-node-text"></span></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1278 " id="ext-gen2055added">
				<div class="x-grid-cell-inner" style="text-align:left;"><a href="javascript: void(0)" class="drilldown"
						onclick=""> WCL </a></div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1279 " id="ext-gen2056added">
				<div class="x-grid-cell-inner" style="text-align:left;">147</div>
			</td>
			<td role="gridcell" class="x-grid-cell x-grid-td x-grid-cell-gridcolumn-1280 x-grid-cell-last "
				id="ext-gen2057added">
				<div class="x-grid-cell-inner" style="text-align:left;">21500</div>
			</td>
		</tr>
	</tbody>
</table>
  `;

  const handleGeneratePDF = () => {
    generatePDF(htmlContent);
    // html2pdf(htmlContent)
  };

  return (
    <div>
      <h2>PDF Generator</h2>
      <button onClick={handleGeneratePDF}>
        Generate PDF and Send to Backend
      </button>
    </div>
  );
};

export default ReportGenerator;
