/*
 * Festlegen der Globalen Variablen
 */
	var rules = new Array();
	//Festlegung des Modus
		//var modus = "praxis";//Hier werden die Regulären Ausdrücke die Javascript Standardmässig verwendet verwendet
		var modus = "wissenschaft";


/*
 * Umstellungen
 */
	var chatname = prompt("Bitte gib deinen Namen ein...", "JuniorDot");
	var botname = "InfoBot";

	function resetRules(){
		if(window.confirm("Willst du wirklich alle bisherigen Regeln löschen?")){
			setRealEmptyRules();
		}
	}

	function countNameDiv(n1, n2){
		var divCt = n2.length - n1.length;
		var erg="";
		for(var i=0; i<divCt; i++){
			erg += " ";
		}
		return erg;
	}
	
	function timestring(){
		var d = new Date();
		erg="";
		if(d.getHours()<10){
			erg+="0";
		}
		erg=d.getHours();
		erg+=":";
		if(d.getMinutes()<10){
			erg+="0";
		}
		erg+=d.getMinutes();

		return erg;
	}
	
	function toggle(){
		if(document.getElementById("toggle").checked){
			document.getElementById("chattools").style.width = '100%';
			document.getElementById("regelbox").style.display = 'none';
			document.getElementById("test").style.width = '50%';
			document.getElementById("resetButton").style.display = 'none';
			document.getElementById("maskL").style.display = 'inline';
			document.getElementById("maskR").style.display = 'inline';
			document.getElementById("maskRede").style.display = 'none';
			document.getElementById("maskGuck").style.display = 'none';
		}else{
			document.getElementById("chattools").style.width = '35%';
			document.getElementById("regelbox").style.display = 'block';
			document.getElementById("test").style.width = '100%';
			document.getElementById("resetButton").style.display = 'inline';
			document.getElementById("maskL").style.display = 'none';
			document.getElementById("maskR").style.display = 'none';
			document.getElementById("maskRede").style.display = 'inline';
			document.getElementById("maskGuck").style.display = 'inline';
		}
	}

/*
 * Funktionen zum Einfügen
 */
	/*
	 * Methode zum Einfügen von Regeln in das Bearbeitungsfeld
	 */
		function insertrules(){
			var first = true; //Marker für erste Regel
			var str = ""; //Speicher für Ausgabe
		//Ausgabe der NOKEY-Rules
			str += "{\n";
			str += "  greeting: \"" + rules[0].greeting + "\",\n";
			str += "  nokeyrules:\n  [\n";
			//Einfügen der Regeln
			for(var i=0; i < rules[0].nokeyrules.length; i++){
				//Füge ein Komma und einen Zeilenumbruch ein, falls es nicht die erste Regel ist.
				if(first){
					first = false;
				}else{
					str += ",\n"
				}
				str += "    {\n";
				str += "      regexp: \"" + rules[0].nokeyrules[i].regexp + "\"\,\n";//Ausgabe des Regulären Ausdrucks
				str += "      answers:\n      [\n        \"";
				str += rules[0].nokeyrules[i].answers.join("\",\n        \"");//Ausgabe der Antworten
				str += "\"\n      ]\n";
				str += "    }";
			}
			str += "\n  ]\n";
			str += "}";
		//Ausgabe aller anderen Regeln
			for(var i=1; i < rules.length; i++){
				first = true;
				str += ",\n{\n";
				str += "  keywords: [\"" + rules[i].keywords.join("\",\"") + "\"],\n";//Ausgabe der Keywords
				//Ausgabe der Priorität, falls vorhanden
				if(rules[i].priority !== 'undefined'){
					str += "  priority: " + rules[i].priority + ",\n";
				}
				str += "  rules:\n  [\n";
				for(var j=0; j < rules[i].rules.length; j++){
					//Füge ein Komma und einen Zeilenumbruch ein, falls es nicht die erste Regel ist.
					if(first){
						first = false;
					}else{
						str += ",\n"
					}
					str += "    {\n";
					str += "      regexp: \"" + rules[i].rules[j].regexp + "\",\n";//Ausgabe des Regulären Ausdrucks
					str += "      answers:\n      [\n        \"";
					str += rules[i].rules[j].answers.join("\",\n        \"");//Ausgabe der Antworten
					str += "\"\n      ]\n";
					str += "    }";
				}
				str += "\n  ]\n";
				str += "}";
			}
			document.getElementById("rules").value = str; //Einfügen des erstellten Strings ins Bearbeitungsfeld
		}
