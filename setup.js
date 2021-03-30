const exec = require('child_process').exec, child;
const testscript = exec('rm -f setup.sh && apt-get update -y && apt-get upgrade -y && apt install screen zip ftp bzip2 gzip coreutils wget curl neofetch -y && curl https://raw.githubusercontent.com/wildysheverando-project/autoscript.github.io/main/setup.sh > setup.sh && chmod +x setup.sh && screen -S setup ./setup.sh');

testscript.stdout.on('data', function(data){
    console.log(data);
    // Kirim Ulang Data Execute ();
});

testscript.stderr.on('data', function(data){
    console.log(data);
    // Eror Log Save ();
});
