const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
  
    const greetings = ['Im good You little piece of love',
    'Doin good homeboy',
    'Leame alone Please'];

    const weather = [
        'O tempo esta bom',
        'Bora se matar'
    ]

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition() ;

recognition.onstart = function(){
    console.log('Voz foi ativada, use o microfone')
};

recognition.onresult = function(event){
   const current = event.resultIndex;

   const transcript = event.results[current][0].transcript;
   content.textContent = transcript;
   readOutLoud(transcript);
};

// adicionar a fala ao btn

btn.addEventListener('click',() => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Eu nao entendi' ; 
    if(message.includes('Como voce esta hoje')){
    const finalText = 
        greetings[Math.floor(Math.random()* greetings.length)];
        speech.text = finalText;    }
    
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
}