import { Hono } from 'hono';
import { UserService } from './service';
import { database } from '../../db/drizzle';
import { UserRepository } from './repository';
import { HTTPException } from 'hono/http-exception';
import { ERROR_MSG, STATUS } from '../../constants/error';
import { userSchema } from './dto';

const userHandler = new Hono();
export const userRepository = new UserRepository(database.db);
export const userService = new UserService(userRepository);

userHandler.get('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  if (isNaN(id)) {
    throw new HTTPException(STATUS.BAD_REQUEST, {
      message: 'INVALID_ID',
    });
  }

  const user = await userService.findUserByID(id);
  if (!user) {
    throw new HTTPException(STATUS.NOT_FOUND, {
      message: ERROR_MSG.NOT_FOUND,
    });
  }

  const ok = userSchema.safeParse(user);
  if (ok.error) {
    throw new HTTPException(STATUS.INTERNAL_SERVER_ERROR, {
      message: ok.error.message,
    });
  }

  return c.json({ code: STATUS.OK, data: ok.data }, STATUS.OK);
});

export { userHandler };