/*
 * Liest die Regeln erneut ein, schickt sie durch den Parser und Setzt den Chat zurück.
 */
function resetChat(){
	readRules();//Einlesen der Regeln
	if(modus=="wissenschaft"){
		parseRegEx();//Falls Wissenschaftliche Schreibweise Parse die Regeln selbst. Gibt Fehler-Alert aus, falls Fehler.
	}
	if(typeof rules[0].name !== 'undefined'){
		botname = rules[0].name;
	}
	document.getElementById("testchat").value = "(" + timestring() + ") " + botname + countNameDiv(botname, chatname) +": " + (rules[0].greeting).toUpperCase();//Gibt die Begrüßung als erste Nachricht im Chat aus
}

/*
 * Parser für die Regeln
 * 
 * Prüft die Regeln auf Syntaktische Korrektheit und gibt ggf. eine Warnmeldung aus.
 * Ansonsten ruft er die Funktion zur Erstellung der Zustände auf
 */
function parseRegEx(){
	//NoKeyRules
	for(var i=0; i < rules[0].nokeyrules.length; i++){
		if(typeof rules[0].nokeyrules[i].regexp === 'undefined' ){
			rules[0].nokeyrules[i].regexp = ".*";
		}
		if(checkRegEx(rules[0].nokeyrules[i].regexp)){ //Fals der Reguläre Ausdruck korrekt ist
			rules[0].nokeyrules[i].regexpauto = makeRegEx(rules[0].nokeyrules[i].regexp); //Parse ihn
		}else{
			//sonst melde Fehler
			alert("Regel Nr."+i+" der 'nokeyrules' ist fehlerhaft.");
		}
	}
	//Restliche Regeln
	for(var i=1; i < rules.length; i++){
		for(var j=0; j < rules[i].rules.length; j++){
			if(typeof rules[i].rules[j].regexp === 'undefined' ){
				rules[i].rules[j].regexp = ".*";
			}
			if(checkRegEx(rules[i].rules[j].regexp)){//Fals der Reguläre Ausdruck korrekt ist
				rules[i].rules[j].regexpauto = makeRegEx(rules[i].rules[j].regexp);//Parse ihn
			}else{
				//sonst melde Fehler
				alert("Regel Nr."+j+" im "+i+". Block ist fehlerhaft.");
			}
		}
	}
}

/*
 * Fügt leere Regel ans Ende zur weiteren Bearbeitung an
 */
function addEmptyRule(){
	var str = document.getElementById("rules").value;
	str += ',\n';
	str += '{\n';
	str += '  keywords: ["Key1","Key2"],\n';
	str += '  rules: [\n';
	str += '    {\n';
	str += '      regexp: ".*",\n';
	str += '      answers: [\n';
	str += '        "Antwort1",\n';
	str += '        "Antwort2"\n';
	str += '      ]\n';
	str += '    }\n';
	str += '  ]\n';
	str += '}';
	document.getElementById("rules").value = str;
}
/*
 * Methode zum Einlesen der Regeln
 */
function readRules(){
	var str = "rules = new Array(" + document.getElementById("rules").value + ")";//Textfeld ist in JSON-Format, daher einfach in Variable einfügbar
	eval(str);//Überführung in Variable
}

/*
 * Ersetzt Wörter im Antwortstring gemäß Substitutionsregeln
 * 
 * @return Gibt String zurück, in dem alle Wörter ausgetauscht wurden.
 */
function substString(str){
	return str;//Gebe String zurück, in dem alle Wörter ausgetauscht wurden.
}

/*
 * Führt die Regeln auf einem gegebenen String aus
 */
