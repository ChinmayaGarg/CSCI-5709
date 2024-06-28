<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

Tutorial 4

* *Date Created*: 27 June 2024
* *Last Modification Date*: 28 June 2024
* *Tutorial 4 Gitlab URL used for hosting*: <https://git.cs.dal.ca/cgarg/t4_garg_chinmaya_b00925398_5709>
* *Gitlab URL of CSCI 5709*: <https://git.cs.dal.ca/cgarg/csci-5709>
* *Gitlab URL of Tutorial 4 in CSCI 5709*: <https://git.cs.dal.ca/cgarg/csci-5709/-/tree/master/Tutorials/Tutorial%204?ref_type=heads>
* *Deployed URL*: <https://master--t4-chinmaya-garg.netlify.app/>

## Authors

* Chinmaya Garg (ch745692@dal.ca) - *(Author)*


## Deployment

Deployed on Netlify

## Built With


* [node](https://nodejs.org/en/docs)
* [npm](https://docs.npmjs.com)
* [React](https://react.dev/learn)

## Sources Used


### src/App.js

_Lines 10 - 14_

```
<Router>
    <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/profiles" exact element={<ProfileListPage />} />
        <Route path="/profiles/:id" element={<ProfileDetailPage />} />
      </Routes>
</Router>

```

The code above was created by adapting the code in [W3Schools](https://www.w3schools.com/react/react_router.asp) as shown below:

```
<Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
    </Route>
</Routes>

```

- The [react routing](https://www.w3schools.com/react/react_router.asp) example was utilized from W3 Schools.
- The code of [react routing](https://www.w3schools.com/react/react_router.asp)'s provided a reference for implementing routing in React..
- The original code was adapted and modified by Chinmaya Garg based on the example from [react routing](https://www.w3schools.com/react/react_router.asp).

## Images

#### The API is returning the displayed images under the key "user.picture".

## Other Documentations Refered:
 - <https://react.dev/learn>
 - <https://docs.netlify.com/>
