import express, {
    json,
    urlencoded
} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './config/routes';

// Middlewares
const app = express();
app.use(json());
app.use(
    urlencoded({
        extended: false
    })
);
app.use(helmet());
app.use(morgan('dev'));

// CORS
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization,X-API-KEY,Origin,X-Rquested-Widht,Content-Type,Accept,Acces-Control-Allow-Request-Method'
    );
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/', routes);
app.use('/dev/routes', () => {
    return
})

function print(path, layer) {
    if (layer.route) {
        layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
    } else if (layer.name === 'router' && layer.handle.stack) {
        layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
    } else if (layer.method) {
        console.log('%s /%s',
            layer.method.toUpperCase(),
            path.concat(split(layer.regexp)).filter(Boolean).join('/'))
    }
}

function split(thing) {
    if (typeof thing === 'string') {
        return thing.split('/')
    } else if (thing.fast_slash) {
        return ''
    } else {
        var match = thing.toString()
            .replace('\\/?', '')
            .replace('(?=\\/|$)', '$')
            .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
        return match ?
            match[1].replace(/\\(.)/g, '$1').split('/') :
            '<complex:' + thing.toString() + '>'
    }
}
/* app._router.stack.map(print.bind(null, [])) */
export default app;