# Clinic Patients
### simple react/redux app

to get started, just clone the repo and install the dependencies:

    > git clone https://github.com/lenaggar/clinic-patients.git
    > cd clinic-patients
    > yarn install

after you install the dependencies, you can build the app with webpack:

	> yarn build:dev || > yarn build:prod

> `dev`: is a development build, and `prod`: is a production build minified and gzipped and all

and now the app is available in the `./dist` directore of the app, and to use it you need to get it server through a web server. You can use something simple like a command-line `http-server`:

	> yarn global add http-server
	> http-server ./dist/ -p 8000 -o

now http-server is serving the content from http://localhost:8000

#### TO-DOs:

* UI and Redux unit testing with `Jest`
* Use `Reselect` to make client-side caching more efficient
* Apply Dynamic importing of Components
* `React Helmet`
* `i18n`

Hope you like it.