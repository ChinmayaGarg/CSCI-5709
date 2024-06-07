<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

Tutorial 3

- _Date Created_: 06 June 2024
- _Last Modification Date_: 06 June 2024
- _Git Tutorials URL_: <https://git.cs.dal.ca/cgarg/csci-5709/-/tree/master/Tutorials?ref_type=heads>
- _Git Tutorial 3 URL_: <https://git.cs.dal.ca/cgarg/csci-5709/-/tree/master/Tutorials/Tutorial%203?ref_type=heads>
- _Git Repo For Hosting URL_: <https://git.cs.dal.ca/cgarg/t3_garg_chinmaya_b00925398_5709>
- _Deployed URL_: <https://master--t3-garg-chinmaya.netlify.app/>

## Authors

- Chinmaya Garg (ch745692@dal.ca) - _(Author)_

## Deployment

Deployed on Netlify

## Built With

- [React](https://react.dev/learn)
- [npm](https://docs.npmjs.com)
- [react-router-dom](https://reactrouter.com/en/main)

## Sources Used

### src/App.js

_Lines 08 - 13_

```
<Router>
    <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
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

## Other Documentations Refered:

- <https://docs.netlify.com/>
- <https://react.dev/learn>
