@click="indexMessaggio = null"  // al click la variabile in data(indexMessaggio) li assegno null;
-------
v-model="cercaTxt" // del tag input mi premdo il valore del input inserito e lo salvo in cercaTxt del data(Vue)
--------
v-for="(contact, i) in contacts" // contacts e un array di oggetti in data, lo ciclo e stampo per ogni elemento(contact) del v-for
--------
<div @click="visualizza_avatar(i); visualizza_name(i)"> // al click possiamo fare due funzioni separate da ";"
-------
<img :src="`./img/avatar${contact.avatar}.jpg`"> // possimao fare il binding dell'atributo `${variabile}` ecmascript 6
----------
{{contact.name}} // inserimento di variabile di tipo testo dentro i tag html
---------
{{ visualizza_name(index) }} // chiamo la funzione passondoli una variabile
------------
@click.stop="indexMessaggio = i" // al click assegno la i
------------
<div :class="(indexMessaggio == i) ? 'active' : '' "> // solo quando clicko la i e uguale al indexMessaggio
-------------------------------------------
<input @keyup.enter="inserisciMsg" > // al premere "su" dell'enter(event.which)
