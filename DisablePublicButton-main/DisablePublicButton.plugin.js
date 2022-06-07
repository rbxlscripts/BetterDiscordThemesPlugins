/**
 * @name DisablePublicButton
 * @version 0.0.1
 * @description Disable the public button on the sidebar.
 * @author mstudio45#5590
 * @authorId 586218413693730883
 * @source https://github.com/rbxlscripts/BetterDiscordThemesPlugins/tree/main/DisablePublicButton-main
 * @updateUrl https://raw.githubusercontent.com/rbxlscripts/BetterDiscordThemesPlugins/main/DisablePublicButton-main/DisablePublicButton.plugin.js
 */

module.exports = class DisablePublicButton {
    load() {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function loop() {
            await sleep(1000);
            var publicButton = document.getElementById('bd-pub-li');
            if (publicButton) {
                publicButton.remove();
                await sleep(1000);
                if (publicButton) {
                    publicButton.remove();
                }
                await sleep(1000);
                try { publicButton.remove(); } catch { }
            }
            loop();
        }
        BdApi.showToast('Public button disabled.', { type: 'success' });
        loop();
    }
    start() { 
	    BdApi.showToast('Public button disabled.', { type: 'success' });
    }
    stop() { }
};
