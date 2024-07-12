<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

Tutorial 5

* *Date Created*: 11 July 2024
* *Last Modification Date*: 12 July 2024
* *Tutorial 5 Gitlab URL used for hosting*: <https://git.cs.dal.ca/cgarg/t5_garg_chinmaya_b00925398_5709>
* *Gitlab URL of CSCI 5709*: <https://git.cs.dal.ca/cgarg/csci-5709>
* *Gitlab URL of Tutorial 5 in CSCI 5709*: <https://git.cs.dal.ca/cgarg/csci-5709/-/tree/master/Tutorials/Tutorial%205?ref_type=heads>
* *Deployed URL*: <https://t5-garg-chinmaya-b00925398-5709.onrender.com>
* *URL to be used for accessing APIS by suffixing it with path*: <https://t5-garg-chinmaya-b00925398-5709.onrender.com/api>

## Endpoints With Body

* API for GET call for list of users: <https://t5-garg-chinmaya-b00925398-5709.onrender.com/api/users>
* API for POST call to create a user: <http://t5-garg-chinmaya-b00925398-5709.onrender.com/api/add>

Example of Body Sent:
{
"email" : "xyz@xyz.ca",
"firstName": "XYZ"
}

* API for PUT call to update a user: <http://t5-garg-chinmaya-b00925398-5709.onrender.com/api/update/1>

Example of Body Sent:
{
"email" : "xyz@xyz.ca",
"firstName": "XYZ"
}

* API for GET call for a specific user i.e. 1: <https://t5-garg-chinmaya-b00925398-5709.onrender.com/api/user/1>


## Authors

* Chinmaya Garg (ch745692@dal.ca) - *(Author)*


## Deployment

Deployed on Render


## Built With

* [python](https://docs.python.org/3/)
* [django](https://docs.djangoproject.com/en/5.0/)

## Other Documentations Refered:
 - <https://docs.render.com/>
