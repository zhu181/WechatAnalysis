const types = {};
let htmlString = "";
chrome.devtools.network.onRequestFinished.addListener(function (request) {
  if(request.url="https://mp.weixin.qq.com/misc/datacubequery?action=query"){
    request.getContent((content) => {
      const contentObj = JSON.parse(content);
      contentObj.data.forEach(element => {
        if (element.title != undefined){
          htmlString= "<tr>"+
          "<td>" + element.title + "</td>" +
          "<td>" + element.post_ds + "</td>" +
          "<td>" + element.pv + "</td>";
          htmlString+="<td>"+element.pv_list.split(",")[0].split("_")[1]+"</td>";
          element.pv_list.split(",").splice(1).forEach(c => {
            htmlString += "<td>" + c + "</td>"
          });
          htmlString += "</tr>";
        }
        document.getElementById("table").innerHTML += htmlString;
      });
    });
  }
});
