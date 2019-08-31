export const fillAndStroke = (ctx, config, style) => {
    const {
        fill = true,
        stroke = false,
        strokeAhead = false,
    } = config;

    if(strokeAhead){
        fill && ctx.fill();
        stroke && ctx.stroke();
    } else {
        stroke && ctx.stroke();
        fill && ctx.fill();
    }
};

export const splitText = (ctx, text, width, newlineManual = false) => {
    if(newlineManual){
        return text.split(/[\r\n]+/);
    } else {
        const lines = [];
        const texts = text.split('');
        let line = [];
        do {
            while(texts.length > 0){
                line.push(texts.shift());
                if(ctx.measureText(line.join('')).width > width){
                    texts.unshift(line.pop());
                    break;
                }
            }
            lines.push(line.join(''));
            line = [];
        } while(texts.length > 0);
        return lines;
    }
};

export const textFillAndStroke = (ctx, config) => {
    const {
        rect,
        fill = true,
        stroke = false,
        strokeAhead = false,
        text = '<No text>',
        multiLine = false,
        newlineManual = false,
    } = config;

    const [left, top, width, height] = rect;

    let w = ctx.measureText(text).width;
    if(width > 0 && width < w && multiLine){
        const lines = splitText(ctx, text, width, newlineManual);
        lines.forEach((text, index) => {
            if(strokeAhead){
                fill && ctx.fillText(text, left, top + index * height);
                stroke && ctx.strokeText(text, left, top + index * height);
            } else {
                stroke && ctx.strokeText(text, left, top + index * height);
                fill && ctx.fillText(text, left, top + index * height);
            }
        })
        rect[3] = height * lines.length;
    } else {
        if(strokeAhead){
            fill && ctx.fillText(text, left, top);
            stroke && ctx.strokeText(text, left, top);
        } else {
            stroke && ctx.strokeText(text, left, top);
            fill && ctx.fillText(text, left, top);
        }
        rect[2] = ctx.measureText(text).width;
    }
};

export const debugLayer = (ctx, config) => {
    const { rect = [] } = config;
    ctx.save();
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.rect(...rect);
    ctx.closePath();
    ctx.stroke();
}