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
chainWebpack: (config) => {
  config.plugins.delete('prefetch')
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

## Vue Router Named Routes and Params

How to pass dynamic parameters to the router, called params?

Named routes are highly recommended as they allow us to do changes to the URL without the need for refactoring the links in our apps.

In dev tools if we click on Root we see that we have a special $route property in our data.

Here we have the access not only to the name and path, but also params, query and meta.

So, how do we access this data in our components?
Well, since we use the router plugin whit the Vue.use(router), we can actually access
the router instance under this.$route in any component, since it made globally available on the main Vue inctance.

Let's work with route params, so that we can load only one page but with the correct
details for each destination.

Let's create a DestinationDetails page and the /destination-details

We will use now in our home page the named routes instead of linking directly to each path.

```html
<router-link :to="{ name: 'DestinationDetails' }"></router-link>
```

Named routes allow us to link directly to the route whithout knowing the path,
wich means if you later change the path then we don't have to refactore anything here
or any other component that links to this page as everything is controlled in the router/index.js.

It's recommended to always use the named routes.

Let's add the id of the destination, so that when we click on destination it will show the correct id.
To do that we need to use params.
In our Home page we need to tell the router-link to pass params of id
and make it equal to the id that comes from our destination data.

```html
<router-link
  :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
></router-link>
```

## Vue Router Dynamic Routes

How to work with dynamic routes in Vue router.

How to declare the dynamic routes and also how to fetch and use the dynamic data in our components.

In our router/index.js we need to add the params of id to the end of thr destination-details path.

```js
path: "/destination-details/:id",
```

The colon (:) declares a dynamic segment in the path which allows us to respond
to URL's matching the specified pattern. So when user visits /destination-details/1 or /destination-details/2 
the user will be served the same routes when the path is set to /destination-details/:id.

In the DestinationDetails page, we need to retrieve the value from the params, 
so let's create a new data property called destinationId and give it the value of
this.$route.params.id. It is not actually necessary to create this to get what we want, but it makes our code much cleaner and easy to follow. 

Now in oer template we can add the destination.name, .image and .desription. 
But how will it know wich how destination to show?

Let's add a computed property with a function called destination. 
Computed property allow us to define a property with that is used the same way as data property
but can also have some custom logic.
We use now a find method to find a dastination in our destinations store array that math a test function,

```js
computed: {
  destination() {
    return store.destinations.find(
      (destination) => destination.id == this.destinationId
    );
  },
},
```

Basically, we are saying go to the store and use the destinations array and find the destination whose id 
is equal to the destinationId that we get from the params.

In the script we need to import the store so we have access to the data.

Now from home page if we click on Panama it will go to the DestinationDetails page and load the details of Panama and it will put the id of 2 at the end of the url.