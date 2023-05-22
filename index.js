const getAPIResponse = async ()=>{
    let query = "site:youtube.com cars";
    let APIKEY = "AIzaSyAL0K_StN-kF8mUfyt794ahpWbAcPmAKwo";
    let cx = "764d3ae68526e46c1";
    const response = await fetch("https://www.googleapis.com/customsearch/v1?key="+APIKEY+"&cx="+cx+"&q="+query+"");
    const jsonData = await response.json();
    console.log(jsonData);

    return jsonData;
  }

  const showData= async()=>{
    let jsonData = await getAPIResponse();
    let videoArray =  jsonData.items;
    let content = document.getElementById("content");

    videoArray.map((dataItem)=>{

        if(dataItem.displayLink){
            content.innerHTML+=`
        <div>${dataItem.formattedUrl}</div>
        `
        }
        
    })



  }

  showData();