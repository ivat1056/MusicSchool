function montharr(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) {
    this[0] = m0;
    this[1] = m1;
    this[2] = m2;
    this[3] = m3;
    this[4] = m4;
    this[5] = m5;
    this[6] = m6;
    this[7] = m7;
    this[8] = m8;
    this[9] = m9;
    this[10] = m10;
    this[11] = m11;
  }
  function calendar() {
    var monthNames = "   ЯнвФевMaрАпрMaйИюнИюлАвгСенОктНояДек";
    var today = new Date();
    var thisDay;
    var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30,31, 30, 31);
    year = today.getYear();
    if (year < 2000)
      year = year + 1900;
    thisDay = today.getDate();
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
      monthDays[1] = 29;
    nDays = monthDays[today.getMonth()];
    firstDay = today;
    firstDay.setDate(1);
    testMe = firstDay.getDate();
    if (testMe == 2)
      firstDay.setDate(0);
    startDay = firstDay.getDay();
    document.writeln("<div align = 'center'>");
    document.write("<table border = '1'>");
    document.write("<tr><th colspan='7'>");
    document.write(monthNames.substring(today.getMonth() * 3 + 3, (today.getMonth() + 1) * 3 + 3));
    document.write(". ");
    document.write(year);
    document.write("<tr><th>Вск <th>Пон <th>Вт <th>Ср <th>Чт <th>Пт <th>Сб" );
    document.write("<tr>");
    column = 0;
    for (i = 0; i < startDay; i++) {
      document.write("<td width='30'>");
      column++;
    }
    for (i = 1; i <= nDays; i++) {
      document.write("<td width=30>");
      if (i == thisDay)
        document.write("<span style = 'color: purple;'>")
      document.write(i);
      if (i == thisDay)
        document.write("</span>")
      column++;
      if (column == 7) {
        document.write("<tr>");
        column = 0;
      }
    }
    document.write("</table>");
    document.writeln("</div>");
  }