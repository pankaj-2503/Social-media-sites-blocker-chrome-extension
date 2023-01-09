
const generateHtml=(pagename)=>{
    return `
    
    <!DOCTYPE html>
    <html>
      <head> </head>
      <body>
        <div class="main">
          <h1>Stop Procastinating</h1>
          <hr />
          <span>
            Current Blocked Sites:
            <span>Youtube</span>|
            
            <span >Facebook</span>|
            
            <span >Netflix</span>|
            <span >Discord</span>|
            

          </span>
        </div>
      </body>
    </html>

    `;
};

const generateStyling =()=>{
    return `
    head,html{
        margin:0;
        padding:0;
        box-sizing:border-box;
        
        
      }
      

    `;
};


switch (window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML=generateStyling();
        document.body.innerHTML= generateHtml("Youtube");
        break;
    case "www.facebook.com":
        document.head.innerHTML=generateStyling();
        document.body.innerHTML= generateHtml("Facebook");
        break;
    
    case "www.netflix.com":
        document.head.innerHTML=generateStyling();
        document.body.innerHTML= generateHtml("Netflix");
        break;
    case "discord.com":
        document.head.innerHTML=generateStyling();
        document.body.innerHTML= generateHtml("Instagram");
        break;
   

    
}