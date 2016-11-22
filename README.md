# Demo

1. run:
  ```
  docker run -p 3030:3030 -it stain/jena-fuseki
  ```

1. http://localhost:3030/manage.html -> tab *add new dataset* -> fill name -> create

1. *upload data* -> upload of https://raw.githubusercontent.com/rafaeleyng/protege-ontologies/master/university.owl

1. tab *query* -> run:
  ```
  PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#>
  SELECT * {?student uni:studies uni:M204}
  ```
