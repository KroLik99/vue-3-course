Vue.createApp({
        data() {
            return {
                name: "Isabelle",
                links: ['home', 'portfolio','contact me']
            };
        },
    }
).mount("header");
Vue.createApp({
    data(){
        return{
            posts: [
                {
                    id: 1,
                    title: "Why I learned vue",
                    body: "I'm baby chambray street art thundercats occupy four loko\n" +
                        "church-key disrupt. Shaman neutra bushwick chicharrones, tousled\n" +
                        "air plant lomo williamsburg. Listicle aesthetic whatever prism,\n" +
                        "ennui glossier asymmetrical scenester austin intelligentsia\n" +
                        "cronut raw denim umami mumblecore. Lo-fi meh austin, selfies\n" +
                        "hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore\n" +
                        "tumeric."
                },
                {
                    id: 2,
                    title: "Usind the Vue CDN",
                    body: "I'm baby chambray street art thundercats occupy four loko\n" +
                        "church-key disrupt. Shaman neutra bushwick chicharrones, tousled\n" +
                        "air plant lomo williamsburg. Listicle aesthetic whatever prism,\n" +
                        "ennui glossier asymmetrical scenester austin intelligentsia\n" +
                        "cronut raw denim umami mumblecore. Lo-fi meh austin, selfies\n" +
                        "hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore\n" +
                        "tumeric."
                },
                {
                    id: 3,
                    title: "How I mastered Vue",
                    body: "I'm baby chambray street art thundercats occupy four loko\n" +
                        "church-key disrupt. Shaman neutra bushwick chicharrones, tousled\n" +
                        "air plant lomo williamsburg. Listicle aesthetic whatever prism,\n" +
                        "ennui glossier asymmetrical scenester austin intelligentsia\n" +
                        "cronut raw denim umami mumblecore. Lo-fi meh austin, selfies\n" +
                        "hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore\n" +
                        "tumeric."
                }
            ],
        };
    },
}).mount("#blog");
