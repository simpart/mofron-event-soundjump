const TapSound = require('mofron-event-tapsound');
const comutl = mofron.util.common;

/**
 * @file mofron-event-buttonsound/index.js
 * @brief click sound event for mofron
 * @license MIT
 */
module.exports = class extends TapSound {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('SoundJump');
            
            this.confmng().add('url', { type:'string' });
            
	    delete this.listener()[0];

            let tap_evt = (c1,c2,c3) => {
                try {
                    let mute_flg = localStorage.getItem('mute');
		    if (true !== mute_flg) {
                        c3.src().play();
                    }
                    /* page jump */
                    setTimeout(() => { window.location.href = c3.url(); }, 500);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            this.listener(tap_evt,this);
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    url (prm) {
        try {
            return this.confmng('url',prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    audio (prm) {
        try {
            return this.src(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
