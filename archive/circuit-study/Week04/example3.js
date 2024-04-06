var rooms = ['h1', 'h2', 'h3'];
var newRooms = rooms.map((rm) => {
  if (rm === 'h3') {
    return 'h4';
  } else {
    return rm;
  }
});
