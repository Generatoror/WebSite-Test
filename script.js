        var libButton = document.getElementById('lib-button');
        var libIt = function() {
            var storyDiv = document.getElementById("story");
            var noun = document.getElementById("noun").value;
             var adjective = document.getElementById("adjective").value;
              var name = document.getElementById("person").value;
            storyDiv.innerHTML = "A " + adjective + " " + noun + " called " + name;
        };
        libButton.addEventListener('click', libIt);