window.onload = function() {
    const input = document.getElementById("id");

    input.onchange = function(event) {
        const res = idCardVertification(event.target.value);

        console.log(res);
    };

    function idCardVertification(id) {
        // 1.检查18位输入是否符合其意义

        // 是否18位
        if (!(/^\d{17}(\d|x)$/).test(id)) {
            console.log("格式错误，请重新输入");

            return false;
        }

        const city = {
            "11": "北京",
            "12": "天津",
            "13": "河北",
            "14": "山西",
            "15": "内蒙古",
            "21": "辽宁",
            "22": "吉林",
            "23": "黑龙江 ",
            "31": "上海",
            "32": "江苏",
            "33": "浙江",
            "34": "安徽",
            "35": "福建",
            "36": "江西",
            "37": "山东",
            "41": "河南",
            "42": "湖北 ",
            "43": "湖南",
            "44": "广东",
            "45": "广西",
            "46": "海南",
            "50": "重庆",
            "51": "四川",
            "52": "贵州",
            "53": "云南",
            "54": "西藏 ",
            "61": "陕西",
            "62": "甘肃",
            "63": "青海",
            "64": "宁夏",
            "65": "新疆",
            "71": "台湾",
            "81": "香港",
            "82": "澳门"
        };
        // 91: '国外'

        // 通过校验行政区划代码确认前两位是否是合法的省/直辖市/自治区
        if (city[id.substr(0, 2)] === undefined) {
            console.log("前两位区划代码输入错误，请重新输入");

            return false;
        }

        // 检查身日是否符合
        const birthday = `${id.substr(6, 4)}/${Number(id.substr(10, 2))}/${Number(id.substr(12, 2))}`;
        const birthDate = new Date(birthday);
        const newBirthday = `${birthDate.getFullYear()}/${Number(birthDate.getMonth() + 1)}/${Number(birthDate.getDate())}`;

        if (birthDate.getTime() > new Date().getTime() || birthday !== newBirthday) {
            console.log("生日输入错误，请重新输入");

            return false;
        }

        // 2.检查检验码
        /*
        某男性的身份证号码是340523198001010013。
        首先我们得出前17位的乘积和：(3 * 7 + 4 * 9 + 0 * 10 + 5 * 5 + 2 * 8 + 3 * 4 + 1 * 2 + 9 * 1 + 8 * 6 + 0 * 3 + 0 * 7 + 1 * 9 + 0 * 10 + 1 * 5 + 0 * 8 + 0 * 4 + 1 * 2) = 185
        然后再求余：185 % 11 = 9
        最后通过对应规则就可以知道余数9对应的数字是3。
        所以，可以判定这是一个合格的身份证号码。
        */

        // 每一位对应的权重
        const idNumberWeight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const remainder = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        let sum = 0;
        // 计算总和

        for (let i = 0; i < 17; i++) {
            sum += Number(id.substr(i, 1)) * idNumberWeight[i];
        }
        // 余数对应的最后一位校验码
        const check = remainder[sum % 11];

        if (check !== id.substr(17, 1)) {
            console.log("校验失败，请重新输入");

            return false;
        }

        console.log("success");

        return `${city[id.substr(0, 2)]},${birthday},${id.substr(16, 1) % 2 ? " 男" : "女"}`;
    }
};
