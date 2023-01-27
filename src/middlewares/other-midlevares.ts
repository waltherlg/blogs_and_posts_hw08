import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";
import {commentService} from "../domain/comment-service";
import {usersService} from "../domain/users-service";


export const isUserOwnerOfComments = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!.login
    const comment = await commentService.getCommentById(req.params.commentId)
    if (!comment) {
        res.sendStatus(404)
        return
    }
    const commentsOwner: string = comment.userLogin
    if (user !== commentsOwner){
        res.sendStatus(403)
        return
    }
    next()
}

