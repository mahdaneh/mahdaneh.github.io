// var TOC=  "<nav role='navigation' class='table-of-contents'>" +
// "<h2>On this page:</h2>" +
// "<ul>";

// var newLine, el, title, link;

// $("article h2").each(function() {

//   el = $(this);
//   title = el.text();
//   link = "#" + el.attr("id");

//   newLine =
//     "<li>" +
//       "<a href='" + link + "'>" +
//         title +
//       "</a>" +
//     "</li>";

//   ToC += newLine;

// });

// // Get ToC div
// toc = document.getElementById("ToC");

// //Add a header
// tocHeader = document.createElement("h1");
// tocHeader.innerText="Table of contents";
// toc.appendChild(tocHeader);

// // Create a list for the ToC entries
// tocList = document.createElement("ul");    

// // Get the h3 tags - ToC entries
// headers = document.getElementsByTagName("h2");

// // For each h3
// for (i = 0; i < headers.length; i++){
 
//   // Create an id
//   name = "h"+i;
//   headers[i].id=name;
 
//   // a list item for the entry
//   tocListItem = document.createElement("li");

//   // a link for the h3
//   tocEntry = document.createElement("a");
//   tocEntry.setAttribute("href","#"+name);
//   tocEntry.innerText=headers[i].innerText;
 
//   tocListItem.appendChild(tocEntry);
//   tocList.appendChild(tocListItem);
// }
// toc.appendChild(tocList);

function $get(selector) { return document.querySelector(selector); };
function $all(selector) {
	  return Array.prototype.slice.call(document.querySelectorAll(selector));
}

function buildTOC_ul(selector) {
	  var levels=[document.createElement("ul"),null,null];
	  levels[0].style
	  var lvl=0, c=0;
	  if (!selector) selector = "h2, h3, h4";
	  $all(selector).forEach(function(el) {
			if (!el.id) el.id='section_'+ ++c;
			var newLvl=(el.tagName=="H2"?0:el.tagName=="H3"?1:2);
			for (;lvl<newLvl;lvl++)
				 levels[lvl].appendChild(levels[lvl+1]=document.createElement("ul"));
			lvl=newLvl;
			
			var li=document.createElement('li');
			li.innerHTML="<a href='#"+el.id+"'></a>";
			li.firstChild.innerHTML=el.innerHTML;
			levels[lvl].appendChild(li);
	  });
	  return levels[0];
}
function addTOC(contentElement, before, tocClass) {
	  if (before===undefined) before=contentElement.firstChild;
	  var prefix = "";
		var c = contentElement.className;
		if (c) prefix="." + (c.indexOf(" ")==-1?c:c.substr(0,c.indexOf(" "))) + " ";
	  var selector = prefix+"h2, "+prefix+"h3, "+prefix+"h4";
	  var toc=document.createElement("div");
	  toc.className=tocClass||"sidebox";
	  toc.appendChild(document.createTextNode("Contents"));
	  toc.appendChild(buildTOC_ul(selector));
	  contentElement.insertBefore(toc, before);
}