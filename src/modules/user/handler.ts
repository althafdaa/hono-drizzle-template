import { Context } from 'hono';
import { UserService } from './service';

export class UserHandler {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async findUserByID(c: Context) {
    const id = Number(c.req.param('id'));

    // if (isNaN(id)) {
    //   return c.json(
    //     {
    //       error: 'INVALID_ID',
    //       code: 400,
    //     },
    //     400
    //   );
    // }

    const user = await this.userService.findUserByID(1);
    if (!user) {
      return c.json(
        {
          error: 'USER_NOT_FOUND',
          code: 404,
        },
        404
      );
    }

    return c.json(
      {
        data: user,
        code: 200,
      },
      200
    );
  }
}
