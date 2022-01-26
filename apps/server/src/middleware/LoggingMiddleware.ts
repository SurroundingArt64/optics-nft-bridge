import { Request } from "express";
import { Middleware } from "routing-controllers";
import { ExpressMiddlewareInterface } from "routing-controllers/types/driver/express/ExpressMiddlewareInterface";

import { Service } from "typedi";
import { Log } from "../utilities/Logger";

@Service()
@Middleware({ type: "before" })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
	use(request: Request, _response: any, next?: () => {}): any {
		if (next) next();
		Log.debug(
			request.protocol,
			request.hostname,
			request.baseUrl,
			request.url
		);
	}
}
