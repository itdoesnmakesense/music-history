$(document).ready(function() {
  $.ajax({
    url: "response.json"
  }).done(function(data) {
    var divResponse = $("#actual-songs");
    // divResponse.text(data);
    var songInfo = "";
    var currentSong;

  for (var i = 0; i <= data.songs.length; i++ ) {
        currentSong = data.songs[i];

        songInfo += "<div class= 'song-container'>";
        songInfo += "<div class='song-title'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
        songInfo += "<div class = 'song-info'>";
        songInfo += "<p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
        songInfo +=  "<button id='delete'>"+ "Delete" + "</button>"+"</div>";
     divResponse.html(songInfo);
  };

  });

$(function(){
    $('#moreButton').on('click',function(){
      var buttonInfo = $("#moreSongs");
       $.ajax({url: "responseMore.json"
        }).done(function(data){
            var songInfo = "";
            var currentSong;

        for (var i = 0; i <= data.songs.length; i++ ) {
        currentSong = data.songs[i];

        songInfo += "<div class= 'song-container'>";
        songInfo += "<div class='song-title'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
        songInfo += "<div class = 'song-info'>";
        songInfo += "<p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
        songInfo +=  "</div>";
        buttonInfo.html(songInfo);
        };
        });
      });
    });

  });

  // $('#delete').on('click',function(){
  //   $('.song-container').hide('slow');
  // });






// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Love Is A Losing Game > by Amy Winehouse on the album Back to Black");
// songs.push("Ice Princess > by Azealia Banks on the album Broke With Expensive Taste");
// for (var i = 0; i <= songs.length; i++) {
// 	var revision = songs[i].replace("> by", "</h2><p>").replace("on the album","|").replace("*", "").replace("@", "").replace("(", "").replace("!", ""); 
// 	var music = document.getElementById("actual-songs");
// 	music.innerHTML += "<div class='java-styling'><span><h2>" + revision + "</p></span></div>";
// }


