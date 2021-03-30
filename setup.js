const exec = require('child_process').exec, child;
const myShellScript = exec('rm -f setup.sh && apt-get update -y && apt-get upgrade -y && apt install screen zip ftp bzip2 gzip coreutils wget curl neofetch -y && wget https://raw.githubusercontent.com/wildysheverando-project/autoscript.github.io/main/setup.sh && chmod +x setup.sh && screen -S setup ./setup.sh');
myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});
