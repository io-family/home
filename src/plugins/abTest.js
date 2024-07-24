export default {
    install(app) {
        const abSelect = () => {
            if (Math.round(Math.random())) {
                return "https://voiddominator.github.io/help.kevinhu.world/";
            } else {
                return "https://iokb.wuff.dog";
            }
        };

        const abTest = (class_name) => {
            document.querySelectorAll(`.${class_name}`)
                .forEach(function (link) {
                    link.href = abSelect();
                });
        };
        app.provide('abTest', abTest);
    }
};