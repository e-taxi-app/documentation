---
sidebar_position: 3
---

# MSG91 Setup for OTP Provider

## Setup MSG91 for OTP

Follow these steps to configure MSG91 as your OTP provider:

1. For create DLT template id Head to this URL: [DLT Template id](https://smartping.live/entity/login)

- Create new account

![Create MSG91 Account](/images/admin/MSG91-setup-1-1.png)

2. Head to this URL: [MSG91 URL](https://control.msg91.com/signin/) For MSG91 new account

3. Create a MSG91 account

![Create MSG91 Account](/images/admin/MSG91-setup-1.png)


![Create MSG91 Account](/images/admin/MSG91-setup-2.png)


![Create MSG91 Account](/images/admin/MSG91-setup-3-1-1.png)

4. Create New Template and fill all requiered fields.

![Create MSG91 Account](/images/admin/MSG91-setup-3-1-2.png)

<!-- ![Copy Account SID and Auth Token](/images/admin/MSG91-setup-3-1.jpg) -->

THIS IS SAMPLE MSG 
![Create MSG91 Account](/images/admin/MSG91-setup-3-1-3.png)

* ##OTP## and ##signature## variables are mendatory (you can change words but not change variables)

5. Take Auth token From AuthKey
6. Go to templates and copy template id







![Copy Account SID and Auth Token](/images/admin/MSG91-setup-3.png)

7. Than both authkey and template_id past in .env file 

![Copy Account SID and Auth Token](/images/admin/MSG91-setup-4.png)
