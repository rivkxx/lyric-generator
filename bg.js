<html>
  <head>
    <style>
      body {
        font-size: 20px;
        text-align: center;
        background-color: rgb(255, 255, 255);
      }
    </style>
  </head>
  <body>
    <button onclick="updateBackground()">Generate Lyrics</button>
    <br><br>
    <div id="lyrics">
    </div>

    <script>
      function updateBackground() {
        var color = getRandomColor();
        document.body.style.backgroundColor = color;
        document.getElementById("lyrics").innerHTML = generate_lyrics();
      }

      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      function generate_lyrics() {
        var nouns = ['love', 'heart', 'night', 'dream', 'sun', 'moon', 'star'];
        var verbs = ['shine', 'dance', 'sing', 'fly', 'sparkle', 'twinkle'];
        var adjectives = ['bright', 'beautiful', 'amazing', 'eternal', 'warm', 'spicy'];

        var lyric = "";
        for (var i = 0; i < 4; i++) {
          lyric +=
            adjectives[Math.floor(Math.random() * adjectives.length)] +
            " " +
            nouns[Math.floor(Math.random() * nouns.length)] +
            "<br>";
          lyric +=
            verbs[Math.floor(Math.random() * verbs.length)] +
            " all night long" +
            "<br><br>";
        }

        return lyric;
      }
    </script>
  </body>
</html>
