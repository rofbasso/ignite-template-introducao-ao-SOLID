import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const useCaseTest = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(useCaseTest);
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

export { ShowUserProfileController };
