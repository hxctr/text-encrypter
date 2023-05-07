class Encrypt {
    constructor(text_from_txt, encrypted_text) {
        this.text_from_txt = text_from_txt;
        this.encrypted_text = encrypted_text;
    }

    getTextFromtxt() {
        this.text = '';
        this.text = document.getElementById('input_for_enter_text').value;

        return this.text;
    }

    encryptText() {
        let text_to_encrypt = this.getTextFromtxt();

        document.getElementById("boy_img").style.display = "none";
        document.getElementById("no_message_found_img").style.display = "none";
        document.getElementById('btn-copiar').style.display = "inline"


        text_to_encrypt = text_to_encrypt.split('');

        for (let i = 0; i < text_to_encrypt.length; i++) {
            if (text_to_encrypt[i] == 'a') {
                text_to_encrypt[i] = 'ai'
            } else if (text_to_encrypt[i] == 'e') {
                text_to_encrypt[i] = 'enter'
            } else if (text_to_encrypt[i] == 'i') {
                text_to_encrypt[i] = 'imes';
            } else if (text_to_encrypt[i] == 'o') {
                text_to_encrypt[i] = 'ober'
            } else if (text_to_encrypt[i] == 'u') {
                text_to_encrypt[i] = 'ufat';
            }

        }

        let newText = '';
        for (let j = 0; j < text_to_encrypt.length; j++) {
            newText += text_to_encrypt[j];

        }

        this.encrypted_text = document.getElementById('text_area_result');
        this.encrypted_text.value = newText;
    }
}

class Decrypt {
    constructor(text_from_txt, decrypted_text) {
        this.text_from_txt = text_from_txt;
        this.decrypted_text = decrypted_text;
    }

    getTextFromtxt() {
        this.text = '';
        this.text = document.getElementById('input_for_enter_text').value;

        return this.text;
    }

    decryptText() {
        let text_to_decrypt = this.getTextFromtxt();

        document.getElementById("boy_img").style.display = "none";
        document.getElementById("no_message_found_img").style.display = "none";
        document.getElementById('btn-copiar').style.display = "inline"

        text_to_decrypt = text_to_decrypt.replaceAll('ai', 'a');
        text_to_decrypt = text_to_decrypt.replaceAll('enter', 'e');
        text_to_decrypt = text_to_decrypt.replaceAll('imes', 'i');
        text_to_decrypt = text_to_decrypt.replaceAll('ober', 'o');
        text_to_decrypt = text_to_decrypt.replaceAll('ufat', 'u');

        this.decrypted_text = document.getElementById('text_area_result');
        this.decrypted_text.value = text_to_decrypt;
    }
}

function btn_blue_pressed() {
    console.log('Btn blue is pressed');
    let objectEncrypt = new Encrypt();
    objectEncrypt.encryptText();
}

function btn_white_pressed() {
    console.log('Btn white is pressed');
    let objectDecrypt = new Decrypt();
    objectDecrypt.decryptText();
}


function copyText() {
    let text_area_result = document.getElementById('text_area_result');
    text_area_result.select();
    document.execCommand('copy');



    const copyMessage = document.getElementById('copy-message');
    copyMessage.style.display = 'inline';

    setTimeout(function () {
        copyMessage.style.display = 'none';
    }, 2000);
}
