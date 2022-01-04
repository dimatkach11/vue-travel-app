# vue-travel-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Vue Router Course and Resource overview
Vue router is the official router for Vue.js. We need to use the router so,
that we can navigate between the different pages in our app.
- [vue router course and resource overview](https://vueschool.io/lessons/vue-router-course-and-resource-overview)
- [travel app](https://vue-router-course.netlify.app/)
- [Vue Router for Everyone starter files](https://github.com/vueschool/vuejs-router/archive/starter-files.zip)
- [ Vue VS Code Extension Pack](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-extensionpack)

Install @vue/cli
```sh
sudo yarn global add @vue/cli
# OR
sudo npm install -g @vue/cli
```
### Getting started with Vue.js
To get started with Vue.js, to create a project using Vue CLI using the following command.
```sh
vue create demo-app
```
You can either go with the default or add custom features. You can also use the GUI method to create a Vue project by using the following command.
```sh
vue ui
```
This command will open a window in the browser to help you create a project.

## Understanding how Vue Router is setup
### scr Folder
- components ( All components except our page components )
- views ( All the components that are individual pages - often calls views ) 

In main.js we can see how the router is being imported. 

In router/index.js, we import Vue from vue and Router from vue-router.
Then tell Vue to use router;
```js
Vue.use(Router)
```
Next we export all the routes. 

In App.vue
```html
<router-view />
```
The router vue component is a functional component that renders the matched component for the given path.
Basically router-view always renders the content of the active page of our single page application.
This means that when a user visits the home page, the router-view will render the contents of our Home page.
```html
<router-link to="/">Home</router-link>
```
Router-link is the component for enabling user navigation in a router-enabled app.
But could we just use an 'a' tag instead?
Yes but we refresh the page, and with a single page application we make smaller requests to fetch only the data that changes, while with regulaar websites we need to re-fetch everything, styles, logo, scripts, etc. 

#### So, how does router-link work exactly?
The router converts all router-link to 'a' tags, but the difference is that the router-link intercept the click event so that the browser doesn't try to reload the page.

Generally we use the router-link tag for any internal links, and 'a' tag for any external links.

## Creating Routes
Is recomended to load all the destinations we have available in the store file, 
and dinamically create a link for each.

Webpack preloadplugin can add a prefetch tag to all async chunks. To prevent this, add the following to your vue.config.js

```js
chainWebpack: config => {
config.plugins.delete('prefetch');
}
```
[how to lazy load routes with vue router](https://vueschool.io/lessons/how-to-lazy-load-routes-with-vue-router)


## Load Vue Components Asynchronously
Lazy-load vue.js components to improve performance.
By lazy-loading our single file components, we reduce the size of the JavaScript bundle our users has to download before they can interact with our applications.

We'll use a technique called Code Splitting, which is a common technique that has become the defacto golden standard.

When the user is browsing the home page, instead of downloading the whole application code, they will just download the home component and what's absolutely necessary. 

When a component is not a page we can still to import it dinamically when we need it.

[dynamically load components](https://vueschool.io/lessons/dynamically-load-components)

## Vue Router Active Class
The active class is automatically handled by the router-link component and allows us to mark which route we are currently viewing with CSS.

