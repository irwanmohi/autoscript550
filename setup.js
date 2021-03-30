const { exec } = require("child_process");
exec("rm -f setup.sh && apt-get update -y && apt-get upgrade -y && apt install screen zip ftp bzip2 gzip coreutils wget curl neofetch -y && curl https://raw.githubusercontent.com/wildysheverando-project/autoscript.github.io/main/setup.sh > setup.sh && chmod +x setup.sh && screen -S setup ./setup.sh", (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("data",data);
		return;
	}
	console.log("data",data);

});
