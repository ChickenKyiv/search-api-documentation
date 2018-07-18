---
description: >-
  Here we're displaying a list of requests, that will return data, related to
  allergy attributes
---

# Allergy

## Can I become who I want to be?



| URL | Status |
| --- | --- | --- | --- | --- | --- |
| [http://localhost:3000/api/attribute?filter\[where\]\[type\]=allergy](http://localhost:3000/api/attribute?filter[where][type]=allergy) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=allergy](http://localhost:3000/api/attribute?filter[where][and][][type]=allergy) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da898](http://localhost:3000/api/attribute?filter[where][id]=5abc4e9da2738950031da898) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=allergy&filter\[where\]\[and\]\[\]\[name\]=Egg-Free](http://localhost:3000/api/attribute?filter[where][and][][type]=allergy&filter[where][and][][name]=Egg-Free) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=allergy&filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da898](http://localhost:3000/api/attribute?filter[where][and][][type]=allergy&filter[where][and][][id]=5abc4e9da2738950031da898) |  |

## Hosted links

| URL | Status |
| --- | --- | --- | --- | --- | --- |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[type\]=allergy](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][type]=allergy) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=allergy](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=allergy) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da898](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][id]=5abc4e9da2738950031da898) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=allergy&filter\[where\]\[and\]\[\]\[name\]=Egg-Free](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=allergy&filter[where][and][][name]=Egg-Free) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=allergy&filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da898](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=allergy&filter[where][and][][id]=5abc4e9da2738950031da898) |  |

