function doDays(month){
    month = parseInt(month);
    var days = [31,28,31,30,31,30,31,31,30,31,30,31];
    var result = '';
    for(var i = 1; i <= days[month-1]; i++ ){
        result += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById('Day').innerHTML=result;
}
function Horoscope_ID(){
    var output = 0;
    var month = document.getElementById("Month").value;
    month = parseInt(month);
    var day = document.getElementById('Day').value;
    day = parseInt(day);
    if(month == 1 && day >= 20 && day <= 31 || month == 2 && day <= 18 ){
        output = 0
    }
    if(month == 2 && day >= 19 && day <= 28 || month == 3 && day <= 20 ){
        output = 1
    }
    if(month == 3 && day >= 21 && day <= 31 || month == 4 && day <= 19 ){
        output = 2
    }
    if(month == 4 && day >= 20 && day <= 30 || month == 5 && day <= 20 ){
        output = 3
    }
    if(month == 5 && day >= 21 && day <= 31 || month == 6 && day <= 20 ){
        output = 4
    }
    if(month == 6 && day >= 21 && day <= 30 || month == 7 && day <= 22 ){
        output = 5
    }
    if(month == 7 && day >= 23 && day <= 31 || month == 8 && day <= 22 ){
        output = 6
    }
    if(month == 8 && day >= 23 && day <= 31 || month == 9 && day <= 22 ){
        output = 7
    }
    if(month == 9 && day >= 23 && day <= 30 || month == 10 && day <= 22 ){
        output = 8
    }
    if(month == 10 && day >= 23 && day <= 31 || month == 11 && day <= 21 ){
        output = 9
    }
    if(month == 11 && day >= 22 && day <= 30 || month == 12 && day <= 21 ){
        output = 10
    }
    if(month == 12 && day >= 22 && day <= 31 || month == 1 && day <= 19 ){
        output = 11
    }
    document.getElementById("horoscope").innerHTML = Horoscope(output);

}
function Horoscope(output){
    var greeting = document.getElementById('name').value;
    var img = document.createElement("img");
    if(output == 0){
        document.getElementById('img').innerHTML = "<img src='img/Aquarius.jpg'>";
        return "Hi "+greeting+" you are an Aquarius: Your sensitive nature is attractive. People who come to you for advice and guidance aren't disappointed. You have a solid, practical perspective," +
            " yet you're also receptive and understanding. People with flashy ideas and a reckless way about them might try to sell you a pig in a poke. Don't be thrown off." +
            " Stay strong within yourself and confident about what you believe in."

    }if(output == 1){
        document.getElementById('img').innerHTML = "<img src='img/Pisces.jpg'>";
        return "Hi "+greeting+' you are a Pisces:You may have sniffles or a sore throat, possibly necessitating taking time off from work. This could be unwelcome, as it' +
            ' keeps you from going out on a date as well. Try to keep your mind occupied with activities that don\'t tire you physically. And take some vitamin C!'
    }if(output == 2){
        document.getElementById('img').innerHTML = "<img src='img/Aries.jpg'>";
        return "Hi "+greeting+' you are an Aries: Lack of contact with a close friend or romantic partner might find you feeling lonely and insecure, wondering if he or she has forgotten you or simply' +
            ' doesn\'t care to be around you anymore. This is more likely your insecurity than anything based in reality. Sometimes people are busy!' +
            ' Give your friend a call. Chances are the person will be very glad to hear from you.'
    }if(output == 3){
        document.getElementById('img').innerHTML = "<img src='img/Taurus.jpg'>";
        return "Hi "+greeting+' you are a Taurus: Responsibilities at home may weigh on your mind today and interfere with other obligations. This could cause some inner conflict, but you have a' +
            ' personal life and it\'s important to take care of these things, too. Upsets in your circle of friends could distract and stress you. Make an effort' +
            ' to balance it all and you\'ll make it through the day.'
    }if(output == 4){
        document.getElementById('img').innerHTML = "<img src='img/Gemini.jpg'>";
        return "Hi "+greeting+' you are a Gemini: Disappointing emails or calls could come your way today. Perhaps someone you were hoping to visit with won\'t be able to make it, or perhaps a friend' +
            ' had to turn down an invitation to a party. Don\'t let it spoil your mood. Things happen. Keep yourself busy with preparations and enjoy your day. Don\'t' +
            ' go to the opposite extreme and work too hard.'
    }if(output == 5){
        document.getElementById('img').innerHTML = "<img src='img/Cancer.jpg'>";
        return "Hi "+greeting+' you are a Cancer: You may feel worried about your financial situation today. You may have been expecting to receive some money that\'s now delayed. A temporary' +
            ' separation from a romantic partner could have you feeling a little blue. If you keep yourself busy and don\'t dwell on it, time will pass quickly until' +
            ' you\'re together again. In the evening, take some time to relax.'
    }if(output == 6){
        document.getElementById('img').innerHTML = "<img src='img/Leo.jpg'>";
        return "Hi "+greeting+' you are a Leo: An unexpected event might cause you to be temporarily separated from the special person in your life. Confusion surrounding the incident and your mate\'s' +
            ' role in it might plague you, and you might doubt your friend\'s motives. Money may be on your mind, and the need for it may have you brainstorming ways to' +
            ' increase your income. Don\'t make any decisions now.'
    }if(output == 7){
        document.getElementById('img').innerHTML = "<img src='img/Virgo.jpg'>";
        return "Hi "+greeting+' you are a Virgo: Mild cold symptoms could affect your ability to tend to your chores today. You\'re an active person, so this could affect your self-confidence and ability' +
            ' to do what you want to do. Upsets beyond your control within your circle of friends could also affect your concentration. Don\'t dwell on them. Dose yourself' +
            ' with juice and tea and get through the day.'
    }if(output == 8){
        document.getElementById('img').innerHTML = "<img src='img/Libra.jpg'>";
        return "Hi "+greeting+' you are a Libra: The special someone in your life might feel a little jealous of your friends now. Perhaps you\'ve had a number of invitations that only involve you and your pals.' +
            ' It might be a good idea to turn down one in favor of being with your partner. Goals and projects may be blocked temporarily, which is frustrating. Let them ride for now.'
    }if(output == 9){
        document.getElementById('img').innerHTML = "<img src='img/Scorpio.jpg'>";
        return "Hi "+greeting+' you are a Scorpio: You likely want to take the day off, perhaps to take care of an unfinished creative project you\'ve been working on for some time. But you aren\'t likely to get very' +
            ' far since disagreements within your friends keep your mind occupied and you may be upset. Despite it all, try to stay focused. That\'s the only way to get anything accomplished.'
    }if(output == 10){
        document.getElementById('img').innerHTML = "<img src='img/Sagittarius.jpg'>";
        return "Hi "+greeting+' you area a Sagittarius: You\'re thinking about friends and family members who live far away and wondering what they\'re doing. You could feel a little nostalgic, longing for times long past. Don\'t dwell' +
            ' on it. Call your friends. They\'ll be glad to hear from you and you\'ll feel more positive about the day. In the evening, give some attention to those you love who live nearby.'
    }if(output == 11){
        document.getElementById('img').innerHTML = "<img src='img/Capricorn.jpg'>";
        return "Hi "+greeting+" you are a Capricorn: Money matters might be tangled today. There could be a delay in receiving funds due you, which could prove frustrating but can be straightened out. This isn\'t a good day to make" +
            " investments, buy property, or seek a loan. The strain of dealing with this might cause a few doubts about your money management skills. Don\'t despair. This is temporary and probably" +
            " beyond your control."
    }
}
function reset() {
    document.getElementById('img').innerHTML = "";
    document.getElementById('name').value = '';
    document.getElementById("Day").innerHTML = '' ;
    document.getElementById('horoscope').innerHTML = '';
    doDays(1);
}
