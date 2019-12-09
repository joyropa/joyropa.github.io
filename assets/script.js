/* THE SCRIPT FOR THE QUIZ */

var questions = [
    {
        q: 'What is metaphor?',
        c: [
            'A comparison between two different things using the word like or as.',
            'A comparison between two similar things using the word like or as.',
            'A direct comparison between two different things using the word like or as.',
            'A direct comparision between two similar things without using word like or as.'
        ],
        a: 'A direct comparison between two different things using the word like or as.'
    },
    {
        q: "What was Jose Rizal's nickname?",
        c: ['Toto', 'Junior', 'JR', 'Pepe'],
        a: 'Pepe'
    },
    {
        q: 'What was the last poem written by Rizal?',
        c: [
            'Makamisa',
            'Mi Ultimo Adios',
            'Sa Aking mga Kababata',
        ],
        a: 'Makamisa',
    },
    {
        q: "According to Philippine history Org, how many politicians, students, and journalists were detained by military compound under the president's compound?",
        c: ['30,000', '3,000', '300,000', '300'],
        a: '30,000'
    },
    {
        q: "The poem which explores the experience of martial law?",
        c: [
            'The Safe House',
            'Apo on the wall',
            'Padre Faura witnessed the execution of Rizal',
            'Lengua Para Diablo'
        ],
        a: 'Apo on the wall'
    },
    {
        q: 'What does "Safe House" mean in the story?',
        c: [
            'A house of soldiers.',
            'A house which serves as hide out of the people rebellion who are against under the President Marcos Command.',
            'A house protected by the military.',
            'A four-story building with four units.'
        ],
        a: 'A house which serves as hide out of the people rebellion who are against under the President Marcos Command.'
    },
    {
        q: "The narrator of The Revolution According to Raymundo Mata was in bed for how many days?",
        c: ['2 days', '3 days', '4 days', '5 days'],
        a: '3 days'
    },
    {
        q: "To whom did the narrator lend the book?",
        c: ['Benjamin', 'Benigno', 'Gaspar', 'Raymundo'],
        a: 'Benigno'
    },
    {
        q: "He witnesses the execution of Rizal.",
        c: ['BJ Patino', 'Danton Remoto', 'Raymundo Mata', 'Padre Faura'],
        a: 'Padre Faura'
    },
    {
        q: "When was Martial Law proclaimed?",
        c: [
            'September 19, 1972',
            'September 21, 1972',
            'October 21, 1972',
            'October 12, 1972'
        ],
        a: 'September 21, 1972'
    },
    {
        q: "The Marcos babies were born this time.",
        c: [
            '1992-2005',
            '1950-1960',
            '1964-1986',
            '1970-1985'
        ],
        a: '1964-1986'
    },
    {
        q: "In the poem Apo on the Wall, who is Apo?",
        c: [
            'The fater',
            'Marcos',
            'Enrile',
            'The grand child'
        ],
        a: 'Marcos'
    },
    {
        q: "What is considered a crime for males in the Philippines?",
        c: ['adultery', 'concubinage', 'pre-marital sex'],
        a: 'concubinage'
    },
    {
        q: "Who died singing in the short story Prelude?",
        c: ['Nenita', "Nenita's husband", 'Willy Revillame', 'The widow'],
        a: "Nenita's husband"
    },
    {
        q: "A little packet hidden in kitchen drawer that gives Nenita a sense of security and power.",
        c: ['Banana leaves', 'Bayabas leaves', 'Dumero leaves', 'Dried purple leaves'],
        a: 'Dried purple leaves'
    },
    {
        q: "Lengua para diablo is an excerpt from:",
        c: [
            'Banana Republic',
            'Banana Heart Summer',
            'Banana Summer',
            'Banana Heart Republic'
        ],
        a: 'Banana Heart Summer'
    },
    {
        q: "The author of Apo on the Wall.",
        c: ['Daryll Delgado', 'Gina Apostol', 'BJ Patino', 'Sandra Nicole Roldan'],
        a: 'BJ Patino'
    },
    {
        q: "The author of the short story The Safe House.",
        c: ['Daryll Delgado', 'Gina Apostol', 'BJ Patino', 'Sandra Nicole Roldan'],
        a: 'Sandra Nicole Roldan'
    },
    {
        q: "He is a high school student from Ateneo who read the book Noli which awaken him to revolutionary act of reading.",
        c: ['Raymundo Mata', 'Danton Remoto', 'J. Nell Garcia', 'Daryll Delgado'],
        a: 'Raymundo Mata'
    },
    {
        q: "Is is a story from a perspective of a young girl and the sacrifices of her family made to fight against the Marcos government.",
        c: [
            'The Safe House',
            'Lengua Para Diablo',
            'Apo on the Wall',
            'Justice'
        ],
        a: 'The Safe House'
    },
    {
        q: "Who wrote Preludes?",
        c: ['Daryl Delgado', 'Danton Remoto', 'Ron Darvin', 'Merlinda Bobis'],
        a: 'Daryl Delgado'
    },
    {
        q: "What is the theme of Lengua Para Diablo?",
        c: ['Authoritarianism', 'Survival', 'Poverty', 'Gender Inequalities'],
        a: 'Poverty'
    },
    {
        q: "What is the theme of Preludes?",
        c: ['Authoritarianism', 'Survival', 'Poverty', 'Gender Inequalities'],
        a: 'Gender Inequalities'
    },
    {
        q: "He wrote Padre Faura Witnesses the Execution of Rizal.",
        c: [
            'Danton Remoto',
            'BJ Patino',
            'Sandra Nicole Roldan',
            'Gina Apostol'
        ],
        a: 'Danton Remoto'
    },
    {
        q: "Martial law is under the proclamation of?",
        c: [
            'Proclamation No. 1181',
            'Proclamation No. 1018',
            'Proclamation No. 1081',
            'Proclamation No. 1008'
        ],
        a: 'Proclamation No. 1081'
    },
    {
        q: "What does Herbalista feel about Nenita's husband?",
        c: ['Angry', 'Confused', 'Lonely', 'Love'],
        a: 'Angry'
    },
    {
        q: "What is the relationship of Padre Faura to Jose Rizal?",
        c: ['Son', 'Friend', 'Old student', 'Cousin'],
        a: 'Old student'
    },
    {
        q: "The story which concerns a father who no longer feels the power over his family and society.",
        c: ['The devil ate my word', 'Justice', 'Preludes', 'The Safe House'],
        a: 'The devil ate my word'
    },
    {
        q: "All people who came at the safe house will be fed and given money. They carry nothing what they bring is locked in the safest place. Where is the safest place?",
        c: ['Cabinet', 'Head', 'Vault', 'Under the clothes'],
        a: 'Head'
    },
    {
        q: "What is the theme of the story Preludes?",
        c: ['Survival', 'Infidelity', 'Poverty', 'Authorianism'],
        a: 'Infidelity'
    },
    {
        q: "The NCCA means what?",
        c: [
            'National Cultural Commission for Arts',
            'National Cultural Commission for the Arts',
            'National Commission for Culture and the Arts',
            'National Commision for Culture and Arts'
        ],
        a: 'National Commission for Culture and the Arts'
    },
    {
        q: "A person who is Taga Bayan is considered as what?",
        c: ['Salvage brute', 'Civilized', 'Indio', 'Bruto Salvage'],
        a: 'Civilized'
    },
    {
        q: "It is a metrical tale or a tale that follows the structure of a poem.",
        c: ['Awit', 'Epik', 'Korido', 'Prose Narratives'],
        a: 'Korido'
    },
    {
        q: "It is the re-enactment of the Pasyon performed during Holiy Week in Philippines.",
        c: ['Pasyon', 'Komedya', 'Awit', 'Senakulo'],
        a: 'Senakulo'
    },
    {
        q: "It is locally known as tagay and are sun during drinking sessions.",
        c: [
            'Love song',
            'Drinking song',
            'Songs of death',
            'Religious song'
        ],
        a: 'Drinking song'
    },
    {
        q: "It is the lamentations that contain the role of good deeds that the dead has usually done to immortalize his or her good image.",
        c: ['Love song', 'Drinking song', 'Songs of death', 'Religious song'],
        a: 'Songs of death'
    },
    {
        q: "These stories use animals as characters that represent a particular value or characteristic.",
        c: ['Folksong', 'Fables', 'Folktales', 'Myths'],
        a: 'Fables'
    },
    {
        q: "A very length narrative poem that are based on oral traditions.",
        c: ['Awit', 'Prose narratives', 'Komedya', 'Epic'],
        a: 'Epic'
    },
    {
        q: "It is called as ordinary written language.",
        c: ['Awit', 'Prose narratives', 'Komedya', 'Epic'],
        a: 'Prose narratives'
    },
    {
        q: "These are statements that contain superficial word but deeper answer.",
        c: ['Proverbs', 'Riddles', 'Fables', 'Folksong'],
        a: 'Riddles'
    },
    {
        q: "These tackle the natural or strange occurrence of the earth and how things are created to give a thing explanation",
        c: ['Epic', 'Awit', 'Legend', 'Myth'],
        a: 'Myth'
    },
    {
        q: "It is type of ceramic made from special red and brown clays.",
        c: ['Clay', 'Terracotta', 'Glitter', 'Squabbling'],
        a: 'Terracotta'
    },
    {
        q: "It is means to argue loudly about something that is not important.",
        c: ['Aviary', 'Glitter', 'Squabbling', 'Balasang ko'],
        a: 'Squabbling'
    },
    {
        q: "A place where many birds are kept.",
        c: ['Aviary', 'Glitter', 'Squabbling', 'Balasang ko'],
        a: 'Aviary'
    },
    {
        q: "It is also a dish made of cow's tongue.",
        c: ['Beef', 'Lengua', 'Diablo', 'Luxuriate'],
        a: 'Lengua'
    },
    {
        q: "It means having a pleasant, spicy taste.",
        c: ['Epicure', 'Affluence', 'Luxuriate', 'Piquant'],
        a: 'Piquant'
    },
    {
        q: "To persuade someone to do something.",
        c: ['Scrupulously', 'Cajole', 'Appeasement', 'Affluence'],
        a: 'Cajole'
    },
    {
        q: "In Ilocano, this means master or sir.",
        c: ['Apo', 'Lengua', 'Aviary', 'Balasang ko'],
        a: 'Apo'
    },
    {
        q: "It is cohabitation of person not legally married.",
        c: ['Adultery', 'Concubinage', 'Appeasement', 'Stutter'],
        a: 'Concubinage'
    },
    {
        q: "A voluntary sexual intercourse between a married man and someone other than his wife or between a married women and someone other than her husband.",
        c: ['Adultery', 'Concubinage', 'Appeasement', 'Stutter'],
        a: 'Adultery'
    }
];
var name = document.getElementsByName('name');
var trackSection = document.getElementsByName('track_section');
var checkingModal = document.getElementById('checkingModal');
var htmlName = document.getElementById('name');
var htmlFrom = document.getElementById('from');
var htmlScore = document.getElementById('score');
var htmlPercent = document.getElementById('percent');
var htmlRemarks = document.getElementById('remarks');
var sheet = document.sheet;
var questionsHTML = document.getElementById('questions');
var htmlWrong = document.getElementById('wrong');

