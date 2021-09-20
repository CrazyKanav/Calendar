$('#calendar').evoCalendar({
  theme: 'Royal Navy'
})



// let name = document.getElementsByClassName("event-list");

// console.log(name);

$("#calendar").evoCalendar('addCalendarEvent', [
  {
    id: '09nr7Ts',
    name: "Holi",
    description: " Holi is a hindu festival celebrating the victory of good over evil. Holi is also known as the ‘festival of love’ ,‘ festival of spring’ and also the festival of colours.    ",
    date: "March/18/2021",
    badge: "March/18/2021",
    type: "event",
    color: "orange",
    everyYear: true
  },
  {
    id: '09nr8Ts',
    name: "Pongal",
    description: "Pongal is a festival, in India, to celebrate the sun god",
    badge: "January/14/2021",
    date: "January/14/2021",
    color: "coral",
    type: "event",
    everyYear: true
  },
  {
    id: '07nr54s',
    name: "Kalinga Mahotsav",
    description: "Kalinga Mahotsav is a festival celebrated as a tribute to the martyrs of the Maurya Dynasty which is celebrated by various Martial Art Acts through dance and music.",
    date: ["February/6/2020", "February/8/2020"],
    type: "event",
    color: "violet",
    everyYear: true
  },
  {
    id: "07nr56s",
    name: "Onam",
    description: "Onam celebrates the return of King Mahabali",
    date: "August/12/2021",
    color: "#f0e130",
    type: "event",
    everyYear: true
  },
  {
    id: "07nr58s",
    name: "Karaga",
    description: "Karaga festival depicts the rich cultural and religious heritage of Karnataka. It is celebrated in honour of the Goddess Shakti. The festival is held at the famous Dharmarayaswamy temple in Bangalore. The festival is celebrated in 27th April",
    date: "April/27/2021",
    color: "indigo",
    type: "event",
    everyYear: true
  },
  {
    id: "07nr59s",
    name: "Ugadi",
    description: "Ugadi is Beginning of the Year, is the New Year's Day for the states of Andhra Pradesh, Telangana, and Karnataka in India .It is festively observed in these regions on the first day of the Hindu lunisolar calendar month of chaitra . This occasion falls in the April month of the Gregorian calendar.It has been an important and historic festival of the Hindus .",
    date: "April/13/2021",
    color: "lightblue",
    type: "event",
    everyYear: true
  },
  {
    id: "07nr60s",
    name: "Diwali",
    description: "Diwali is a festival of lights which is celebrated by the Hindus with joy.During this festival, we Hindus celebrate by lighting up our house with diyos(small cup-shaped oil lamps made of baked clay).",
    date: "November/4/2021",
    color: "green",
    type: "event",
    everyYear: true
  },
  {
    id: "07nr61s",
    name: "Ganesh Chaturthi",
    description: "Ganesh Chaturthi is a festival celebrated to mark the arrival of Ganesh to earth from Kailash Par vat with his mother Goddess Parvati/Gauri. It begins on the fourth day (Chaturthi) of the month of Bhadrapada (August–September), the sixth month of the Hindu calendar. This festival is mostly celebrated in Maharashtra India.",
    date: "September/10/2021",
    color: "#ff2400",
    type: "event",
    everyYear: true
  },
  {
    id: "07nr62s",
    name: "Ram Navami",
    description: "Rama Navami is celebrated in the month of april. It is celebrated to honour the birth of lord Ram, the seventh avatar of Lord Vishnu. Ram Navami is recorded in Rama recitals, especially in Ramayana which is considered one of the two great Sanskrit epics of the Hindu religion. The story of Ram Navami is also called the Vratha Katha.",
    date: "April/21/2021",
    color: "#d9138a",
    type: "event",
    everyYear: true
  },
  {
    id: "07nr63s",
    name: "Dussehra",
    date: "October/15/2021",
    color: "#00A88E",
    type: "event",
    everyYear: true
  }
]);


// selectDate
$('#calendar').on('selectDate', function(event, newDate, oldDate) {
  //     console.log('selectDate fired');
  //     console.log(event);
  //     console.log(newDate);
  //     console.log(oldDate);
  });
  
  
  // selectEvent
  $('#calendar').on('selectEvent', function(event, activeEvent) {
  //     console.log('selectEvent fired');
  //     console.log(event);
      // console.log(activeEvent);

      if(activeEvent.id == "09nr7Ts")
      {
        location.href = "https://sites.google.com/sanskritischool.edu.np/holi/home";
      }
      else if(activeEvent.id == "09nr8Ts")
      {
        location.href = "https://sites.google.com/view/pongal/home"
      }
      else if(activeEvent.id == "07nr54s")
      {
        location.href = "https://sites.google.com/view/kalinga-mahotsav/home"
      }
      else if(activeEvent.id == "07nr56s")
      {
        location.href = "https://sites.google.com/view/onam1/home"
      }
      else if(activeEvent.id == "07nr58s")
      {
        location.href = "https://sites.google.com/view/karagasis/home"
      }
      else if(activeEvent.id == "07nr59s")
      {
        location.href = "https://sites.google.com/sanskritischool.edu.np/ugadi/home"
      }
      else if(activeEvent.id == "07nr60s")
      {
        location.href = "https://sites.google.com/view/diwali1/home"
      }
      else if(activeEvent.id == "07nr61s")
      {
        location.href = "https://sites.google.com/sanskritischool.edu.np/ganesh-chaturthi/home"
      }
      else if(activeEvent.id == "07nr62s")
      {
        location.href = "https://sites.google.com/sanskritischool.edu.np/ramanavami/home"
      }
      else if(activeEvent.id  == "07nr63s")
      {
        location.href = "https://sites.google.com/sanskritischool.edu.np/dussehra/home"
      }

  });