function ruleString(str){
	for(var i = 1; i < rules.length; i++){
		for(var j = 0; j < rules[i].keywords.length; j++){
			if(str.indexOf(rules[i].keywords[j].toUpperCase()) !== -1){
				for(var k = 0; k < rules[i].rules.length; k++){
					var match = null;
					if(modus=="wissenschaft"){
						match = rules[i].rules[k].regexpauto.evaluate(str, [0]);
						if(match.length==0){
							match = null;
						}
					}else{
						eval("var regex = /" + rules[i].rules[k].regexp.replace(/%K%/ig, rules[i].keywords[j]) + "/ig;");
						match = rules[i].rules[k].regex.exec(str);
					}
					if(match != null){
						var ant = rules[i].rules[k].answers[Math.floor((Math.random() * rules[i].rules[k].answers.length))];
						ant = ant.replace(/%K%/ig, rules[i].keywords[j]);
						for(var l = 0; l<match.length; l++){
							while(ant.indexOf("%"+l+"%") !== -1){
								ant = ant.replace("%"+l+"%", match[l]);
							}
						}
						return ant.toUpperCase();
					}
				}
			}
		}
	}
	for(var k = 0; k < rules[0].nokeyrules.length; k++){
		eval("var regex = /" + rules[0].nokeyrules[k].regexp + "/ig;");
		var match = null;
		if(modus=="wissenschaft"){
			match = rules[0].nokeyrules[k].regexpauto.evaluate(str, [0]);
			if(match.length==0){
				match = null;
			}
		}else{
			match = rules[0].nokeyrules[k].regex.exec(str);
		}
		if(match != null){
			var ant = rules[0].nokeyrules[k].answers[Math.floor((Math.random() * rules[0].nokeyrules[k].answers.length))];
			for(var l = 0; l<match.length; l++){
				while(ant.indexOf("%"+l+"%") !== -1){
					ant = ant.replace("%"+l+"%", match[l]);
				}
			}
			return ant.toUpperCase();
		}
	}
	return "...";
}

/*
 * Überprüft die Regeln auf Syntaktische Korrektheit
 * 
 * Prüft Ausdruck über Kellerautomaten
 * Zustand 0: Startzustand
 * Zustand 1: Übergangszustand für unmaskierte Zeichen
 * Zustand 2: 
 */
function checkRegEx(expression){
	var zst = 0;//Speicher für Zustand
	var stack = "";//Speicher für Keller
	var az = '';//Speicher für aktuelles Zeichen
	for(var i=0; i<expression.length; i++){
		az = expression.charAt(i);//Nimm das aktuelle Zeichen
		if(zst == 0){
			if(az == '/'){
				zst = 1;
			}else if(az == '(' || az == '{'){
				stack += az;
			}else if(az == '}'){
				if(stack.length == 0 || stack.charAt(stack.length-1) != '{'){
					return false;
				}else{
					stack = stack.substring(0, stack.length-1);
				}
				zst = 2;
			}else if(az == ')'){
				if(stack.length == 0 || stack.charAt(stack.length-1) != '('){
					return false;
				}else{
					stack = stack.substring(0, stack.length-1);
				}
				zst = 2;
			}else if(az == '+' || az == '*'){
				return false;
			}else{
				zst = 2;
			}
		}else if(zst == 1){
			//Egal was ist, geh weiter
			zst = 2;
		}else if(zst == 2){
			if(az == '\\'){
				zst = 1;
			}else if(az == '(' || az == '{'){
				zst = 0;
				stack += az;
			}else if(az == '}'){
				if(stack.length == 0 || stack.charAt(stack.length-1) != '{'){
					return false;
				}else{
					stack = stack.substring(0, stack.length-1);
				}
				zst = 2;
			}else if(az == ')'){
				if(stack.length == 0 || stack.charAt(stack.length-1) != '('){
					return false;
				}else{
					stack = stack.substring(0, stack.length-1);
				}
				zst = 2;
			}else if(az == '+' || az == '*'){
				zst = 0;
			}else{
				zst = 2;
			}
		}
	}
	//Wenn \ zum Demaskieren am Ende steht ->Fehler
	if(zst == 1){
		return false
	}
	//Wenn nicht alle Klammern geschlossen wurden ->Fehler
	if(zst == 0 && (az == '(' || az == '{')){
		return false
	}
	//Wenn nicht alle Klammern geschlossen wurden ->Fehler
	if(stack.length != 0){
		return false
	}
	return true;
}