function buildTheQuestions() {
    var all_of_them = '';
    for (var i in questions) {
        var question = questions[i].q;
        var choices = questions[i].c;
        var choicesHTML = '';
        for (var c in choices) {
            choicesHTML += '<span class="w3-col">' +
                '<input class="w3-radio" type = "radio" name = "q' + i + '" value = "' + choices[c] + '" > ' + choices[c] +
                '</span >';
        }
        all_of_them += '<li>' +
            '<p>' + question + '</p>' +
            '<div class="w3-row-padding">' +
            choicesHTML +
            '</li><hr/>';
    }
    questionsHTML.innerHTML = all_of_them;
}

function checkAnswers() {

    var score = 0;
    var percent = 0;
    var wrongAnswers = [];

    if (!sheet.name.value || !sheet.trackSection) {
        alert("You did not fill in the name or section/track field! Please specify those that are needed.");
        return;
    }

    for (var i in questions) {
        if (sheet['q' + i].value.toLowerCase() == '') {
            alert("Your answer sheet is incomplete. Your answers will not be processed unless you complete your answer sheet.")
            return;
        }
    }

    for (var i in questions)
        if (sheet['q' + i].value.toLowerCase() == questions[i].a.toLowerCase())
            score++;
        else wrongAnswers.push(
            {
                id: parseInt(i) + 1,
                wrong: sheet['q' + i].value.toLowerCase(),
                right: questions[i].a.toLowerCase()
            }
        );

    percent = score * 100 / 50;

    htmlName.innerHTML = sheet.name.value.toUpperCase();
    htmlFrom.innerHTML = sheet.trackSection.value.toUpperCase();
    htmlScore.innerHTML = score;
    htmlPercent.innerHTML = percent;

    if (percent >= 90)
        htmlRemarks.innerHTML = 'Congratulations!';
    else if (percent >= 80)
        htmlRemarks.innerHTML = 'Not bad! Keep it up!';
    else
        htmlRemarks.innerHTML = 'Better luck next time!';

    if (wrongAnswers.length) {
        htmlWrong.innerHTML = '<h4>Wrong answers</h4><ul class="w3-margin-bottom">';
        for (var a in wrongAnswers) {
            var statement = 'In question ' +
                wrongAnswers[a].id +
                ', your answer is <span class="w3-text-red w3-tag w3-black w3-round">' + wrongAnswers[a].wrong +
                '</span>, but the correct answer is <span class="w3-text-green w3-tag w3-black w3-round">' + wrongAnswers[a].right + '</span>.';
            htmlWrong.innerHTML = htmlWrong.innerHTML + '<li>' + statement + '</li>';
        }
        htmlWrong.innerHTML = htmlWrong.innerHTML + '</ul>';
    }

    checkingModal.style.display = 'block';
}