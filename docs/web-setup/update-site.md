---
sidebar_position: 13
---

# Update the Site

## Access the Server

Connect to your server via SSH or open the terminal and navigate to your web code directory.

## Check Running Port

```bash
pm2 logs
```

Run the PM2 logs command to check the port on which your website is currently running. Look for the NODE_PORT value displayed in the output.

![Web running port](/images/web/web_running_port.png)

## Update Port in Latest Code

Open the package.json file in your latest code and update the NODE_PORT value to match the server's port. Also, update the .htaccess file with the same port.

![Package port](/images/web/package_port.png)

![htaccess port](/images/web/htaccess_port.png)

## Backup Current Code on Server

Create a backup of the current code to avoid any data loss before removing it.

## Upload Latest Code

Delete the existing code from the server and upload the latest version.

## Install Dependencies

```bash
npm i
```

Navigate to the web code directory in the terminal and run npm i command to install all dependencies from the package.json file, ensuring the application functions properly.

## Build the Project

```bash
npm run build
```

Execute the npm run build command to generate the necessary files for deployment. This step compiles the project and optimizes it for production.

## Restart PM2 Process

```bash
pm2 restart id
```

Restart the PM2 process by running the pm2 restart command followed by the process ID or name. This ensures the new version of the code is loaded and the application runs with the latest changes.

![restart pm2 process](/images/web/restart_pm2_process.png)

## Verify the Deployment

Check if the website is running properly by accessing it in a browser. If there are any issues, review the PM2 logs for errors and troubleshoot accordingly.
