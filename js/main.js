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

        text_to_encrypt = text_to_encrypt.replaceAll('a', 'ai');
        text_to_encrypt = text_to_encrypt.replaceAll('e', 'enter');
        text_to_encrypt = text_to_encrypt.replaceAll('i', 'imes');
        text_to_encrypt = text_to_encrypt.replaceAll('o', 'ober');
        text_to_encrypt = text_to_encrypt.replaceAll('u', 'ufat');

        this.encrypted_text = document.getElementById('text_area_result');
        this.encrypted_text.value = text_to_encrypt;

        return text_to_encrypt;
    }
}

function btn_blue_pressed() {
    console.log('Btn blue is pressed');
    let objectEncrypt = new Encrypt();
    objectEncrypt.encryptText();
}






