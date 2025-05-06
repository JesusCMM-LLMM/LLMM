## Ejercicio 1: Elemento simple

### a) How should an element with the name test element and the content "This is our first element!" look?

Respuesta:
~~~
xml
<test-element>This is our first element!</test-element>
~~~

### b) Please show (in xml-syntax) the hierarchy of the element book with the subelements chapters and author. author has the further subelements name and address.

Respuesta:
~~~
xml
<book>
    <chapters></chapters>
    <author>
        <name></name>
        <address></address>
    </author>
</book>
~~~
### c) How does an element with the name entry which has got 2 attributes: no with the value 24 and date with the value 27.10.2004 look?

Respuesta:
~~~
xml
<entry no="24" date="27.10.2004"/>
~~~
(Si el elemento tuviera contenido interno, se escribiría así: <entry no="24" date="27.10.2004">Contenido</entry>).




## Ejercicio 2: Estructura de árbol XML y visualización en navegador
Objetivo:

Analizar la estructura del archivo XML dado.

Crear el archivo Ex2.xml y abrirlo en un navegador web para ver su representación.

Paso 1: Análisis del XML proporcionado
El archivo XML dado tiene la siguiente jerarquía:
~~~
xml
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<publication>
  <newsitem>
    <source>
      <agency>STT</agency>
      <editor>Miller</editor>
    </source>
    <class>local</class>
    <article>
      <heading>Snowstorms in Lappland</heading>
      <text>snow.html</text>
      <summary>snowx.html</summary>
    </article>
  </newsitem>
</publication>
~~~
Estructura del árbol:

Raíz: <publication>

Hijo: <newsitem>

Subhijos:

<source> (contiene <agency> y <editor>).

<class> (valor: "local").

<article> (contiene <heading>, <text> y <summary>).














## Ejercicio 3:

Archivo: ex3-err.txt
Errores y correcciones del XML proporcionado:

1. Etiquetas mal cerradas (anidadas incorrectamente)
Error:
~~~
xml
<president>Bill Gates
<extension>09-9990011</president></extension>
La etiqueta </president> cierra antes que </extension>, lo que invierte el anidamiento.
~~~
Corrección:
~~~
xml
<president>Bill Gates
  <extension>09-9990011</extension>
</president>
~~~

2. Mismo error en secretary y otros president/secretary
Ejemplo de error:
~~~
xml
<secretary>Katharine Finch <extension>09-9990012</secretary></extension>
Corrección:

xml
<secretary>Katharine Finch
  <extension>09-9990012</extension>
</secretary>
~~~








3. Elementos <company> duplicados sin diferenciación
Problema: Hay dos elementos <company> con el mismo nombre pero diferentes contenidos. No es un error de sintaxis, pero es una mala práctica.

Sugerencia: Usar un atributo id para diferenciarlos (opcional, pero mejora el diseño):
~~~
xml
<company id="microsoft">...</company>
<company id="oracle">...</company>
~~~

4. Sangría inconsistente
Error: Falta de sangría para mejorar la legibilidad.

Corrección: Sangrar los subelementos (como se muestra en las correcciones anteriores).
~~~
XML corregido (versión final):
xml
<?xml version='1.0' encoding='UTF-8'?>
<phonebook>
  <company>
    <cname>Microsoft</cname>
    <exchange>09-999000</exchange>
  </company>
  <president>Bill Gates
    <extension>09-9990011</extension>
  </president>
  <secretary>Katharine Finch
    <extension>09-9990012</extension>
  </secretary>
  <company>
    <cname>Oracle</cname>
    <exchange>09-888000</exchange>
  </company>
  <president>Larry Ellison
    <extension>09-8880011</extension>
  </president>
  <secretary>Helen Calhoun
    <extension>09-8880012</extension>
  </secretary>
</phonebook>
~~~

## Actividad7.

1. ¿Cómo son los comentarios en XML? (Sección 2.5)
Sintaxis:

xml
<!-- Este es un comentario XML -->


2. ¿Puede un atributo repetirse en el mismo elemento? (Sección 3.1)
No, los atributos en un mismo elemento deben tener nombres únicos.

Ejemplo inválido:
~~~
xml
<elemento atributo="1" atributo="2"> <!-- ¡Error! -->
~~~

3. ¿Dónde se especifica que los nombres de las etiquetas de apertura y cierre deben coincidir?
Sección 2.5 ("Start-Tags, End-Tags, and Empty-Element Tags"):

"The Name in an element’s end-tag must match the Name in its start-tag."

Ejemplo válido:
~~~
xml
<titulo>Texto</titulo>  <!-- Correcto -->
<titulo>Texto</nombre>  <!-- ¡Error! -->
Referencia directa al estándar XML 1.0:
XML 1.0 Specification (W3C) (Secciones mencionadas: 2.5, 3.1).
~~~
Nota: El estándar usa lenguaje técnico, pero estas reglas son fundamentales para XML bien formado.


