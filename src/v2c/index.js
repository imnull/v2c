import {
    fillAndStroke,
    textFillAndStroke,
    debugLayer,
} from './helper';

export const drawContext = (ctx, layers, style) => new Promise((resolve, reject) => {
    if(layers.length < 1){
        resolve();
        return;
    }
    layers = [...layers];
    const layer = layers.shift(), promise = null;
    if(Array.isArray(layer)){
        drawContext(ctx, layer, style).then(() => {
            drawContext(ctx, layers, style).then(resolve, reject);
        }, reject);
    } else {
        switch(layer.type){
            case 'text':
                drawText(ctx, layer, style).then(() => {
                    drawContext(ctx, layers, style).then(resolve, reject);
                }, reject)
                break;
            case 'image':
                drawImage(ctx, layer, style).then(() => {
                    drawContext(ctx, layers, style).then(resolve, reject);
                }, reject)
                break;
            case 'rect':
                drawRect(ctx, layer, style).then(() => {
                    drawContext(ctx, layers, style).then(resolve, reject);
                }, reject)
                break;
            case 'action':
                runAction(ctx, layer, style).then(() => {
                    drawContext(ctx, layers, style).then(resolve, reject);
                }, reject)
                break;
            default:
                reject(new Error('Not support layer-type: ' + layer.type));
                break;
        }
    }
});

export const runAction = (ctx, layer) => new Promise((resolve, reject) => {
    const { action } = layer;
    const r = action(ctx);
    if(r instanceof Promise){
        r.then(resolve, reject);
    } else {
        resolve();
    }
})

export const drawRect = (ctx, data, style) => new Promise((resolve, reject) => {
    const {
        debug = true,
        rect,
        fillStyle = style.color || style.fillStyle, //'rgba(0, 0, 0, 1)',
        strokeStyle = 'rgba(255, 255, 255, 1)',
        lineWidth = 2,
        shadowBlur = 0,
        shadowColor = 'rgba(0,0,0,0.5)',
        shadowOffsetX = 0,
        shadowOffsetY = 0,
    } = data;

    const props = {
        fillStyle, strokeStyle, lineWidth,
        shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY
    };

    ctx.save();

    ctx.beginPath();
    ctx.rect(...rect);
    ctx.closePath();

    Object.assign(ctx, props);
    fillAndStroke(ctx, data, style);
    ctx.restore();

    debug && debugLayer(ctx, data);

    resolve();
});

export const drawText = (ctx, data, style) => new Promise((resolve, reject) => {
    const {
        debug = true,
        fillStyle = style.color, //'rgba(0, 0, 0, 1)',
        strokeStyle = 'rgba(255, 255, 255, 1)',
        lineWidth = 2,
        textAlign = 'start',    // start end center left right
        textBaseline = 'top',    // alphabetic top hanging middle ideographic bottom
        fontVariant	= 'normal', // normal small-caps
        fontStyle = 'normal',   // normal italic oblique
        fontWeight = 'normal',  // normal lighter bold bolder 100~900
        fontSize = style.fontSize, //16,
        fontFamily = style.fontFamily, //'Arial',
        fontUnit = 'px',
    } = data;

    
    ctx.save();

    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}${fontUnit} ${fontFamily.replace(/[ ]/g, '\\ ')}`;
    const props = { fillStyle, strokeStyle, textAlign, textBaseline, font, lineWidth };
    Object.assign(ctx, props);

    textFillAndStroke(ctx, data);

    ctx.restore();

    if(debug){
        debugLayer(ctx, data);
    }

    resolve();
    
});

export const drawImage = (ctx, data) => new Promise((resolve, reject) => {
    const { url, rect, debug = true } = data;
    const image = new Image();
    image.addEventListener('load', function load(e){
        this.removeEventListener('load', load);
        const { width, height } = this;
        const [x, y, w = width, h = height] = rect;
        ctx.save();
        ctx.drawImage(this
            , 0, 0, width, height
            , x, y, w, h
            );
        ctx.restore();
        if(debug){
            debugLayer(ctx, data);
        }
        resolve();
    });
    image.addEventListener('error', function error(e){
        this.removeEventListener('error', error);
        if(debug){
            debugLayer(ctx, data);
        }
        resolve(e);
    });
    image.setAttribute('src', url);
})

export const drawCanvas = (canvas, layers, config = {}) => {
    const {
        backgroundColor = '#ffffff',
        fontSize = 22,
        fontFamily = 'PingFangSC',
        color = '#888888',
    } = config;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return drawContext(ctx, layers, { fontSize, fontFamily, color });
};

export const draw = (layers, config = {}) => {
    const {
        width = 670, height = 760,
        ...style
    } = config;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    return new Promise((resolve, reject) => {
        drawCanvas(canvas, layers, style).then(() => {
            resolve(canvas.toDataURL('image/png'))
        }, reject)
    })
};

