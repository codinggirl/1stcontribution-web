## Fork this repository

Fork this repo by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repo, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied (url of the forked repo)"
```
where "url you just copied" (without the quote marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.


For example:
```
git clone https://github.com/<github_username>/letscontribute-web.git
```
where `<github_sername>` is your GitHub username.
Here you're copying the contents of your letscontribute-web repository on GitHub to your computer.

## Running The Project

You should have [node](https://nodejs.org/en/download/) and npm installed to run the project locally.

Change to the repository directory on your computer (if you are not already there):
```
cd letscontribute-web
```

Then install the required Dependencies using:
```
npm install
```

*If you run into a dependencies issue, try removing `node_modules`.*

After installation, run:
```
npm start
```
Now you can open your cloned project at ` http://localhost:3000/
`
