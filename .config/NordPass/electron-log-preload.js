
      try {
        (function i({contextBridge:e,ipcRenderer:t}){if(!t)return;t.on("__ELECTRON_LOG_IPC__",(e,t)=>{window.postMessage({cmd:"message",...t})}),t.invoke("__ELECTRON_LOG__",{cmd:"getOptions"}).catch(e=>{});const r={sendToMain(e){try{t.send("__ELECTRON_LOG__",e)}catch(e){t.send("__ELECTRON_LOG__",{cmd:"errorHandler",error:{message:e?.message,stack:e?.stack},errorName:"sendToMain"})}},log(...e){r.sendToMain({data:e,level:"info"})}};for(const e of["error","warn","info","verbose","debug","silly"])r[e]=(...t)=>r.sendToMain({data:t,level:e});if(e&&process.contextIsolated)try{e.exposeInMainWorld("__electronLog",r)}catch{}"object"==typeof window?window.__electronLog=r:__electronLog=r})(require('electron'));
      } catch(e) {
        console.error(e);
      }
    