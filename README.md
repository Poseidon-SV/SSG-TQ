# SSG-TQ
### Static Site Generator (SSG) is a product of Tech Que Club 

In this project we'll build a static site generator with few features that can build static sites like building a simple portfolio-like site.

## Getting Started
First install Node js : https://nodejs.org/dist/v16.18.0/node-v16.18.0-x64.msi <br>
Install it with default settings

Watch Node js tutorial: https://www.youtube.com/watch?v=gFSXD7mOrFs

## Folder structure
public/ <br>
src/ <br>
assets/ <br>
data/ <br>
pages/ <br>
partials/ <br>
layout.ejs <br>
site.config.js <br>

- public: where the generated site will be. <br>
- src: the source of the site contents. <br>
src/assets: contains CSS, JS, images, etc. <br>
src/data: contains JSON data. <br>
src/pages: are the templates that will be rendered to HTML. The directory structure found here will be replicated in the resulting site. <br>
src/partials: contains our reusable partials. <br>
src/layout.ejs: contains the common page structure, with a special  placeholder, where the contents of each page will be inserted. <br>
- site.config.js: it just exports an object that will be available in the page templates.

> __Why EJS templates?
Because EJS is simple. There is no new template language to learn. It’s just JavaScript embedded in HTML.__

## Dependencies
For this basic feature set we only need three dependencies:

- __ejs__ <br>
Compile our templates to HTML.
- __fs-extra__ <br>
Adds new functions to Node’s native file-system module (fs) and add promise support for the existing ones.
- __glob__ <br>
Recursively read a directory, returning an array with all files that match an specified pattern.

<h3>Pull Request</h3>
By now you have updated the changes you made in the forked repository on your account and now it's time to add those changes to the main repository for that you need to Pull a request to the maintainer or author of the project. Let's see how it's done
<ol>
<li>Go to Pull Request section on your forked repository</li>

![pull1](https://user-images.githubusercontent.com/87477923/197096950-faf85015-6511-4786-87be-84e56be26a45.png)

<li>Now click on New Pull Request button (green colour) on right of your screen </li>

![pull2](https://user-images.githubusercontent.com/87477923/197097175-33a4eae8-f2f2-4e2b-b1f7-c12c3a3a4ee9.png)

<li>Now click on create pull request button on the right side</li>

![pull3](https://user-images.githubusercontent.com/87477923/197097297-591024f3-92a1-406f-aff5-a2c1d513295f.png)

<li>Add the title of your pull request(specific to changes or updates you made) and explain it in the comment section</li>

![pull4](https://user-images.githubusercontent.com/87477923/197097545-e7ba14ba-2ff6-45b1-9c04-1fb5fce58310.png)

<li>Now click on Create Pull request</li>
</ol>
<h5>Congrats! you did your first contribution just wait for getting your pull request approved<h5>
</ul>
<p>More Updates coming soon... 
<br>Happy learning, I hope you learned something new.</p>

[GitHub ref](https://github.com/doug2k1/nanogen)
[GitHub ref](https://www.webdevdrops.com/en/build-static-site-generator-nodejs-8969ebe34b22/)
[GitHub ref](https://doug2k1.github.io/nanogen/)
