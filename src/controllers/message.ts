import { Body, Controller, Delete, Get,  Post, Put,Flow,CurrentUser,State } from 'amala'
import { DocumentType } from '@typegoose/typegoose'
import checkAuth from '@/middlewares/checkAuth'
import { Message, MessageModel } from '@/models/Message'
import { User } from '@/models/User'


@Controller('/messages')
@Flow([checkAuth])
export default class MessageController {
  @Post('/')
  createMessage(
    @CurrentUser() user: User,
    @Body({ required: true }) { body }: { body: string }
  ) {
    return MessageModel.create({ body, user})
  }

  @Get('/')
  getMessages( @CurrentUser() user: User,) {
    return  MessageModel.find({user})
  }

  @Get('/:id')
  getMessage(@State('message') message: Message) {
    return message
  }

  @Put('/:id')
  updateMessage(
    @State('message') message: DocumentType<Message>,
    @Body({ required: true }) { body }: { body: string }
  ) {
    return  MessageModel.findByIdAndUpdate(message.id,
      { body },
      { new: true })
  }

  @Delete('/:messageId')
  deleteMessage(@State('message') message: DocumentType<Message>) {
    return MessageModel.findByIdAndDelete(message.id)
  }
}
