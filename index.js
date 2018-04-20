const Koa = require('koa');
const Router = require('koa-router');
const koaMulter = require('koa-multer');

const upload = koaMulter();
const router = Router();

router
    .post('/api/v1/login', upload.single(), async function(ctx, next) {
    	const { email, password } = ctx.req.body;

    	if (email === 'user@test.com' && password === 'qwerty') {
			ctx.body = { 
			    "data": { 
			        "token" : "alksjdflkajskdfljaslkdf" 
			    } 
			};
    	}
        else {
        	ctx.status = 400;

        	const validation = [];

        	if (email !== 'user@test.com') {
        		validation.push({
	                "field": "email",
	                "message": "Please enter email in correct format"
	            });
        	}
        	else {
        		validation.push({
	                "field": "password",
	                "message": "Password length cannot be less than 3"
	            });
        	}

        	ctx.body = {
        		"error": {
			        "status": 400,
			        "title": "loginPayload",
			        "validation": validation
			    }
			};
        }

        await next();
    })

const app = new Koa();

app.use(router.routes());

app.listen(80, () => {
    console.log('Mock API listening at port 80');
});
