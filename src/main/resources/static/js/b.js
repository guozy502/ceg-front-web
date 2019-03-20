!
    function() {
        var j = document.createElement("ins");
        j.id = "newBridge";
        if (document.getElementById(j.id)) {
            return
        }
        var b = [{
                "inviteBox": {
                    "skinIndex": 0,
                    "startPage": 1,
                    "customerStyle": {
                        "acceptFontColor": "#000000",
                        "backImg": "",
                        "acceptBgColor": "#fecb2e"
                    },
                    "skinName": "默认皮肤",
                    "autoHide": 0,
                    "reInvite": 1,
                    "sendButton": {
                        "bgColor": "#bfecff",
                        "fontColor": "#1980df"
                    },
                    "isShowText": 0,
                    "skinType": 1,
                    "buttonType": 0,
                    "autoInvite": 0,
                    "stayTime": 30,
                    "width": 290,
                    "closeTime": 20,
                    "isCustomerStyle": 0,
                    "position": "middle",
                    "inviteInterval": 30,
                    "welcome": "<p style=\"color: #fff\">欢迎来到本网站，请问有什么可以帮您？</p>",
                    "height": 125
                },
                "webimConfig": {
                    "skinIndex": 0,
                    "skinType": 1
                },
                "noteBoard": {
                    "skinIndex": 0,
                    "skinType": 1,
                    "displayCompany": 0,
                    "cpyInfo": "",
                    "skinName": "默认皮肤",
                    "displayLxb": 1,
                    "position": "left-bottom",
                    "itemsExt": [],
                    "items": [{
                        "name": "visitorName",
                        "required": 0,
                        "isShow": 1
                    },
                        {
                            "name": "visitorPhone",
                            "required": 1,
                            "isShow": 1
                        },
                        {
                            "name": "visitorEmail",
                            "required": 0,
                            "isShow": 1
                        },
                        {
                            "name": "visitorAddress",
                            "required": 0,
                            "isShow": 1
                        }],
                    "cpyTel": "",
                    "isAlwaysDisplay": 2
                },
                "isWebim": 0,
                "pageId": 0,
                "seekIcon": {
                    "customerStyle": {
                        "backImg": ""
                    },
                    "skinIndex": 0,
                    "skinName": "自定义皮肤",
                    "groups": [{
                        "groupName": "示例分组1",
                        "groupId": 354228
                    }],
                    "displayLxb": 1,
                    "marginLeft": 0,
                    "skinType": 1,
                    "isFixedPosition": 1,
                    "iconType": 0,
                    "isCustomerStyle": 0,
                    "width": 0,
                    "groupStyle": {
                        "bgColor": "#ffffff",
                        "buttonColor": "#d6f3ff",
                        "fontColor": "#008edf"
                    },
                    "position": "right-center",
                    "marginTop": 0,
                    "height": 0
                }
            }],
            l = {
                "eid": "10323818",
                "queuing": "<p>欢迎光临！您已经进入服务队列，请您稍候，马上为您转接您的在线咨询顾问。</p>",
                "session": {
                    "displayName": "程**2",
                    "headUrl": "https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portraitn/item/589f25453725413825384225453525424125384625453725384325424635303210a7.jpg",
                    "status": 0,
                    "uid": 0,
                    "uname": ""
                },
                "authToken": "bridge",
                "isWebim": 0,
                "userId": "10323818",
                "platform": 0,
                "route": "1",
                "webimConfig": {
                    "skinIndex": 0,
                    "skinType": 1
                },
                "siteId": "8198658",
                "online": "false",
                "authType": 4,
                "bid": "2802884440081986580",
                "webRoot": "//p.qiao.baidu.com/cps2/",
                "timestamp": 1532445553367
            },
            m = [];
        function h() {
            var p = window.location.href,
                o = 0,
                n = null;
            if (m) {
                for (var i = 0,
                         g = m.length; i < g; i++) {
                    if (m[i].url === p) {
                        o = m[i].pageId;
                        break
                    }
                }
                if (o === 0) {
                    for (var i = 0,
                             g = m.length; i < g; i++) {
                        if ( - 1 < p.indexOf(m[i].url)) {
                            o = m[i].pageId;
                            break
                        }
                    }
                }
            }
            l.pageId = o;
            i = 0;
            for (g = b.length; i < g; i++) {
                if (b[i].pageId === o) {
                    f = b[i].webimConfig;
                    l.webimConfig = {
                        skinIndex: f.skinIndex,
                        skinType: f.skinType
                    };
                    return b[i]
                }
                0 === b[i].pageId && (n = b[i])
            }
            return n
        }
        j.config = h(),
            j.siteConfig = l,
            j.startTime = +new Date;
        j.deferOnce = {
            on: function(e) {
                this.done ? e() : this.callback = e
            },
            emit: function() {
                this.callback ? this.callback() : (this.done = true)
            }
        };
        var k = document.getElementsByTagName("script")[0];
        k.parentNode.insertBefore(j, k);
        function c() {
            if (document.body) {
                document.body.insertBefore(j, document.body.firstElement || null);
                j.deferOnce.emit()
            } else {
                setTimeout(c, 0)
            }
        }
        c();
        var d = document.createElement("script");
        d.src = "pc_nb.js",
            d.setAttribute("charset", "UTF-8");
        var a = document.getElementsByTagName("head")[0] || document.body;
        a.insertBefore(d, a.firstElement || null)
    } (this);