// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto

var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    inputTxt: '',
    cercaTxt: '',
    filter: '',
    contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ]
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ]
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ]
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ]
      }
    ]
  },
  methods: {
    formatDate: function(date) {
      let dateTime = date.split(' ');
      let time = dateTime[1].split(':');
      let hours = time[0];
      let minutes = time[1];
      return `${hours}:${minutes}`;
    },
    visualizza_avatar: function(i) {
      this.index = i;
      let avatar = this.contacts[i].avatar;
      return avatar;
    },
    visualizza_name: function(i) {
      this.index = i;
      let name = this.contacts[i].name;
      return name;
    },
    inserisciMsg: function() {
      let currIndex = this.index;
      let now = dayjs().format('DD/MM/YYYY HH:mm:ss')
      let obj = {
        date: now,
        text: this.inputTxt,
        status: 'sent'
      }
      this.contacts[currIndex].messages.push(obj);
      this.inputTxt = '';

      let idInterval = setInterval(function() {
        console.log('ok');
        var elem = document.getElementById('scroll-auto');
        elem.scrollTop = elem.scrollHeight

      }, 0)


      setTimeout(() => {
        let now = dayjs().format('DD/MM/YYYY HH:mm:ss')
        let obj = {
          date: now,
          text: 'Ok!',
          status: 'received'
        }
        this.contacts[currIndex].messages.push(obj);
        var elem = document.getElementById('scroll-auto');
        elem.scrollTop = elem.scrollHeight;
        this.inputTxt = '';
        setTimeout(() => {
          clearInterval(idInterval)
        }, 100)   // un centesimo di secondo


      }, 1000)

    },
    showOptions: function(indexMess) {
      this.contacts[this.index].messages = this.contacts[this.index].messages.map((message, i) => {
        if (indexMess == i) {
          return {
            ...message,
            showOptions: true,
          }
        } else {
          return message
        }
      })







    }



  }

})