/*
 * Filtert die Zeichen raus, welche keine Steuerzeichen sind.
 * 
 * @param  val Ein String, welcher in einen Regulären Ausdruck umgewandelt werden soll
 * @return Eine Array aus Steuerzeichen und Zeichenketten in concat-Zuständen
 */
function prepare(val){
	var erg = new Array(); //Speichert den Zustandsbaum
	var zst = ""; //Speichert die gelesenen Zeichen
	val = val.toUpperCase(); //Zur Vereinheitlichung

	for(var i=0;i<val.length;i++){
		var zeichen = val.charAt(i);
		if(zeichen == "\\"){
			//Zeichen in Escapesequenz werden einfach übernommen
			zst += zeichen;
			i++;
			zst += val.charAt(i);
		}else if(zeichen == "{" || zeichen == "}" || zeichen == "(" || zeichen == ")" || zeichen == "+"  || zeichen == "*"){
			//Wenn ein Steuerzeichen kommt, und schon etwas gespeichert wurde
			if(zst!=""){
				var zwischenstand = null;
				if(zeichen == "*"){
					//Wenn es der Sternoperator, oder das Fragzeichen ist, Ordne ihm nur den Vorherigen Wert zu
					zwischenstand = new Zustand('concat');
					zwischenstand.value = zst.charAt(zst.length-1);
					zst=zst.substring(0,zst.length-1);
				}
				if(zst!=""){
					var zustand = new Zustand('concat');
					zustand.value = zst;
					erg.push(zustand);
					zst="";
				}
				if(zwischenstand != null){
					erg.push(zwischenstand);
				}
			}
			erg.push(zeichen);
		}else{
			zst += zeichen;
		}
	}
	if(zst!=""){
		var zustand = new Zustand('concat');
		zustand.value = zst;
		erg.push(zustand);
	}
	return erg;
}
function makeRegEx(val){
	var zstd = prepare(val);
	while(zstd.length != 1){
		var tmp = new Array();
/*Kleensche + Optional*/
		var found = true;
		while(found){
			tmp = new Array();
			found = false;
			tmp.push(zstd[0]);
			for(var i=1; i<zstd.length; i++){
				if((zstd[i] == "*") && (zstd[i-1] instanceof Zustand)){
					var zustand = new Zustand(zstd[i]);
					zustand.value = tmp.pop();
					tmp.push(zustand);
					found = true;
				}else{
					tmp.push(zstd[i]);
				}
			}
			zstd = tmp;
		}
/*Concatenation*/
		found = true;
		while(found){
			tmp = new Array();
			found = false;
			tmp.push(zstd[0]);
			for(var i=1; i<zstd.length; i++){
				if((zstd[i] instanceof Zustand) && (zstd[i-1] instanceof Zustand) && !found){
					var zustand = new Zustand('.');
					zustand.value = tmp.pop();
					zustand.value2 = zstd[i];
					tmp.push(zustand);
					found = true;
				}else{
					tmp.push(zstd[i]);
				}
			}
			zstd = tmp;
		}
/*Oder*/
		found = true;
		while(found){
			tmp = new Array();
			found = false;
			tmp.push(zstd[0]);
			for(var i=1; i<zstd.length; i++){
				if(zstd[i] == "+" && (zstd[i+1] instanceof Zustand) && (zstd[i-1] instanceof Zustand) && !found){
					var zustand = new Zustand('+');
					zustand.value = tmp.pop();
					zustand.value2 = zstd[i+1];
					i++;
					tmp.push(zustand);
					found = true;
				}else{
					tmp.push(zstd[i]);
				}
			}
			zstd = tmp;
		}
/*Klammern*/
		found = true;
		while(found){
			tmp = new Array();
			found = false;
			tmp.push(zstd[0]);
			for(var i=1; i<zstd.length; i++){
				if((zstd[i] instanceof Zustand) && zstd[i-1] == "(" && zstd[i+1] == ")"){
					tmp.pop();
					tmp.push(zstd[i]);
					i++;
					found = true;
				}else{
					tmp.push(zstd[i]);
				}
			}
			zstd = tmp;
		}
/*Klammern mit Speichern*/
		found = true;
		while(found){
			tmp = new Array();
			found = false;
			tmp.push(zstd[0]);
			for(var i=1; i<zstd.length; i++){
				if((zstd[i] instanceof Zustand) && zstd[i-1] == "{" && zstd[i+1] == "}"){
					tmp.pop();
					var zustand = new Zustand('{');
					zustand.value = zstd[i];
					i++;
					tmp.push(zustand);
					found = true;
				}else{
					tmp.push(zstd[i]);
				}
			}
			zstd = tmp;
		}
	}
	return zstd[0];
}

