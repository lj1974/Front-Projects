<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="eainte.css">
    <title>EA AND BD</title>
</head>


<body>
    
    <header><span>Welcome, </span>to the character lounge
    </header>
    <main>
        <section>
            <form action="eainte.php" method="POST" class="form">
                <div class="one">
                    <p class="title"> * Insert here the name :</p>
                    <input type="text" name="name" id="name">
                </div>

                <div class="two">
                    <label for="age" class="title">Insert here the age group :</label>
                    <select id="age" name="age">
                        <option value="child">Child</option>
                        <option value="teen">Teen</option>
                        <option value="youngaduly">Young Adult</option>
                        <option value="adult">Adult</option>
                        <option value="old">Elder</option>
                        <option value="imortal">Imortal</option>
                    </select>
                </div>


            <div class="four">
                <label for="align" class="title">Alignment :</label>
                <select id="align" name="align">
                    <option value="lawgood">Lawful Good</option>
                    <option value="neugood">Neutral Good</option>
                    <option value="chaogood">Chaotic Good</option>
                    <option value="lawneu">Lawful Neutral</option>
                    <option value="trueneu">True Neutral</option>
                    <option value="chaoneu">Chaotic Neutral</option>
                    <option value="lawevil">Lawful Evil</option>
                    <option value="neuevil">Neutral Evil</option>
                    <option value="chaoevil">Chaotic Evil</option>>
                </select>
            </div>

            <div class="five">
                <label for="country" class="title">From where?</label>
                <select id="country" name="country">
                    <option value="none">None bellow</option>
                    <option value="hards">Hardstrom</option>
                    <option value="fort">Fortuna</option>
                    <option value="kimera">Kimera</option>
                    <option value="astra">Astra</option>
                    <option value="vulmo">Vulmo</option>
                </select></div>

                <div class="six">
                    <p class="title">Abilities :</p>
                    <input type="text" name="ability" id="ability">

                </div>

                <div class="seven">
                    <p class="title">Ocupation :</p>
                    <input type="text" name="ocupation" id="ocupation">  
                </div>

                <div class="eight">
                    <label for="organization" class="title">Organization :</label>
                    <select id="organization" name="organization">
                        <option value="noneorg">None Bellow</option>
                        <option value="rebel">Rebellion</option>
                        <option value="hunters">Hunters</option>
                        <option value="cupula">Cúpula</option>
                        <option value="liga">Liga das Laminas</option> 
                        <option value="legion">Legion</option>
                        <option value="graham">Graham</option>
                        <option value="monas">Monasterio</option>
                    </select></div>

                    <div class="nine">
                        <p class="title">Titles <span>(Please separete titles by comma [ , ]) :</span></p>
                        <input type="text" name="titles" id="titles">  
                    </div>

                    <div class="ten">
                        <p class="title">Description :</p>
                        <input type="text" name="desc" id="desc">  
                    </div>

                <div class="eleven-center">
                <input type="submit" value="cadastro" class="eleven">
                </div>
            </form>


            <div how class="howto">?</div>
            <div howinfo class="howtotext"><p>Insert the info of the persos in the corrects labels</p><p>Insira as info dos seus personagens de acordo com os labels.</p></div>
        </section>
    </main>
    <footer>Created by Apple </footer>

    <script src="eainte.js"></script>
</body>
</html>