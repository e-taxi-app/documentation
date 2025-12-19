---
sidebar_position: 12
---

# Deploy to the Server

## Web Automatic Deployment

Upload your web code to your server, open the terminal, navigate to your web code directory, and run the **./install.sh** command.

## Web Manually Deployment

> **WARNING**
>
> - Deployment of the Next JS needs a bit of knowledge about `node js` `npm` `pm2` technologies. We have assumed that you are using a `debian` based OS, apt is your package manager. If you are using any other linux distro then apt will be replaced with the respective package manager of the OS
>
> - We do not recommend deploying on shared hosting as it may not support all Node.js features. If you do not have a VPS server, you can proceed with this method, but we cannot provide support for any issues that arise.

Before starting the project deployment, you must upload your project to the server. Project can be upload to the server using [FileZila](https://filezilla-project.org/download.php) or in other ways.

### Installing NodeJS

NodeJS can be installed using NVM by which multi Node version can be controlled easily.

```bash
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
nvm install node 20.*
```

Check if node js is installed correctly using this command:

```bash
node -v
```

> **INFO**
>
> For more information, use [official documentation](https://nodejs.org/docs/latest/api/)

### Installing PM2 Server

By running the following command, PM2 server can be installed globally:

```bash
npm install pm2 -g
```

### Set port

Before set port check available ports with this command:

```bash
sudo lsof -i -P -n | grep 8003
```

![Port Occupied](/images/web/port_occupy.png)

If you get response like this it means this port is occupy with other project so try other port like (8000, 8001, 8002, 8003, 8004 etc)

![Available Port](/images/web/available_port.png)

If you get response like this it means this port is available you can use this port

Now add available port to your `package.json` and `.htaccess` file

![Package JSON](/images/web/package_json.png)

![htaccess file](/images/web/htaccess_file.png)

### Setup the Project

> **MANDATORY**
>
> Make sure you have `node_modules` installed in your directory.

For installing package run the following command:

```bash
npm install
```

The above command will install all the **node modules** in your directory.

After that, project must be built. For that, run the following command, which will build the production application in the **.next** folder.

```bash
npm run build
```

### Run the PM2 server

Go to the project root and run the following command:

```bash
pm2 start "npm start" -n "YOUR_PROJECT_NAME"
```

Check if pm2 process is Running OK:

```bash
pm2 ls
```

When you run pm2 ls you will see, 2 types of output:

1. Error:
   ![PM2 Error](/images/web/pm2_error.png)

   If you are getting errors in the pm2 process, then run pm2 logs and send us the Screenshot of the error, so that we can guide you to resolve your issues.

2. Success:
   ![PM2 Success](/images/web/pm2_success.png)

   If successful, set up a startup script for your operating system to ensure PM2 restarts automatically after a system reboot.

   ```bash
   pm2 startup
   ```

   After setting up PM2 with the startup command, save the current process list:

   ```bash
   pm2 save
   ```

   If you want to restart your pm2 process then run:

   ```bash
   pm2 restart id  # Replace id with your process id
   ```

   For example here id is 0 in the above screenshot --> `pm2 restart 0`

For deleting the previous project running in the PM2 server, use the following command:

```bash
pm2 delete "YOUR_PROJECT_NAME"
```

> **INFO**
>
> For more information, use [official documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
