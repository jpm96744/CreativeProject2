document.getElementById("movieSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("movieInput").value;
    if (value === "")
      return;
    console.log(value);

    const url = "http://www.omdbapi.com/?t=" + value + "&apikey=ee953d";
    fetch(url) 
      .then(function(response) {
      return response.json();
      }).then(function(json) {
          console.log(json);
          let results = "";
          results += '<img src="' + json.Poster + '">';
          results += '<h2>Year: ' + json.Year + "</h2>";
          results += '<h2>Rated: ' + json.Rated + "</h2>";
          results += '<h2>Runtime: ' + json.Runtime + "</h2>";
          document.getElementById("movieResults").innerHTML = results;

          results = "";
          results += '<h2>Director: ' + json.Director + "</h2>";
          results += '<h2>Cast: ' + json.Actors + "</h2>";
          results += '<h2>Plot: ' + json.Plot + "</h2>";
          document.getElementById("detailResults").innerHTML = results;
      });
});