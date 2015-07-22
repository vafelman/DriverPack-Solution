var StartPack = {
    html: function () {
        document.getElementById('loader').style.display = 'none';
        window.scrollTo(0, 0);
    },

    clickInstallAll: function () {
        // TODO
    },

    clickInstallCustom: function () {
        document.getElementById('Start').style.display = 'none';
        document.getElementById('DriverSoft').style.display = 'block';
        DriverPack.html();
    }
};
