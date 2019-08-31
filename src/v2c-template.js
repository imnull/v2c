export const PAGE_WIDTH = 750;
export const PAGE_HEIGHT = 900;
export const CONTENT_WIDTH = 670;

const createGroupTemplate = (config = {}) => {

    const {
        height = PAGE_HEIGHT,
        headImageUrl = 'https://wechat-pics.fangpinduo.com/wehome/website/banner/banner-huamei.png',
        title = '西雅图法拍屋独栋住宅产权投资项目',
        subTitle = '15726 11TJlakjlfdas fdaf',
        shouyilv = '35%',
        touzizhouqi = '10个月',
        fengxianpingding = '高',
        yuqimairujia = '$314,000',
        zhuangxiuyusuan = '$70,000',
        yuqimaichujia = '$420,000',
        daikuanbili = '66%',
        gangganshouyi = '70%',
        gaikuang = '2 卧室 | 2 浴室 | 1,890尺 | 建于2005年',
        labelBackgournd = '#cccccc',
        labelText = '房源. 1',
    } = config;

    const layers = [
        {
            description: '内容背景',
            type: 'rect',
            rect: [40, 0, 670, height],
            fillStyle: '#ffffff',
            shadowColor: 'rgba(0,0,0,0.1)',
            shadowBlur: 20,
        },
        {
            description: '头图',
            type: 'image',
            rect: [40, 0, 670, 300],
            url: headImageUrl,
        },
        {
            description: '大标题',
            type: 'text',
            text: title,
            rect: [80, 330, 590, 48],
            fontFamily: 'PingFangSC',
            fontSize: 34,
            fillStyle: '#101010',
            fontWeight: 600,
        },
        {
            description: '小标题',
            type: 'text',
            text: subTitle,
            rect: [80, 386, 590, 33],
            fontFamily: 'PingFangSC',
            fontSize: 24,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        {
            description: '分割线',
            type: 'rect',
            rect: [80, 439, 590, 4],
            fillStyle: 'rgba(0,0,0,0.1)',
        },
        {
            description: '收益率',
            type: 'text',
            text: shouyilv,
            rect: [80, 463, -1, 41],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: 'rgba(255,80,0,1)',
            fontWeight: 'bold',
        },
        {
            description: '收益率',
            type: 'text',
            text: '收益率（回报率）',
            rect: [80, 514, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        {
            description: '投资周期',
            type: 'text',
            text: touzizhouqi,
            rect: [306, 463, -1, 42],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: '#000000',
            fontWeight: 'bold',
        },
        {
            description: '投资周期',
            type: 'text',
            text: '投资周期',
            rect: [306, 514, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        {
            description: '风险评定',
            type: 'text',
            text: fengxianpingding,
            rect: [502, 463, -1, 42],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: '#000000',
            fontWeight: 'bold',
        },
        {
            description: '风险评定',
            type: 'text',
            text: '风险评定',
            rect: [502, 514, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        {
            description: '分割线',
            type: 'rect',
            rect: [80, 566, 590, 2],
            fillStyle: 'rgba(0,0,0,0.1)',
        },
        //-------
        {
            description: '预期买入价',
            type: 'text',
            text: yuqimairujia,
            rect: [80, 596, -1, 41],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: '#000000',
            fontWeight: 'bold',
        },
        {
            description: '预期买入价',
            type: 'text',
            text: '预期买入价',
            rect: [80, 645, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        {
            description: '装修预算',
            type: 'text',
            text: zhuangxiuyusuan,
            rect: [306, 596, -1, 42],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: '#000000',
            fontWeight: 'bold',
        },
        {
            description: '装修预算',
            type: 'text',
            text: '装修预算',
            rect: [306, 645, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        {
            description: '预期卖出价',
            type: 'text',
            text: yuqimaichujia,
            rect: [502, 596, -1, 42],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: '#000000',
            fontWeight: 'bold',
        },
        {
            description: '预期卖出价',
            type: 'text',
            text: '预期卖出价',
            rect: [502, 645, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        // -------
        {
            description: '贷款比例',
            type: 'text',
            text: daikuanbili,
            rect: [80, 700, -1, 41],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: '#000000',
            fontWeight: 'bold',
        },
        {
            description: '贷款比例',
            type: 'text',
            text: '贷款比例',
            rect: [80, 747, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        {
            description: '杠杆收益率',
            type: 'text',
            text: gangganshouyi,
            rect: [306, 700, -1, 42],
            fontFamily: 'Gilroy',
            fontSize: 34,
            fillStyle: '#000000',
            fontWeight: 'bold',
        },
        {
            description: '杠杆收益率',
            type: 'text',
            text: '杠杆收益率',
            rect: [306, 747, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        // -----
        {
            description: '分割线',
            type: 'rect',
            rect: [80, 800, 590, 2],
            fillStyle: 'rgba(0,0,0,0.1)',
        },
        {
            description: '房屋概况',
            type: 'text',
            text: gaikuang,
            rect: [80, 826, -1, 30],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#888888',
            fontWeight: 400,
        },
        // -----
        {
            description: '左上顶角标签-背景',
            type: 'action',
            action: ctx => {
                ctx.beginPath();
                ctx.moveTo(40, 0);
                ctx.lineTo(150, 0);
                ctx.lineTo(150, 20);
                ctx.arc(130, 20, 20, 0, Math.PI / 2, false);
                ctx.lineTo(40, 40);
                ctx.closePath();
                ctx.fillStyle = labelBackgournd;
                ctx.fill();
            }
        },
        {
            description: '左上顶角标签-文字',
            type: 'text',
            text: labelText,
            rect: [60, 9, -1, 20],
            fontFamily: 'PingFangSC',
            fontSize: 22,
            fillStyle: '#000000',
            fontWeight: 400,
        },
    ];
    return layers;
}

export const calHeight = (count, config = {}) => {
    const {
        groupHeight = PAGE_HEIGHT,
        headImageSize = 200,
        paddingTop = 40,
        marginBottom = 30,
    } = config;

    if(count < 1){
        count = 1; 
    }
    return headImageSize + groupHeight * count + marginBottom * (count - 1) + paddingTop * 2 + 220;
}


export const createTemplate = (groups = [], config = {}) => {
    const {
        backgroundColor = '#f5f6fa',
        groupHeight = PAGE_HEIGHT,
        paddingTop = 40,
        marginBottom = 30,
        headImageSize = 200,
    } = config;

    const layers = [
        {
            description: '整体背景',
            type: 'rect',
            rect: [0, 0, 1000, 10000],
            fillStyle: backgroundColor,
        },
        {
            description: '向下平移',
            type: 'action',
            action: ctx => {
                ctx.translate(0, paddingTop);
            }
        },
        {
            description: '头部图片背景',
            type: 'rect',
            rect: [40, 0, 670, headImageSize],
            fillStyle: '#ffffff',
            shadowColor: 'rgba(0,0,0,0.1)',
            shadowBlur: 20,
        },
        {
            description: '头部图片',
            type: 'image',
            rect: [40, 0, 670, headImageSize],
            url: 'https://wechat-pics.fangpinduo.com/wehome/website/banner/banner-index.jpeg'
        },
        {
            description: '向下平移',
            type: 'action',
            action: ctx => {
                ctx.translate(0, headImageSize);
            }
        },
    ];

    groups.forEach(config => {
        layers.push(createGroupTemplate(config))
        layers.push({
            description: '向下平移',
            type: 'action',
            action: ctx => {
                ctx.translate(0, groupHeight + marginBottom);
            }
        })
    });

    layers.pop();

    layers.push({
        description: '向下平移',
        type: 'action',
        action: ctx => {
            ctx.translate(0, groupHeight + 20);
        }
    })

    layers.push({
        description: '底部背景',
        type: 'rect',
        rect: [40, 0, 670, 200],
        fillStyle: '#ffffff',
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowBlur: 20,
    });

    layers.push({
        description: '二维码',
        type: 'image',
        url: 'https://wechat-pics.fangpinduo.com/wehome/everest/wehome-service-qrcode.png',
        rect: [530, 20, 160, 160],
    });

    layers.push({
        description: '底部文字',
        type: 'text',
        fontSize: 20,
        rect: [80, 40, 420, 30],
        multiLine: true,
        text: `       WeHome是跨境投资者进入美国房产市场的最优通道。他们的模式让中国新中产阶级更加快速便捷的参与到海外投资中，并提升了国内投资者的全球视野。`
    });

    return layers;
}