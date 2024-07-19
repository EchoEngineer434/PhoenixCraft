// ==UserScript==
// @name         Minecraft Buttons Overlay
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Minecraft PE overlay buttons, on a webpage.
// @author       EchoEngineer434 (AggieDev)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create and inject the styles for the buttons
    const style = document.createElement('style');
    style.textContent = `
        .mc-button {
            position: fixed;
            z-index: 1000;
            width: 50px;
            height: 50px;
            background-color: rgba(128, 128, 128, 0.5);
            border: 2px solid white;
            border-radius: 5px;
        }

        .mc-button:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            background-size: contain;
            background-repeat: no-repeat;
        }

        #mc-up:before {
            background-image: url('images/up.png');
        }

        #mc-down:before {
            background-image: url('images/down.png');
        }

        #mc-left:before {
            background-image: url('images/left.png');
        }

        #mc-right:before {
            background-image: url('images/right.png');
        }

        #mc-jump:before {
            background-image: url('images/jump.png');
        }

        #mc-attack:before {
            background-image: url('images/attack.png');
        }

        #mc-hand:before {
            background-image: url('images/hand.png'); /* Make sure this image exists */
        }
    `;
    document.head.appendChild(style);

    // Create and inject the buttons
    const buttons = [
        { id: 'mc-up', bottom: '100px', left: '50px' },
        { id: 'mc-down', bottom: '20px', left: '50px' },
        { id: 'mc-left', bottom: '60px', left: '0px' },
        { id: 'mc-right', bottom: '60px', left: '100px' },
        { id: 'mc-jump', bottom: '20px', right: '50px' },
        { id: 'mc-attack', bottom: '100px', right: '50px' },
        { id: 'mc-hand', bottom: '60px', right: '0px' }, // New "Hand" button
    ];

    buttons.forEach(button => {
        const btn = document.createElement('div');
        btn.id = button.id;
        btn.classList.add('mc-button');
        btn.style.bottom = button.bottom;
        btn.style.left = button.left;
        btn.style.right = button.right;
        document.body.appendChild(btn);
    });
})();
