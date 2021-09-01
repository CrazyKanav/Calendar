$("#calendar").evoCalendar();

  $("#calendar").evoCalendar('addCalendarEvent', [
    {
      id: '09nk7Ts',
      name: "My Birthday",
      date: "Feburary/6/2021",
      description: "Something text",
      type: "birthday",
      everyYear: true
    }
    // Add more
  ]);
  $("#calendar").on('selectEvent', function() {
    location.href='http://www.google.com'; // Website Link
  });
