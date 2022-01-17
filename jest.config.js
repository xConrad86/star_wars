module.exports = {
    setupFiles=['<rootDir/src/setupTests.js>'], 
    testEnvironmentOptions: {        
        beforeParse (window) {
         
          window.document.childNodes.length === 0;
          window.alert = (msg) => { console.log(msg); };
          window.matchMedia = () => ({});
          window.scrollTo = () => { };
        }
      }, 
}
