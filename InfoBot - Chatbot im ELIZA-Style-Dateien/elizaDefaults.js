var defaultemptyrules = [
	
{
  greeting: "Willkommen im InfoSphere! Dem Schülerlabor der RWTH Aachen. Ich bin InfoBot einer eurer Betreuer. Von welcher Schule kommst du denn?",
  nokeyrules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Hm... das versteh ich nicht. Was ist dein Lieblingsfach?",
        "Hm... irgendwie versteh ich dich nicht. Was tust du denn so in der Pause?",
        "Öh... da hab ich was falsch verstanden. Wer ist denn dein Lieblingslehrer/in?"
      ]
    }
  ]
},
{
  keywords: ["Hi","Hallo"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Hallo, in welche Schule gehst du denn?",
        "Hey, dann sag mir halt nicht deine Schule. Was ist dein Lieblingsfach?",
        "Wer ist denn dein Lieblingslehrer/in?"
      ]
    }
  ]
},
{
  keywords: ["Gymnasium"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Wow im Gymnasium! Was ist denn dein Lieblingsfach?",
        "Hui! Aber nur lernen ist ja auch doof. Was machst du dort denn in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Realschule","Gesamtschule"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Das ist toll! Was ist denn dein Lieblingsfach?",
        "Cool. Was spielt man bei euch denn so in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Hauptschule"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Antwort1",
        "Antwort2"
      ]
    }
  ]
},
{
  keywords: ["Berufskolleg"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Antwort1",
        "Antwort2"
      ]
    }
  ]
},
{
  keywords: ["Informatik","Info"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Das ist auch mein Lieblingsfach! Da bist du hier genau richtig. Und was machst du gerne in der Pause?",
        "Das sagst du doch nur so!"
      ]
    }
  ]
},
{
  keywords: ["Physik","Chemie","Biologie"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Ah jemand der die Geheimnisse der Natur verstehen will. Ich bin beeindruckt. Und was machst du gerne in der Pause?",
        "Wow. Da lernst du bestimmt eine Menge toller Experimente kennen. Und was machst du gerne in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Deutsch","Spanisch","Latein"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Ah, du bist also ein Spezialist für Sprachen. Und was machst du gerne in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Französisch"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Ah, du bist also ein Spezialist für Sprachen.très bon. Und was machst du gerne in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Englisch"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*Englisch",
      answers:
      [
        "Ah, du bist also ein Spezialist für Sprachen. Very Good! Und was machst du gerne in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Sport"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Ja, da kann man sich so richtig austoben. Genau wie in der Pause, was machst du denn so in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Musik","Kunst"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Oh das ist schön, ich bin auch gerne künstlerisch aktiv. Und was machst du gerne in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Geschichte","Erdkunde","Politik"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Ein richtig wichtiges Fach. Und was machst du gerne in der Pause?"
      ]
    }
  ]
},
{
  keywords: ["Herr"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Uh, der klingt sehr nett. Welches Fach unterrichtet er denn?",
        "Ah, der klingt sehr nett. Was unterrichtet er denn noch?"
      ]
    }
  ]
},
{
  keywords: ["Frau"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Uh, sie klingt sehr nett. Welches Fach unterrichtet sie denn?",
        "Ah, sie klingt sehr nett. Was unterrichtet sie denn noch?"
      ]
    }
  ]
},
{
  keywords: ["Fussball","Fangen","spielen","essen","trinken","Tischtennis","unterhalten"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Das mach ich auch immer gerne. Was ist denn dein Lieblingsfach?",
        "Das mach ich auch immer gerne. Wer ist denn dein Lieblingslehrer/in?"
      ]
    }
  ]
},
{
  keywords: ["Instagram","Chatten","Handy"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Darfst du das an deiner Schule? Was sagt denn dein Lieblingslehrer/in dazu?",
        "Das solltest du an der Schule aber nicht tun. Erzähl mir lieber was dein Lieblingsfach ist."
      ]
    }
  ]
},
{
  keywords: ["Käsekuchen","Bla","Blub"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Ich bin kein Bot! Ehrlich!",
        "Bla Bla! Unsinn schreiben kann ich selber. Erzähl mir lieber was dein Lieblingsfach ist."
      ]
    }
  ]
},
{
  keywords: ["Mathematik","Mathe"],
  priority: undefined,
  rules:
  [
    {
      regexp: ".*",
      answers:
      [
        "Ein Zahlenzauberer. Wer unterrichtet denn Mathematik bei dir?",
        "Wirklich? Mathe ist doch so schwer. Bei wem hast du das denn?"
      ]
    }
  ]
},
{
  keywords: ["Hobby","Hobbies","gerne"],
  rules: [
    {
      regexp: ".*",
      answers: [
        "Ich spiele super gerne Fussball und fahre ganz viel Fahrrad",
        "In meiner Freizeit male ich gerne Bilder",
        "Ich gehe mit meinen Freundinnen und Freunden oft im See schwimmen"
      ]
    }
  ]
}
];
var defaultemptysubs = [];
var rules = [];

