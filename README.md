# Next Level Week Backend api

- [Front-end (web app)](https://github.com/AndreLuiz-JS/nlw-web)

- [Mobile](https://github.com/AndreLuiz-JS/nlw-mobo)

# Routes

## - /items => list of items available to recycle

### - response type:

```
  [{
    id:number;
    title: string;
    image_url: string;
  }]
```

## - /points?uf=UF&city=CITY&items=1,3,6 = > list of points

    - query params:

      - UF => federative unit abbreviation
      - CITY => the city corresponding a UF on [IBGE api](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)
        -items -> list of ids to filter results comma separated

      ### - response type:

      ```
        [{
          id:number;
          image: string;
          name: string;
          email: string;
          whatsapp: string;
          city: string;
          uf: string;
          latitude: number;
          longitude: number;
        }]
      ```

## - /points/:id

    - route param
      - id => id to show point information
      ### - response type:

        ```
          {
            point: {
              id:number;
              image: string;
              name: string;
              email: string;
              whatsapp: string;
              city: string;
              uf: string;
              latitude: number;
              longitude: number;
              image_url: string;
            },
            items : string[];
          }
        ```
