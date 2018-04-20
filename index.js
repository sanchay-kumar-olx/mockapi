const Koa = require('koa');
const Router = require('koa-router');

const router = Router();

router
    .post('/api/v1/login', async function(ctx, next) {
        ctx.body = { 
		    "data": { 
		        "token" : "alksjdflkajskdfljaslkdf" 
		    } 
		};

        await next();
    })

const app = new Koa();

app.use(router.routes());

app.listen(80, () => {
    console.log('Mock API listening at port 80');
});
