var fileReader=new FileReader();
fetch('https://raw.githubusercontent.com/4-mina/4-mina.github.io/master/about.c')
  .then(response => response.text())
  .then(data => {
    document.querySelector("#console").innerHTML=data;

  });
  //TO DO:
  
  /*

  1. Implement console resizing with mouse
  2. implement maximizing, minimizing, and closing console
  3. implement flickering cursor
  4. implement taking user input ( display it as a first step)
  5. displaying text letter by letter
  6. TEST: type help command and diplay the man :) (bulk display)
  7. the rest of the commands 
  8. us counter for users and include it in the username for the commands.
  9. make counter take into account multiple visits from same computer.
  10. cuatomize the scroll bar
  11. customize background
  */