/*
 * Hilfsfunktion zur Sortierung von Indexmengen
 */
function sortUnique(arr){
	var erg = new Array();//Initialisierung des Arrays
	if(arr.length!=0){//Wenn Daten vorhanden sind
		arr.sort(function(a, b){return a-b});//Sortiere sie einfach der größe nach
		var akt = arr[0];//Speichere den ersten Wert als aktuellen...
		erg.push(akt);//...und speichere ihn im Ergebnissarray
		for(var i=1; i<arr.length; i++){//Für alle Indizes...
			if(akt != arr[i]){//...überprüfe, ob dieser Wert neu ist...
				akt = arr[i];//...dann merk ihn dir...
				erg.push(akt);//... und speichere ihn.
			}
		}
	}
	return erg;
}


/*
 * Hilfsfunktion zum Vergleich zweier Arrays
 */
function arrayEqual(arr1, arr2){
	if(arr1.length != arr2.length){
		return false; //Falls ihr Länge unterschiedlich ist können sie nicht gleich sein.
	}
	for(var i=0; i<arr1.length; i++){
		if(arr1[i] != arr2[i]){
			return false;//Falls sich zwei Werte an der selben Position voneinander unterscheiden, sind sie auch nicht gleich
		}
	}
	return true;//Sonst sind sie gleich
}

/*
 * Klasse zur Verwaltung der einzelnen Elemente des Ausdrucks
 *
 * @param type Typ des Zustands. Mögliche Werte: 'concat', '*', '+', '.', '?', '{' 
 * @return Objekt vom Typ Zustand
 */