var defaulstandardrules = [
	{
	  greeting: "BEGRÜßUNG",
	  nokeyrules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"STANDARDANTWORT 1",
			"STANDARDANTWORT 2"
			
		  ]
		}
	  ]
	}
];
var defaultstandardsubs = [["dein","mein"],["mich","dich"],["mir","dir"],["dir","mich"],["Sie","mich"],["Ihre","meine"],["meine","deine"],["mein","dein"],["ich","du"],["du","ich"]];

var defaulteachingrules = [
	{
	  greeting: "'Das offene Ohr' - Hallo, ich höre zu.",
	  nokeyrules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"ERZÄHL MIR DAS BITTE GENAUER.",
			"KOMM, ERKLÄRE MIR DAS NOCHMAL AUSFÜHRLICHER.",
			"WAS BEDEUTET DIES FÜR DICH?",
			"WAS BEDEUTET DIES FÜR DICH?",
			"ICH DENKE, DU SOLLTEST DAS GENAUER ERKLÄREN.",
			"RED' BITTE WEITER.",
			"ERKLÄRE MIR DAS EINMAL GENAUER."
		  ]
		}
	  ]
	},
	{
	  keywords: ["Ende","End","SCHLUß","Schluss","TSCHÜSS","TSCHÖ"],
	  priority: 1,
	  rules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"WENN DU NICHTS MEHR SAGEN WILLST, DANN SOLL ES JETZT GUT SEIN. ICH HABE IMMER EIN 'OFFENES OHR'."
		  ]
		}
	  ]
	},
	{
	  keywords: ["Begruessung","Begruessen","Begruest"],
	  priority: 1,
	  rules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"Der Begruessungssatz wird zu Beginn des Chats ausgegeben um das Gespräch zu starten."
		  ]
		}
	  ]
	},
	{
	  keywords: ["Aufbau","Aufgebaut"],
	  priority: 1,
	  rules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"Im ersten Block werden die Begrüßung und die default-Regeln festgelegt.",
			"Mit ausnahme des ersten Blocks besteht jeder Block aus Schlüsselwörtern, einer Priorität und einer Reihe von Regeln.",
		  ]
		}
	  ]
	},
	{
	  keywords: ["Antwort"],
	  priority: 1,
	  rules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"Trifft eine Regel durch Schlüsselwort und regexp zu, so wird eine Antwort zufällig ausgewählt.",
			"Mehrere Antworten werden durch Komma getrennt angegeben",
		  ]
		}
	  ]
	},
	{
	  keywords: ["Hallo"],
	  priority: 1,
	  rules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"Hallo sagt man dem User in der Begruessung"
		  ]
		}
	  ]
	},
	{
	  keywords: ["KEYWORD","Schlüsselwort","Schlüsselwörter"],
	  priority: 1,
	  rules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"Schlüsselwörter dienen als Trigger für Regeln",
			"Will man %K% in seinem Regulären ausdruck verwenden, oder in der Antwort kann man als Platzhalter ein K eingeschlossen in %-zeichen verwenden."
		  ]
		},
		{
		  regexp: ".* mehrere .*",
		  answers:
		  [
			"Treffen mehrere Schlüsselwörter auf einen Ausdruck zu, so entscheidet die Priorität der Regeln welches gewählt wird.",
			"Insofern keine Priorität angegeben wurde wird einfach die erste Regeln die gefunden wurde genommen.."
		  ]
		}
	  ]
	},
	{
	  keywords: ["Priorität","priority"],
	  priority: 1,
	  rules:
	  [
		{
		  regexp: ".*",
		  answers:
		  [
			"Die Priorität dient dazu bei mehreren zutreffenden Schlüsselwörtern zu entscheiden"
		  ]
		}
	  ]
	}
];
var defaultteachingsubs = [];

/*
 * Funktionen zum Setzen von Default-Regeln
 */
function setRealEmptyRules(){
rules= defaulstandardrules;

	insertrules();
	resetChat();
}	
 
function setTeachingRules(){
	
	rules = defaulteachingrules;
	insertrules();
	resetChat();
}
function setEmptyRules(){

	rules = defaultemptyrules;

	insertrules();
	resetChat();
}
function setStandardRules(){

	rules = defaulstandardrules;

	insertrules();
	resetChat();
}