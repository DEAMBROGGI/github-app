const localtunnel = require('localtunnel');

(async () => {
        const tunnel = await localtunnel({ port: 5000, subdomain: 'github-api-amd' });
        console.log(tunnel.url)
        tunnel.url;

        tunnel.on('close', () => {
            console.log("tunnel CLOSE")
        });
    
    
})();