// const topLeft = document.querySelector('.top-left-panel')
// const topRight = document.querySelector('.top-right-panel')
// const bottomLeft = document.querySelector('.bottom-left-panel')
// const bottomRight = document.querySelector('.bottom-right-panel')



// const getRandomPanel = () => {
//     const panels = [
//         topLeft, topRight, bottomLeft, bottomRight
//     ];
//     return panels[parseInt(Math.random() * panels.lenght)]
// }
// const sequence = [
//     getRandomPanel()
    
// ];
// let sequenceToGuess=[...sequence];

// const flash = panel => {
//     return new Promise((resolve,refect) => {
//         panel.className += 'active';
//         setTimeout(() => {
//             panel.className = panel.className.replace('active',
//                 '');
//                 setTimeout(()=>{
//                     resolve();

//                 },250)
//             ;
//         }, 1000);
//     })
// };
// let canClick=false;

// const panelClicked = panelClicked =>{
//     if(!canClick)return;
//         const expectedPanel = sequenceToGuess.shift();
//     if(expectedPanel=== panelClicked){
//         if(sequenceToGuess.length===0){
//           sequence.push(getRandomPanel());
//           sequenceToGuess=[...sequence]
//           startFlashing()
//         }
//     } else{
//         alert('Game Over');
//     }
// };
// // };   function created for timeout and replacing the next with 'active' then going for the next color
// const startFlashing = async () =>
// { canClick=false;
//     for (const panel of sequence) {
//         await flash(panel);
//     }
//     canClick=true;

// };
// startFlashing()