---
title: Diet
---
---
description: >-
  Here we're displaying a list of requests, that will return data, related to
  diets attributes
---


##

| URL | Status |
| --- | --- |
| [http://localhost:3000/api/attribute?filter\[where\]\[type\]=diet](http://localhost:3000/api/attribute?filter[where][type]=diet) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=allergy](http://localhost:3000/api/attribute?filter[where][and][][type]=allergy) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da8c9](http://localhost:3000/api/attribute?filter[where][id]=5abc4e9da2738950031da8c9) | **works** |
|  |  |
| [http://localhost:3000/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da8c9](http://localhost:3000/api/attribute?filter[where][id]=5abc4e9da2738950031da8c9) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=diet&filter\[where\]\[and\]\[\]\[name\]=Lacto%20vegetarian](http://localhost:3000/api/attribute?filter[where][and][][type]=diet&filter[where][and][][name]=Lacto%20vegetarian) |  |

## Hosted links

| URL | Status |
| --- | --- | 
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[type\]=diet](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][type]=diet) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=diet](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=diet) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da8c9](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][id]=5abc4e9da2738950031da8c9) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=diet&filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da8c9](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=diet&filter[where][and][][id]=5abc4e9da2738950031da8c9) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=diet&filter\[where\]\[and\]\[\]\[name\]=Lacto%20vegetarian](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=diet&filter[where][and][][name]=Lacto%20vegetarian) | **works** |
