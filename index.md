# PRÁCTICA 6: CLASES E INTERFACES GENÉRICAS. PRINCIPIOS SOLID

Gabi Vacaru, alu0101098340
<br>
Desarrollo de Sistemas Informáticos


## Índice de contenidos<a name="id0"></a>
  - [Ejercicio 1 - DSIflix](#id1)
    - [Interfaces](#id1.1)
    - [Clase Abstracta](#id1.2)
    - [Subclases (docuemntal, film, serie)](#id1.3)
    - [Colecciones (docuemntal, film, serie)](#id1.3)

  - [Ejercicio 2 - Implementación de una lista y sus operaciones](#id2)
    - [Interfaz](#id2.1)
    - [Clase](#id2.2)

  - [Ejercicio 3 - Mejoras en la biblioteca musical](#id3)
    - [Interfaz](#id3.1)
    - [Clase](#id3.2)

  - [Instanbul](#id4)

// Aqui va el coverage

### DSIflix<a name="id1"></a>

Nos piden que nos imagenemos que tenemos que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales. 

- Contamos con la siguiente información:
    - Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
    - Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
    - Tendrá que extender la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
    - Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

#### Interfaces<a name="id1.1"></a>

Para esta clase, hemos generado una interfaz genérica `Streamable` que contiene los métodos que se van a utilizar en las clases que hereden de la clase `BasicStreamableCollection`. Esta interfaz se encuentra en el fichero `streamable.ts` y se puede encontrar en el siguiente enlace: [streamable.ts](./src/ejercicio-01/streamable.ts)

```typescript
export interface Streamable<T> {
  searchBy(key: string, search: string | number): T[] | string;
  getNumberOfItems(): number;
  addItem(newItem: T): void;
  deleteItem(item: T): void;
}

```
Contamos con 4 metodos genericos que se van a utilizar en las clases que hereden de la clase `BasicStreamableCollection`. Estos métodos no tienen ningun tipo de dato en concreto, por lo que se pueden utilizar en cualquier clase que herede de la clase `BasicStreamableCollection`.


### Clase Abstracta <a name="id1.2"></a>

Para esta clase, hemos generado una clase abstracta `BasicStreamableCollection` que implementa la interfaz `Streamable`. Esta clase se encuentra en el fichero `basicStreamableCollection` y se puede encontrar en el siguiente enlace: [basicStreamableCollection.ts](./src/ejercicio-01/basicStreamableCollection.ts)

```typescript
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  collection: T[];

  constructor(collection: T[] = []) {
    this.collection = collection;
  }

  abstract searchBy(key: string, search: string | number): T[] | string;

  getNumberOfItems(): number {
    return this.collection.length;
  }

  addItem(newItem: T): void {
    this.collection.push(newItem);
  }

  deleteItem(item: T): void {
    const index = this.collection.indexOf(item);
    if (index >= -1) this.collection.splice(index, 1);
  }
}

```

En esta clase, hemos definido un atributo `collection` que es un array de tipo `T` y que se va a utilizar en las clases que hereden de esta clase. Además, hemos definido un constructor que recibe un array de tipo `T` y que se va a utilizar en las clases que hereden de esta clase. Por último, hemos definido los métodos de la interfaz `Streamable` que se van a utilizar en las clases que hereden de esta clase.

El método `searchBy` es un método abstracto, por lo que se tendrá que implementar en cada clase que herede. Este método se va a implementar en las clases que hereden de esta clase. Los demás métodos están implementados ya.


### Subclases (Documental, film, serie) <a name="id1.3"></a>

Aquí diseñamos 3 clases las cuales imitan un tipo de dato de una serie, pelicula o documental.

### Clase `Documental`

Esta clase se encuentra en el fichero `documental.ts` y se puede encontrar en el siguiente enlace: [documental.ts](./src/ejercicio-01/documental.ts)

```typescript
export class Documental {
  title: string;
  director: string;
  genre: string;
  year: number;
  ranking: number;

  constructor(title: string = '', director: string = '', genre: string = '', year: number = 0, ranking: number = 0) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.ranking = ranking;
  }

  getTitle(): string {
    return this.title;
  }

  getDirector(): string {
    return this.director;
  }

  getGenre(): string {
    return this.genre;
  }

  getYear(): number {
    return this.year;
  }

  getRanking(): number {
    return this.ranking;
  }
}

```

En esta clase, hemos definido los atributos de la clase `Documental` y hemos definido un constructor que recibe como parámetros los atributos de la clase. Además, hemos definido los métodos `getters` para cada uno de los atributos de la clase.

#### Tests

Para realizar los tests de la clase `Artista`, hemos creado un fichero `documental.spec.ts` en el que hemos creado un objeto de tipo `Documental` y hemos comprobado que los atributos de la clase se han creado correctamente. Para ello, hemos usado la librería `chai` y el framework `mocha`. El código de los tests es el siguiente:

```typescript

import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-01/documental';

const TDM = new Documental('Titanes del mar', 'Moscow rules', 'Guerra', 2023, 5);

describe('documental class tests', () => {

  describe('documental getters', () => {
    it('Get Tittle method', () => {
      expect(TDM.getTitle()).to.be.eql('Titanes del mar');
    });
    it('Get director method', () => {
      expect(TDM.getDirector()).to.be.eql('Moscow rules');
    });
    it('Get genre method', () => {
      expect(TDM.getGenre()).to.be.eql('Guerra');
    });
    it('Get year method', () => {
      expect(TDM.getYear()).to.be.eql(2023);
    });
    it('Get ranking method', () => {
      expect(TDM.getRanking()).to.be.eql(5);
    });
  });
});


```

### Ejecución de los tests

[testsDocumental.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/testsDocumental.png)

### Clase `Serie`

Esta clase se encuentra en el fichero `serie.ts` y se puede encontrar en el siguiente enlace: [serie.ts](./src/ejercicio-01/serie.ts)

```typescript

export class Serie {
  title: string;
  director: string;
  genre: string;
  year: number;
  ranking: number;
  constructor(title: string = '', director: string = '', genre: string = '', year: number = 0, ranking: number = 0) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.ranking = ranking;
  }

  getTitle(): string {
    return this.title;
  }

  getDirector(): string {
    return this.director;
  }

  getGenre(): string {
    return this.genre;
  }

  getYear(): number {
    return this.year;
  }

  getRanking(): number {
    return this.ranking;
  }
}


```

En esta clase, hemos definido los atributos de la clase `Serie` y hemos definido un constructor que recibe como parámetros los atributos de la clase. Además, hemos definido los métodos `getters` para cada uno de los atributos de la clase.

#### Tests

Para realizar los tests de la clase `Serie`, hemos creado un fichero `serie.spec.ts` en el que hemos creado un objeto de tipo `Serie` y hemos comprobado que los atributos de la clase se han creado correctamente. Para ello, hemos usado la librería `chai` y el framework `mocha`. El código de los tests es el siguiente:

```typescript

import 'mocha';
import {expect} from 'chai';
import {Serie} from '../../src/ejercicio-01/serie';

const LCDP = new Serie('La Casa de Papel', 'Jesús Colmenar', 'Drama', 2017, 4.5);

describe('serie class tests', () => {
  describe('serie getters', () => {
    it('Get Tittle method', () => {
      expect(LCDP.getTitle()).to.be.eql('La Casa de Papel');
    });
    it('Get director method', () => {
      expect(LCDP.getDirector()).to.be.eql('Jesús Colmenar');
    });
    it('Get genre method', () => {
      expect(LCDP.getGenre()).to.be.eql('Drama');
    });
    it('Get year method', () => {
      expect(LCDP.getYear()).to.be.eql(2017);
    });
    it('Get ranking method', () => {
      expect(LCDP.getRanking()).to.be.eql(4.5);
    });
  });
});

```

### Ejecución de los tests

[testsSerie.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/testsSerie.png)

### Clase `Film`

Esta clase se encuentra en el fichero `film.ts` y se puede encontrar en el siguiente enlace: [film.ts](./src/ejercicio-01/film.ts)

```typescript

export class Film {
  title: string;
  director: string;
  genre: string;
  year: number;
  ranking: number;
  constructor(title: string = '', director: string = '', genre: string = '', year: number = 0, ranking: number = 0) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.ranking = ranking;
  }

  getTitle(): string {
    return this.title;
  }

  getDirector(): string {
    return this.director;
  }

  getGenre(): string {
    return this.genre;
  }

  getYear(): number {
    return this.year;
  }

  getRanking(): number {
    return this.ranking;
  }
}

```

En esta clase, hemos definido los atributos de la clase `Film` y hemos definido un constructor que recibe como parámetros los atributos de la clase. Además, hemos definido los métodos `getters` para cada uno de los atributos de la clase.

#### Tests

Para realizar los tests de la clase `Film`, hemos creado un fichero `film.spec.ts` en el que hemos creado un objeto de tipo `Film` y hemos comprobado que los atributos de la clase se han creado correctamente. Para ello, hemos usado la librería `chai` y el framework `mocha`. El código de los tests es el siguiente:

```typescript

import 'mocha';
import {expect} from 'chai';
import {Film} from '../../src/ejercicio-01/film';

const minecraft = new Film('Minecraft Evolution', 'Quentin Tarantino', 'Comedy', 2030, 1.5);

describe('Film class tests', () => {
  describe('Film getters', () => {
    it('Get Tittle method', () => {
      expect(minecraft.getTitle()).to.be.eql('Minecraft Evolution');
    });
    it('Get director method', () => {
      expect(minecraft.getDirector()).to.be.eql('Quentin Tarantino');
    });
    it('Get genre method', () => {
      expect(minecraft.getGenre()).to.be.eql('Comedy');
    });
    it('Get year method', () => {
      expect(minecraft.getYear()).to.be.eql(2030);
    });
    it('Get ranking method', () => {
      expect(minecraft.getRanking()).to.be.eql(1.5);
    });
  });
});

```

### Ejecución de los tests

[testsFilm.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/testsFilm.png)

### Colecciones <a name="id1.4"></a>

Heredando de basicStreameableCollection, hemos generado 3 clases que nos permiten almacenar colecciones de series, películas y artistas.

#### Clase `documentalCollection`

Para generar esta clase hemos heredeado de `basicStreameableCollection` y hemos creado un constructor que recibe como parámetro un array de objetos de tipo `Documental`. Esta clase se encuentra en el fichero `documentalCollection.ts` y se puede encontrar en el siguiente enlace: [documentalCollection.ts](./src/ejercicio-01/documentalCollection.ts)

```typescript

export class DocumentalCollection extends BasicStreamableCollection<Documental> {

  constructor(collection: Documental[] = []) {
    super(collection);
  }

  searchBy(key: string, search: string | number): Documental[] | string {
    let result: Documental[] = [];
    if (key === 'title') {
      this.collection.forEach((element: Documental) => {
        if (element.getTitle() === search) {
          result.push(element);
        }
      });
    } else if (key === 'director') {
      this.collection.forEach((element: Documental) => {
        if (element.getDirector() === search) {
          result.push(element);
        }
      });
    } else if (key === 'genre') {
      this.collection.forEach((element: Documental) => {
        if (element.getGenre() === search) {
          result.push(element);
        }
      });
    } else if (key === 'year') {
      this.collection.forEach((element: Documental) => {
        if (element.getYear() === search) {
          result.push(element);
        }
      });
    } else if (key === 'ranking') {
      this.collection.forEach((element: Documental) => {
        if (element.getRanking() === search) {
          result.push(element);
        }
      });
    } else {
      return 'Wrong key';
    }
    return result;
  }
}
```

En esta clase, hemos definido un constructor que recibe como parámetro un array de objetos de tipo `Documental`. Además, hemos definido un método `searchBy` que recibe como parámetros una clave y un valor. Este método nos permite buscar un documental por una de las siguientes claves: `title`, `director`, `genre`, `year` o `ranking`. Este método devuelve un array de objetos de tipo `Documental` o un string en caso de que la clave no sea correcta.

### Tests

Para realizar los tests de la clase `documentalCollection`, hemos creado un fichero `documentalCollection.spec.ts` en el que hemos creado un objeto de tipo `DocumentalCollection` y hemos comprobado que los atributos de la clase se han creado correctamente y las funciones estan correctamente implementadas. Para ello, hemos usado la librería `chai` y el framework `mocha`. El código de los tests es el siguiente:

```typescript

import 'mocha';
import {expect} from 'chai';
import {DocumentalCollection} from '../../src/ejercicio-01/documentalCollection';
import {Documental} from '../../src/ejercicio-01/documental';

const TDM = new Documental('Titanes del mar', 'Moscow rules', 'Guerra', 2023, 5);

const emptyDocumentalCollection = new DocumentalCollection();
const exampleDocumentalCollection = new DocumentalCollection([TDM]);

describe('documental Collection class', () => {
  describe('documental Collection constructor', () => {
    it('empty documental Collection', () => {
      expect(emptyDocumentalCollection.collection.length).to.be.eql(0);
      expect(emptyDocumentalCollection.collection).to.be.eql([]);
    });
    it('example Documental Collection', () => {
      expect(exampleDocumentalCollection.collection.length).to.be.eql(1);
      expect(exampleDocumentalCollection.collection).to.be.eql([TDM]);
    });
  });
  describe('documental Collection methods', () => {
    it('searchBy method', () => {
      expect(exampleDocumentalCollection.searchBy('title', 'Titanes del mar')).to.be.eql([TDM]);
      expect(exampleDocumentalCollection.searchBy('director', 'Moscow rules')).to.be.eql([TDM]);
      expect(exampleDocumentalCollection.searchBy('genre', 'Guerra')).to.be.eql([TDM]);
      expect(exampleDocumentalCollection.searchBy('year', 2023)).to.be.eql([TDM]);
      expect(exampleDocumentalCollection.searchBy('ranking', 5)).to.be.eql([TDM]);
    });
    it('getNumberOfItems method', () => {
      expect(exampleDocumentalCollection.getNumberOfItems()).to.be.eql(1);
      expect(emptyDocumentalCollection.getNumberOfItems()).to.be.eql(0);
    });
    it('addItem method', () => {
      emptyDocumentalCollection.addItem(TDM);
      expect(emptyDocumentalCollection.getNumberOfItems()).to.be.eql(1);
    });
    it('deleteItem method', () => {
      emptyDocumentalCollection.deleteItem(TDM);
      expect(emptyDocumentalCollection.getNumberOfItems()).to.be.eql(0);
    });
  });
});


```

### Ejecución de los tests

[testsDocumentalCollection.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/testsDocumentalCollection.png)

#### Clase `filmCollection`

Para generar esta clase hemos heredeado de `basicStreameableCollection` y hemos creado un constructor que recibe como parámetro un array de objetos de tipo `Film`. Esta clase se encuentra en el fichero `filmCollection.ts` y se puede encontrar en el siguiente enlace: [filmCollection.ts](./src/ejercicio-01/filmCollection.ts)

```typescript
import {BasicStreamableCollection} from './basicStreamableCollection';
import {Film} from './film';

export class FilmCollection extends BasicStreamableCollection<Film> {

  constructor(collection: Film[] = []) {
    super(collection);
  }

  searchBy(key: string, search: string | number): Film[] | string {
    let result: Film[] = [];
    if (key === 'title') {
      this.collection.forEach((element: Film) => {
        if (element.getTitle() === search) {
          result.push(element);
        }
      });
    } else if (key === 'director') {
      this.collection.forEach((element: Film) => {
        if (element.getDirector() === search) {
          result.push(element);
        }
      });
    } else if (key === 'genre') {
      this.collection.forEach((element: Film) => {
        if (element.getGenre() === search) {
          result.push(element);
        }
      });
    } else if (key === 'year') {
      this.collection.forEach((element: Film) => {
        if (element.getYear() === search) {
          result.push(element);
        }
      });
    } else if (key === 'ranking') {
      this.collection.forEach((element: Film) => {
        if (element.getRanking() === search) {
          result.push(element);
        }
      });
    } else {
      return 'Wrong key';
    }
    return result;
  }
}

```

En esta clase, hemos definido un constructor que recibe como parámetro un array de objetos de tipo `Film`. Además, hemos definido un método `searchBy` que recibe como parámetros una clave y un valor. Este método nos permite buscar un film por una de las siguientes claves: `title`, `director`, `genre`, `year` o `ranking`. Este método devuelve un array de objetos de tipo `Film` o un string en caso de que la clave no sea correcta.

### Tests

Para realizar los tests de la clase `filmCollection`, hemos creado un fichero `filmCollection.spec.ts` en el que hemos creado un objeto de tipo `FilmCollection` y hemos comprobado que los atributos de la clase se han creado correctamente y las funciones estan correctamente implementadas. Para ello, hemos usado la librería `chai` y el framework `mocha`. El código de los tests es el siguiente:

```typescript

import 'mocha';
import {expect} from 'chai';
import {FilmCollection} from '../../src/ejercicio-01/filmCollection';
import {Film} from '../../src/ejercicio-01/film';

const django = new Film('Django Unchained', 'Quentin Tarantino', 'Western', 2012, 4);
const stuartLittle = new Film('Stuart Little', 'Rob Minkoff', 'Infantil', 1999, 4);
const johnWick = new Film('John Wick', 'Chad Stahelski', 'Accion', 2014, 5);

const emptyFilmCollection = new FilmCollection();
const exampleFilmCollection = new FilmCollection([django, stuartLittle]);

describe('film Collection class', () => {
  describe('film Collection constructor', () => {
    it('empty film Collection', () => {
      expect(emptyFilmCollection.collection.length).to.be.eql(0);
      expect(emptyFilmCollection.collection).to.be.eql([]);
    });
    it('example Film Collection', () => {
      expect(exampleFilmCollection.collection.length).to.be.eql(2);
      expect(exampleFilmCollection.collection).to.be.eql([django, stuartLittle]);
    });
  });
  describe('film Collection methods', () => {
    it('searchBy method', () => {
      expect(exampleFilmCollection.searchBy('title', 'Stuart Little')).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('director', 'Rob Minkoff')).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('genre', 'Infantil')).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('year', 1999)).to.be.eql([stuartLittle]);
      expect(exampleFilmCollection.searchBy('ranking', 4)).to.be.eql([django, stuartLittle]);
    });
    it('getNumberOfItems method', () => {
      expect(exampleFilmCollection.getNumberOfItems()).to.be.eql(2);
      expect(emptyFilmCollection.getNumberOfItems()).to.be.eql(0);
    });
    it('addItem method', () => {
      emptyFilmCollection.addItem(johnWick);
      expect(emptyFilmCollection.getNumberOfItems()).to.be.eql(1);
    });
    it('deleteItem method', () => {
      emptyFilmCollection.deleteItem(johnWick);
      expect(emptyFilmCollection.getNumberOfItems()).to.be.eql(0);
    });
  });
});



```

### Ejecución de los tests

[testsFilmCollection.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/testsFilmCollection.png)

#### Clase `filmCollection`

Para generar esta clase hemos heredeado de `basicStreameableCollection` y hemos creado un constructor que recibe como parámetro un array de objetos de tipo `Serie`. Esta clase se encuentra en el fichero `serieCollection.ts` y se puede encontrar en el siguiente enlace: [filmCollection.ts](./src/ejercicio-01/filmCollection.ts)

```typescript
import {BasicStreamableCollection} from './basicStreamableCollection';
import {Serie} from './serie';

export class SerieCollection extends BasicStreamableCollection<Serie> {

  constructor(collection: Serie[] = []) {
    super(collection);
  }

  searchBy(key: string, search: string | number): Serie[] | string {
    let result: Serie[] = [];
    if (key === 'title') {
      this.collection.forEach((element: Serie) => {
        if (element.getTitle() === search) {
          result.push(element);
        }
      });
    } else if (key === 'director') {
      this.collection.forEach((element: Serie) => {
        if (element.getDirector() === search) {
          result.push(element);
        }
      });
    } else if (key === 'genre') {
      this.collection.forEach((element: Serie) => {
        if (element.getGenre() === search) {
          result.push(element);
        }
      });
    } else if (key === 'year') {
      this.collection.forEach((element: Serie) => {
        if (element.getYear() === search) {
          result.push(element);
        }
      });
    } else if (key === 'ranking') {
      this.collection.forEach((element: Serie) => {
        if (element.getRanking() === search) {
          result.push(element);
        }
      });
    } else {
      return 'Wrong key';
    }
    return result;
  }
}


```

En esta clase, hemos definido un constructor que recibe como parámetro un array de objetos de tipo `Serie`. Además, hemos definido un método `searchBy` que recibe como parámetros una clave y un valor. Este método nos permite buscar una serie por una de las siguientes claves: `title`, `director`, `genre`, `year` o `ranking`. Este método devuelve un array de objetos de tipo `Film` o un string en caso de que la clave no sea correcta.

### Tests

Para realizar los tests de la clase `serieCollection`, hemos creado un fichero `serieCollection.spec.ts` en el que hemos creado un objeto de tipo `SerieCollection` y hemos comprobado que los atributos de la clase se han creado correctamente y las funciones estan correctamente implementadas. Para ello, hemos usado la librería `chai` y el framework `mocha`. El código de los tests es el siguiente:

```typescript

import 'mocha';
import {expect} from 'chai';
import {SerieCollection} from '../../src/ejercicio-01/serieCollection';
import {Serie} from '../../src/ejercicio-01/serie';

const LCDP = new Serie('La Casa de Papel', 'Jesús Colmenar', 'Drama', 2017, 4.5);

const emptySerieCollection = new SerieCollection();
const exampleSerieCollection = new SerieCollection([LCDP]);

describe('serie Collection class', () => {
  describe('serie Collection constructor', () => {
    it('empty serie Collection', () => {
      expect(emptySerieCollection.collection.length).to.be.eql(0);
      expect(emptySerieCollection.collection).to.be.eql([]);
    });
    it('example Serie Collection', () => {
      expect(exampleSerieCollection.collection.length).to.be.eql(1);
      expect(exampleSerieCollection.collection).to.be.eql([LCDP]);
    });
  });
  describe('serie Collection methods', () => {
    it('searchBy method', () => {
      expect(exampleSerieCollection.searchBy('title', 'La Casa de Papel')).to.be.eql([LCDP]);
      expect(exampleSerieCollection.searchBy('director', 'Jesús Colmenar')).to.be.eql([LCDP]);
      expect(exampleSerieCollection.searchBy('genre', 'Drama')).to.be.eql([LCDP]);
      expect(exampleSerieCollection.searchBy('year', 2017)).to.be.eql([LCDP]);
      expect(exampleSerieCollection.searchBy('ranking', 4.5)).to.be.eql([LCDP]);
    });
    it('getNumberOfItems method', () => {
      expect(exampleSerieCollection.getNumberOfItems()).to.be.eql(1);
      expect(emptySerieCollection.getNumberOfItems()).to.be.eql(0);
    });
    it('addItem method', () => {
      emptySerieCollection.addItem(LCDP);
      expect(emptySerieCollection.getNumberOfItems()).to.be.eql(1);
    });
    it('deleteItem method', () => {
      emptySerieCollection.deleteItem(LCDP);
      expect(emptySerieCollection.getNumberOfItems()).to.be.eql(0);
    });
  });
});


```

### Ejecución de los tests

[testsSerieCollection.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/testsSerieCollection.png)

### <a name="id2"></a>

En este ejercicio tendrá que implementar una clase genérica que modele una lista de elementos de cualquier tipo y sus operaciones sin hacer uso de ninguna de las funcionlidades proporcionadas por Array.prototype. Se permite, sin embargo, el uso de [].

Deberá incluir, al menos, las siguientes operaciones para trabajar con su lista:

- Método append, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.
- Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
- Método filter, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.
- Método length, que devuelve el número de elementos de la lista.
- Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.
- Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.
- Método reverse, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.
- Método forEach, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos.

#### Interfaz<a name="id2.1"></a>

Hemos generado una interfaz `GenericArray` que contiene los métodos que hemos definido en la clase `GenericArray`. Esta interfaz se encuentra en el fichero `arrayInterface.ts` y su código es el siguiente:

```typescript

import { GenericArray } from "./array";

export interface GenericArrayInterface<T> {

append(arr: GenericArray<T>): void;
concatenate(...arrs: GenericArray<T>[]): GenericArray<T>;
filter(expression: (elem: T) => boolean): GenericArray<T>;
length(): number;
map(func: (element: T) => T): GenericArray<T>;
reduce<R>(func: (acc: R, element: T, index: number, elements: T[]) => R, acc: R): R;
reverse(): GenericArray<T>;
forEach(func: (element: T, index: number) => void): void;
}

```

#### Clase<a name="id2.1"></a>

Hemos generado una clase `GenericArray` que implementa la interfaz `GenericArrayInterface`. Esta clase se encuentra en el fichero `array.ts` y su código es el siguiente:

```typescript

import { GenericArrayInterface } from "./arrayInterface";

export class GenericArray<T> implements GenericArrayInterface<T> {

constructor(protected _items: T[]) {
    }

get items(): T[] {
        return this._items;
    }

append(arr: GenericArray<T>): void {
        const new_arr = [...this._items, ...arr._items];
        this._items = new_arr;
    }

concatenate(...arrs: GenericArray<T>[]): GenericArray<T> {
        let new_arr = new GenericArray<T>([...this._items]);
        let counter = 0; 
        while (arrs[counter] !== undefined) {
            const aux = arrs[counter];
            new_arr._items = [...new_arr._items, ...aux._items];
            counter++;
        }
        return new_arr;
    }

filter(expression: (elem: T) => boolean): GenericArray<T> {
        let new_arr: GenericArray<T> = new GenericArray<T>([]);
        for (let i = 0; i < this.length(); i++) {
            if (expression(this._items[i]) === true) {
                new_arr.append(new GenericArray<T>([this._items[i]]))
            }
        }
        return new_arr;
    }

length(): number {
        let counter = 0; 
        while (this._items[counter] !== undefined) {
            counter++;
        }
        return counter;
    }

map(func: (element: T) => T): GenericArray<T> {
        let new_arr: GenericArray<T> = new GenericArray<T>([]);
        for (let i = 0; i < this.length(); i++) {
            new_arr.append(new GenericArray<T>([func(this._items[i])]))
        }
        return new_arr;
    }

reduce<R>(func: (acc: R, element: T, indice: number, elements: T[]) => R, acc: R): R {
        let result: R = acc;
        for (let i = 0; i < this.length(); i++) {
            result = func(result, this.items[i], i, this.items);
        }
        return result;
    }

reverse(): GenericArray<T> {
        let new_arr = new GenericArray<T>([]);
        for (let i = this.length() - 1; i >= 0; --i) {
            new_arr.append(new GenericArray<T>([this._items[i]]))
        }
        return new_arr;
    }

forEach(func: (elemento: T, indice: number, elementos: T[]) => void) {
        for (let i = 0; i < this.length(); i++) {
            func(this.items[i], i, this.items);
        }
    }
  
}

```

Para el método `append` hemos generado un nuevo array que contiene los elementos de la lista original y los elementos de la lista que se pasa como parámetro. Después, hemos asignado este nuevo array a la lista original.
Para el método `concatenate` hemos generado una nueva lista que contiene los elementos de la lista original. Después, hemos generado un contador que nos permitirá recorrer el array de listas que se pasan como parámetro. Mientras el contador sea menor que el número de listas que se pasan como parámetro, hemos generado una lista auxiliar que contiene los elementos de la lista que se encuentra en la posición del contador. Después, hemos añadido los elementos de la lista auxiliar al final de la lista original. Por último, hemos incrementado el contador en 1.
Para el método `filter` hemos generado una nueva lista vacía. Después, hemos generado un bucle que recorre la lista original. Si el resultado de la expresión que se pasa como parámetro es verdadero, hemos añadido el elemento de la lista original a la lista vacía. Por último, hemos devuelto la lista vacía.
Para el método `length` hemos generado un contador que empieza en 0. Después, hemos generado un bucle que recorre la lista original. Por cada elemento de la lista original, hemos incrementado el contador en 1. Por último, hemos devuelto el contador.
Para el método `map` hemos generado una nueva lista vacía. Después, hemos generado un bucle que recorre la lista original. Por cada elemento de la lista original, hemos aplicado la función que se pasa como parámetro y hemos añadido el resultado a la lista vacía. Por último, hemos devuelto la lista vacía.
Para el método `reduce` hemos generado una variable que contiene el valor inicial que se pasa como parámetro. Después, hemos generado un bucle que recorre la lista original. Por cada elemento de la lista original, hemos aplicado la función que se pasa como parámetro y hemos asignado el resultado a la variable. Por último, hemos devuelto la variable.
Para el método `reverse` hemos generado una nueva lista vacía. Después, hemos generado un bucle que recorre la lista original de atrás hacia delante. Por cada elemento de la lista original, hemos añadido el elemento a la lista vacía. Por último, hemos devuelto la lista vacía.
Para el método `forEach` hemos generado un bucle que recorre la lista original. Por cada elemento de la lista original, hemos aplicado la función que se pasa como parámetro.

#### Tests de la clase<a name="id2.2"></a>

Hemos generado los tests de la clase `GenericArray` en el fichero `array.spec.ts`. El código de los tests es el siguiente:

```typescript

import 'mocha';
import {expect} from 'chai';
import { GenericArray } from "../../src/ejercicio-02/array";

const myArrayNumber = new GenericArray<number>([1, 2, 3]);
const myArrayString = new GenericArray<string>(['uno', 'dos', 'tres']);

describe("GenericArray Class", () => {

  it("arrays instance of GenericArray", () => {
    expect(myArrayNumber).to.be.an.instanceOf(GenericArray);
    expect(myArrayString).to.be.an.instanceOf(GenericArray);
  });
  describe('Collection methods', () => {

  it("Append methods", () => {
    myArrayNumber.append(new GenericArray<number>([4,5]));
    myArrayString.append(new GenericArray<string>(['cuatro', 'cinco']));
    expect(myArrayNumber.items).to.be.eql(new GenericArray<number>([1,2,3,4,5]).items);
    expect(myArrayString.items).to.be.eql(new GenericArray<string>(['uno', 'dos', 'tres', 'cuatro', 'cinco']).items);
  });

  it("Concatenate method", () => {
    expect(myArrayNumber.concatenate(new GenericArray<number>([6,7]), myArrayNumber).items).to.be.eql(new GenericArray<number>([ 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5 ]).items);
    expect(myArrayString.concatenate(new GenericArray<string>(['seis', 'siete']), myArrayString).items).to.be.eql(new GenericArray<string>(['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'uno', 'dos', 'tres', 'cuatro', 'cinco']).items);
  });

  it("Filter method", () => {
    expect(myArrayNumber.filter((elem) => elem % 2 === 0).items).to.be.eql(new GenericArray<number>([2, 4]).items);
    expect(myArrayString.filter((elem) => elem.length % 2 === 0).items).to.be.eql(new GenericArray<string>(['tres', 'cuatro']).items);
  });

  it("Size method", () => {
    expect(myArrayNumber.length()).to.be.eql(5);
    expect(myArrayString.length()).to.be.eql(5);
  });

  it("Map method", () => {
    expect(myArrayNumber.map((elem) => elem * 2).items).to.be.eql(new GenericArray<number>([2, 4, 6, 8, 10]).items);
    expect(myArrayString.map((elem) => elem.toUpperCase()).items).to.be.eql(new GenericArray<string>(['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO']).items);
  });

  it("Reduce method", () => {
    expect(myArrayNumber.reduce((acc, elem) => acc + '' + elem , '')).to.be.equal('12345');
    expect(myArrayString.reduce((acc, elem) => acc + '' + elem , '')).to.be.equal('unodostrescuatrocinco');
  });

  it("Reverse method", () => {
    expect(myArrayNumber.reverse()).to.be.eql(new GenericArray<number>([5,4,3,2,1]));
    expect(myArrayString.reverse()).to.be.eql(new GenericArray<string>(['cinco', 'cuatro', 'tres', 'dos', 'uno']));
  });

  it("ForEach method", () => {
    let suma = 0;
    myArrayNumber.forEach((elem, indice) => {
      if (indice % 2 === 0) {
        suma += elem
      }
    });
    expect(suma).to.be.equal(9);
    let cadena = '';
    myArrayString.forEach((elem, indice) => {
      if (indice % 2 === 0) {
        cadena += elem
      }
    });
    expect(cadena).to.be.equal('unotrescinco');
  });
});

});
  
  ```

#### Ejecución de los tests

[testsArray.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/testsArray.png)

### Mejoras en la biblioteca musical<a name="id1"></a>

Teniendo en cuenta que la documentacion de la biblioteca musical está en el repositorio 5, aquí solo vamos a comentar los cambios que hemos realizado en la biblioteca musical.

#### La discografia

Se nos pide que la discografía de un artista podrá estar formada por una colección de discos o de singles. Por lo tanto, tendrá que contemplar la nueva entidad single. Generalmente, un single se diferencia de un disco en que el single contiene una única canción o varias versiones de la misma canción.

Para ello, simplemente hemos añadido dos nuevos atributos a la clase, los cuales recogen los albumes, o los singles, respectivamente. En caso de que incialicemos la clase tanto con singles como con albumes, se priorizarán los albumes.

```typescript
// La discografia puede ser un array de discos o de canciones
    private discografia1: Disco[]
    private discografia2: Cancion[]
    discografia: Disco[] | Cancion[];
```

Para ello tambien hemos realizado un pequeño cambio en el constructor, el cual ahora es el siguiente:

```typescript
constructor(
      nombre: string,
      numOyentesMensuales: number,
      discografia1: Disco[],
      discografia2: Cancion[]
    ) {
      this.nombre = nombre;
      this.numOyentesMensuales = numOyentesMensuales;
      this.discografia1 = discografia1;
      this.discografia2 = discografia2;
      if (discografia1.length > 0) {
        this.discografia = discografia1;
      } else {
        this.discografia = discografia2;
      }
    }
```

Y por último hemos agregado al getDiscografia() los dos tipos de datos posibles a devolver.

```typescript
public getDiscografia(): Disco[] | Cancion[] {
      return this.discografia;
    }
```

#### Clase generica para la discografia

Para poder utilizar la clase generica que hemos creado en el apartado anterior, hemos creado una nueva clase, la cual se encarga de crear una nueva discografia, la cual puede ser de tipo Disco y de tipo Cancion.

```typescript

export class Discografia<T> {
    private discografia: T[];
    
    constructor(discografia: T[]) {
        this.discografia = discografia;
    }
    
    public getDiscografia(): T[] {
        return this.discografia;
    }
}

```

### Istanbul

Para comprobar la cobertura de los tests, hemos usado la herramienta `istanbul`. El resultado de la cobertura es el siguiente:

[istanbul.png](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-Gabito-tf/img/istanbul.png)