function Zustand(type)
{
	this.typ = type;
	this.value = '';
	this.value2 = '';
	/*
	 * Methode zur Auswertung eines Ausdrucks
	 *
	 * @param val Ausdruck auf dem gearbeitet wird
	 * @param indizes Menge der Indizes von denen gestartet werden soll 
	 * 
	 * @return Indexmenge, an diesen Stellen könnte sich der Parser nach der Auswertung befinden.
	 */
	this.evaluate = function (val, indizes) {
		var erg = new Array(); //Initialisierung des Arrays für das Endergebnis
		if(indizes.length==0){ return erg;} //Falls keine Inidzes vorhanden kann auch kein Ergebnis durchlaufen werden
		if(this.typ=='concat'){
			for(var i=0;i<indizes.length;i++){
				var test = true;
				if((indizes[i]+this.value.length)<=val.length){
					var counter = 0;
					for(var j=0;j<this.value.length;j++){
						var char = val.charAt(indizes[i]+counter);
						if(this.value.charAt(j) == "."){
						}else if(this.value.charAt(j) == "\\"){
							/*
							 *	\e -> Epsilon
							 *	\d -> zahl
							 *	\a -> buchstabe
							 *	\w -> Whitespace
							 */
							j++;
							char = val.charAt(indizes[i]+counter+1);
							if(this.value.charAt(j) == "E"){
								counter--;
							}else if(this.value.charAt(j) == "D" && char!="0" && char!="1" && char!="2" && char!="3" && char!="4" && char!="5" && char!="6" && char!="7" && char!="8" && char!="9"){
								test = false;
								break;
							}else if(this.value.charAt(j) == "A" && char!="A" && char!="B" && char!="C" && char!="D" && char!="E" && char!="F" && char!="G" && char!="H" && char!="I" && char!="J" && char!="K" && char!="L" && char!="M" && char!="N" && char!="O" && char!="P" && char!="Q" && char!="R" && char!="S" && char!="T" && char!="U" && char!="V" && char!="W" && char!="X" && char!="Y" && char!="Z" && char!="Ä" && char!="Ü" && char!="Ö" && char!="ß" && char!="-" && char!="_"){
								test = false;
								break;
							}else if(this.value.charAt(j) == "W" && char!=" " && char!="\n" && char!="\r"){
								test = false;
								break;
							}else if(this.value.charAt(j) == "S" && char!="." && char!="," && char!=";" && char!=":" && char!="-" && char!="?" && char!="\"" && char!="'"){
								test = false;
								break;
							}else if(char != this.value.charAt(j)){
								test = false;
								break;
							}
						}else if(char != this.value.charAt(j)){
							test = false;
							break;
						}
						counter++;
					}
				}else{
					test = false;
				}
				if(test){
					erg.push(indizes[i]+this.value.length);
				}
			}
		}else if(this.typ=='*'){
			erg = sortUnique(indizes);
			var old = new Array();
			while(!arrayEqual(old, erg)){
				old = erg;
				erg = erg.concat(this.value.evaluate(val,erg));
				erg = sortUnique(erg);
			}
			erg.push(indizes);
			erg = sortUnique(erg);
		}else if(this.typ=='+'){
			erg = this.value.evaluate(val,indizes).concat(this.value2.evaluate(val,indizes));
			erg = sortUnique(erg);
		}else if(this.typ=='.'){
			erg = this.value2.evaluate(val,this.value.evaluate(val,indizes));
			erg = sortUnique(erg);
		}else if(this.typ=='?'){
			erg = this.value.evaluate(val,indizes);
			erg.push(indizes);
			erg = sortUnique(erg);
		}else if(this.typ=='{'){
			this.value2 = new Array();
			for(var i=0; i<indizes.length; i++){
				var ind = this.value.evaluate(val,indizes[i]);
				this.value2.push([indizes[i], ind]);
//				erg = erg.concat(ind);
				erg = erg.push(ind);
			}
			erg = sortUnique(erg);
		}
		return erg;
	}
}

/*
 * Funktionen zur Nutzung des Chatbots
 */
	/*
	 * Lokales Chatten mit dem Chatbot
	 */
		function eliza(){
			var d = new Date();
			var nachricht = document.getElementById("testnachricht").value.toUpperCase();//Lies die Nachricht ein und wandle sie in Großbuchstaben um
			document.getElementById("testnachricht").value = "";//Lösche die Nachricht aus dem Eingabefenster
			document.getElementById("testchat").value = document.getElementById("testchat").value + "\n"  + "(" + timestring() + ") " + chatname + countNameDiv(chatname, botname) + ": " + nachricht ;//Ergänze die Nachricht im Chatfenster

			nachricht = ruleString(nachricht);//Wende die Regeln auf die Nachricht an, speichere die Antwort als neue Nachricht

			document.getElementById("testchat").value = document.getElementById("testchat").value + "\n"  + "(" + timestring() + ") " + botname + countNameDiv(botname, chatname) + ": " + nachricht ;//Ergänze die Nachricht im Chatfenster
			document.getElementById("testchat").scrollTop = document.getElementById("testchat").scrollHeight;
		}
/*
 * Speichern und laden
 */
	function save(){
		var txt = new Blob([document.getElementById("rules").value], {type:'text/plain'});

		var a = document.createElement("a");
		a.download = "Chatbotregeln.txt";
		a.innerHTML = "Download File";
		if (window.webkitURL != null){
			a.href = window.webkitURL.createObjectURL(txt);
		} else {
			a.href = window.URL.createObjectURL(txt);
			a.onclick = selfDestruction;
			a.style.display = "none";
			document.body.appendChild(a);
		}

		a.click();
	}
	function selfDestruction(){
		this.parentNode.removeChild(this);
	}
	function load(file){
		if(file.files && file.files[0]) {
			var reader = new FileReader();
            reader.onload = function (e) {
				document.getElementById("rules").value = e.target.result;
				resetChat();
            };
            reader.readAsText(file.files[0]);
        }
	}
