function browserHistory(input,commands) { 


    let nameBrowser = input["Browser Name"];
    let openTabs = input["Open Tabs"];
    let recently = input["Recently Closed"];
    let browserLogs = input["Browser Logs"];

    for (let info of commands) {
        let [command, ...arg] = info.split(" ");

        if(command === "Close") {
            let [webSite] = arg;
            if(openTabs.includes(webSite)) {
                let index = openTabs.indexOf(webSite);
                openTabs.splice(index, 1);
                browserLogs.push(info);
                recently.push(webSite);
            }
        } else if (command === "Open") {
            let [webSite] = arg;
            browserLogs.push(info);
            openTabs.push(webSite);
        } else if (command === "Clear") {
            recently.splice(0, recently.length);
            browserLogs.splice(0, browserLogs.length);
            openTabs.splice(0, openTabs.length);
        }
        
    }
    
    console.log(nameBrowser);
    console.log(`Open Tabs: ${openTabs.join(", ")} `);
    console.log(`Recently Closed: ${recently.join(", ")}`);
    console.log(`Browser Logs: ${browserLogs.join(", ")}`);

    

}

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);