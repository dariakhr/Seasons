var season = prompt('Write when are u b-day(month or number of month)').toLowerCase();

 switch (season) {
   case '12':
   case 'december':
   case '1':
   case 'january':
   case '2':
   case 'february':
     alert('you were born in winter');
     break;
   case '3':
   case 'march':
   case '4':
   case 'april':
   case '5':
   case 'may':
     alert('you were born in spring');
     break;
   case '6':
   case 'june':
   case '7':
   case 'july':
   case '8':
   case 'august':
     alert('you were born in summer');
     break;
   case '9':
   case 'september':
   case '10':
   case 'october':
   case '11':
   case 'november':
     alert('you were born in autmn');
     break;
   default:
     alert('write correct information')
 }
