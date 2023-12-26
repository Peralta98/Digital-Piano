document.addEventListener('DOMContentLoaded', function() {
    exibirAcordesMaiores(); // REMOVER DEPOIS
  });




// Mapeamento das teclas para as notas musicais com os caminhos dos arquivos de áudio
const noteSounds = {
    "C3": "audio/C3.wav",
    "CS3": "audio/CS3.wav",
    "D3": "audio/D3.wav",
    "DS3": "audio/DS3.wav",
    "E3": "audio/E3.wav",
    "F3": "audio/F3.wav",
    "FS3": "audio/FS3.wav",
    "G3": "audio/G3.wav",
    "GS3": "audio/GS3.wav",
    "A3": "audio/A3.wav",
    "AS3": "audio/AS3.wav",
    "B3": "audio/B3.wav",

    "C4": "audio/C4.wav",
    "CS4": "audio/CS4.wav",
    "D4": "audio/D4.wav",
    "DS4": "audio/DS4.wav",
    "E4": "audio/E4.wav",
    "F4": "audio/F4.wav",
    "FS4": "audio/FS4.wav",
    "G4": "audio/G4.wav",
    "GS4": "audio/GS4.wav",
    "A4": "audio/A4.wav",
    "AS4": "audio/AS4.wav",
    "B4": "audio/B4.wav",

    "C5": "audio/C5.wav",
    "CS5": "audio/CS5.wav",
    "D5": "audio/D5.wav",
    "DS5": "audio/DS5.wav",
    "E5": "audio/E5.wav",
    "F5": "audio/F5.wav",
    "FS5": "audio/FS5.wav",
    "G5": "audio/G5.wav",
    "GS5": "audio/GS5.wav",
    "A5": "audio/A5.wav",
    "AS5": "audio/AS5.wav",
    "B5": "audio/B5.wav",
    "C6": "audio/C6.wav"
  };
  
  // Adiciona evento de clique para cada tecla do piano
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('click', () => {
      const note = key.dataset.note;
      playSound(noteSounds[note]);
    });
  });
  
  // Função para reproduzir o som da nota selecionada
  function playSound(soundPath) {
    const audio = new Audio(soundPath);
    audio.play();
  }
  





  function exibirAcordesMaiores() {
    const acordesMaiores = ['C', 'C# / Db', 'D', 'D# / Eb', 'E', 'F', 'F# / Gb', 'G', 'G# / Ab', 'A', 'A# / Bb', 'B'];
  
    const acordesContainer = document.querySelector('.acordes-container');
    acordesContainer.innerHTML = '';
  
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add('acorde-row');
  
      for (let j = 0; j < 4; j++) {
        const index = i * 4 + j;
        if (index < acordesMaiores.length) {
          const divAcorde = document.createElement('div');
          divAcorde.classList.add('acorde');
          divAcorde.textContent = acordesMaiores[index];
  
          // Adiciona evento de clique para cada célula correspondente ao acorde maior
          divAcorde.addEventListener('click', function () {
            const acordeClicked = acordesMaiores[index];
            playChord(acordeClicked);
          });
  
          row.appendChild(divAcorde);
        }
      }
      acordesContainer.appendChild(row);
    }
  }
    
  function playChord(acorde) {
    const notes = {
      "C": ["C4", "E4", "G4"],
      "C# / Db": ["CS4", "F4", "GS4"],
      "D": ["D4", "FS4", "A4"],
      "D# / Eb": ["DS4", "G4", "AS4"],
      "E": ["E4", "GS4", "B4"],
      "F": ["F4", "A4", "C5"],
      "F# / Gb": ["FS4", "AS4", "CS5"],
      "G": ["G4", "B4", "D5"],
      "G# / Ab": ["GS4", "C5", "DS5"],
      "A": ["A4", "CS5", "E5"],
      "A# / Bb": ["AS4", "D5", "F5"],
      "B": ["B4", "DS5", "FS5"],
    };
  
    const keys = document.querySelectorAll('.key');
  
    Object.entries(notes).forEach(([acordeKey, noteArray]) => {
      if (acorde === acordeKey) {
        noteArray.forEach(note => {
          const audio = new Audio(`audio/${note}.wav`);
          audio.play().then(() => {
            // Encontra a tecla correspondente ao elemento de dataset.note
            const keyToHover = Array.from(keys).find(key => key.dataset.note === note);
            if (keyToHover) {
              // Adiciona a classe 'hover-effect' temporariamente à tecla correspondente
              keyToHover.classList.add('fake-hover');
              setTimeout(() => {
                keyToHover.classList.remove('fake-hover');
              }, 400); // Tempo para manter o efeito de hover após a reprodução do som
            }
          });
        });
      }
    });
}
  
  
  

  

  