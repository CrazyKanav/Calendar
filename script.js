$("#calendar").evoCalendar();

  $("#calendar").evoCalendar('addCalendarEvent', [
    {
      id: '09nk7Ts',
      name: "My Birthday",
      date: "September/1/2021",
      type: "birthday",
      everyYear: true
    }
    // Add more
  ]);

  $("#calendar").on('selectDate', function() {
    location.href='http://www.google.com'; // Website Link
  });
  
  $("#calendar").on('selectEvent', new_fart() {
    location.href='http://www.google.com'; // Website Link
  });

