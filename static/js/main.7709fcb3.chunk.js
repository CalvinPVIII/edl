(this.webpackJsonpedlv2=this.webpackJsonpedlv2||[]).push([[0],[,,,,,,,,,,function(e,n,a){e.exports=a.p+"static/media/sandandsagefront.551fa853.PNG"},function(e,n,a){e.exports=a.p+"static/media/reddingfront.996c6c1e.jpg"},,,,,,,,,,function(e,n,a){e.exports=a.p+"static/media/profile.11178dfb.jpg"},function(e,n,a){e.exports=a.p+"static/media/aboutImg.01eeaec5.jpg"},function(e,n,a){e.exports=a.p+"static/media/1.9abc0eb2.jpg"},function(e,n,a){e.exports=a.p+"static/media/2.15acba57.jpg"},function(e,n,a){e.exports=a.p+"static/media/3.55f63a3b.jpg"},function(e,n,a){e.exports=a.p+"static/media/4.c83179f2.jpg"},function(e,n,a){e.exports=a.p+"static/media/5.cc1bbc67.jpg"},function(e,n,a){e.exports=a.p+"static/media/1.7d917aee.jpg"},function(e,n,a){e.exports=a.p+"static/media/2.0f4769f3.jpg"},function(e,n,a){e.exports=a.p+"static/media/3.527d257f.jpg"},,,,,function(e,n,a){e.exports=a(49)},,,,,function(e,n,a){},function(e,n,a){},,,,,,,,function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(18),i=a.n(r),l=(a(40),a(41),a(7)),s=a(1);var c=function(){var e,n,a,t,r=Object(l.f)().pathname;return e="/books"===r?o.a.createElement(s.b,{to:"/books"},o.a.createElement("h4",{className:"currentPath"},"Books")):o.a.createElement(s.b,{to:"/books"},o.a.createElement("h4",null,"Books")),n="/about"===r?o.a.createElement(s.b,{to:"/about"},o.a.createElement("h4",{className:"currentPath"},"About")):o.a.createElement(s.b,{to:"/about"},o.a.createElement("h4",null,"About")),t="/gallery"===r?o.a.createElement(s.b,{to:"/gallery"},o.a.createElement("h4",{className:"currentPath"},"Gallery")):o.a.createElement(s.b,{to:"/gallery"},o.a.createElement("h4",null,"Gallery")),a="/contact"===r?o.a.createElement(s.b,{to:"/contact"},o.a.createElement("h4",{className:"currentPath"},"Contact")):o.a.createElement(s.b,{to:"/contact"},o.a.createElement("h4",null,"Contact")),o.a.createElement("div",{className:"navbarWrap"},o.a.createElement("div",{className:"navbarLeftSide"},e,n),o.a.createElement("div",{className:"navbarMiddle"},o.a.createElement(s.b,{to:"/"},o.a.createElement("h2",{className:"title"},"Ellie Derrick Lewis"))),o.a.createElement("div",{className:"navbarRightSide"},t,a),o.a.createElement("style",{jsx:!0},"\n            .navbarWrap{\n                display: flex;\n                justify-content: space-around;\n            }\n\n            .navbarLeftSide, .navbarMiddle, .navbarRightSide{\n                display: flex;\n                justify-content: space-between;\n            }\n            .navbarMiddle {\n                text-align: center;\n            }\n            h4 {\n                padding: 2vh;\n            }\n\n            .title{\n                color: black;\n            }\n\n            a, a:visited {\n                text-decoration: none;\n                color: grey;\n            }\n\n            a:hover{\n                color: black;\n            }\n\n            .currentPath {\n                color: black;\n            }\n          "))},m=a(3),d=a.n(m);var h=function(e){var n,a,t;return e.purchaseLink&&(n=o.a.createElement("a",{href:e.purchaseLink,target:"_blank",className:"mainPurchaseButton"},"Purchase")),e.amazonLink&&(a=o.a.createElement("a",{href:e.amazonLink,target:"_blank",className:"amazonPurchaseButton"},"Amazon")),e.barnesAndNobleLink&&(t=o.a.createElement("a",{href:e.barnesAndNobleLink,target:"_blank",className:"barnesAndNoblePurchaseButton"},"Barnes and Noble ")),o.a.createElement("div",{className:""},o.a.createElement("div",{className:"storeLinks"},n,t,a),o.a.createElement("style",{jsx:!0},"\n          .storeLinks{\n            display: flex;\n            flex-direction: column;\n          }\n\n          .mainPurchaseButton{\n            border: 2px solid #00bac7;\n            width: 200px;\n            border-radius: 300px;\n            text-align: center;\n            padding: 20px;\n            color: #00bac7;\n            margin-top: 3%;\n            font-weight: bold;\n          }\n          .mainPurchaseButton:visited{\n            color: #00bac7;\n          }\n\n          .mainPurchaseButton:hover{\n              color: white;\n              background-color: #00bac7\n          }\n\n          .amazonPurchaseButton{\n            border: 2px solid black;\n            width: 100px;\n            border-radius: 300px;\n            text-align: center;\n            padding: 13px 26px;\n            color: #00bac7;\n            margin-top: 1%;\n            font-weight: bold;\n            font-size: 14px;\n            color:black;\n            margin-top: 3vh;\n          }\n\n          .barnesAndNoblePurchaseButton{\n            border: 2px solid black;\n            width: 125px;\n            border-radius: 300px;\n            text-align: center;\n            padding: 13px 26px;\n            color: #00bac7;\n            margin-top: 1%;\n            font-weight: bold;\n            font-size: 14px;\n            color:black;\n            margin-top: 3vh;\n          }\n\n          .barnesAndNoblePurchaseButton:hover, .amazonPurchaseButton:hover{\n              background-color: black;\n              color: white;\n          }\n\n        "))};var p=function(e){var n=[o.a.createElement(o.a.Fragment,null,o.a.createElement(s.b,{to:"/books"},o.a.createElement("p",{className:"book"},"All")))];return console.log(e),e.bookList.forEach((function(a){a===e.currentBook?n.push(o.a.createElement(s.b,{to:"/".concat(a.split(" ").join(""))},o.a.createElement("p",{className:"currentBook"},a))):n.push(o.a.createElement(s.b,{to:"/".concat(a.split(" ").join(""))},o.a.createElement("p",{className:"book"},a)))})),o.a.createElement("div",{className:"footerWrap"},o.a.createElement("div",{className:"footerList"},n,o.a.createElement("style",{jsx:!0},"\n            .footerList{\n                display: flex;\n                flex-flow: row wrap;\n                justify-content: space-between;\n                color: grey;\n                font-size: 30px;\n                width: 40vw;\n                \n            }\n            \n            .book{\n                \n            }\n            \n            .currentBook{\n                color: black;\n                \n            }\n\n            .footerWrap{\n                width: 40vw;\n                display: block;\n                margin-left: auto;\n                margin-right: auto;\n            }\n            ")))};var u=function(e){return o.a.createElement("div",{className:""},o.a.createElement("div",{className:"header"},o.a.createElement(d.a,{top:1e3},o.a.createElement("h1",{className:"bookTitle"},e.fullTitle)),o.a.createElement("p",{className:"description"},e.description)),o.a.createElement(d.a,{bottom:1e3},o.a.createElement("img",{src:e.image,className:"bookPic"}),o.a.createElement("div",{className:"quoteBlock"},o.a.createElement("p",{className:"excerpt"},'"',e.excerpt,'"'),o.a.createElement("p",{className:"quotation"},"- Excerpt from ",e.title)),o.a.createElement("div",{className:"info"},o.a.createElement("p",{className:"infoTitle"},e.title),o.a.createElement("p",{className:"infoPublished"},e.published),o.a.createElement(h,{purchaseLink:e.purchaseLink,amazonLink:e.amazonLink,barnesAndNobleLink:e.barnesAndNobleLink}))),o.a.createElement(p,{bookList:e.bookList,currentBook:e.title}),o.a.createElement("style",{jsx:!0},"\n      .header{\n        text-align: center;\n        display: flex; \n        flex-flow: column wrap;\n      }\n\n      .bookTitle{\n        font-size: 60px;\n      }\n\n      .description{\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        width: 60%;    \n        line-height: 4vh;\n        font-size: 20px;\n        color: grey;\n        animation: fadeIn 3s;\n      }\n\n      @keyframes fadeIn{\n        0% {opacity: 0%;}\n        100% {opacity: 100%}\n      }\n      \n      .bookPic{\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 5%;\n        width: 419px;\n        height: 594px;\n      }\n\n      .quoteBlock{\n        display:flex;\n        flex-flow: column wrap;\n        margin-left: auto;\n        margin-right: auto;\n      }\n\n      .excerpt{\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        width: 80%;    \n        line-height: 4vh;\n        font-size: 25px;\n      }\n\n      .quotation{\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        color: grey;\n      }\n\n      .info{\n        margin-left: 10%;\n        margin-bottom: 10%;\n      }\n\n      .infoTitle{\n        font-size: 20px;\n      }\n    "))},b=a(10),g=a.n(b),f=a(11),k=a.n(f);var w=function(e){return o.a.createElement("div",{className:"bookWrap"},o.a.createElement(d.a,{bottom:!0,duration:2e3},o.a.createElement(s.b,{to:e.link},o.a.createElement("img",{className:"bookCover",src:e.cover.sandAndSage||e.cover.redding})),o.a.createElement("div",{className:"infoSection"},o.a.createElement("h2",{className:"title"},e.title),o.a.createElement("h3",{className:"published"},e.published),o.a.createElement("p",{className:"description"},e.description),o.a.createElement(h,{purchaseLink:e.purchaseLink,amazonLink:e.amazonLink,barnesAndNobleLink:e.barnesAndNobleLink})),o.a.createElement("style",{jsx:!0},"\n          .bookWrap{\n            margin: 10%;\n            display: flex;\n            flex-flow: row wrap;\n          }\n\n          .infoSection{\n            margin-left: 5%;\n            width: 700px;\n          }\n\n          .bookCover{\n            width: 419px;\n            height: 594px;\n          }\n        ")))};var E=function(){var e=[{title:"Sand and Sagebrush",cover:{sandAndSage:g.a},published:"July 26, 2019",description:"In 1914, a young married couple leaves the lush Willamette Valley to participate in the last land give-away in the US. The newspaper headlines and tales of success lead them to the harsh desert valley of southern Oregon.",link:"/sandandsagebrush",purchaseLink:"https://www.liferichpublishing.com/Bookstore/BookDetail.aspx?BookId=SKU-001239008",amazonLink:"https://www.amazon.com/dp/1489724249/ref=sr_1_1?keywords=sand+and+sagebrush+a+desert+journey&qid=1564273412&s=gateway&sr=8-1",barnesAndNobleLink:"https://www.barnesandnoble.com/w/sand-and-sagebrush-ellie-derrick-lewis/1132694269?ean=9781489724243"},{title:"Redding Writer",cover:{redding:k.a},published:!1,description:"A young couple from Sacramento in the 1950's decide to move to a ranch in Shasta County near Redding, California. She sees it as a chance to peruse her dreams to be a writer, and he wants to be a rancher. They are unprepared for the changes this will make in their lives.",link:"/reddingwriter",purchaseLink:!1,amazonLink:!1,barnesAndNobleLink:!1}];return o.a.createElement("div",{className:""},o.a.createElement(d.a,{top:!0,duration:1e3},o.a.createElement("h1",{className:"header"},"Books")),o.a.createElement("div",{className:"bookList"},e.map((function(e,n){return o.a.createElement(w,{title:e.title,cover:e.cover,published:e.published,description:e.description,link:e.link,purchaseLink:e.purchaseLink,amazonLink:e.amazonLink,barnesAndNobleLink:e.barnesAndNobleLink})}))),o.a.createElement("style",{jsx:!0},"\n            .header {\n              text-align: center;\n              font-size: 60px;\n              margin-top: 5%;\n            }\n          "))},x=a(21),v=a.n(x);var y=function(){return o.a.createElement("div",{className:""},o.a.createElement(d.a,{top:!0,duration:1e3},o.a.createElement("h1",{className:"homeTitle"},"Official Website for Oregon Author"),o.a.createElement("h1",{className:"homeTitle"},"Ellie Derrick Lewis")),o.a.createElement("style",{jsx:!0},"\n            .homeTitle{\n                text-align: center;\n                font-size: 6vh;\n        "),o.a.createElement("div",{className:"bookSection"},o.a.createElement(s.b,{to:"/sandandsagebrush"},o.a.createElement("div",{className:"bookImage"},o.a.createElement("img",{className:"book",src:g.a}))),o.a.createElement(s.b,{to:"/reddingwriter"},o.a.createElement("div",{className:"bookImage"},o.a.createElement("img",{className:"book",src:k.a})))),o.a.createElement("style",{jsx:!0},"\n            .bookSection{\n                display: flex;\n                flex-flow: row wrap;\n                justify-content: center;\n                min-width: 350px;\n                animation: fadeIn 2s;\n            }\n\n            @keyframes fadeIn{\n                0% {opacity: 0%;}\n                100% {opacity: 100%}\n           }\n            .bookImage{\n                height: 550px;\n                width: 350px;\n                margin: 10vw;\n                background-color: black\n                position: absolute;\n                z-index: -1;\n                box-shadow: 5px 10px;\n            }\n            .book{\n                height: 550px;\n                width: 350px;\n            }\n            .book:hover{\n                opacity: 0.6;\n                border: 2px solid black;\n            }\n            .bookTitle{\n                font-size: 55px;\n                display: flex;\n                justify-content: center;\n                color: white;\n                text-align: center;\n                width: 350px;\n                position: relative;\n                z-index: 1;\n                margin-top: -90%;\n                display: none;\n            }\n            \n            \n        "),o.a.createElement(d.a,{top:!0,duration:1e3},o.a.createElement(s.b,{to:"/about"},o.a.createElement("div",{className:"profile"},o.a.createElement("img",{className:"profileImg",src:v.a}),o.a.createElement("span",{className:"aboutMe"},"About Me "))),o.a.createElement("style",{jsx:!0},"\n            .profileImg{\n                display: block;\n                margin-left: auto;\n                margin-right: auto;\n                height: 600px;\n                width: 450px;\n                position: relative;\n                z-index: -1;\n                margin-bottom: 2%;\n            }\n            .aboutMe{\n                display: block;\n                margin-left: 55%;\n                margin-right: auto;\n                margin-top: -110%;\n                font-size: 40px;\n                background-color: teal;\n                width: 200px;\n                color: white;\n                text-align: centter;\n                padding: 20px;\n                \n            }\n            \n            .profile{\n                height: 600px;\n                width: 450px;\n                display: block;\n                margin-left: auto;\n                margin-right: auto;\n            }\n\n            .profile:hover{\n                border: 3px solid black;\n            }\n            \n\n\n\n        ")))},N=a(22),L=a.n(N);var j=function(){return o.a.createElement("div",{className:""},o.a.createElement(d.a,{bottom:!0,duration:1500},o.a.createElement("h1",{className:"header"},"About Me"),o.a.createElement("div",{className:"aboutSection"},o.a.createElement("img",{src:L.a,className:"aboutImg"}),o.a.createElement("p",{className:"aboutText"},"I have always had an excitement for writing. I don't know if it started during high school journalism class, or writing term papers. Before the days of texting, I liked writing letters as well. A Thesaurus was a book I always had near me. With an active life of working full time and raising my children, I had little time to even consider writing a book. The day finally came though, when I retired and could settle down at the computer.",o.a.createElement("br",null),"I grew up in Portland, Oregon, and have lived in the West most of my life. It seems only natural my stories would be about farming, ranching, rodeos, county fairs, and homesteading. I like that type of life and enjoy writing about it. I belong to the organizations Women Writing the West, Chrysalis Women's Writers, and the Northwest Independent Writers Association .")),o.a.createElement("style",{jsx:!0},"\n            .header{\n                text-align: center;\n                font-size: 60px;\n                margin-top: 5%;\n            }\n            .aboutSection{\n                display: flex;\n                flex-flow: row wrap;\n                margin-top: 5%;\n                margin-bottom: 3%;\n            }\n            .aboutImg{\n                height: 600px;\n                width: 450px;\n                margin-left: 15%;\n            }\n            .aboutText{\n                text-align: center;\n                width: 700px;\n                margin-left: 5%;\n            }\n         ")))};var I=function(){return o.a.createElement("div",{className:""},o.a.createElement(d.a,{bottom:!0,duration:1500},o.a.createElement("h1",{className:"header"},"Stay in touch ",o.a.createElement("br",null)," Follow my social media"),o.a.createElement("div",{className:"socialLinksWrap"},o.a.createElement("div",{className:"socialLinks"},o.a.createElement("a",{href:"mailto:elliederricklewis@gmail.com"},o.a.createElement("p",{className:"mailLink"},"\u2709")),o.a.createElement("a",{href:"https://www.facebook.com/elliederricklewis46",target:"_blank"},o.a.createElement("p",{className:"facebookLink"},"f")))),o.a.createElement("div",{className:"emailSection"},o.a.createElement("p",{className:"conactInfo"},"Reach out to me on social media, or send me an email at elliederricklewis@gmail.com")),o.a.createElement("style",{jsx:!0},"\n                    .header{\n                        text-align: center;\n                        font-size: 6vh;\n                        margin-top: 10%;\n                    }\n\n                    .socialLinks{\n                        display: flex;\n                        flex-flow: row wrap;\n                        justify-content: space-around;\n                        width:100px;\n                        font-size: 40px;\n                        font-weight: bold;\n                        color: grey;\n                    }\n\n                    .socialLinksWrap{\n                        display: block;\n                        margin-left: auto;\n                        margin-right: auto;\n                        width: 100px;\n                    }\n\n                    a:visited {\n                        color: grey;\n                    }\n\n                    a:hover{\n                        color: black;\n                    }\n\n                    .message{\n                        width: 400px;\n                        height: 100px; \n                    }\n\n                    .emailSection{\n                        text-align: center;\n                    }\n                ")))},z=a(23),S=a.n(z),A=a(24),B=a.n(A),T=a(25),W=a.n(T),P=a(26),O=a.n(P),C=a(27),R=a.n(C),D=a(28),M=a.n(D),_=a(29),q=a.n(_),J=a(30),U=a.n(J);var G=function(){var e=[S.a,B.a,W.a,O.a,R.a],n=[M.a,q.a,U.a];return o.a.createElement("div",{className:""},o.a.createElement(d.a,{bottom:1e3},o.a.createElement("h1",{className:"header"},"Gallery")),o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"sectionInfo"},o.a.createElement("p",{className:"sectionTitle"},"Northwest Independant Writers Association"),o.a.createElement("p",{className:"sectionDate"},"October 4 2019"),o.a.createElement("div",{className:"sectionImages"},n.map((function(e){return o.a.createElement("img",{className:"image",src:e})}))))),o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"sectionInfo"},o.a.createElement("p",{className:"sectionTitle"},"Fort Rock Homesteader Reunion "),o.a.createElement("p",{className:"sectionDate"},"September 7 2019"),o.a.createElement("div",{className:"sectionImages"},e.map((function(e){return o.a.createElement("img",{className:"image",src:e})}))))),o.a.createElement("style",{jsx:!0},"\n        .header{\n            text-align: center;\n            font-size: 6vh;\n            margin-top: 5%;\n        }\n\n        .section{\n            margin: 10%;\n            animation: fadeIn 2s;\n        }\n\n        @keyframes fadeIn{\n            0% {opacity: 0%;}\n            100% {opacity: 100%}\n       }\n        \n        .sectionImages{\n            display: flex;\n            flex-flow: row wrap;\n            \n        }\n        .image{\n            width: auto;\n            height: 300px;\n            padding: 1%;\n        }\n      "))},F=a(31),H=a(32),K=a(33),V=a(34),$=function(e){Object(V.a)(a,e);var n=Object(K.a)(a);function a(){return Object(F.a)(this,a),n.apply(this,arguments)}return Object(H.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(t.Component),Q=Object(l.g)($);var X=function(){var e=[{title:"Sand and Sagebrush",fullTitle:"Sand and Sagebrush: a Desert Journey",description:"In 1914, a young married couple leaves the lush Willamette Valley to participate in the last land give-away in the US. The newspaper headlines and tales of success lead them to the harsh desert valley of southern Oregon.",excerpt:"On the third day of the journey, the landscape abruptly changed from pine forests to an immense juniper desert. Miles and miles of sagebrush grew everywhere. Small cabins and wooden shacks dotted the harsh desert terrain. An edgy worry began to enter Loie\u2019s thoughts. She remembered the lakes and rivers of Wisconsin where she had grown up. It was lush, green countryside with farms covering the land. Even their home in Oregon City had tall, green trees and bubbling streams to fish in. This barren land had none of those elements.",purchaseLink:"https://www.liferichpublishing.com/Bookstore/BookDetail.aspx?BookId=SKU-001239008",amazonLink:"https://www.amazon.com/dp/1489724249/ref=sr_1_1?keywords=sand+and+sagebrush+a+desert+journey&qid=1564273412&s=gateway&sr=8-1",barnesAndNobleLink:"https://www.barnesandnoble.com/w/sand-and-sagebrush-ellie-derrick-lewis/1132694269?ean=9781489724243",published:"July 26, 2019",image:g.a},{title:"Redding Writer",fullTitle:"Redding Writer",description:"A young couple from Sacramento in the 1950's decide to move to a ranch in Shasta County near Redding, California.  She sees it as a chance to peruse her dreams to be a writer, and he wants to be a rancher.  They are unprepared for the changes this will make in their lives.",excerpt:"The cabin was less than a day's ride from the main house but gave him and ranch hands a shelter for the night if the herd couldn't make the final stretch to the pasture at the ranch. In one room he put down six-foot planks for bunk beds, one set on each side of the room. In his room, however, he moved in a bed frame and wire coil mattress. The main room had a small kitchen area with space for an oblong table he also made. A small sitting area was at the opposite end of the room along with a rock fireplace. There were two windows in the cabin, one on each end of the main room.\n      When Patsy saw the cabin she immediately wanted it as her sanctuary to peacefully write her stories. It was away from the business of running a ranch and the chores that were part of it.\n\n      \"Let me put a woman's touch to it,\" she begged Jim. He frowned at first, but her pleading eyes caused him to chuckle. \"I can write here while you are gone, and then cook you a hot breakfast when you return.\u201d It was an offer he couldn't refuse.",purchaseLink:!1,amazonLink:!1,barnesAndNobleLink:!1,published:"Coming Soon",image:k.a}],n=["Sand and Sagebrush","Redding Writer"];return o.a.createElement("div",null,o.a.createElement(c,null),o.a.createElement(l.c,null,o.a.createElement(Q,null,o.a.createElement(l.a,{path:"/books",component:E}),o.a.createElement(l.a,{exact:!0,path:"/",component:y}),o.a.createElement(l.a,{path:"/about",component:j}),o.a.createElement(l.a,{path:"/contact",component:I}),o.a.createElement(l.a,{path:"/gallery",component:G}),e.map((function(e){return o.a.createElement(l.a,{path:"/".concat(e.title.split(" ").join("")),render:function(a){return o.a.createElement(u,{title:e.title,fullTitle:e.fullTitle,description:e.description,excerpt:e.excerpt,purchaseLink:e.purchaseLink,amazonLink:e.amazonLink,barnesAndNobleLink:e.barnesAndNobleLink,published:e.published,image:e.image,bookList:n})}})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,null,o.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.7709fcb3.chunk.js.map